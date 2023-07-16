"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[673],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Plugin",l={unversionedId:"plugin",id:"plugin",title:"Plugin",description:"(what the plugin is used for)",source:"@site/docs/plugin.md",sourceDirName:".",slug:"/plugin",permalink:"/IPS2DevKit/docs/plugin",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Submission Philosophy",permalink:"/IPS2DevKit/docs/philosophy"},next:{title:"Introduction",permalink:"/IPS2DevKit/docs/Characters/intro"}},s={},p=[{value:"Dummies",id:"dummies",level:3},{value:"Map Making Assets",id:"map-making-assets",level:3},{value:"Map Linting",id:"map-linting",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,"(what the plugin is used for) ",(0,r.kt)("p",null),"\n(how to install plugin) ",(0,r.kt)("p",null),"\nThere are three expandable sidebars in the plugin, Dummies, Map Making Assets, and Map Linting."),(0,r.kt)("h3",{id:"dummies"},"Dummies"),(0,r.kt)("p",null,"There are six buttons under the Dummies category. Each button will spawn their respective model and select it for you to freely move around and edit."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Basic "),(0,r.kt)("li",{parentName:"ol"},"Mr. Black"),(0,r.kt)("li",{parentName:"ol"},"Mr. White"),(0,r.kt)("li",{parentName:"ol"},"Brownie"),(0,r.kt)("li",{parentName:"ol"},"Ms. Purple"),(0,r.kt)("li",{parentName:"ol"},"Pinky")),(0,r.kt)("h3",{id:"map-making-assets"},"Map Making Assets"),(0,r.kt)("p",null,"There are four buttons under the Map Making Assets category."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Camera Location")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inserts a Camera Location and selects it."),(0,r.kt)("li",{parentName:"ul"},"Two parts are created, ",(0,r.kt)("strong",{parentName:"li"},"CamLocationCutout")," and ",(0,r.kt)("strong",{parentName:"li"},"RENAME_ME"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CamLocationCutout")," is a negative part that is used to make a hole in the ceiling where a camera can use as a hatch. The bevelled edges should match the looking direction as ",(0,r.kt)("strong",{parentName:"li"},"RENAME_ME"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RENAME_ME")," is the location a camera hatch will be placed and used by Cameras. The arrow decals on the top and bottom sides indicate which direction the camera will be facing when a camera arrives at the hatch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RENAME_ME")," must be tagged as CamLocation and renamed to be a positive integer greater than zero."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RENAME_ME")," will be parented to a folder named CamLocations instead of Workspace if CamLocations can be found.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"NPC Spawn")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inserts a NPC Spawning zone and selects it."),(0,r.kt)("li",{parentName:"ul"},"This part will be parented to a folder named NPCSpawns, otherwise it will be parented to Workspace."),(0,r.kt)("li",{parentName:"ul"},"If this part is parented to NPCSpawns, NPCs will randomly spawn in the area of the X and Z dimensions of the part.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Insert Standard Items Kit")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inserts a model containing IPS2 models."),(0,r.kt)("li",{parentName:"ul"},"Contains the ATM, Book, Bowl, Cash, Cash Register, four Chairs, Clock, Coffe, Coffee Brewer, the tall and short Filing Cabinet, Lamp, two versions of a Laptop, Microwave, four versions of a Monitor, Plant, Printer, Rug, Safe, Shirt, Soda Machine, Stove, Telephone, Toilet, and two Trash models."),(0,r.kt)("li",{parentName:"ul"},"When making a map, these items are useful for placeholders, but you are encouraged to make item models on your own.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Reconcile Map Tags")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates the necessary tags for developing a map."),(0,r.kt)("li",{parentName:"ul"},"The tags can be found in ServerStorage > TagList.")),(0,r.kt)("h3",{id:"map-linting"},"Map Linting"),(0,r.kt)("p",null,"There are seven buttons under the Map Linting category."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run"),(0,r.kt)("li",{parentName:"ol"},"Global"),(0,r.kt)("li",{parentName:"ol"},"Items"),(0,r.kt)("li",{parentName:"ol"},"Entrances"),(0,r.kt)("li",{parentName:"ol"},"CamLocations"),(0,r.kt)("li",{parentName:"ol"},"NPCSpawns"),(0,r.kt)("li",{parentName:"ol"},"Clipping")),(0,r.kt)("p",null,"Each button runs checks to make sure the corresponding category does not have any major errors.\nErrors will be reported in the Output window, and if they exist under Workspace, they will also be highlighted and marked with a warning symbol.\nUse in combination with map format documentation to produce a map that can be ported to IPS2!"))}m.isMDXComponent=!0}}]);