(()=>{var e={};e.id=8242,e.ids=[8242],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},9681:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(50482),o=r(69108),a=r(62563),i=r.n(a),n=r(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["Admin",{children:["FooterSection",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,49824)),"D:\\autoclicker_frontend\\src\\app\\Admin\\FooterSection\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\Admin\\FooterSection\\page.js"],u="/Admin/FooterSection/page",x={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/Admin/FooterSection/page",pathname:"/Admin/FooterSection",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},39316:(e,t,r)=>{Promise.resolve().then(r.bind(r,87940))},87940:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(95344),o=r(8428),a=r(3729),i=r(53608),n=r(74314),l=r.n(n),d=r(97273),c=r(76379);let u=(0,d.default)(async()=>{},{loadableGenerated:{modules:["D:\\autoclicker_frontend\\src\\app\\Admin\\FooterSection\\page.js -> jodit-react"]},ssr:!1}),x=()=>{let e=(0,o.useRouter)();(0,a.useEffect)(()=>{localStorage.getItem("token")||e.push("/authentication/sign-in")},[e]);let t=async e=>{let t=e.target.files[0];if(!t)return;let r=new FormData;r.append("file",t);let s=localStorage.getItem("token");try{(await fetch("http://65.2.172.195:8081/admin/footerupload",{method:"POST",body:r,headers:{Authorization:`Bearer ${s}`}})).ok?l().fire({title:"",icon:"success"}):console.error("Upload failed")}catch(e){console.error("Error:",e)}},[r,n]=(0,a.useState)(""),d=async e=>{e.preventDefault();try{let e=localStorage.getItem("token");await i.Z.post("http://65.2.172.195:8081/admin/footertext",{items:r},{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}}),l().fire({title:"",icon:"success"}),n(""),Getall()}catch(e){console.error("Error saving item:",e)}};return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[s.jsx(c.default,{}),s.jsx("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:s.jsx("div",{class:"p-2 md:p-4",children:(0,s.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[s.jsx("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),s.jsx("div",{class:"grid max-w-2xl mx-auto mt-8",children:(0,s.jsxs)("div",{class:"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("span",{children:s.jsx("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Footer Image Update"})}),s.jsx("div",{class:"flex items-center justify-center w-full",children:(0,s.jsxs)("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[(0,s.jsxs)("div",{class:"flex flex-col items-center justify-center pt-5 pb-6",children:[s.jsx("svg",{class:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 16",children:s.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,s.jsxs)("p",{class:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[s.jsx("span",{class:"font-semibold",children:"Click to upload"})," or drag and drop"]}),s.jsx("p",{class:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),s.jsx("input",{id:"dropzone-file",type:"file",className:"hidden",onChange:t})]})})]})}),s.jsx("div",{class:"grid max-w-2xl mx-auto mt-8",children:(0,s.jsxs)("div",{class:"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("span",{children:s.jsx("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Footer Text Update"})}),(0,s.jsxs)("form",{class:"max-w-sm mx-auto",onSubmit:d,children:[s.jsx("div",{class:"mb-5 mt-5",children:s.jsx(u,{value:r,onChange:e=>n(e),required:!0})}),s.jsx("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})]})]})})]})})})]})})}},49824:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>o,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Admin\FooterSection\page.js`),{__esModule:o,$$typeof:a}=s,i=s.default}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6088,337,4314,7984,7752],()=>r(9681));module.exports=s})();