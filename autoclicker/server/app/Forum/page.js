(()=>{var e={};e.id=7657,e.ids=[7657],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},31376:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d});var i=r(50482),s=r(69108),o=r(62563),a=r.n(o),n=r(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["Forum",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15576)),"D:\\autoclicker_frontend\\src\\app\\Forum\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\Forum\\page.js"],p="/Forum/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/Forum/page",pathname:"/Forum",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},14810:(e,t,r)=>{Promise.resolve().then(r.bind(r,47956))},47956:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(95344),s=r(3729),o=r(53608);r(67630);var a=r(8428);r(56506),r(74314);var n=r(72119);let l=()=>{let[e,t]=(0,s.useState)(!1),[r,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)([{id:1,comment:"Looking for perfect screen capture but struggling with quality",label:"L"},{id:2,comment:"Looking for perfect screen capture but struggling with quality",label:"N"},{id:3,comment:"Looking for perfect screen capture but struggling with quality",label:"M"},{id:4,comment:"Looking for perfect screen capture but struggling with quality",label:"H"}]),[p,u]=(0,s.useState)([{id:1,operater:"Windows Support",threads:"86.1K",message:"301.7K",comment:"I DONT UNDERSTAND",time:"15 minutes ago",label:"L"},{id:2,operater:"Mac Support",threads:"86.2K",message:"302.9K",comment:"Effects through Logic to OBS",time:"15 minutes ago",label:"N"},{id:3,operater:"Linux Support",threads:"86.2K",message:"302.9K",comment:"Effects through Logic to OBS",time:"15 minutes ago",label:"M"}]),[x,g]=(0,s.useState)([{id:1,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Mac Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"},{id:2,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Windows Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"},{id:3,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Linux Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"},{id:4,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Linux Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"}]);(0,a.useRouter)(),(0,s.useEffect)(()=>{let e=localStorage.getItem("token");e?t(!0):""==e&&(localStorage.removeItem("token"),t(!1))},[]);let[h,m]=(0,s.useState)(!1),[b,f]=(0,s.useState)(null),[j,v]=(0,s.useState)(""),[y,S]=(0,s.useState)(""),[q,T]=(0,s.useState)(""),[E,P]=(0,s.useState)(""),[w,F]=(0,s.useState)([]),[_,k]=(0,s.useState)([]),[N,M]=(0,s.useState)([]);(0,s.useEffect)(()=>{B()},[]);let B=()=>{o.Z.get("http://65.2.172.195:8081/public/newpost").then(e=>{k(localStorage.getItem("uid")),F(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})},[L,D]=(0,s.useState)({firstname:"",lastname:"",contact:"",email:"",profession:"",bio:""});(0,s.useEffect)(()=>{K();let e=localStorage.getItem("uid");o.Z.get(`http://65.2.172.195:8081/public/userdata/${e}`).then(e=>{console.log("Received data:",e.data),D(e.data)}).catch(e=>{console.log("Error:",e)})},[]);let C={};N.forEach(e=>{C[e.touid]=e.senderuname});let K=()=>{o.Z.get("http://65.2.172.195:8081/public/replypost").then(e=>{M(e.data)}).catch(e=>{console.log("err",e)})},[H,R]=(0,s.useState)(""),U={title:"Forum page",description:"Forum decription",ogTitle:"Forum ogtitle",ogDescription:"Forum ogtitle Description",conicalurl:"conicalurl",plaintext:"Forum plaintext"},z={mainBox:{padding:"30px"},tableBox:{width:"100%"},boxEndBox:{display:"flex",justifyContent:"center"},table1:{width:"80%"},table2:{width:"20%"},labelForum:{padding:"16px 10px"},tdTable:{padding:"16px 10px",fontSize:"16px"},tdTableFirst:{color:"blue",padding:"16px 10px",fontSize:"20px",fontWeight:"600",cursor:"pointer"},trSecond:{color:"white",background:"#162458"},forumTitle:{fontSize:"22px",color:"white",fontWeight:"600",paddingBottom:"10px"},labelCenter:{height:"40px",width:"40px",borderRadius:"50%",textAlign:"center",padding:"7px",border:"1px solid white"}};return(0,i.jsxs)(i.Fragment,{children:[i.jsx(n.Z,{title:U?.title,description:U?.description,ogTitle:U?.ogTitle,ogDescription:U?.ogDescription,plaintext:U?.plaintext,conicalurl:U?.conicalurl}),(0,i.jsxs)("div",{style:z.mainBox,className:"p3",children:[i.jsx("div",{children:i.jsx("div",{style:z.forumTitle,children:"Forum"})}),(0,i.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[i.jsx("div",{style:z.table1,children:i.jsx("table",{style:z.tableBox,children:(0,i.jsxs)("tbody",{children:[i.jsx("tr",{children:i.jsx("td",{colSpan:"12",children:i.jsx("div",{style:z.labelForum,className:"labelForum",children:"MT Studio Support"})})}),p.map((e,t)=>(0,i.jsxs)("tr",{className:"trSecond",children:[i.jsx("td",{style:z.tdTable,className:"p4",children:i.jsx("div",{children:i.jsx("i",{className:"far fa-comments",style:{fontSize:"30px"},"aria-hidden":"true"})})}),i.jsx("td",{style:z.tdTableFirst,children:e.operater}),i.jsx("td",{style:z.tdTable,className:"p4",children:i.jsx("div",{style:z.boxEndBox,children:(0,i.jsxs)("div",{children:[i.jsx("div",{children:"Threads"}),i.jsx("div",{children:e.threads})]})})}),i.jsx("td",{style:z.tdTable,className:"p4",children:i.jsx("div",{style:z.boxEndBox,children:(0,i.jsxs)("div",{children:[i.jsx("div",{children:"Messages"}),i.jsx("div",{children:e.message})]})})}),i.jsx("td",{style:z.tdTable,className:"p4",children:i.jsx("div",{style:z.boxEndBox,children:i.jsx("div",{style:z.labelCenter,children:e.label})})}),i.jsx("td",{style:z.tdTable,className:"p4",children:i.jsx("div",{style:z.boxEndBox,children:(0,i.jsxs)("div",{children:[i.jsx("div",{children:e.comment}),i.jsx("div",{children:e.time})]})})})]},t))]})})}),i.jsx("div",{style:z.table2,children:i.jsx("table",{style:z.tableBox,children:(0,i.jsxs)("tbody",{children:[i.jsx("tr",{children:i.jsx("td",{colSpan:"12",children:i.jsx("div",{style:z.labelForum,className:"labelForum",children:"Latest Post"})})}),d.map((e,t)=>(0,i.jsxs)("tr",{style:z.trSecond,children:[i.jsx("td",{style:z.tdTable,className:"p4",children:i.jsx("div",{style:z.boxEndBox,children:i.jsx("div",{style:z.labelCenter,children:e.label})})}),i.jsx("td",{style:z.tdTable,className:"p4",children:e.comment})]},t))]})})})]})]})]})}},15576:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>s,default:()=>a});let i=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Forum\page.js`),{__esModule:s,$$typeof:o}=i,a=i.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67630:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[1638,6088,337,4314,7984],()=>r(31376));module.exports=i})();