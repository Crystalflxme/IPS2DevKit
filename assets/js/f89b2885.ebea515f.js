"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:3},r="Heirarchy",o={unversionedId:"Mapping/heirarchy",id:"Mapping/heirarchy",title:"Heirarchy",description:"This is the hierarchy of a valid and portable In Plain Sight 2 map.",source:"@site/docs/Mapping/heirarchy.md",sourceDirName:"Mapping",slug:"/Mapping/heirarchy",permalink:"/IPS2DevKit/docs/Mapping/heirarchy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tags",permalink:"/IPS2DevKit/docs/Mapping/tags"}},s={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"heirarchy"},"Heirarchy"),(0,i.kt)("p",null,"This is the hierarchy of a valid and portable In Plain Sight 2 map.\nAll instances will have a name of what their instance is."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Map - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CamLocations - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CamLocations contains only BaseParts"),(0,i.kt)("li",{parentName:"ul"},"CanCollide is false, CanQuery is false, and CanTouch is true"),(0,i.kt)("li",{parentName:"ul"},"Contains all CamLocation tagged instances"),(0,i.kt)("li",{parentName:"ul"},"All instances have an attribute called DisplayName, storing a string, which displays to a camera as the name of the hatch"))),(0,i.kt)("li",{parentName:"ul"},"Clipping - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bounds - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains only BaseParts"),(0,i.kt)("li",{parentName:"ul"},"All instances are tagged ",(0,i.kt)("inlineCode",{parentName:"li"},"Clip_Bounds")),(0,i.kt)("li",{parentName:"ul"},"All instances have an attribute called Entrance, with the name of the Entrance's folder name which it teleports you to upon touching it"),(0,i.kt)("li",{parentName:"ul"},"Instances named Broad will be disabled during the round start and round end, to allow for entering and escaping"),(0,i.kt)("li",{parentName:"ul"},"Instances not named Broad always teleport thieves"),(0,i.kt)("li",{parentName:"ul"},"CanCollide is false, CanQuery is false, and CanTouch is true"))),(0,i.kt)("li",{parentName:"ul"},"Entrance - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains only BaseParts"),(0,i.kt)("li",{parentName:"ul"},"All instances are tagged ",(0,i.kt)("inlineCode",{parentName:"li"},"Clip_Entrance")),(0,i.kt)("li",{parentName:"ul"},"CanCollide is true, CanQuery is true, and CanTouch is true"),(0,i.kt)("li",{parentName:"ul"},"CanCollide set to false during round intro and escape sequence, to allow for entering and escaping"))),(0,i.kt)("li",{parentName:"ul"},"Player - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains only BaseParts"),(0,i.kt)("li",{parentName:"ul"},"All instances are tagged ",(0,i.kt)("inlineCode",{parentName:"li"},"Clip_Player")),(0,i.kt)("li",{parentName:"ul"},"CanCollide is true, CanQuery is true, and CanTouch is true"),(0,i.kt)("li",{parentName:"ul"},"Instances that only thieves can collide with"),(0,i.kt)("li",{parentName:"ul"},"Does not prevent camera lasers or any projectile from moving through"),(0,i.kt)("li",{parentName:"ul"},"Mostly used for out of bounds protection"))))),(0,i.kt)("li",{parentName:"ul"},"Entrances - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ExitName - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Actions - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DriverSeat - Seat",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A dude is sitting in it"))),(0,i.kt)("li",{parentName:"ul"},"VanDoor - BasePart or UnionOperation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tweened to child instance named End on round start"))),(0,i.kt)("li",{parentName:"ul"},"Door - BasePart or UnionOperation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tweened to child instance named End on Kick animation event"))),(0,i.kt)("li",{parentName:"ul"},"Window - BasePart or UnionOperation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tweened to child instance named End on WindowCut animation event"))))),(0,i.kt)("li",{parentName:"ul"},"NPCPath - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains Baseparts, named 1, 2, ..., n"),(0,i.kt)("li",{parentName:"ul"},"1 is the spawn point of the NPC"),(0,i.kt)("li",{parentName:"ul"},"BaseParts between 2 and n is the path the NPC walks to, in order, in a straight line between"),(0,i.kt)("li",{parentName:"ul"},"n is the final position of the NPC, where they will stand the rest of the round"),(0,i.kt)("li",{parentName:"ul"},"BaseParts are orientation sensitive, the NPC tries to follow the CFrame of the BasePart"),(0,i.kt)("li",{parentName:"ul"},"To do this efficiently, create a new R15 rig under the Avatar tab, with the Rig Builder button, and name them ",(0,i.kt)("inlineCode",{parentName:"li"},"funnyguy")),(0,i.kt)("li",{parentName:"ul"},"Next, select a BasePart you wish to be a node"),(0,i.kt)("li",{parentName:"ul"},"Then, run this command: ",(0,i.kt)("inlineCode",{parentName:"li"},'game:GetService("Selection"):Get()[1].CFrame = game.Workspace.funnyguy.PrimaryPart.CFrame')),(0,i.kt)("li",{parentName:"ul"},"This takes a part you have selected and moves it to orient itself with ",(0,i.kt)("inlineCode",{parentName:"li"},"funnyguy")),(0,i.kt)("li",{parentName:"ul"},"Any NPCPath instance can have the following attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Animation, string, plays an animation at a given node:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kick",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kick requires an instance named Door"),(0,i.kt)("li",{parentName:"ul"},"Will tween Door instance to CFrame of child instance End"))),(0,i.kt)("li",{parentName:"ul"},"WindowCut",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"WindowCut requires an instance named Window"),(0,i.kt)("li",{parentName:"ul"},"Will tween Window instance to CFrame of child instance End"))),(0,i.kt)("li",{parentName:"ul"},"Sit",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Value is the name of the seat the NPC sits in"),(0,i.kt)("li",{parentName:"ul"},"Must be defined on the 1st NPC node"))))),(0,i.kt)("li",{parentName:"ul"},"StartDelay, number, delays the time the NPC starts performing actions"),(0,i.kt)("li",{parentName:"ul"},"Tool, string, equips the NPC with a tool in their hand, should be in first NPCPath",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Blowtorch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Required for WindowCut animation"))))))))),(0,i.kt)("li",{parentName:"ul"},"Path - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains only BaseParts"),(0,i.kt)("li",{parentName:"ul"},"The path the thieves walk in at the start of the round, and in reverse when escaping"),(0,i.kt)("li",{parentName:"ul"},"Named 1, 2, ..., n"),(0,i.kt)("li",{parentName:"ul"},"After reaching n, thieves go to a corresponding Node Attachment instance"),(0,i.kt)("li",{parentName:"ul"},"CanCollide, CanQuery, and CanTouch is false"))),(0,i.kt)("li",{parentName:"ul"},"Seats - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Seat instances"),(0,i.kt)("li",{parentName:"ul"},"How many people should sit in the entrance vehicle, how many players can enter through this exit"))),(0,i.kt)("li",{parentName:"ul"},"Node - BasePart",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All instances tagged ",(0,i.kt)("inlineCode",{parentName:"li"},"EntranceNode")," are BaseParts"),(0,i.kt)("li",{parentName:"ul"},"CanCollide is false, CanTouch is false, but CanQuery is true"),(0,i.kt)("li",{parentName:"ul"},"Node has Attachment children named 1, 2, ..., n, corresponding to n number of seats in the corresponding entrance van"),(0,i.kt)("li",{parentName:"ul"},"When entering the map, the first thief to exit the van will end at attachment point 1, the second thief to exit the van will end at attachment point 2, and so on"),(0,i.kt)("li",{parentName:"ul"},"Orientation doesn't matter, only position"))))))),(0,i.kt)("li",{parentName:"ul"},"Items - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains everything stealable"),(0,i.kt)("li",{parentName:"ul"},"Item",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains only Models"),(0,i.kt)("li",{parentName:"ul"},"All instances are tagged with ",(0,i.kt)("inlineCode",{parentName:"li"},"Item")),(0,i.kt)("li",{parentName:"ul"},"Any Item can have the following attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DisplayName, string, overrides the model name for the client's UI"),(0,i.kt)("li",{parentName:"ul"},"CashValue, num, overrides the cash value of an item"))),(0,i.kt)("li",{parentName:"ul"},"Items are picked up by the biggest part of a volume. To disable this, add an underscore prefix to the name of the item"),(0,i.kt)("li",{parentName:"ul"},"The position used for distance calculations for picking up items is determined by the pivot point of the item's model"),(0,i.kt)("li",{parentName:"ul"},"There should be at least 1 BasePart as a child of the item model"),(0,i.kt)("li",{parentName:"ul"},"Instances also tagged with ",(0,i.kt)("inlineCode",{parentName:"li"},"SpecialItem")," have additional properties...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The direct children of the model make up the stealable item"),(0,i.kt)("li",{parentName:"ul"},"Optional model/folder called ExtraItems, containing tagged items that spawn when the special item spawns"),(0,i.kt)("li",{parentName:"ul"},"Optional model/folder called FallbackItems, containing tagged items that spawn when the special item DOESN'T spawn"),(0,i.kt)("li",{parentName:"ul"},"Optional model/folder called MapModel, parents the children of this to the map if the special item check succeeds"),(0,i.kt)("li",{parentName:"ul"},"Optional model/folder called FallbackMapModel, parents the children of this to the map if the special item check fails"))))),(0,i.kt)("li",{parentName:"ul"},"ItemStack - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains tagged item instances, each with an attribute called Order, starting at 1, indicating the order they're picked up"),(0,i.kt)("li",{parentName:"ul"},"There can be any number of duplicate ItemStack folders"))))),(0,i.kt)("li",{parentName:"ul"},"Lighting - Folder - ",(0,i.kt)("em",{parentName:"li"},"OPTIONAL")),(0,i.kt)("li",{parentName:"ul"},"NPCSpawns - Folder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains only BaseParts"),(0,i.kt)("li",{parentName:"ul"},"CanCollide is false, CanTouch is false, and CanQuery is false"),(0,i.kt)("li",{parentName:"ul"},"The part 0.05 studs thick and must be placed on top of the ground, and is able to be rotated"),(0,i.kt)("li",{parentName:"ul"},"Contains BaseParts that represent spawn boundaries of NPCs"),(0,i.kt)("li",{parentName:"ul"},"Any child instance of NPCSpawns can have the following attribute...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RateMultiplier, number",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multiplies the total number of NPCs by this")))))))))))}d.isMDXComponent=!0}}]);