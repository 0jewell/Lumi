"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2},o="Changing Gateway Intents",s={unversionedId:"Guides/Intents",id:"Guides/Intents",title:"Changing Gateway Intents",description:"Setting up your intents is an important thing to do in your bot, as it will assign which events your bot will receive.",source:"@site/docs/Guides/Intents.md",sourceDirName:"Guides",slug:"/Guides/Intents",permalink:"/Lumi/docs/Guides/Intents",draft:!1,editUrl:"https://github.com/astridyz/Lumi/edit/main/docs/Guides/Intents.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Listening once to an event",permalink:"/Lumi/docs/Guides/EventOnce"}},l={},u=[{value:"What is an intent?",id:"what-is-an-intent",level:3},{value:"Two types of intents exist:",id:"two-types-of-intents-exist",level:4},{value:"Changing intents in Lumi",id:"changing-intents-in-lumi",level:3},{value:"What is this intent number? (bla bla bla information)",id:"what-is-this-intent-number-bla-bla-bla-information",level:3},{value:"Calculating intents",id:"calculating-intents",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changing-gateway-intents"},"Changing Gateway Intents"),(0,a.kt)("p",null,"Setting up your intents is an important thing to do in your bot, as it will assign which events your bot will receive."),(0,a.kt)("h3",{id:"what-is-an-intent"},"What is an intent?"),(0,a.kt)("p",null,"Maintaining a stateful application can be difficult when it comes to the amount of data your app is expected to process over a Gateway connection, especially at scale.",(0,a.kt)("br",{parentName:"p"}),"\n","Gateway intents are a system to help you lower the computational burden."),(0,a.kt)("h4",{id:"two-types-of-intents-exist"},"Two types of intents exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Standard intents can be passed by default. You don't need any additional permissions or configurations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Privileged intents require you to toggle the intent for your app in your app's settings within the Developer Portal before passing said intent.",(0,a.kt)("br",{parentName:"p"}),"\n","For verified apps (required for apps in 100+ guilds), the intent must also be approved after the verification process to use the intent."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The information above was taken directly from the Discord documentation. ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#gateway-intents"},"Check the complete details there."))),(0,a.kt)("h3",{id:"changing-intents-in-lumi"},"Changing intents in Lumi"),(0,a.kt)("p",null,'Changing intents in Lumi is as easy as printing "Hello World". Follow:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'--// Getting the session component\nlocal Session = Lumi.session()\n\n--// Identify is a table with the field "intents"\n--// this value is passed directly to the handshake,\n--// so make sure you change it before connecting to the gateway.\nSession.identify.intents = 47047\n\nSession.connect()\n')),(0,a.kt)("h3",{id:"what-is-this-intent-number-bla-bla-bla-information"},"What is this intent number? (bla bla bla information)"),(0,a.kt)("p",null,"The intent number ",(0,a.kt)("inlineCode",{parentName:"p"},"47047")," represents a combination of multiple Discord Gateway intents, allowing your bot to listen to various events."),(0,a.kt)("p",null,"Intents are specified using bitwise flags, where each intent corresponds to a specific bit in a 32-bit integer.",(0,a.kt)("br",{parentName:"p"}),"\n","By summing the binary values of required intents, you get a single integer representing all of them."),(0,a.kt)("h4",{id:"calculating-intents"},"Calculating intents"),(0,a.kt)("p",null,"Example Intents Included in ",(0,a.kt)("inlineCode",{parentName:"p"},"47047"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GUILD_CREATE (1 << 0)"),(0,a.kt)("li",{parentName:"ul"},"GUILD_DELETE (1 << 1)"),(0,a.kt)("li",{parentName:"ul"},"GUILD_MEMBER_UPDATE (1 << 25)"),(0,a.kt)("li",{parentName:"ul"},"MESSAGE_CREATE (1 << 9)")),(0,a.kt)("p",null,"To calculate ",(0,a.kt)("inlineCode",{parentName:"p"},"47047"),", you combine all these intents.",(0,a.kt)("br",{parentName:"p"}),"\n","But dont worry, ",(0,a.kt)("a",{parentName:"p",href:"https://ziad87.net/intents/"},"you can use tools to calculate it for you.")))}d.isMDXComponent=!0}}]);