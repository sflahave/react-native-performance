"use strict";(self.webpackChunkreact_native_performance=self.webpackChunkreact_native_performance||[]).push([[400],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),v=n,N=m["".concat(p,".").concat(v)]||m[v]||d[v]||o;return a?r.createElement(N,s(s({ref:t},c),{},{components:a})):r.createElement(N,s({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4050:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],l={id:"render-watchdog-timers",title:"Render Watchdog Timers",slug:"/fundamentals/render-watchdog-timers"},p=void 0,i={unversionedId:"fundamentals/render-watchdog-timers",id:"fundamentals/render-watchdog-timers",title:"Render Watchdog Timers",description:"As mentioned in the previous sections, capturing the render-time reports is a two-part process:",source:"@site/docs/fundamentals/render-watchdog-timers.md",sourceDirName:"fundamentals",slug:"/fundamentals/render-watchdog-timers",permalink:"/react-native-performance/docs/fundamentals/render-watchdog-timers",editUrl:"https://github.com/shopify/react-native-performance/edit/main/docs/docs/fundamentals/render-watchdog-timers.md",tags:[],version:"current",frontMatter:{id:"render-watchdog-timers",title:"Render Watchdog Timers",slug:"/fundamentals/render-watchdog-timers"},sidebar:"tutorialSidebar",previous:{title:"Measuring Render Time",permalink:"/react-native-performance/docs/fundamentals/measuring-render-times"},next:{title:"Monitoring Internal State",permalink:"/react-native-performance/docs/fundamentals/monitoring-internal-state"}},c={},d=[{value:"renderTimeoutMillisOverride",id:"rendertimeoutmillisoverride",level:3}],m={toc:d};function v(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As mentioned in the previous sections, capturing the render-time reports is a two-part process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"starting the timer via the ",(0,o.kt)("inlineCode",{parentName:"li"},"useStartProfiler")," hook or ",(0,o.kt)("inlineCode",{parentName:"li"},"onAppStarted")," native call, and"),(0,o.kt)("li",{parentName:"ol"},"ending it via the ",(0,o.kt)("inlineCode",{parentName:"li"},"PerformanceMeasureView")," component.")),(0,o.kt)("p",null,"Additionally, one needs to communicate the transitions among the different render passes via the ",(0,o.kt)("inlineCode",{parentName:"p"},"interactive")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"renderPassName")," props."),(0,o.kt)("p",null,"It is possible that a developer may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useStartProfiler")," hook, but forget to wrap the target screen with an ",(0,o.kt)("inlineCode",{parentName:"p"},"PerformanceMeasureView"),". A developer may also make a mistake while writing the logic to evaluate the ",(0,o.kt)("inlineCode",{parentName:"p"},"interactive")," prop's value such that it never transitions to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Both of these developer errors may lead to interactive ",(0,o.kt)("inlineCode",{parentName:"p"},"RenderPassReports")," not getting generated, since the library will never be able to determine whether the screen became interactive or not."),(0,o.kt)("p",null,"The library can help you catch these kinds of errors via the use of render watchdog timers. This is an optional opt-in functionality that is recommended to be enabled in at least the development builds of the apps."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"App"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"onReportPrepared"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"useCallback"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((report"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"RenderPassReport"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"monorail"),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".produce"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"convertReportToMonorailObject"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(report));")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," []);")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// renderTimeoutMillis defaults to 10000ms")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"PerformanceProfiler"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"renderTimeoutMillis"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"5000"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"useRenderTimeouts"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onReportPrepared"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{onReportPrepared}>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"NavigationContainer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Stack.Navigator"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Stack.Screen"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"name"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Screen1"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"component"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{Screen1} />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Stack.Screen"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"name"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Screen2"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"component"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{Screen2} />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        </"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Stack.Navigator"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"NavigationContainer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"PerformanceProfiler"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"App"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"onReportPrepared"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"useCallback"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"report"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"RenderPassReport"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"monorail"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"produce"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"convertReportToMonorailObject"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"report"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," [])"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// renderTimeoutMillis defaults to 10000ms")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"PerformanceProfiler"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"renderTimeoutMillis"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"5000"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"useRenderTimeouts"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"onReportPrepared"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"onReportPrepared"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"NavigationContainer"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"Stack.Navigator"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"Stack.Screen"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"name"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Screen1"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"component"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"Screen1"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"Stack.Screen"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"name"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Screen2"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"component"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"Screen2"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"Stack.Navigator"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"NavigationContainer"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"PerformanceProfiler"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,o.kt)("p",null,"When enabled, the library will throw ",(0,o.kt)("inlineCode",{parentName:"p"},"RenderTimeoutError")," if a screen's render timer was instantiated, but the said screen didn't reach the interactive state within the specified duration."),(0,o.kt)("h3",{id:"rendertimeoutmillisoverride"},"renderTimeoutMillisOverride"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStartProfiler")," can optionally receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"renderTimeoutMillisOverride: number")," prop. When provided for a specific flow, this timeout value is used instead of the default one provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PerformanceProfiler>")," component via the ",(0,o.kt)("inlineCode",{parentName:"p"},"renderTimeoutMillis")," prop."),(0,o.kt)("p",null,"Please note: providing a ",(0,o.kt)("inlineCode",{parentName:"p"},"renderTimeoutMillisOverride")," does nothing if the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRenderTimeouts")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<PerformanceProfiler>")," component is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". No watchdog timers are used in that case, just like before."))}v.isMDXComponent=!0}}]);