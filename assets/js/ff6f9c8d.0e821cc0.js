"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[6474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},i="always-real-ip",l={unversionedId:"profile-format/general/always_real_ip",id:"profile-format/general/always_real_ip",title:"always-real-ip",description:"In some scenarios, domain DNS query will response with a fake ip which match 198.18.0.0/16. Generally it will not cause any issues.",source:"@site/docs/profile-format/general/always_real_ip.md",sourceDirName:"profile-format/general",slug:"/profile-format/general/always_real_ip",permalink:"/docs/profile-format/general/always_real_ip",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/general/always_real_ip.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"internet-test-url",permalink:"/docs/profile-format/general/internet_test_url"},next:{title:"http-listen",permalink:"/docs/profile-format/general/http_listen"}},p={},s=[{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"always-real-ip"},(0,n.kt)("inlineCode",{parentName:"h1"},"always-real-ip")),(0,n.kt)("p",null,"In some scenarios, domain DNS query will response with a fake ip which match ",(0,n.kt)("inlineCode",{parentName:"p"},"198.18.0.0/16"),". Generally it will not cause any issues."),(0,n.kt)("p",null,"If you encounter some network issue due to this feature, you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"always-real-ip")," to bypass this hack."),(0,n.kt)("h2",{id:"sample"},"Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com\n")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"always-real-ip = {domain}, {wildcard domain}, ...\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Currently we observe that the Google Voice dialing problem can be resolved by using ",(0,n.kt)("inlineCode",{parentName:"p"},"always-real-ip"),", please try sample below:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"always-real-ip = stun.l.google.com\n"))))}m.isMDXComponent=!0}}]);