(()=>{var e={};e.id=1106,e.ids=[1106],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},25958:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>i});var a=t(50482),s=t(69108),l=t(62563),o=t.n(l),n=t(68300),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(r,d);let i=["",{children:["Admin",{children:["Download",{children:["Procedure",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,70687)),"D:\\autoclicker_frontend\\src\\app\\Admin\\Download\\Procedure\\page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\Admin\\Download\\Procedure\\page.js"],u="/Admin/Download/Procedure/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/Admin/Download/Procedure/page",pathname:"/Admin/Download/Procedure",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},99142:(e,r,t)=>{Promise.resolve().then(t.bind(t,66715))},15532:(e,r,t)=>{"use strict";r.FT=n;var a=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o(r);if(t&&t.has(e))return t.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var n=s?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(a,l,n):a[l]=e[l]}return a.default=e,t&&t.set(e,a),a}(t(3729)),s=t(95344);let l=["as","disabled"];function o(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:r})(e)}function n({tagName:e,disabled:r,href:t,target:a,rel:s,role:l,onClick:o,tabIndex:n=0,type:d}){e||(e=null!=t||null!=a||null!=s?"a":"button");let i={tagName:e};if("button"===e)return[{type:d||"button",disabled:r},i];let c=a=>{var s;if(!r&&("a"!==e||(s=t)&&"#"!==s.trim())||a.preventDefault(),r){a.stopPropagation();return}null==o||o(a)};return"a"===e&&(t||(t="#"),r&&(t=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:r?void 0:n,href:t,target:"a"===e?a:void 0,"aria-disabled":r||void 0,rel:"a"===e?s:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},i]}a.forwardRef((e,r)=>{let{as:t,disabled:a}=e,o=function(e,r){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,l),[d,{tagName:i}]=n(Object.assign({tagName:t,disabled:a},o));return(0,s.jsx)(i,Object.assign({},o,d,{ref:r}))}).displayName="Button"},78154:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var a=t(34132),s=t.n(a),l=t(3729),o=t(15532),n=t(70136),d=t(95344);let i=l.forwardRef(({as:e,bsPrefix:r,variant:t="primary",size:a,active:l=!1,disabled:i=!1,className:c,...u},m)=>{let p=(0,n.vE)(r,"btn"),[x,{tagName:f}]=(0,o.FT)({tagName:e,disabled:i,...u});return(0,d.jsx)(f,{...x,...u,ref:m,disabled:i,className:s()(c,p,l&&"active",t&&`${p}-${t}`,a&&`${p}-${a}`,u.href&&i&&"disabled")})});i.displayName="Button";let c=i},98287:(e,r,t)=>{"use strict";t.d(r,{Z:()=>w});var a=t(34132),s=t.n(a),l=t(3729),o=t(70136),n=t(95344);let d=l.forwardRef(({className:e,bsPrefix:r,as:t="div",...a},l)=>(r=(0,o.vE)(r,"card-body"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));d.displayName="CardBody";let i=l.forwardRef(({className:e,bsPrefix:r,as:t="div",...a},l)=>(r=(0,o.vE)(r,"card-footer"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));i.displayName="CardFooter";let c=l.createContext(null);c.displayName="CardHeaderContext";let u=l.forwardRef(({bsPrefix:e,className:r,as:t="div",...a},d)=>{let i=(0,o.vE)(e,"card-header"),u=(0,l.useMemo)(()=>({cardHeaderBsPrefix:i}),[i]);return(0,n.jsx)(c.Provider,{value:u,children:(0,n.jsx)(t,{ref:d,...a,className:s()(r,i)})})});u.displayName="CardHeader";let m=l.forwardRef(({bsPrefix:e,className:r,variant:t,as:a="img",...l},d)=>{let i=(0,o.vE)(e,"card-img");return(0,n.jsx)(a,{ref:d,className:s()(t?`${i}-${t}`:i,r),...l})});m.displayName="CardImg";let p=l.forwardRef(({className:e,bsPrefix:r,as:t="div",...a},l)=>(r=(0,o.vE)(r,"card-img-overlay"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));p.displayName="CardImgOverlay";let x=l.forwardRef(({className:e,bsPrefix:r,as:t="a",...a},l)=>(r=(0,o.vE)(r,"card-link"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));x.displayName="CardLink";let f=e=>l.forwardRef((r,t)=>(0,n.jsx)("div",{...r,ref:t,className:s()(r.className,e)})),g=f("h6"),h=l.forwardRef(({className:e,bsPrefix:r,as:t=g,...a},l)=>(r=(0,o.vE)(r,"card-subtitle"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));h.displayName="CardSubtitle";let b=l.forwardRef(({className:e,bsPrefix:r,as:t="p",...a},l)=>(r=(0,o.vE)(r,"card-text"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));b.displayName="CardText";let v=f("h5"),j=l.forwardRef(({className:e,bsPrefix:r,as:t=v,...a},l)=>(r=(0,o.vE)(r,"card-title"),(0,n.jsx)(t,{ref:l,className:s()(e,r),...a})));j.displayName="CardTitle";let y=l.forwardRef(({bsPrefix:e,className:r,bg:t,text:a,border:l,body:i=!1,children:c,as:u="div",...m},p)=>{let x=(0,o.vE)(e,"card");return(0,n.jsx)(u,{ref:p,...m,className:s()(r,x,t&&`bg-${t}`,a&&`text-${a}`,l&&`border-${l}`),children:i?(0,n.jsx)(d,{children:c}):c})});y.displayName="Card";let w=Object.assign(y,{Img:m,Title:j,Subtitle:h,Body:d,Link:x,Text:b,Header:u,Footer:i,ImgOverlay:p})},21204:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var a=t(34132),s=t.n(a),l=t(3729),o=t(70136),n=t(95344);let d=l.forwardRef(({bsPrefix:e,className:r,as:t="div",...a},l)=>{let d=(0,o.vE)(e,"row"),i=(0,o.pi)(),c=(0,o.zG)(),u=`${d}-cols`,m=[];return i.forEach(e=>{let r;let t=a[e];delete a[e],null!=t&&"object"==typeof t?{cols:r}=t:r=t;let s=e!==c?`-${e}`:"";null!=r&&m.push(`${u}${s}-${r}`)}),(0,n.jsx)(t,{ref:l,...a,className:s()(r,d,...m)})});d.displayName="Row";let i=d},66715:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>f});var a=t(95344),s=t(3729),l=t(53608),o=t(74314),n=t.n(o),d=t(98287),i=t(21204),c=t(95209),u=t(48152),m=t(78154),p=t(76379);let x=(0,t(97273).default)(async()=>{},{loadableGenerated:{modules:["D:\\autoclicker_frontend\\src\\app\\Admin\\Download\\Procedure\\page.js -> jodit-react"]},ssr:!1}),f=()=>{let[e,r]=(0,s.useState)(""),[t,o]=(0,s.useState)(""),[f,g]=(0,s.useState)(""),[h,b]=(0,s.useState)([]),v=async r=>{r.preventDefault();try{let r=localStorage.getItem("token");await l.Z.post("http://65.2.172.195:8081/admin/instprocedure",{id:f,items:t,selectOs:e},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}}),n().fire({title:"",icon:"success"}),o(""),j()}catch(e){console.error("Error saving item:",e),n().fire({title:"something wrong",icon:"warning"})}};(0,s.useEffect)(()=>{j()},[]),(0,s.useEffect)(()=>{let r=async()=>{await j()};""!==e&&r()},[e]);let j=()=>{l.Z.get(`http://65.2.172.195:8081/public/instprocedure/${e}`).then(e=>{b(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})};async function y(e){try{let r=localStorage.getItem("token");if(!(await fetch(`http://65.2.172.195:8081/admin/deleteprocedure/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({id:e})})).ok)throw Error("Failed to delete item");console.log("Item deleted successfully"),j()}catch(e){console.error("Error deleting item:",e.message)}}async function w(e){try{let r=await l.Z.get(`http://65.2.172.195:8081/public/instproceduresedit/${e}`),{id:t,items:a}=r.data;g(t),o(a),console.log("dataediiitttnewww...",r.data)}catch(e){console.log("err",e)}}return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[a.jsx(p.default,{}),a.jsx("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:a.jsx("div",{class:"p-2 md:p-4",children:(0,a.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[a.jsx("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),a.jsx("div",{className:"grid max-w-2xl mx-auto mt-8",children:a.jsx("div",{className:"grid max-w-2xl mx-auto mt-8",children:a.jsx("div",{className:"max-w-md mx-auto",children:a.jsx(d.Z,{className:"mb-8",children:a.jsx(d.Z.Body,{children:(0,a.jsxs)(i.Z,{className:"mb-4",children:[a.jsx(c.Z,{xl:3,lg:4,md:12,xs:12,children:a.jsx("div",{className:"mb-4 mb-lg-0",children:a.jsx("h4",{className:"mb-1 text-lg font-medium",children:"Downloading and Installing Procedure"})})}),a.jsx(c.Z,{xl:9,lg:8,md:12,xs:12,children:a.jsx(d.Z,{children:(0,a.jsxs)(d.Z.Body,{children:[a.jsx("h4",{className:"mb-3 text-lg font-semibold",children:"Add Installing Procedure"}),a.jsx(u.Z,{onSubmit:v,children:(0,a.jsxs)(i.Z,{className:"row g-3 align-items-center",children:[(0,a.jsxs)(u.Z.Group,{controlId:"formInput3",className:"col-md-4",children:[a.jsx(u.Z.Label,{className:"text-sm font-medium",children:"Select Operating System"}),(0,a.jsxs)(u.Z.Control,{as:"select",value:e,onChange:e=>{r(e.target.value)},className:"border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[a.jsx("option",{children:"Click Here"}),a.jsx("option",{value:"1",children:"Windows"}),a.jsx("option",{value:"2",children:"MacOs"}),a.jsx("option",{value:"3",children:"Linux"}),a.jsx("option",{value:"4",children:"Android"}),a.jsx("option",{value:"5",children:"iOS"})]})]}),a.jsx(c.Z,{md:6,xxl:8,className:"mt-3 mb-3 mt-md-3",children:a.jsx(x,{id:"name",value:t,onChange:e=>o(e),required:!0})}),a.jsx(c.Z,{md:2,xxl:2,children:a.jsx(m.Z,{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Post"})})]})}),a.jsx("hr",{className:"my-4 border-t border-gray-300 dark:border-gray-600"}),a.jsx("h4",{className:"mb-3 text-lg font-semibold",children:"Installing Procedure"}),a.jsx("div",{children:h.map((e,r)=>(0,a.jsxs)("div",{className:"mb-4 border-double border-4 border-indigo-600 ...",children:[a.jsx("p",{className:"text-gray-700 dark:text-gray-300",dangerouslySetInnerHTML:{__html:e.items}}),a.jsx("button",{type:"Delete",id:"del",onClick:()=>y(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Delete"}),a.jsx("button",{type:"Edit",id:"edit",onClick:()=>w(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Edit"})]}))})]})})})]})})})})})})]})})})]})})}},70687:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>l,__esModule:()=>s,default:()=>o});let a=(0,t(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Admin\Download\Procedure\page.js`),{__esModule:s,$$typeof:l}=a,o=a.default}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[1638,6088,337,4314,8152,7984,7752],()=>t(25958));module.exports=a})();