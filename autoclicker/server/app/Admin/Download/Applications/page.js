(()=>{var e={};e.id=7564,e.ids=[7564],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},88307:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=r(50482),s=r(69108),l=r(62563),o=r.n(l),i=r(68300),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(t,n);let d=["",{children:["Admin",{children:["Download",{children:["Applications",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15224)),"D:\\autoclicker_frontend\\src\\app\\Admin\\Download\\Applications\\page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\Admin\\Download\\Applications\\page.js"],u="/Admin/Download/Applications/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/Admin/Download/Applications/page",pathname:"/Admin/Download/Applications",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},33921:(e,t,r)=>{Promise.resolve().then(r.bind(r,88242))},15532:(e,t,r)=>{"use strict";t.FT=i;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(3729)),s=r(95344);let l=["as","disabled"];function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i({tagName:e,disabled:t,href:r,target:a,rel:s,role:l,onClick:o,tabIndex:i=0,type:n}){e||(e=null!=r||null!=a||null!=s?"a":"button");let d={tagName:e};if("button"===e)return[{type:n||"button",disabled:t},d];let c=a=>{var s;if(!t&&("a"!==e||(s=r)&&"#"!==s.trim())||a.preventDefault(),t){a.stopPropagation();return}null==o||o(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?s:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},d]}a.forwardRef((e,t)=>{let{as:r,disabled:a}=e,o=function(e,t){if(null==e)return{};var r,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,l),[n,{tagName:d}]=i(Object.assign({tagName:r,disabled:a},o));return(0,s.jsx)(d,Object.assign({},o,n,{ref:t}))}).displayName="Button"},78154:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(34132),s=r.n(a),l=r(3729),o=r(15532),i=r(70136),n=r(95344);let d=l.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:a,active:l=!1,disabled:d=!1,className:c,...u},p)=>{let m=(0,i.vE)(t,"btn"),[x,{tagName:f}]=(0,o.FT)({tagName:e,disabled:d,...u});return(0,n.jsx)(f,{...x,...u,ref:p,disabled:d,className:s()(c,m,l&&"active",r&&`${m}-${r}`,a&&`${m}-${a}`,u.href&&d&&"disabled")})});d.displayName="Button";let c=d},98287:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var a=r(34132),s=r.n(a),l=r(3729),o=r(70136),i=r(95344);let n=l.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},l)=>(t=(0,o.vE)(t,"card-body"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));n.displayName="CardBody";let d=l.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},l)=>(t=(0,o.vE)(t,"card-footer"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));d.displayName="CardFooter";let c=l.createContext(null);c.displayName="CardHeaderContext";let u=l.forwardRef(({bsPrefix:e,className:t,as:r="div",...a},n)=>{let d=(0,o.vE)(e,"card-header"),u=(0,l.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,i.jsx)(c.Provider,{value:u,children:(0,i.jsx)(r,{ref:n,...a,className:s()(t,d)})})});u.displayName="CardHeader";let p=l.forwardRef(({bsPrefix:e,className:t,variant:r,as:a="img",...l},n)=>{let d=(0,o.vE)(e,"card-img");return(0,i.jsx)(a,{ref:n,className:s()(r?`${d}-${r}`:d,t),...l})});p.displayName="CardImg";let m=l.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},l)=>(t=(0,o.vE)(t,"card-img-overlay"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));m.displayName="CardImgOverlay";let x=l.forwardRef(({className:e,bsPrefix:t,as:r="a",...a},l)=>(t=(0,o.vE)(t,"card-link"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));x.displayName="CardLink";let f=e=>l.forwardRef((t,r)=>(0,i.jsx)("div",{...t,ref:r,className:s()(t.className,e)})),h=f("h6"),g=l.forwardRef(({className:e,bsPrefix:t,as:r=h,...a},l)=>(t=(0,o.vE)(t,"card-subtitle"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));g.displayName="CardSubtitle";let b=l.forwardRef(({className:e,bsPrefix:t,as:r="p",...a},l)=>(t=(0,o.vE)(t,"card-text"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));b.displayName="CardText";let j=f("h5"),y=l.forwardRef(({className:e,bsPrefix:t,as:r=j,...a},l)=>(t=(0,o.vE)(t,"card-title"),(0,i.jsx)(r,{ref:l,className:s()(e,t),...a})));y.displayName="CardTitle";let v=l.forwardRef(({bsPrefix:e,className:t,bg:r,text:a,border:l,body:d=!1,children:c,as:u="div",...p},m)=>{let x=(0,o.vE)(e,"card");return(0,i.jsx)(u,{ref:m,...p,className:s()(t,x,r&&`bg-${r}`,a&&`text-${a}`,l&&`border-${l}`),children:d?(0,i.jsx)(n,{children:c}):c})});v.displayName="Card";let w=Object.assign(v,{Img:p,Title:y,Subtitle:g,Body:n,Link:x,Text:b,Header:u,Footer:d,ImgOverlay:m})},21204:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(34132),s=r.n(a),l=r(3729),o=r(70136),i=r(95344);let n=l.forwardRef(({bsPrefix:e,className:t,as:r="div",...a},l)=>{let n=(0,o.vE)(e,"row"),d=(0,o.pi)(),c=(0,o.zG)(),u=`${n}-cols`,p=[];return d.forEach(e=>{let t;let r=a[e];delete a[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let s=e!==c?`-${e}`:"";null!=t&&p.push(`${u}${s}-${t}`)}),(0,i.jsx)(r,{ref:l,...a,className:s()(t,n,...p)})});n.displayName="Row";let d=n},88242:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var a=r(95344),s=r(97273),l=r(3729),o=r(53608),i=r(74314),n=r.n(i),d=r(21204),c=r(95209),u=r(98287),p=r(48152),m=r(78154),x=r(76379);let f=(0,s.default)(async()=>{},{loadableGenerated:{modules:["D:\\autoclicker_frontend\\src\\app\\Admin\\Download\\Applications\\page.js -> jodit-react"]},ssr:!1}),h=()=>{let[e,t]=(0,l.useState)(""),[r,s]=(0,l.useState)(""),[i,h]=(0,l.useState)(""),[g,b]=(0,l.useState)([]),j=async a=>{a.preventDefault();let l=localStorage.getItem("token");try{let a=await fetch("http://65.2.172.195:8081/admin/saveApplicationFormData",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({input1:e,input2:r,selectOs:i})});if(!a.ok)throw Error("Network response was not ok");let o=await a.json();console.log(o),n().fire({title:"",icon:"success"}),t(""),s("")}catch(e){console.error("There was a problem with your fetch operation:",e),n().fire({title:"",icon:"success"}),t(""),s(""),y()}};(0,l.useEffect)(()=>{y()},[]),(0,l.useEffect)(()=>{let e=async()=>{await y()};""!==i&&e()},[i]);let y=()=>{o.Z.get(`http://65.2.172.195:8081/public/Applicationbox/${i}`).then(e=>{b(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})};async function v(e){try{let t=localStorage.getItem("token");if(!(await fetch(`http://65.2.172.195:8081/admin/deleteApplicationbox/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({id:e})})).ok)throw Error("Failed to delete item");console.log("Item deleted successfully"),y()}catch(e){console.error("Error deleting item:",e.message)}}return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[a.jsx(x.default,{}),a.jsx("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:a.jsx("div",{class:"p-2 md:p-4",children:(0,a.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[a.jsx("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),a.jsx("div",{className:"grid max-w-2xl mx-auto mt-8",children:a.jsx("div",{className:"grid max-w-2xl mx-auto mt-8",children:(0,a.jsxs)(d.Z,{className:"mb-8",children:[a.jsx(c.Z,{xl:3,lg:4,md:12,xs:12,children:a.jsx("div",{className:"mb-4 mb-lg-0",children:a.jsx("h4",{className:"mb-1 text-lg font-semibold",children:"Applications of MT Auto Clicker"})})}),a.jsx(c.Z,{xl:9,lg:8,md:12,xs:12,children:a.jsx(u.Z,{id:"preferences",className:"border border-gray-300 rounded-lg p-4",children:(0,a.jsxs)(u.Z.Body,{children:[a.jsx("div",{className:"mb-6",children:a.jsx("h4",{className:"mb-1 text-lg font-semibold",children:"Add Applications"})}),(0,a.jsxs)(p.Z,{onSubmit:j,children:[(0,a.jsxs)(p.Z.Group,{controlId:"formInput3",children:[a.jsx(p.Z.Label,{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select Operating System"}),(0,a.jsxs)(p.Z.Control,{required:!0,as:"select",value:i,onChange:e=>{h(e.target.value)},className:"border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[a.jsx("option",{children:"Click Here"}),a.jsx("option",{value:"1",children:"Windows"}),a.jsx("option",{value:"2",children:"MacOs"}),a.jsx("option",{value:"3",children:"Linux"}),a.jsx("option",{value:"4",children:"Android"}),a.jsx("option",{value:"5",children:"iOS"})]})]}),(0,a.jsxs)(p.Z.Group,{controlId:"formInput1",children:[a.jsx(p.Z.Label,{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Heading"}),a.jsx(f,{required:!0,value:e,onChange:e=>{t(e)}})]}),(0,a.jsxs)(p.Z.Group,{controlId:"formInput2",children:[a.jsx(p.Z.Label,{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),a.jsx(f,{required:!0,value:r,onChange:e=>{s(e)}})]}),a.jsx(m.Z,{variant:"primary",type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Save"})]}),a.jsx("hr",{className:"my-4 border-t border-gray-300 dark:border-gray-600"}),a.jsx(d.Z,{children:a.jsx(c.Z,{xs:12,children:a.jsx(u.Z,{children:(0,a.jsxs)(u.Z.Body,{children:[a.jsx(u.Z.Title,{as:"h4",className:"mb-3 text-lg font-semibold",children:"Featuresbox"}),a.jsx("div",{children:g.map((e,t)=>(0,a.jsxs)("div",{className:"mb-3 border-double border-4 border-indigo-600 ...",children:[a.jsx("p",{className:"mb-1 text-sm font-medium text-gray-900 dark:text-white",children:"Heading"}),a.jsx("p",{className:"text-sm font-normal text-gray-700 dark:text-gray-300",dangerouslySetInnerHTML:{__html:e.input1}}),a.jsx("p",{className:"mb-1 text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),a.jsx("p",{className:"text-sm font-normal text-gray-700 dark:text-gray-300",dangerouslySetInnerHTML:{__html:e.input2}}),a.jsx("button",{type:"Delete",id:"del",onClick:()=>v(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Delete"})]},t))})]})})})})]})})})]})})})]})})})]})})}},15224:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>s,default:()=>o});let a=(0,r(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\Admin\Download\Applications\page.js`),{__esModule:s,$$typeof:l}=a,o=a.default}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,6088,337,4314,8152,7984,7752],()=>r(88307));module.exports=a})();