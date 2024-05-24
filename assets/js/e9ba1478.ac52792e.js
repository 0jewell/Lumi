"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},s="Listening to events",a={unversionedId:"GettingStarted/ListeningEvents",id:"GettingStarted/ListeningEvents",title:"Listening to events",description:"In the previous sections, you did a basic bot structure.",source:"@site/docs/GettingStarted/ListeningEvents.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/ListeningEvents",permalink:"/Lumi/docs/GettingStarted/ListeningEvents",draft:!1,editUrl:"https://github.com/astridyz/Lumi/edit/main/docs/GettingStarted/ListeningEvents.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Starting a new project",permalink:"/Lumi/docs/GettingStarted/SettingUp"},next:{title:"Listening once to an event",permalink:"/Lumi/docs/Guides/EventOnce"}},l={},c=[{value:"The <code>Session.listen()</code> method",id:"the-sessionlisten-method",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listening-to-events"},"Listening to events"),(0,r.kt)("p",null,"In the previous sections, you did a basic bot structure.",(0,r.kt)("br",{parentName:"p"}),"\n","In this tutorial, we will be listening to the ",(0,r.kt)("inlineCode",{parentName:"p"},"messageCreate")," event and printing the message content.  "),(0,r.kt)("p",null,"With the previous tutorial code, we will be adding the listener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local Lumi = require '../libs/Lumi'\n\nlocal Session = Lumi.session()\n\nSession.login('YOUR_BOT_TOKEN')\n\nSession.connect()\n")),(0,r.kt)("h3",{id:"the-sessionlisten-method"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"Session.listen()")," method"),(0,r.kt)("admonition",{title:"Session methods",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For detailed information about the ",(0,r.kt)("inlineCode",{parentName:"p"},".listen()")," method, ",(0,r.kt)("a",{parentName:"p",href:"/api/Session#listen"},"you can check its API page"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".listen()")," is a wrapper method. It calls another method from the component ",(0,r.kt)("a",{parentName:"p",href:"/api/Listener"},"Listener")," and starts listening to a given event.\nLets start modifying our code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local Lumi = require '../libs/Lumi'\n\n--// Our event module. It was mentioned in the previous tutorial\n--// It holds all events available in Lumi. Also necessary to type-check.\nlocal Events = Lumi.events\n\nlocal Session = Lumi.session()\n\nSession.login('YOUR_BOT_TOKEN')\n\n--// Defining our handler function, it will be called when the given event is emitted\n--// Automatic type cast on \"message\"\nlocal function onMessageCreate(message)\n    --// Printing the field content from the message\n    print(message.content)\nend\n\n--// Selecting the event\n--// Passing our \"onMessageCreate\" function as a callback.\nSession.listen(Events.messageCreate, onMessageCreate)\n\nSession.connect()\n")),(0,r.kt)("admonition",{title:"Messages content",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Tried and it printed a empty string? Your ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#privileged-intents"},"MESSAGE_CONTENT privileged intent")," may be disabled.")),(0,r.kt)("p",null,"In the next page, you will be doing your first requests to Discord."))}d.isMDXComponent=!0}}]);