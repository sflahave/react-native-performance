"use strict";(self.webpackChunkreact_native_performance=self.webpackChunkreact_native_performance||[]).push([[437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"data-operations",title:"Removal of data operations",sidebar_position:2},l=void 0,c={unversionedId:"decisions/data-operations",id:"decisions/data-operations",title:"Removal of data operations",description:"Removal of data operations",source:"@site/docs/decisions/data-operations.md",sourceDirName:"decisions",slug:"/decisions/data-operations",permalink:"/react-native-performance/docs/decisions/data-operations",editUrl:"https://github.com/shopify/react-native-performance/edit/main/docs/docs/decisions/data-operations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"data-operations",title:"Removal of data operations",sidebar_position:2}},p={},d=[{value:"Removal of data operations",id:"removal-of-data-operations",level:2},{value:"22nd February, 2022",id:"22nd-february-2022",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"removal-of-data-operations"},"Removal of data operations"),(0,a.kt)("h4",{id:"22nd-february-2022"},"22nd February, 2022"),(0,a.kt)("p",null,"When changing the inner workings of state machine in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Shopify/react-native-performance/pull/336"},"this")," PR, we have had issues with migrating ",(0,a.kt)("inlineCode",{parentName:"p"},"usePromiseProfiler")," and the other derived hooks like ",(0,a.kt)("inlineCode",{parentName:"p"},"useBuildProfiledAPI"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useProfiledApolloClient"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"useProfileStaticAsyncStorage"),"."),(0,a.kt)("p",null,"These hooks are tied to a given screen and their timestamps are bundled inside the screen's state as well as in reports. This makes a strong coupling between the ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"s these hooks profile and the screen lifecycle."),(0,a.kt)("p",null,"Additionally, these hooks are not used in any of our apps and making the library leaner would be an achievement in-and-of-itself. We are, however, acknowledging that profiling ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"s would be useful but only if we build the solution, so it has a clear end-goal - such as displaying the time it takes for those Promises to resolve in a Mode dashboard. With the current structure of the data, it would be hard to do, though, since the operations are inside render pass reports."),(0,a.kt)("p",null,"With this in mind, we have decided to remove all profiling of data operations. We plan to revisit this idea in the future."))}f.isMDXComponent=!0}}]);