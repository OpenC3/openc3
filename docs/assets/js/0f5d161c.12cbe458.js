"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[27],{6635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const s={title:"Script Runner"},o=void 0,l={id:"tools/script-runner",title:"Script Runner",description:"Introduction",source:"@site/docs/tools/script-runner.md",sourceDirName:"tools",slug:"/tools/script-runner",permalink:"/docs/tools/script-runner",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/script-runner.md",tags:[],version:"current",frontMatter:{title:"Script Runner"},sidebar:"defaultSidebar",previous:{title:"Packet Viewer",permalink:"/docs/tools/packet-viewer"},next:{title:"Table Manager",permalink:"/docs/tools/table-manager"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Script Runner Menus",id:"script-runner-menus",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"File Open",id:"file-open",level:4},{value:"File Save As",id:"file-save-as",level:4},{value:"Script Menu Items",id:"script-menu-items",level:3},{value:"Running Scripts",id:"running-scripts",level:2},{value:"Running Script Suites",id:"running-script-suites",level:2},{value:"OpenC3::Group",id:"openc3group",level:3},{value:"OpenC3::Suite",id:"openc3suite",level:3},{value:"Script Suite Options",id:"script-suite-options",level:3},{value:"Pause on Error",id:"pause-on-error",level:4},{value:"Continue after Error",id:"continue-after-error",level:4},{value:"Abort after Error",id:"abort-after-error",level:4},{value:"Manual",id:"manual",level:4},{value:"Loop",id:"loop",level:4},{value:"Break Loop on Error",id:"break-loop-on-error",level:4},{value:"Debugging Scripts",id:"debugging-scripts",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Script Runner is both an editor of COSMOS scripts as well as executes scripts. Script files are stored within a COSMOS target and Script Runner provides the ability to open, save, download and delete these files. When a suite of scripts is opened, Script Runner provides additional options to run individial scripts, groups of scripts, or entire suites."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Script Runner",src:t(9756).Z+"",width:"1710",height:"1450"})}),"\n",(0,i.jsx)(n.h2,{id:"script-runner-menus",children:"Script Runner Menus"}),"\n",(0,i.jsx)(n.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,i.jsx)("img",{src:"/img/v5/script_runner/file_menu.png",alt:"File Menu",style:{float:"left","margin-right":"50px",height:"250px"}}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clears the editor and filename"}),"\n",(0,i.jsx)(n.li,{children:"Opens a dialog to select a file to open"}),"\n",(0,i.jsx)(n.li,{children:"Saves the currently opened file to disk"}),"\n",(0,i.jsx)(n.li,{children:"Rename the current file"}),"\n",(0,i.jsx)(n.li,{children:"Downloads the current file to the browser"}),"\n",(0,i.jsxs)(n.li,{children:["Deletes the current file (Permanently!)","\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"file-open",children:"File Open"}),"\n",(0,i.jsx)(n.p,{children:"The Open and Save Dialogs deserve a little more explanation. When you select File Open the File Open Dialog appears. Initially it displays a tree view of the installed targets. You can manually open the folders and browse for the file you want. You can also use the search box at the top and start typing part of the filename to filter the results."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"File Open Dialog",src:t(5166).Z+"",width:"1069",height:"810"})}),"\n",(0,i.jsx)(n.h4,{id:"file-save-as",children:"File Save As"}),"\n",(0,i.jsx)(n.p,{children:"When saving a file for the first time, or using File Save As, the File Save As Dialog appears. It works similar to the File Open Dialog displaying the tree view of the installed targets. You must select a folder by clicking the folder name and then filling out the Filename field with a filename before clicking Ok. You will be prompted to before over-writing an existing file."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"File Save As",src:t(3309).Z+"",width:"1072",height:"1386"})}),"\n",(0,i.jsx)(n.h3,{id:"script-menu-items",children:"Script Menu Items"}),"\n",(0,i.jsx)("img",{src:"/img/v5/script_runner/script_menu.png",alt:"Script Menu",style:{float:"left","margin-right":"50px",height:"410px"}}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Display started and finished scripts"}),"\n",(0,i.jsx)(n.li,{children:"Show environment variables"}),"\n",(0,i.jsx)(n.li,{children:"Show defined metadata"}),"\n",(0,i.jsx)(n.li,{children:"Perform a Ruby syntax check"}),"\n",(0,i.jsx)(n.li,{children:"Perform a script mnemonic check"}),"\n",(0,i.jsx)(n.li,{children:"View the instrumented script"}),"\n",(0,i.jsx)(n.li,{children:"Shows the script call stack"}),"\n",(0,i.jsxs)(n.li,{children:["Display the ",(0,i.jsx)(n.a,{href:"/docs/tools/script-runner#debugging-scripts",children:"debug"})," prompt"]}),"\n",(0,i.jsx)(n.li,{children:"Disconnect from real interfaces"}),"\n",(0,i.jsx)(n.li,{children:"Delete all sccript breakpoints"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Started Scripts popup lists the currently running scripts. This allows other users to connect to running scripts and follow along with the currently executing script. It also lists previously executed scripts so you can download the script log."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Running Scripts",src:t(8062).Z+"",width:"1846",height:"808"})}),"\n",(0,i.jsx)(n.h2,{id:"running-scripts",children:"Running Scripts"}),"\n",(0,i.jsx)(n.p,{children:"Running a regular script is simply a matter of opening it and clicking the Start button. By default when you open a script the Filename is updated and the editor loads the script."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"checks.rb",src:t(6201).Z+"",width:"1846",height:"750"})}),"\n",(0,i.jsx)(n.p,{children:"Once you click Start the script is spawned in the Server and the Script State becomes Connecting."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"connecting",src:t(2793).Z+"",width:"1846",height:"104"})}),"\n",(0,i.jsx)(n.p,{children:"At that point the currently executing line is marked with green. If an error is encountered the line turns red and and the Pause button changes to Retry to allow the line to be re-tried."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"error",src:t(6904).Z+"",width:"1846",height:"748"})}),"\n",(0,i.jsx)(n.p,{children:"This allows checks that depend on telemetry changing to potentially be retried as telemetry is being updated live in the background. You can also click Go to continue pass the error or Stop to end the script execution."}),"\n",(0,i.jsx)(n.h2,{id:"running-script-suites",children:"Running Script Suites"}),"\n",(0,i.jsx)(n.p,{children:"If a script is structured as a Suite (it inherits from OpenC3::Suite) it automatically causes Script Runner to parse the file to populate the Suite, Group, and Script drop down menus."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Suite Script",src:t(9824).Z+"",width:"1846",height:"1046"})}),"\n",(0,i.jsx)(n.p,{children:"All suite files should start with the following line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"load 'openc3/script/suite.rb'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"openc3group",children:"OpenC3::Group"}),"\n",(0,i.jsx)(n.p,{children:"This pulls in the COSMOS suite framework including the OpenC3::Suite and OpenC3::Group classes. Any methods starting with 'script', 'op', or 'test' which are implemented inside a OpenC3::Group class are automatically included as scripts to run. For example, in the above image, you'll notice the 'script_1_method_with_long_name' is in the Script drop down menu. Here's another simple example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:'class ExampleGroup < OpenC3::Group\n  def setup\n    puts "setup"\n  end\n  def script_1\n    puts "script 1"\n  end\n  def teardown\n    puts "teardown"\n  end\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"The setup and teardown methods are special methods which enable the Setup and Teardown buttons next to the Group drop down menu. Clicking these buttons runs the associated method."}),"\n",(0,i.jsx)(n.h3,{id:"openc3suite",children:"OpenC3::Suite"}),"\n",(0,i.jsx)(n.p,{children:"Groups are added to Suites by creating a class inheriting from OpenC3::Suite and then calling the add_group method. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:'class MySuite < OpenC3::Suite\n  def initialize\n    super()\n    add_group(\'ExampleGroup\')\n  end\n  def setup\n    puts "Suite setup"\n  end\n  def teardown\n    puts "Suite teardown"\n  end\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"Again there are setup and teardown methods which enable the Setup and Teardown buttons next to the Suite drop down menu."}),"\n",(0,i.jsx)(n.p,{children:"Multiple Suites and Groups can be created in the same file and will be parsed and added to the drop down menus. Clicking Start at the Suite level will run ALL Groups and ALL Scripts within each Group. Similarly, clicking Start at the Group level will run all Scripts in the Group. Clicking Start next to the Script will run just the single Script."}),"\n",(0,i.jsx)(n.h3,{id:"script-suite-options",children:"Script Suite Options"}),"\n",(0,i.jsx)(n.p,{children:"Opening a Script Suite creates six checkboxes which provide options to the running script."}),"\n",(0,i.jsx)(n.h4,{id:"pause-on-error",children:"Pause on Error"}),"\n",(0,i.jsx)(n.p,{children:"Pauses the script if an error is encountered. This is the default and identical to how normal scripts are executed. Unchecking this box allows the script to continue past errors without user intervention. Similar to the User clicking Go upon encountering an error."}),"\n",(0,i.jsx)(n.h4,{id:"continue-after-error",children:"Continue after Error"}),"\n",(0,i.jsx)(n.p,{children:"Continue the script if an error is encountered. This is the default and identical to how normal scripts are executed. Unchecking this box means that the script will end after the first encountered error and execution will continue with any other scripts in the Suite/Group."}),"\n",(0,i.jsx)(n.h4,{id:"abort-after-error",children:"Abort after Error"}),"\n",(0,i.jsx)(n.p,{children:"Abort the entire execution upon encountering an error. If the first Script in a Suite's Group encounters an error the entire Suite will stop execution right there."}),"\n",(0,i.jsx)(n.h4,{id:"manual",children:"Manual"}),"\n",(0,i.jsxs)(n.p,{children:["Set a Ruby global variable called ",(0,i.jsx)(n.code,{children:"$manual"})," to true. Setting this box only allows the script author to determine if the operator wants to execute manual steps or not. It is up the script author to use ",(0,i.jsx)(n.code,{children:"$manual"})," in their scripts."]}),"\n",(0,i.jsx)(n.h4,{id:"loop",children:"Loop"}),"\n",(0,i.jsx)(n.p,{children:"Loop whatever the user Started continuously. If the user clicks Start next to the Group then the entire Group will be looped. This is useful to catch and debug those tricky timing errors that only sometimes happen."}),"\n",(0,i.jsx)(n.h4,{id:"break-loop-on-error",children:"Break Loop on Error"}),"\n",(0,i.jsx)(n.p,{children:"Break the loop if an Error occurs. Only available if the Loop option is set."}),"\n",(0,i.jsx)(n.h2,{id:"debugging-scripts",children:"Debugging Scripts"}),"\n",(0,i.jsxs)(n.p,{children:["When you enable the Debug prompt an additional line appears between the script and the Log Messages. You can type local variables to cause them to be output in the Log Messages. You can also set local variables by typing ",(0,i.jsx)(n.code,{children:"var = 10"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Debug",src:t(1047).Z+"",width:"1846",height:"1324"})}),"\n",(0,i.jsx)(n.p,{children:"The Step button allows you to step line by line through the script. Clicking Go continues regular execution."})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6201:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/checks_rb-a6049cdd99613cea2ee12d76fcfe798ff05270e39d208e93d37da7347049b2b3.png"},2793:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connecting-6e453f3d99800d4cb8fdc78f5b8fce1e8cf1bb04840a29dec7c5caefd07c004f.png"},1047:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/debug-04088348cc04bb8e1a1063fc44920dc8e39616840ef4b09a36c823f185c28669.png"},5166:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/file_open-319761fd383fc513b3689ef0a7498c73ce9459a3967c8a395cc2da07c89240d0.png"},3309:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/file_save_as-44468ed6a48bea3bc4fdd8f50d802569e4582b453e5bf946bfdcba400030d499.png"},8062:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/running_scripts-78bfd36a6c8c7167234e03bd188e974927c2beea1f730498583169a81639e7a3.png"},6904:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/script_error-ce060b3086e7b466e51a276fb6b27245b4d042f07a60fe121b0071dd65a42075.png"},9756:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/script_runner-7d7f01b90be962b4de46c20568727c55488eec5d9844823b53a262c9cfc470fa.png"},9824:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/script_suite-42832d936f91417740b76a39841996c8e4a7cf5391dbb19abe9d7b31ab07dd7d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);