(()=>{var e={};e.id=22,e.ids=[22],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},51509:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(50482),a=r(69108),i=r(62563),n=r.n(i),l=r(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["FAQ",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,93785)),"D:\\autoclicker_frontend\\src\\app\\FAQ\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\FAQ\\page.js"],p="/FAQ/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/FAQ/page",pathname:"/FAQ",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},78536:(e,t,r)=>{Promise.resolve().then(r.bind(r,51374))},51374:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(95344);r(56506);var a=r(3729),i=r(53608),n=r(72119);let l=()=>{let[e,t]=(0,a.useState)([]),[r,l]=(0,a.useState)([]),[o,d]=(0,a.useState)([]);(0,a.useEffect)(()=>{c(),p()},[]);let c=()=>{i.Z.get("http://65.2.172.195:8081/public/savefaq/1").then(e=>{t(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)}),i.Z.get("http://65.2.172.195:8081/public/savefaq/2").then(e=>{l(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})},p=()=>{i.Z.get("http://65.2.172.195:8081/public/questionanswer").then(e=>{d(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})},x={title:"FAQ page",description:"FAQ decription",ogTitle:"FAQ ogtitle",ogDescription:"FAQ ogtitle Description",conicalurl:"conicalurl",plaintext:"FAQ plaintext"};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Z,{title:x?.title,description:x?.description,ogTitle:x?.ogTitle,ogDescription:x?.ogDescription,plaintext:x?.plaintext,conicalurl:x?.conicalurl}),(0,s.jsxs)("div",{className:"p3 p4",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"FAQs"}),(0,s.jsxs)("div",{class:"grid grid-cols-3 divide-x",children:[s.jsx("div",{className:"p-5 mr-5",children:(0,s.jsxs)("div",{class:"w-full max-w-sm p-4 p0 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("h5",{class:"text-xl font-medium text-gray-900 p4 dark:text-white",children:"empty"}),s.jsx("hr",{}),s.jsx("div",{className:"py-5",children:"advertiment block"})]})}),s.jsx("div",{className:" p-5 mr-5",children:(0,s.jsxs)("div",{class:"w-full max-w-sm p4 p0 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("h5",{class:"text-xl font-medium text-gray-900 p4 dark:text-white",children:"Free version"}),s.jsx("hr",{}),s.jsx("div",{className:"py-5",children:s.jsx("ul",{class:"max-w-md space-y-1 p4 text-gray-500 list-inside dark:text-gray-400",children:e.map((e,t)=>(0,s.jsxs)("li",{class:"flex items-center",children:[s.jsx("svg",{class:"w-3.5 h-3.5 me-2 text-yellow-500 dark:text-yellow-400 flex-shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e.input1}})]}))})})]})}),s.jsx("div",{className:" p-5 mr-5",children:(0,s.jsxs)("div",{class:"w-full max-w-sm p4 p0 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("h5",{class:"text-xl font-medium p4 text-gray-900 dark:text-white",children:"Paid version"}),s.jsx("hr",{}),s.jsx("div",{className:"py-5",children:s.jsx("ul",{class:"max-w-md space-y-1 p4 text-gray-500 list-inside dark:text-gray-400",children:r&&r.map((e,t)=>(0,s.jsxs)("li",{class:"flex items-center",children:[s.jsx("svg",{class:"w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e.input1}})]}))})})]})})]}),s.jsx("hr",{}),(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative select-none py-2",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"Frequently Asked Questions?"}),s.jsx("div",{className:"max-w-screen-xl py-5",children:s.jsx("div",{className:"space-y-4",children:o.map((e,t)=>(0,s.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",children:[(0,s.jsxs)("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p3 bg-[#F3F4F6] dark:bg-[#0C1633] p-4",children:[s.jsx("h2",{className:"font-medium",dangerouslySetInnerHTML:{__html:e.question}}),s.jsx("svg",{className:"h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})})]}),s.jsx("p",{className:"mt-4 px-4 leading-relaxed",dangerouslySetInnerHTML:{__html:e.answers}})]}))})})]})]})]})}},93785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\FAQ\page.js`),{__esModule:a,$$typeof:i}=s,n=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6088,337,7984],()=>r(51509));module.exports=s})();