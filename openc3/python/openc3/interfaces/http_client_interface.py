# Copyright 2024 OpenC3, Inc.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

import queue
import requests
from openc3.config.config_parser import ConfigParser
from openc3.interfaces.interface import Interface
from openc3.accessors.http_accessor import HttpAccessor
from openc3.packets.packet import Packet


class HttpClientInterface(Interface):
    # @param hostname [String] HTTP/HTTPS server to connect to
    # @param port [Integer] HTTP/HTTPS port
    # @param protocol [String] http or https
    def __init__(
        self,
        hostname,
        port=80,
        protocol="http",
        write_timeout=5,
        read_timeout=None,
        connect_timeout=5,
        include_request_in_response=False,
    ):
        super().__init__()
        self.hostname = hostname
        self.port = int(port)
        self.protocol = protocol
        if (self.port == 80 and self.protocol == "http") or (self.port == 443 and self.protocol == "https"):
            self.url = f"{self.protocol}://{self.hostname}"
        else:
            self.url = f"{self.protocol}://{self.hostname}:{self.port}"
        self.write_timeout = ConfigParser.handle_none(write_timeout)
        if self.write_timeout:
            self.write_timeout = float(self.write_timeout)
        self.read_timeout = ConfigParser.handle_none(read_timeout)
        if self.read_timeout:
            self.read_timeout = float(self.read_timeout)
        self.connect_timeout = ConfigParser.handle_none(connect_timeout)
        if self.connect_timeout:
            self.connect_timeout = float(self.connect_timeout)
        self.include_request_in_response = ConfigParser.handle_true_false(include_request_in_response)

        self.response_queue = queue.Queue()

    def connection_string(self):
        return self.url

    # Connects the interface to its target(s)
    def connect(self):
        # Per https://github.com/lostisland/faraday/blob/main/lib/faraday/options/env.rb
        # :timeout       - time limit for the entire request (Integer in seconds)
        # :open_timeout  - time limit for just the connection phase (e.g. handshake) (Integer in seconds)
        # :read_timeout  - time limit for the first response byte received from the server (Integer in seconds)
        # :write_timeout - time limit for the client to send the request to the server (Integer in seconds)
        request = {}
        if self.connect_timeout:
            request["open_timeout"] = self.connect_timeout
        if self.read_timeout:
            request["read_timeout"] = self.read_timeout
        if self.write_timeout:
            request["write_timeout"] = self.write_timeout
        self.http = requests.Session()
        super().connect()

    def connected(self):
        if self.http:
            return True
        else:
            return False

    # Disconnects the interface from its target(s)
    def disconnect(self):
        if self.http:
            self.http.close
        self.http = None
        while not self.response_queue.empty():
            self.response_queue.get_nowait()
        super().disconnect()
        self.response_queue.put(None)

    # Called to convert a packet into a data buffer. Write protocols then
    # potentially modify the data in their write_data methods. Finally
    # write_interface is called to send the data to the target.
    #
    # @param packet [Packet] Packet to extract data from
    # @return data, extra
    def convert_packet_to_data(self, packet):
        extra = packet.extra
        extra = extra or {}
        data = packet.buffer  # Copy buffer so logged command isn't modified
        extra["HTTP_URI"] = f"{self.url}{packet.read('HTTP_PATH')}"
        extra["HTTP_REQUEST_TARGET_NAME"] = packet.target_name
        return data, extra

    # Calls the http request method to send the data to the target
    def write_interface(self, data, extra=None):
        extra = extra or {}
        params = extra.get("HTTP_QUERIES")
        headers = extra.get("HTTP_HEADERS")
        uri = extra["HTTP_URI"]
        method = extra["HTTP_METHOD"]

        resp = self.http.request(
            method,
            uri,
            params=params,
            headers=headers,
            data=data,
            stream=False,
            timeout=(self.connect_timeout, self.read_timeout),
        )

        # Normalize Response into simple hash
        response_data = None
        response_extra = {}
        if resp:
            response_extra["HTTP_REQUEST"] = [data, extra]
            if resp.headers and len(resp.headers) > 0:
                response_extra["HTTP_HEADERS"] = resp.headers
            response_extra["HTTP_STATUS"] = resp.status_code
            response_data = bytearray(resp.text, encoding="utf-8")
            response_data = response_data or b""  # Ensure an empty string

        self.response_queue.put([response_data, response_extra])

        self.write_interface_base(data, extra)
        return data, extra

    # Returns the response data and extra from the interface
    # which was queued up by the write_interface method.
    # Read protocols can then potentially modify the data in their read_data methods.
    # Then convert_data_to_packet is called to convert the data into a Packet object.
    # Finally the read protocols read_packet methods are called.
    def read_interface(self):
        data, extra = self.response_queue.get(block=True)
        if data is None:
            return None
        self.read_interface_base(data, extra)
        return data, extra


    # Called to convert the read data into a OpenC3 Packet object
    #
    # @param data [String] Raw packet data
    # @param extra [dict] Contains the following keys:
    #   HTTP_HEADERS - Hash of response headers
    #   HTTP_STATUS - Integer response status code
    #   HTTP_REQUEST - [data, extra]
    #     where data is the request data and extra contains:
    #       HTTP_REQUEST_TARGET_NAME - String request target name
    #       HTTP_URI - String request URI based on HTTP_PATH
    #       HTTP_PATH - String request path
    #       HTTP_METHOD - String request method
    #       HTTP_PACKET - String response packet name
    #       HTTP_ERROR_PACKET - Optional string error packet name
    #       HTTP_QUERIES - Optional hash of request queries
    #       HTTP_HEADERS - Optional hash of request headers
    # @return [Packet] OpenC3 Packet with buffer filled with data
    def convert_data_to_packet(self, data, extra=None):
        packet = Packet(None, None, "BIG_ENDIAN", None, data)
        packet.accessor = HttpAccessor(packet)
        # Grab the request extra set in the write_interface method
        request_extra = None
        if extra and extra['HTTP_REQUEST']:
            request_extra = extra['HTTP_REQUEST'][1]
        if request_extra is not None:
            # Identify the response
            request_target_name = request_extra.get("HTTP_REQUEST_TARGET_NAME")
            if request_target_name is not None:
                request_target_name = str(request_target_name).upper()
                response_packet_name = request_extra.get("HTTP_PACKET")
                error_packet_name = request_extra.get("HTTP_ERROR_PACKET")
                # HTTP_STATUS was set in the base extra
                status = int(extra["HTTP_STATUS"])
                if status >= 300 and error_packet_name is not None:
                    # Handle error special case response packet
                    packet.target_name = request_target_name
                    packet.packet_name = str(error_packet_name).upper()
                elif response_packet_name is not None:
                    packet.target_name = request_target_name
                    packet.packet_name = str(response_packet_name).upper()

            if not self.include_request_in_response:
                extra.pop("HTTP_REQUEST", None)
        packet.extra = extra
        return packet
