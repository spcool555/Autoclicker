(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{7449:function(e,s,i){Promise.resolve().then(i.bind(i,8212))},4232:function(e,s,i){"use strict";i.d(s,{default:function(){return n.a}});var t=i(4930),n=i.n(t)},4930:function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return l}});let t=i(6921);i(3827),i(4090);let n=t._(i(4795));function l(e,s){let i={loading:e=>{let{error:s,isLoading:i,pastDelay:t}=e;return null}};return"function"==typeof e&&(i.loader=e),(0,n.default)({...i,...s})}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},9721:function(e,s,i){"use strict";function t(e){let{reason:s,children:i}=e;return i}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return t}}),i(9775)},4795:function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return o}});let t=i(3827),n=i(4090),l=i(9721);function r(e){var s;return{default:null!=(s=null==e?void 0:e.default)?s:e}}let a={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},o=function(e){let s={...a,...e},i=(0,n.lazy)(()=>s.loader().then(r)),o=s.loading;function c(e){let r=o?(0,t.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,a=s.ssr?(0,t.jsx)(i,{...e}):(0,t.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,t.jsx)(i,{...e})});return(0,t.jsx)(n.Suspense,{fallback:r,children:a})}return c.displayName="LoadableComponent",c}},8212:function(e,s,i){"use strict";i.r(s);var t=i(3827),n=i(4090),l=i(7908),r=i(4232),a=i(3411),o=i.n(a),c=i(3239);let d=(0,r.default)(()=>Promise.all([i.e(8035),i.e(9079)]).then(i.t.bind(i,6744,23)),{loadableGenerated:{webpack:()=>[6744]},ssr:!1});s.default=()=>{let[e,s]=(0,n.useState)(""),[i,r]=(0,n.useState)(""),[a,u]=(0,n.useState)(""),[m,h]=(0,n.useState)([]),[f,x]=(0,n.useState)("");(0,n.useEffect)(()=>{p()},[]);let j=async s=>{if(s.preventDefault(),""===i.trim()||""===a.trim()){x("Please enter a value for the item name.");return}let t=localStorage.getItem("token");try{if(!(await l.Z.post("http://65.2.172.195:8081/admin/saveFormData",{id:e,input1:i,input2:a},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}})).ok)throw Error("Network response was not ok");o().fire({title:"",icon:"success"}),r(""),u("")}catch(e){console.error("There was a problem with your fetch operation:",e),o().fire({title:"",icon:"success"}),r(""),u(""),p()}},p=()=>{l.Z.get("http://65.2.172.195:8081/public/featurebox").then(e=>{h(e.data)}).catch(e=>{console.log("err",e)})};async function g(e){try{let i=await l.Z.get("http://65.2.172.195:8081/public/featureboxedit/".concat(e)),{id:t,input1:n,input2:a}=i.data;s(t),r(n),u(a),console.log("dataediiitttnewww...",i.data)}catch(e){console.log("err",e)}}async function b(e){try{let s=localStorage.getItem("token");if(!(await fetch("http://65.2.172.195:8081/admin/deletefeaturebox/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({id:e})})).ok)throw Error("Failed to delete item");console.log("Item deleted successfully"),p()}catch(e){console.error("Error deleting item:",e.message)}}return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[(0,t.jsx)(c.default,{}),(0,t.jsx)("main",{className:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:(0,t.jsx)("div",{className:"p-2 md:p-4",children:(0,t.jsxs)("div",{className:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[(0,t.jsx)("h2",{className:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),(0,t.jsxs)("div",{className:"grid max-w-2xl mx-auto mt-8",children:[f&&(0,t.jsx)("p",{className:"text-red-500",children:f}),(0,t.jsx)("h4",{className:"text-lg font-semibold",children:"Features of MT Auto clicker"}),(0,t.jsxs)("form",{onSubmit:j,className:"mt-4",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"formInput1",className:"block mb-2 text-sm font-medium text-gray-900",children:"Heading"}),(0,t.jsx)(d,{id:"formInput1",required:!0,value:i,onChange:e=>{r(e)}})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"formInput2",className:"block mb-2 text-sm font-medium text-gray-900",children:"Description"}),(0,t.jsx)(d,{id:"formInput2",value:a,onChange:e=>{u(e)}})]}),(0,t.jsx)("button",{type:"submit",className:"bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Save"}),(0,t.jsx)("hr",{className:"my-4 border-t border-gray-300"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6 mb-4",children:"Featuresbox"}),(0,t.jsx)("div",{children:m.map((e,s)=>(0,t.jsxs)("div",{className:"border-double border-4 border-indigo-600 ...",children:[(0,t.jsx)("p",{className:"mb-1 font-semibold",children:"Heading"}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.input1}}),(0,t.jsx)("p",{className:"mb-1 font-semibold",children:"Description"}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.input2}}),(0,t.jsx)("button",{type:"Delete",id:"del",onClick:()=>b(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Delete"}),(0,t.jsx)("button",{type:"Edit",id:"edit",onClick:()=>g(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Edit"})]},s))})]})]})]})})})]})})}},3239:function(e,s,i){"use strict";i.r(s);var t=i(3827);i(4090);var n=i(8792);s.default=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{class:"scrollbar-sidebar",children:(0,t.jsx)("div",{class:"app-sidebar__inner",children:(0,t.jsxs)("ul",{class:"vertical-nav-menu",children:[(0,t.jsx)("li",{class:"app-sidebar__heading",children:"Dashboards"}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin",class:"mm-active",children:[(0,t.jsx)("i",{class:"metismenu-icon pe-7s-rocket"}),"Home Page"]})}),(0,t.jsx)("li",{class:"app-sidebar__heading",children:"UI Components"}),(0,t.jsxs)("li",{children:[(0,t.jsxs)(n.default,{href:"",children:[(0,t.jsx)("i",{class:"metismenu-icon pe-7s-diamond"}),"Home Section",(0,t.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"Update Specification Image"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/SpecificationAndFeature",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"    Specification & Features"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/Questions",children:[(0,t.jsx)("i",{class:"metismenu-icon"})," Frequently Asked Questions?"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/FAQs",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"   Free/Paid FAQs"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/FeaturesMT",children:[(0,t.jsx)("i",{class:"metismenu-icon"})," FeaturesMT"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/WhatMakes",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"   WhatMakes MT Auto Clicker Different"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/TopVideo",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"    TopVideos"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/HomeSection/HeadTagData",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"HeadTagData"]})})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"#",children:[(0,t.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Download Page",(0,t.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/Download",children:[(0,t.jsx)("i",{class:"metismenu-icon"})," Minimum System Requirements"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/Download/Procedure",children:[(0,t.jsx)("i",{class:"metismenu-icon"})," Downloading and Installing Procedure"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/Download/Applications",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"          Applications of MT Auto Clicker"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/Download/WorkFlow",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"  Work Flow"]})})]}),(0,t.jsxs)("a",{href:"",children:[(0,t.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Others",(0,t.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/PricingSection",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"    Pricing Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/AboutSection",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"   About Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/BlogSection",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"   Blog Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/Documentation",children:[(0,t.jsx)("i",{class:"metismenu-icon"})," Documentation Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/PrivacyPolicy",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"   Privacy Policy Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/TearmsOfUse",children:[(0,t.jsx)("i",{class:"metismenu-icon"})," Terms Of Use Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/ChangeLogPage",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"Change log Page"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/Admin/FooterSection",children:[(0,t.jsx)("i",{class:"metismenu-icon"}),"Footer Page"]})})]})]})]})})})})}}},function(e){e.O(0,[9461,8792,7908,2971,8069,1744],function(){return e(e.s=7449)}),_N_E=e.O()}]);