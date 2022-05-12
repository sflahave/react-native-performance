"use strict";(self.webpackChunkreact_native_performance=self.webpackChunkreact_native_performance||[]).push([[271],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return N}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),N=r,k=d["".concat(p,".").concat(N)]||d[N]||m[N]||l;return t?n.createElement(k,o(o({ref:a},c),{},{components:t})):n.createElement(k,o({ref:a},c))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4850:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var n=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],s={id:"react-native-performance-lists-profiler",title:"Lists profiler",sidebar_position:3,slug:"/guides/react-native-performance-lists-profiler"},p="react-native-performance-lists-profiler",i={unversionedId:"guides/react-native-performance-lists-profiler",id:"guides/react-native-performance-lists-profiler",title:"Lists profiler",description:"This library contains components for profiling FlatList.",source:"@site/docs/guides/react-native-performance-lists-profiler.md",sourceDirName:"guides",slug:"/guides/react-native-performance-lists-profiler",permalink:"/react-native-performance/docs/guides/react-native-performance-lists-profiler",editUrl:"https://github.com/shopify/react-native-performance/edit/main/docs/docs/guides/react-native-performance-lists-profiler.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"react-native-performance-lists-profiler",title:"Lists profiler",sidebar_position:3,slug:"/guides/react-native-performance-lists-profiler"},sidebar:"tutorialSidebar",previous:{title:"Optimizing Long Running Components",permalink:"/react-native-performance/docs/fundamentals/optimizing-long-running-components"},next:{title:"Flipper",permalink:"/react-native-performance/docs/guides/flipper-react-native-performance"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"ListsProfiler",id:"listsprofiler",level:2},{value:"onInteractive",id:"oninteractive",level:3},{value:"onBlankArea",id:"onblankarea",level:3},{value:"FlatListPerformanceView",id:"flatlistperformanceview",level:2}],d={toc:m};function N(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react-native-performance-lists-profiler"},"react-native-performance-lists-profiler"),(0,l.kt)("p",null,"This library contains components for profiling ",(0,l.kt)("inlineCode",{parentName:"p"},"FlatList"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You can install the package by running the following command:"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"$ yarn add @shopify/react-native-performance-lists-profiler react-native-flipper"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"$ yarn add @shopify/react-native-performance-lists-profiler react-native-flipper")))))),(0,l.kt)("h2",{id:"listsprofiler"},"ListsProfiler"),(0,l.kt)("p",null,"To profile a given list, you will first need to mount a ",(0,l.kt)("inlineCode",{parentName:"p"},"<ListsProfiler />")," component high in your App tree.\nIf you want to process the profiling results yourself, two callbacks are available as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ListsProfiler")," props - ",(0,l.kt)("inlineCode",{parentName:"p"},"onInteractive")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onBlankArea"),"."),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {ListsProfiler} "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'@shopify/react-native-performance-lists-profiler'"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"App"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"onInteractiveCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"useCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((TTI"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"number"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"console"),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".log"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'s TTI: "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"TTI"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," []);")),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"onBlankAreaCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"useCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((offsetStart"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"number"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," offsetEnd"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"number"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"console"),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".log"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`Blank area for "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Math"),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".max"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(offsetStart"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," offsetEnd)"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," []);")),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"ListsProfiler"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onInteractive"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{onInteractiveCallback} "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onBlankArea"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{onBlankAreaCallback}>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"NavigationTree"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"ListsProfiler"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"ListsProfiler"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-performance-lists-profiler"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"App"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"onInteractiveCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"useCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"TTI"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"number"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"string"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"console"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"log"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"`${"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"'s TTI: "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"TTI"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}`"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," [])"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"onBlankAreaCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"useCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"offsetStart"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"number"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"offsetEnd"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"number"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"string"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"console"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"log"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"`"),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Blank area for "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},": "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"${"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"Math"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"max"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"offsetStart"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"offsetEnd"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}`"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," [])"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ListsProfiler"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"onInteractive"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"onInteractiveCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"onBlankArea"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"onBlankAreaCallback"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"NavigationTree"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ListsProfiler"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,l.kt)("h3",{id:"oninteractive"},"onInteractive"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onInteractive")," is triggered when the profiled list becomes interactive."),(0,l.kt)("p",null,"The callback has the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TTI"),": represents time-to-interactive. It is computed as the difference between timestamp of when the component gets first mounted and the first frame where the first page of list is completely rendered."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listName"),": name of the list defined in the ",(0,l.kt)("inlineCode",{parentName:"li"},"FlatListPerformanceView"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The list will not report ",(0,l.kt)("inlineCode",{parentName:"p"},"onInteractive")," if the cells do not fill the whole frame of the list. This is a known issue and something we will try to fix."),(0,l.kt)("h3",{id:"onblankarea"},"onBlankArea"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onBlankArea")," is called on each frame the list is scrolled - even if there is currently no blank space."),(0,l.kt)("p",null,"It has the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetStart"),": visible blank space on top of the screen (while going up). If value is greater than 0, it's visible to user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetEnd"),": visible blank space at the end of the screen (while going down). If value is greater than 0, it's visible to user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"blankArea"),": value is greater or equal to zero and the maximum of ",(0,l.kt)("inlineCode",{parentName:"li"},"offsetStart")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"offsetEnd"),". This will usually depend on the direction user is scrolling in.")),(0,l.kt)("h2",{id:"flatlistperformanceview"},"FlatListPerformanceView"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FlatListPerformanceView")," is a component used to profile a specific instance of a ",(0,l.kt)("inlineCode",{parentName:"p"},"FlatList"),":"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"FlatListPerformanceView"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"FlatList"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  <"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"FlatList")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"keyExtractor"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"..."),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"renderItem"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"..."),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"data"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{data}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  />")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"</"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"FlatListPerformanceView"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"FlatListPerformanceView"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"listName"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"FlatList"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"FlatList")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"keyExtractor"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={...}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"renderItem"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={...}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"data"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"data"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"FlatListPerformanceView"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"listName")," prop will be used in the callbacks ",(0,l.kt)("inlineCode",{parentName:"p"},"onInteractive")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onBlankArea"),". You can also use both of these callbacks directly on the ",(0,l.kt)("inlineCode",{parentName:"p"},"FlatListPerformanceView")," if you don't want to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ListsProfiler")," component."))}N.isMDXComponent=!0}}]);