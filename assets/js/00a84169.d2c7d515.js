"use strict";(self.webpackChunkreact_native_performance=self.webpackChunkreact_native_performance||[]).push([[953],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(a),N=r,v=d["".concat(p,".").concat(N)]||d[N]||m[N]||s;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5571:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return m}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],l={id:"stubbing-in-test",title:"Stubbing the profiler in tests",slug:"/fundamentals/stubbing-in-test"},p=void 0,i={unversionedId:"fundamentals/stubbing-in-test",id:"fundamentals/stubbing-in-test",title:"Stubbing the profiler in tests",description:"As mentioned before, you can completely turn off performance profiling by setting the enabled prop to false. You can also use this mechanism to disable profiler in your test environment. Disabling the profiler converts all public APIs into no-ops, ensuring that they have minimal interference with your business logic tests.",source:"@site/docs/fundamentals/stubbing-in-test.md",sourceDirName:"fundamentals",slug:"/fundamentals/stubbing-in-test",permalink:"/docs/fundamentals/stubbing-in-test",editUrl:"https://github.com/shopify/react-native-performance/edit/main/docs/docs/fundamentals/stubbing-in-test.md",tags:[],version:"current",frontMatter:{id:"stubbing-in-test",title:"Stubbing the profiler in tests",slug:"/fundamentals/stubbing-in-test"},sidebar:"tutorialSidebar",previous:{title:"Global Enable/Disable Switch",permalink:"/docs/fundamentals/global-switch"},next:{title:"Optimizing Long Running Components",permalink:"/docs/fundamentals/optimizing-long-running-components"}},c={},m=[],d={toc:m};function N(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As mentioned ",(0,s.kt)("a",{parentName:"p",href:"./global-switch"},"before"),", you can completely turn off performance profiling by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"enabled")," prop to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),". You can also use this mechanism to disable profiler in your test environment. Disabling the profiler converts all public APIs into no-ops, ensuring that they have minimal interference with your business logic tests."),(0,s.kt)("p",null,"We recommend configuring the ",(0,s.kt)("inlineCode",{parentName:"p"},"PerformanceProfiler")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"enabled")," state set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," when setting up the test context under which your test subject components are rendered. For instance, if you're using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library"},"react-native-testing-library"),":"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {render} "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'react-native-testing-library'"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"TestRenderContext"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({children}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {children"),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"React"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"ReactNode"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}) "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"PerformanceProfiler"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"enabled"),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"false"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onReportPrepared"),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{() "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {}}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      {children}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"PerformanceProfiler"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"describe"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'MyScreenTest'"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"it"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'does something'"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"render"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"TestRenderContext"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"MyScreen"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"TestRenderContext"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">"),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    );")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// assert things")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  });")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"});"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"render"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react-native-testing-library"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"TestRenderContext"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"({"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"children"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"children"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"React"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ReactNode"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"})"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"PerformanceProfiler"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"enabled"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={false}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"onReportPrepared"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"children"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"PerformanceProfiler"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"describe"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"MyScreenTest"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"it"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"does something"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"render"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"(")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"TestRenderContext"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"MyScreen"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"TestRenderContext"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// assert things")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,s.kt)("p",null,"Additionally, the library exposes a mock file that can be imported in your jest config script. This file will setup certain mocks needed for the library to work correctly in a test environment:"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// in your jest config file")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'@shopify/react-native-performance/jest-mock'"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// in your jest config file")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-performance/jest-mock"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))))}N.isMDXComponent=!0}}]);