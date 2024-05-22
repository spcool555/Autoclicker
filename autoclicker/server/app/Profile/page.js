(()=>{var e={};e.id=614,e.ids=[614],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},75073:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var o=r(50482),i=r(69108),s=r(62563),l=r.n(s),n=r(68300),a={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>n[e]);r.d(t,a);let d=["",{children:["Profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,96075)),"D:\\autoclicker_frontend\\src\\app\\Profile\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\Profile\\page.js"],u="/Profile/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/Profile/page",pathname:"/Profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},95043:(e,t,r)=>{Promise.resolve().then(r.bind(r,7122))},7122:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var o=r(95344),i=r(89410),s=r(8428),l=r(3729),n=r(53608),a=r(74314),d=r.n(a),c=r(56506);let u=()=>{let[e,t]=(0,l.useState)(""),r=(0,s.useRouter)(),[a,u]=(0,l.useState)({firstname:"",lastname:"",contact:"",email:"",profession:"",bio:""}),m=()=>{let e=localStorage.getItem("uid");fetch(`http://65.2.172.195:8081/public/profileimage/${e}`).then(e=>e.blob()).then(e=>{t(URL.createObjectURL(e))}).catch(e=>console.error("Error fetching image:",e))};(0,l.useEffect)(()=>{m(),localStorage.getItem("token")||r.push("/")},[r]);let p=async e=>{let t=e.target.files[0];if(!t)return;let r=new FormData;r.append("file",t);let o=localStorage.getItem("uid"),i=localStorage.getItem("token");try{(await fetch(`http://65.2.172.195:8081/adminuser/profileupload/${o}`,{method:"POST",body:r,headers:{Authorization:`Bearer ${i}`}})).ok?(console.log("Upload successful"),m()):console.error("Upload failed")}catch(e){console.error("Error:",e)}},g=e=>{let{id:t,value:r}=e.target;u(e=>({...e,[t]:r}))};return(0,l.useEffect)(()=>{let e=localStorage.getItem("uid");n.Z.get(`http://65.2.172.195:8081/public/userdata/${e}`).then(e=>{console.log("Received data:",e.data),u(e.data)}).catch(e=>{console.log("Error:",e)})},[]),o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{class:"w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row p0 p4 text-[#161931]",children:[o.jsx("aside",{class:"hidden py-4 md:w-1/3 lg:w-1/4 md:block",children:(0,o.jsxs)("div",{class:"sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12",children:[o.jsx("h2",{class:"pl-3 mb-4 text-2xl font-semibold",children:"Settings"}),o.jsx("a",{href:"#",class:"flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full",children:"Pubic Profile"}),o.jsx("a",{href:"#",class:"flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full hover:bg-white",children:"Current Plan"}),o.jsx("a",{href:"#",class:"flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full hover:bg-white ",children:"Notifications"}),a&&"ADMIN"===a.role&&o.jsx(c.default,{href:"/Admin",className:"flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full hover:bg-white",children:"Admin Panel"})]})}),o.jsx("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:o.jsx("div",{class:"p-2 md:p-4",children:(0,o.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[o.jsx("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Public Profile"}),(0,o.jsxs)("div",{class:"grid max-w-2xl mx-auto mt-8",children:[(0,o.jsxs)("div",{class:"flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0",children:[o.jsx(i.default,{className:"object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500",src:e,alt:"Bordered avatar",width:40,height:40}),o.jsx("div",{class:"flex flex-col space-y-5 sm:ml-8",children:(0,o.jsxs)("label",{htmlFor:"file-upload",className:"py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 cursor-pointer",children:["Change picture",o.jsx("input",{id:"file-upload",type:"file",onChange:p,className:"hidden"})]})})]}),o.jsx("div",{class:"items-center mt-8 sm:mt-14 text-[#202142]",children:(0,o.jsxs)("form",{onSubmit:e=>{let t=localStorage.getItem("uid"),r=localStorage.getItem("token");e.preventDefault(),n.Z.post(`http://65.2.172.195:8081/adminuser/saveprofiledata/${t}`,a,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}}).then(e=>{console.log("Response:",e),d().fire({icon:"success",title:"Form data saved successfully",showConfirmButton:!1,timer:1500})}).catch(e=>{console.error("Error:",e),d().fire({icon:"error",title:"Oops...",text:"There was a problem saving the form data!",footer:"Please try again later"})})},children:[(0,o.jsxs)("div",{class:"flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6",children:[(0,o.jsxs)("div",{class:"w-full",children:[o.jsx("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Your first name"}),o.jsx("input",{type:"text",id:"firstname",value:a.firstname,onChange:g,class:"bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ",placeholder:"Your first name",required:!0})]}),(0,o.jsxs)("div",{class:"w-full",children:[o.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Your last name"}),o.jsx("input",{type:"text",id:"lastname",value:a.lastname,onChange:g,class:"bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ",placeholder:"Your last name",required:!0})]})]}),(0,o.jsxs)("div",{class:"mb-2 sm:mb-6",children:[o.jsx("label",{for:"contact",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Your Contact No"}),o.jsx("input",{type:"number",id:"contact",value:a.contact,onChange:g,onInput:e=>{e.target.value.length>10&&(e.target.value=e.target.value.slice(0,10))},class:"bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5",placeholder:"Your contact number",required:!0})]}),(0,o.jsxs)("div",{class:"mb-2 sm:mb-6",children:[o.jsx("label",{for:"email",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Your Email"}),o.jsx("input",{type:"email",id:"email",value:a.email,onChange:g,class:"bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ",placeholder:"your.email@mail.com",required:!0,readOnly:!0})]}),(0,o.jsxs)("div",{class:"mb-2 sm:mb-6",children:[o.jsx("label",{for:"refferal",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Your Refferal Code"}),o.jsx("input",{type:"refferal",id:"refferal",value:a.refferalcode,class:"bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ",placeholder:"your.email@mail.com",required:!0,readOnly:!0})]}),(0,o.jsxs)("div",{class:"mb-2 sm:mb-6",children:[o.jsx("label",{for:"profession",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Profession"}),o.jsx("input",{type:"text",id:"profession",value:a.profession,onChange:g,class:"bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ",placeholder:"your profession",required:!0})]}),(0,o.jsxs)("div",{class:"mb-6",children:[o.jsx("label",{for:"message",class:"block mb-2 text-sm font-medium text-indigo-900 p4",children:"Bio"}),o.jsx("textarea",{id:"bio",rows:"4",value:a.bio,onChange:g,class:"block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 ",placeholder:"Write your bio here..."})]}),o.jsx("div",{class:"flex justify-end",children:o.jsx("button",{type:"submit",class:"text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800",children:"Save"})})]})})]})]})})})]})})}},96075:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>s,__esModule:()=>i,default:()=>l});let o=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Profile\page.js`),{__esModule:i,$$typeof:s}=o,l=o.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[1638,6088,337,4314,7984],()=>r(75073));module.exports=o})();