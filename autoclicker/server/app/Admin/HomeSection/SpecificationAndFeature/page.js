(()=>{var e={};e.id=4113,e.ids=[4113],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},79578:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(50482),a=r(69108),i=r(62563),n=r.n(i),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["Admin",{children:["HomeSection",{children:["SpecificationAndFeature",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,79257)),"D:\\autoclicker_frontend\\src\\app\\Admin\\HomeSection\\SpecificationAndFeature\\page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\autoclicker_frontend\\src\\app\\Admin\\HomeSection\\SpecificationAndFeature\\page.js"],u="/Admin/HomeSection/SpecificationAndFeature/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Admin/HomeSection/SpecificationAndFeature/page",pathname:"/Admin/HomeSection/SpecificationAndFeature",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},77491:(e,t,r)=>{Promise.resolve().then(r.bind(r,9040))},9040:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(95344),a=r(97273),i=r(3729),n=r(53608),o=r(74314),l=r.n(o),c=r(48152),d=r(76379);let u=(0,a.default)(async()=>{},{loadableGenerated:{modules:["D:\\autoclicker_frontend\\src\\app\\Admin\\HomeSection\\SpecificationAndFeature\\page.js -> jodit-react"]},ssr:!1}),m=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)([]),[o,m]=(0,i.useState)("");(0,i.useEffect)(()=>{p()},[]);let p=()=>{n.Z.get("http://65.2.172.195:8081/public/items").then(e=>{a(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})},x=async t=>{if(t.preventDefault(),""===e.trim()){m("Please enter a value for the item name.");return}g()},g=()=>{l().fire({title:"Are you sure?",text:"Do you want to Post",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then(e=>{e.isConfirmed&&h()})},h=async()=>{try{let r=localStorage.getItem("token"),s=await n.Z.post("http://65.2.172.195:8081/admin/items",{items:e},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}});console.log("Item saved:",s.data),t(""),p()}catch(e){console.error("Error saving item:",e)}};return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[s.jsx(d.default,{}),s.jsx("main",{className:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:s.jsx("div",{className:"p-2 md:p-4",children:(0,s.jsxs)("div",{className:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[s.jsx("h2",{className:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),s.jsx("div",{className:"grid max-w-2xl mx-auto mt-8",children:s.jsx("div",{className:"col-span-6 md:col-span-12 xs:col-span-12 mb-6",children:s.jsx("div",{className:"bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden",children:(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("div",{className:"flex justify-between mb-5 items-center",children:s.jsx("div",{className:"flex items-center",children:(0,s.jsxs)("div",{className:"ms-3",children:[o&&s.jsx("p",{className:"text-red-500",children:o}),s.jsx("h1",{className:"mb-0 font-bold",children:"Specification & Features"})]})})}),s.jsx("div",{className:"mb-4",children:s.jsx("div",{children:r.map((e,t)=>s.jsx("p",{dangerouslySetInnerHTML:{__html:e.items}},t))})}),s.jsx("div",{className:"flex items-center mb-3",children:s.jsx(c.Z,{onSubmit:x,className:"flex-grow ml-3",children:(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[s.jsx(c.Z.Label,{className:"w-24",children:"Add"}),s.jsx(u,{id:"name",value:e,onChange:e=>t(e),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0}),s.jsx("button",{type:"submit",className:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",children:"Post"})]})})})]})})})})]})})})]})})}},79257:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Admin\HomeSection\SpecificationAndFeature\page.js`),{__esModule:a,$$typeof:i}=s,n=s.default}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6088,337,4314,8152,7984,7752],()=>r(79578));module.exports=s})();