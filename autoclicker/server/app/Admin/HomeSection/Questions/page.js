(()=>{var e={};e.id=9098,e.ids=[9098],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},73579:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(50482),n=r(69108),o=r(62563),i=r.n(o),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["Admin",{children:["HomeSection",{children:["Questions",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,12602)),"D:\\autoclicker_frontend\\src\\app\\Admin\\HomeSection\\Questions\\page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\Admin\\HomeSection\\Questions\\page.js"],u="/Admin/HomeSection/Questions/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/Admin/HomeSection/Questions/page",pathname:"/Admin/HomeSection/Questions",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},58234:(e,t,r)=>{Promise.resolve().then(r.bind(r,46693))},46693:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(95344);r(89410),r(8428);var n=r(3729),o=r(53608),i=r(74314),a=r.n(i),l=r(97273),d=r(76379);let c=(0,l.default)(async()=>{},{loadableGenerated:{modules:["D:\\autoclicker_frontend\\src\\app\\Admin\\HomeSection\\Questions\\page.js -> jodit-react"]},ssr:!1}),u=()=>{let[e,t]=(0,n.useState)(""),[r,i]=(0,n.useState)(""),[l,u]=(0,n.useState)(""),[m,p]=(0,n.useState)([]),[x,h]=(0,n.useState)(""),g=async t=>{if(t.preventDefault(),""===r.trim()&&""===l.trim()){h("Please enter a value for the question And Answer");return}let s=localStorage.getItem("token");try{let t=await fetch("http://65.2.172.195:8081/admin/questionanswer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({id:e,question:r,answers:l})});if(!t.ok)throw Error("Network response was not ok");await t.json(),a().fire({title:"",icon:"success"}),i(""),u(""),f()}catch(e){console.error("There was a problem with your fetch operation:",e)}};(0,n.useEffect)(()=>{f()},[]);let f=()=>{o.Z.get("http://65.2.172.195:8081/public/questionanswer").then(e=>{p(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})};async function b(e){try{let r=await o.Z.get(`http://65.2.172.195:8081/public/questionansweredit/${e}`),{id:s,question:n,answers:a}=r.data;t(s),i(n),u(a),console.log("dataediiittt...",r.data)}catch(e){console.log("err",e)}}async function w(e){try{let t=localStorage.getItem("token");if(!(await fetch(`http://65.2.172.195:8081/admin/deleteQuestion/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({id:e})})).ok)throw Error("Failed to delete item");console.log("Item deleted successfully"),f()}catch(e){console.error("Error deleting item:",e.message)}}return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[s.jsx(d.default,{}),s.jsx("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:s.jsx("div",{class:"p-2 md:p-4",children:(0,s.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[s.jsx("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),x&&s.jsx("p",{className:"text-red-500",children:x}),s.jsx("div",{className:"grid max-w-2xl mx-auto mt-8",children:(0,s.jsxs)("div",{children:[s.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Frequently Asked Questions?"}),(0,s.jsxs)("form",{onSubmit:g,className:"mb-6",children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("input",{type:"hidden",value:e,placeholder:"id"}),s.jsx("label",{htmlFor:"question",className:"block mb-2 text-sm font-medium text-gray-900",children:"Question"}),s.jsx(c,{id:"question",required:!0,value:r,onChange:e=>{i(e)}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"answer",className:"block mb-2 text-sm font-medium text-gray-900",children:"Answer"}),s.jsx(c,{id:"answer",required:!0,value:l,onChange:e=>{u(e)}})]}),s.jsx("button",{type:"submit",className:"bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Save"}),s.jsx("hr",{className:"my-4 border-t border-gray-300"})]}),(0,s.jsxs)("div",{children:[s.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Featuresbox"}),s.jsx("div",{children:m.map((e,t)=>(0,s.jsxs)("div",{className:"mb-4 border-double border-4 border-indigo-600 ...",children:[s.jsx("p",{className:"mb-1 font-semibold",children:"Questions"}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e.question}}),s.jsx("p",{className:"mb-1 font-semibold",children:"Answer"}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e.answers}}),s.jsx("button",{type:"Delete",id:"del",onClick:()=>w(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Delete"}),s.jsx("button",{type:"Edit",id:"edit",onClick:()=>b(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Edit"})]},t))})]})]})})]})})})]})})}},12602:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Admin\HomeSection\Questions\page.js`),{__esModule:n,$$typeof:o}=s,i=s.default}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6088,337,4314,7984,7752],()=>r(73579));module.exports=s})();