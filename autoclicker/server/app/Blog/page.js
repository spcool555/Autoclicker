(()=>{var e={};e.id=5260,e.ids=[5260],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},29029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c});var s=r(50482),i=r(69108),a=r(62563),o=r.n(a),n=r(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["Blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,47514)),"D:\\autoclicker_frontend\\src\\app\\Blog\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\autoclicker_frontend\\src\\app\\Blog\\page.js"],h="/Blog/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/Blog/page",pathname:"/Blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},40738:(e,t,r)=>{Promise.resolve().then(r.bind(r,93570))},93570:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(95344),i=r(56506),a=r(3729),o=r(53608),n=r(72119);let l=()=>{let[e,t]=(0,a.useState)([]),[r,l]=(0,a.useState)([{id:1,input3:"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png",input1:"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"},{id:2,input3:"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png",input1:"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkk"}]);(0,a.useEffect)(()=>{c()},[]);let c=()=>{o.Z.get("http://65.2.172.195:8081/public/newsbox").then(e=>{let r=e.data.map(e=>({...e,imageUrl:`data:image/jpeg;base64,${e.input3}`}));t(r),console.log("Processed data:",r)}).catch(e=>{console.log("Error fetching data:",e)})},d=(e,t)=>{let r=e.split(" ");return r.length>t?r.slice(0,t).join(" ")+"...":e},h={title:"blog page",description:"blog decription",ogTitle:"blog ogtitle",ogDescription:"blog ogtitle Description",conicalurl:"conicalurl",plaintext:"blog plaintext"};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Z,{title:h?.title,description:h?.description,ogTitle:h?.ogTitle,ogDescription:h?.ogDescription,plaintext:h?.plaintext,conicalurl:h?.conicalurl}),s.jsx("section",{className:" dark:bg-gray-900 p3",children:(0,s.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",children:[(0,s.jsxs)("div",{className:"mx-auto max-w-screen-md text-center mb-8 lg:mb-12",children:[s.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white",children:"AutoClicker"}),s.jsx("p",{className:"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4",children:"A full-fledged autoclicker with two modes of autoclicking"})]}),s.jsx("div",{className:"grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10 p0",children:e.map((e,t)=>(0,s.jsxs)("div",{class:"flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg",children:[s.jsx("img",{src:e.imageUrl,alt:"img",className:"standard-image"}),s.jsx("div",{class:"flex justify-center items-baseline my-8",children:s.jsx("span",{class:"mr-2 text-5xl font-extrabold",dangerouslySetInnerHTML:{__html:e.input1}})}),s.jsx("p",{className:"font-light p4 sm:text-lg dark:text-gray-400",dangerouslySetInnerHTML:{__html:d(e.input1,15)}}),s.jsx(i.default,{href:`/BigBlog?id=${e.id}`,className:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Read More"})]},t))})]})})]})}},47514:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>o});let s=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Blog\page.js`),{__esModule:i,$$typeof:a}=s,o=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6088,337,7984],()=>r(29029));module.exports=s})();