"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["4521"],{4310:function(e,t,r){r.d(t,{Z:()=>x});var i=r("5893");r("7294");var c=r("7026"),n=r("3012"),o=r("3413"),s=r("3115"),a=r("3150"),d=r("6025"),l=r("4403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function h(e){let{href:t,children:r}=e;return(0,i.jsx)(n.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:n,description:o}=e;return(0,i.jsxs)(h,{href:t,children:[(0,i.jsxs)(l.Z,{as:"h2",className:(0,c.Z)("text--truncate",u.cardTitle),title:n,children:[r," ",n]}),o&&(0,i.jsx)("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e,r=(0,o.LM)(t),c=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,i.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??c(t.items.length)}):null}function m(e){let{item:t}=e,r=t?.customProps?.myEmoji??((0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17"),c=(0,o.xz)(t.docId??void 0);return(0,i.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(m,{item:t});case"category":return(0,i.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}}}]);