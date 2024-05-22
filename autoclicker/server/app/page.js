(()=>{var e={};e.id=1931,e.ids=[1931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},124:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(50482),l=r(69108),a=r(62563),i=r.n(a),n=r(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,37465)),"D:\\autoclicker_frontend\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\autoclicker_frontend\\src\\app\\page.js"],x="/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},58579:(e,t,r)=>{Promise.resolve().then(r.bind(r,31782))},31782:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(95344),l=r(8428),a=r(3729),i=r(74314),n=r.n(i);let o=()=>{let[e,t]=(0,a.useState)(null),[r,s]=(0,a.useState)(0),[l,i]=(0,a.useState)(""),[o,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=localStorage.getItem("token");c(!!e);let r=localStorage.getItem("clickToken");r?t(r):e||fetch("http://65.2.172.195:8081/public/token").then(e=>e?.text()).then(e=>{localStorage.setItem("clickToken",e),t(e)}).catch(e=>console.error("Error fetching token:",e))},[]),{handleClick:()=>{if(!e&&!o){console.error("No token found.");return}let t=o?{Authorization:`Bearer ${localStorage.getItem("token")}`}:{"Content-Type":"text/plain"};fetch(`http://65.2.172.195:8081${o?"/public/tokenss":"/public/tokens"}`,{method:"POST",headers:t,body:o?void 0:e}).then(e=>e.json()).then(e=>{s(e.clickCount),i(e.message),o||"Free clicks exhausted. Sign-in required."!==e.message||n().fire({title:"Attention!",text:"Your free clicks have been exhausted. Please sign in to continue.",icon:"warning",confirmButtonText:"OK"})}).catch(e=>console.error("Error handling click:",e))},clickCount:r,message:l}};var c=r(53608),d=r(56506),x=r(72119);let u=()=>{let[e,t]=(0,a.useState)(""),[r,i]=(0,a.useState)([]),[n,u]=(0,a.useState)([]),[m,p]=(0,a.useState)([]),{handleClick:h,clickCount:g,message:f}=o();(0,a.useEffect)(()=>{y(),w(),k()},[]);let[b,v]=(0,a.useState)([]),j=b.map((e,t)=>({title:e.question||"Default Title",description:e.answers||"Default Description",ogTitle:e.ogTitle||"Default OG Title",ogDescription:e.ogDescription||"Default OG Description",conicalurl:e.conicalurl||"https://example.com",plaintext:e.plaintext||"Default Plaintext"})),w=()=>{c.Z.get("http://65.2.172.195:8081/public/featurebox").then(e=>{u(e.data)}).catch(e=>{console.log("err",e)})},y=()=>{c.Z.get("http://65.2.172.195:8081/public/items").then(e=>{i(e.data)}).catch(e=>{console.log("err",e)})},k=()=>{c.Z.get("http://65.2.172.195:8081/public/questionanswer").then(e=>{p(e.data)}).catch(e=>{console.log("err",e)})};(0,a.useEffect)(()=>{fetch("http://65.2.172.195:8081/public/image/1").then(e=>e.blob()).then(e=>{t(URL.createObjectURL(e))}).catch(e=>console.error("Error fetching image:",e))},[]);let[N,_]=(0,a.useState)(0),F=["./windows.svg","./apple.svg","./chrome.svg","./linux.svg"];(0,a.useEffect)(()=>{let e=setInterval(()=>{_(e=>(e+1)%F.length)},2e3);return()=>clearInterval(e)},[]);let[S,T]=(0,a.useState)([]);(0,a.useEffect)(()=>{q()},[]);let q=()=>{c.Z.get("http://65.2.172.195:8081/public/whatmakes").then(e=>{T(e.data)}).catch(e=>{console.log("err",e)})},[M,E]=(0,a.useState)([]);(0,a.useEffect)(()=>{P()},[]);let P=()=>{c.Z.get("http://65.2.172.195:8081/public/newsbox").then(e=>{let t=e.data.map(e=>({...e,imageUrl:`data:image/jpeg;base64,${e.input3}`}));E(t),console.log("Processed data:",t)}).catch(e=>{console.log("Error fetching data:",e)})};(0,l.useRouter)();let[C,D]=(0,a.useState)([]);(0,a.useEffect)(()=>{A()},[]);let A=()=>{c.Z.get("http://65.2.172.195:8081/public/topvideo").then(e=>{D(e.data)}).catch(e=>{console.log("err",e)})},L=(e,t)=>{let r=e.split(" ");return r.length>t?r.slice(0,t).join(" ")+"...":e};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(x.Z,{title:j[0]?.title,description:j[0]?.description,ogTitle:j[0]?.ogTitle,ogDescription:j[0]?.ogDescription,plaintext:j[0]?.plaintext,conicalurl:j[0]?.conicalurl}),s.jsx("div",{className:" p4 p0 ",children:(0,s.jsxs)("section",{className:"relative overflow-hidden",children:[s.jsx("div",{children:s.jsx("div",{className:"w-full m-auto relative px-3 py-10 md:py-20 md:px-20 mx-auto max-w-7xl",children:s.jsx("div",{className:"max-w-screen-lg mx-auto",children:s.jsx("div",{className:"flex items-center",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto text-center",children:[s.jsx("h1",{className:"text-slate-700  mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[60px]",children:(0,s.jsxs)("span",{className:"text-[#1C2B71] p1",children:[" ","MT Auto Clicker"," "]})}),(0,s.jsxs)("p",{className:"mb-4 md:mb-8 md:text-xl py-6",children:[" ","Auto Clicker by MTAutoClicker.com: Streamline tasks with features like auto-clicking, scrolling, swiping, form-filling, hotkeys, zoom, screen capture, and more. Enhance efficiency and productivity effortlessly."," "]}),s.jsx(d.default,{href:"/Download",className:"w-full flex justify-center drop-shadow-2xl","aria-label":"download",children:(0,s.jsxs)("button",{type:"button",className:"text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2",children:[s.jsx("img",{src:F[N],alt:"Download",className:"w-6 h-6 inline-block mr-2"}),"Download"]})})]})})})})}),(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative md:py-20 p-5",children:[s.jsx("h2",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"Work Smarter, Not Harder with MT"}),(0,s.jsxs)("div",{hidden:!0,children:[s.jsx("button",{onClick:h,children:"Click me!"}),f&&s.jsx("p",{children:f}),(0,s.jsxs)("p",{children:["Clicks: ",g]})]}),s.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:(0,s.jsxs)("div",{children:[s.jsx("div",{className:"col-span- bg-center bg-contain bg-no-repeat scale-105 h-[500px]",style:{backgroundImage:`url('${e}')`}}),s.jsx("p",{className:"text-lg",children:"MT Auto Clicker is a user-friendly tool designed to automate your multiple tasks with a bunch of features. Some of the features are as follows:"}),s.jsx("p",{className:"py-5",children:"Features"}),s.jsx("section",{className:"space-y-3 md:space-y-3 text-slate-350 font-medium",children:r.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-start space-x-5 relative",children:[s.jsx("div",{className:"absolute left-0 w-6 h-6 bg-[#6366F1] rounded-full text-black flex items-center justify-center font-bold",children:s.jsx("div",{className:"w-4 h-4 text-white",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{width:"inherit",height:"inherit"},children:s.jsx("path",{fill:"currentColor",d:"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41L4.157 8.5z"})})})}),s.jsx("p",{className:"pl-4",dangerouslySetInnerHTML:{__html:e.items}})]},t))})]})})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative pt-20",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"Features of MT Auto clicker"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10",children:n.map((e,t)=>(0,s.jsxs)("div",{className:"p-5 space-y-2 md:space-y-4 p4 p0 dark:hover:bg-[#0C1633] hover:bg-[#0C1633] group duration-100 cursor-pointer rounded-xl flex flex-col items-center drop-shadow-[0_7px_29px_rgba(0,0,0,0.3)]",children:[s.jsx("div",{className:"svg w-12 md:w-16 text-[#0795FF]",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",style:{width:"inherit",height:"inherit"},children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),s.jsx("h3",{className:"text-xl font-bold text-center group-hover:text-slate-300",dangerouslySetInnerHTML:{__html:e.input1}}),s.jsx("p",{className:"md:text-base text-center group-hover:text-slate-300",dangerouslySetInnerHTML:{__html:e.input2}})]},t))})]}),(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative pt-20",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"Latest from MT Blog"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10",children:M.slice(-3).map((e,t)=>(0,s.jsxs)("div",{class:"flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg",children:[s.jsx("img",{src:e.imageUrl,alt:"img",className:"standard-image"}),s.jsx("div",{class:"flex justify-center items-baseline my-8",children:s.jsx("span",{class:"mr-2 text-5xl font-extrabold",dangerouslySetInnerHTML:{__html:e.input1}})}),s.jsx("p",{className:"font-light p4 sm:text-lg dark:text-gray-400",dangerouslySetInnerHTML:{__html:L(e.input2,25)}}),s.jsx(d.default,{href:`/BigBlog?id=${e.id}`,className:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Read More"})]},t))}),s.jsx("center",{children:s.jsx(d.default,{href:"/Blog",className:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Explore All"})})]}),(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative pt-20",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"Top Videos from Our Channel"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10",children:C.slice(-3).map((e,t)=>s.jsx("iframe",{width:"388",height:"315",src:e.items,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,style:{borderRadius:"28px",border:"2px solid blue"}},t))}),s.jsx("center",{children:s.jsx(d.default,{href:"https://www.youtube.com/@OneMediaPlus",className:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Explore All"})})]}),(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative py-20",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"What makes MT Auto Clicker Different?"}),s.jsx("div",{className:"space-y-8 pt-5",children:Array.isArray(S)&&S.map((e,t)=>s.jsx("p",{dangerouslySetInnerHTML:{__html:e.items}},t))})]}),(0,s.jsxs)("div",{className:"mx-auto max-w-screen-xl relative select-none",children:[s.jsx("h1",{className:"pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold",children:"Frequently Asked Questions?"}),s.jsx("div",{className:"max-w-screen-xl py-5",children:s.jsx("div",{className:"space-y-4",children:m.slice(-4).map((e,t)=>(0,s.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",children:[(0,s.jsxs)("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p3 bg-[#F3F4F6] dark:bg-[#0C1633] p-4",children:[s.jsx("h2",{className:"font-medium",dangerouslySetInnerHTML:{__html:e.question}}),s.jsx("svg",{className:"h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})})]}),(0,s.jsxs)("p",{className:"mt-4 px-4 leading-relaxed",children:[s.jsx("strong",{children:" Ans."}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e.answers}})]})]}))})})]})]})]})})]})}},37465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>l,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\page.js`),{__esModule:l,$$typeof:a}=s,i=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(70337);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6088,337,4314,7984],()=>r(124));module.exports=s})();