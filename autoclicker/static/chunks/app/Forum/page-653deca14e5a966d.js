(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7657],{7999:function(e,t,i){Promise.resolve().then(i.bind(i,154))},7907:function(e,t,i){"use strict";var l=i(5313);i.o(l,"useRouter")&&i.d(t,{useRouter:function(){return l.useRouter}})},5601:function(e,t){"use strict";function i(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},154:function(e,t,i){"use strict";i.r(t);var l=i(3827),o=i(4090),n=i(7908);i(5161);var s=i(7907);i(8792),i(3411);var a=i(3061);t.default=()=>{let[e,t]=(0,o.useState)(!1),[i,r]=(0,o.useState)(!1),[d,c]=(0,o.useState)([{id:1,comment:"Looking for perfect screen capture but struggling with quality",label:"L"},{id:2,comment:"Looking for perfect screen capture but struggling with quality",label:"N"},{id:3,comment:"Looking for perfect screen capture but struggling with quality",label:"M"},{id:4,comment:"Looking for perfect screen capture but struggling with quality",label:"H"}]),[u,p]=(0,o.useState)([{id:1,operater:"Windows Support",threads:"86.1K",message:"301.7K",comment:"I DONT UNDERSTAND",time:"15 minutes ago",label:"L"},{id:2,operater:"Mac Support",threads:"86.2K",message:"302.9K",comment:"Effects through Logic to OBS",time:"15 minutes ago",label:"N"},{id:3,operater:"Linux Support",threads:"86.2K",message:"302.9K",comment:"Effects through Logic to OBS",time:"15 minutes ago",label:"M"}]),[g,h]=(0,o.useState)([{id:1,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Mac Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"},{id:2,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Windows Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"},{id:3,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Linux Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"},{id:4,label:"High CPU Usage/High Encoding/Taking too long to encode? Read this first!",avtar:"M",operater:"Linux Support",description:"Jan 6, 2015",description2:"dodgepong",point:1,point2:"742K"}]);(0,s.useRouter)(),(0,o.useEffect)(()=>{let e=localStorage.getItem("token");e?t(!0):""==e&&(localStorage.removeItem("token"),t(!1))},[]);let[x,m]=(0,o.useState)(!1),[f,b]=(0,o.useState)(null),[j,v]=(0,o.useState)(""),[y,S]=(0,o.useState)(""),[T,E]=(0,o.useState)(""),[N,w]=(0,o.useState)(""),[k,F]=(0,o.useState)([]),[B,M]=(0,o.useState)([]),[D,L]=(0,o.useState)([]);(0,o.useEffect)(()=>{_()},[]);let _=()=>{n.Z.get("http://65.2.172.195:8081/public/newpost").then(e=>{M(localStorage.getItem("uid")),F(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})},[R,C]=(0,o.useState)({firstname:"",lastname:"",contact:"",email:"",profession:"",bio:""});(0,o.useEffect)(()=>{H();let e=localStorage.getItem("uid");n.Z.get("http://65.2.172.195:8081/public/userdata/".concat(e)).then(e=>{console.log("Received data:",e.data),C(e.data)}).catch(e=>{console.log("Error:",e)})},[]);let K={};D.forEach(e=>{K[e.touid]=e.senderuname});let H=()=>{n.Z.get("http://65.2.172.195:8081/public/replypost").then(e=>{L(e.data)}).catch(e=>{console.log("err",e)})},[O,P]=(0,o.useState)(""),U={title:"Forum page",description:"Forum decription",ogTitle:"Forum ogtitle",ogDescription:"Forum ogtitle Description",conicalurl:"conicalurl",plaintext:"Forum plaintext"},I={mainBox:{padding:"30px"},tableBox:{width:"100%"},boxEndBox:{display:"flex",justifyContent:"center"},table1:{width:"80%"},table2:{width:"20%"},labelForum:{padding:"16px 10px"},tdTable:{padding:"16px 10px",fontSize:"16px"},tdTableFirst:{color:"blue",padding:"16px 10px",fontSize:"20px",fontWeight:"600",cursor:"pointer"},trSecond:{color:"white",background:"#162458"},forumTitle:{fontSize:"22px",color:"white",fontWeight:"600",paddingBottom:"10px"},labelCenter:{height:"40px",width:"40px",borderRadius:"50%",textAlign:"center",padding:"7px",border:"1px solid white"}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{title:null==U?void 0:U.title,description:null==U?void 0:U.description,ogTitle:null==U?void 0:U.ogTitle,ogDescription:null==U?void 0:U.ogDescription,plaintext:null==U?void 0:U.plaintext,conicalurl:null==U?void 0:U.conicalurl}),(0,l.jsxs)("div",{style:I.mainBox,className:"p3",children:[(0,l.jsx)("div",{children:(0,l.jsx)("div",{style:I.forumTitle,children:"Forum"})}),(0,l.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,l.jsx)("div",{style:I.table1,children:(0,l.jsx)("table",{style:I.tableBox,children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:"12",children:(0,l.jsx)("div",{style:I.labelForum,className:"labelForum",children:"MT Studio Support"})})}),u.map((e,t)=>(0,l.jsxs)("tr",{className:"trSecond",children:[(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:(0,l.jsx)("div",{children:(0,l.jsx)("i",{className:"far fa-comments",style:{fontSize:"30px"},"aria-hidden":"true"})})}),(0,l.jsx)("td",{style:I.tdTableFirst,children:e.operater}),(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:(0,l.jsx)("div",{style:I.boxEndBox,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"Threads"}),(0,l.jsx)("div",{children:e.threads})]})})}),(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:(0,l.jsx)("div",{style:I.boxEndBox,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"Messages"}),(0,l.jsx)("div",{children:e.message})]})})}),(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:(0,l.jsx)("div",{style:I.boxEndBox,children:(0,l.jsx)("div",{style:I.labelCenter,children:e.label})})}),(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:(0,l.jsx)("div",{style:I.boxEndBox,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:e.comment}),(0,l.jsx)("div",{children:e.time})]})})})]},t))]})})}),(0,l.jsx)("div",{style:I.table2,children:(0,l.jsx)("table",{style:I.tableBox,children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:"12",children:(0,l.jsx)("div",{style:I.labelForum,className:"labelForum",children:"Latest Post"})})}),d.map((e,t)=>(0,l.jsxs)("tr",{style:I.trSecond,children:[(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:(0,l.jsx)("div",{style:I.boxEndBox,children:(0,l.jsx)("div",{style:I.labelCenter,children:e.label})})}),(0,l.jsx)("td",{style:I.tdTable,className:"p4",children:e.comment})]},t))]})})})]})]})]})}},3061:function(e,t,i){"use strict";var l=i(3827);i(5601),t.Z=e=>{let{title:t,description:i,ogTitle:o,ogDescription:n,plaintext:s,conicalurl:a}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("head",{children:[(0,l.jsx)("meta",{property:"title",content:t||"Default Title"}),(0,l.jsx)("meta",{property:"description",content:i||"Default Title"}),(0,l.jsx)("meta",{property:"og:title",content:o||"Default Title"}),(0,l.jsx)("meta",{property:"og:description",content:n||"Default Description"}),(0,l.jsx)("meta",{name:"plaintext",content:s||""}),(0,l.jsx)("link",{rel:"canonical",href:a||"https://yourwebsite.com"})]})})}},5161:function(){}},function(e){e.O(0,[9461,8792,7908,2971,8069,1744],function(){return e(e.s=7999)}),_N_E=e.O()}]);