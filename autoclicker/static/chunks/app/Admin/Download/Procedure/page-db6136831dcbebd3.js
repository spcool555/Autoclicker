(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1106],{7249:function(e,s,t){Promise.resolve().then(t.bind(t,1050))},4232:function(e,s,t){"use strict";t.d(s,{default:function(){return l.a}});var r=t(4930),l=t.n(r)},4930:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return n}});let r=t(6921);t(3827),t(4090);let l=r._(t(4795));function n(e,s){let t={loading:e=>{let{error:s,isLoading:t,pastDelay:r}=e;return null}};return"function"==typeof e&&(t.loader=e),(0,l.default)({...t,...s})}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},9721:function(e,s,t){"use strict";function r(e){let{reason:s,children:t}=e;return t}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return r}}),t(9775)},4795:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return d}});let r=t(3827),l=t(4090),n=t(9721);function a(e){var s;return{default:null!=(s=null==e?void 0:e.default)?s:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},d=function(e){let s={...i,...e},t=(0,l.lazy)(()=>s.loader().then(a)),d=s.loading;function c(e){let a=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=s.ssr?(0,r.jsx)(t,{...e}):(0,r.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(t,{...e})});return(0,r.jsx)(l.Suspense,{fallback:a,children:i})}return c.displayName="LoadableComponent",c}},6550:function(e,s,t){"use strict";t.d(s,{Z:function(){return u}});var r=t(6480),l=t.n(r),n=t(4090),a=t(3827);let i=["as","disabled"];function d(e){let{tagName:s,disabled:t,href:r,target:l,rel:n,role:a,onClick:i,tabIndex:d=0,type:c}=e;s||(s=null!=r||null!=l||null!=n?"a":"button");let o={tagName:s};if("button"===s)return[{type:c||"button",disabled:t},o];let u=e=>{var l;if(!t&&("a"!==s||(l=r)&&"#"!==l.trim())||e.preventDefault(),t){e.stopPropagation();return}null==i||i(e)};return"a"===s&&(r||(r="#"),t&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:d,href:r,target:"a"===s?l:void 0,"aria-disabled":t||void 0,rel:"a"===s?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},o]}n.forwardRef((e,s)=>{let{as:t,disabled:r}=e,l=function(e,s){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],s.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i),[n,{tagName:c}]=d(Object.assign({tagName:t,disabled:r},l));return(0,a.jsx)(c,Object.assign({},l,n,{ref:s}))}).displayName="Button";var c=t(2865);let o=n.forwardRef((e,s)=>{let{as:t,bsPrefix:r,variant:n="primary",size:i,active:o=!1,disabled:u=!1,className:m,...f}=e,x=(0,c.vE)(r,"btn"),[h,{tagName:j}]=d({tagName:t,disabled:u,...f});return(0,a.jsx)(j,{...h,...f,ref:s,disabled:u,className:l()(m,x,o&&"active",n&&"".concat(x,"-").concat(n),i&&"".concat(x,"-").concat(i),f.href&&u&&"disabled")})});o.displayName="Button";var u=o},9175:function(e,s,t){"use strict";t.d(s,{Z:function(){return w}});var r=t(6480),l=t.n(r),n=t(4090),a=t(2865),i=t(3827);let d=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n="div",...d}=e;return r=(0,a.vE)(r,"card-body"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});d.displayName="CardBody";let c=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n="div",...d}=e;return r=(0,a.vE)(r,"card-footer"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});c.displayName="CardFooter";let o=n.createContext(null);o.displayName="CardHeaderContext";let u=n.forwardRef((e,s)=>{let{bsPrefix:t,className:r,as:d="div",...c}=e,u=(0,a.vE)(t,"card-header"),m=(0,n.useMemo)(()=>({cardHeaderBsPrefix:u}),[u]);return(0,i.jsx)(o.Provider,{value:m,children:(0,i.jsx)(d,{ref:s,...c,className:l()(r,u)})})});u.displayName="CardHeader";let m=n.forwardRef((e,s)=>{let{bsPrefix:t,className:r,variant:n,as:d="img",...c}=e,o=(0,a.vE)(t,"card-img");return(0,i.jsx)(d,{ref:s,className:l()(n?"".concat(o,"-").concat(n):o,r),...c})});m.displayName="CardImg";let f=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n="div",...d}=e;return r=(0,a.vE)(r,"card-img-overlay"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});f.displayName="CardImgOverlay";let x=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n="a",...d}=e;return r=(0,a.vE)(r,"card-link"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});x.displayName="CardLink";var h=e=>n.forwardRef((s,t)=>(0,i.jsx)("div",{...s,ref:t,className:l()(s.className,e)}));let j=h("h6"),g=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n=j,...d}=e;return r=(0,a.vE)(r,"card-subtitle"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});g.displayName="CardSubtitle";let p=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n="p",...d}=e;return r=(0,a.vE)(r,"card-text"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});p.displayName="CardText";let b=h("h5"),v=n.forwardRef((e,s)=>{let{className:t,bsPrefix:r,as:n=b,...d}=e;return r=(0,a.vE)(r,"card-title"),(0,i.jsx)(n,{ref:s,className:l()(t,r),...d})});v.displayName="CardTitle";let y=n.forwardRef((e,s)=>{let{bsPrefix:t,className:r,bg:n,text:c,border:o,body:u=!1,children:m,as:f="div",...x}=e,h=(0,a.vE)(t,"card");return(0,i.jsx)(f,{ref:s,...x,className:l()(r,h,n&&"bg-".concat(n),c&&"text-".concat(c),o&&"border-".concat(o)),children:u?(0,i.jsx)(d,{children:m}):m})});y.displayName="Card";var w=Object.assign(y,{Img:m,Title:v,Subtitle:g,Body:d,Link:x,Text:p,Header:u,Footer:c,ImgOverlay:f})},5914:function(e,s,t){"use strict";var r=t(6480),l=t.n(r),n=t(4090),a=t(2865),i=t(3827);let d=n.forwardRef((e,s)=>{let{bsPrefix:t,className:r,as:n="div",...d}=e,c=(0,a.vE)(t,"row"),o=(0,a.pi)(),u=(0,a.zG)(),m="".concat(c,"-cols"),f=[];return o.forEach(e=>{let s;let t=d[e];delete d[e],null!=t&&"object"==typeof t?{cols:s}=t:s=t,null!=s&&f.push("".concat(m).concat(e!==u?"-".concat(e):"","-").concat(s))}),(0,i.jsx)(n,{ref:s,...d,className:l()(r,c,...f)})});d.displayName="Row",s.Z=d},1050:function(e,s,t){"use strict";t.r(s);var r=t(3827),l=t(4090),n=t(7908),a=t(3411),i=t.n(a),d=t(9175),c=t(5914),o=t(590),u=t(6069),m=t(6550),f=t(3239);let x=(0,t(4232).default)(()=>Promise.all([t.e(8035),t.e(9079)]).then(t.t.bind(t,6744,23)),{loadableGenerated:{webpack:()=>[6744]},ssr:!1});s.default=()=>{let[e,s]=(0,l.useState)(""),[t,a]=(0,l.useState)(""),[h,j]=(0,l.useState)(""),[g,p]=(0,l.useState)([]),b=async s=>{s.preventDefault();try{let s=localStorage.getItem("token");await n.Z.post("http://65.2.172.195:8081/admin/instprocedure",{id:h,items:t,selectOs:e},{headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}}),i().fire({title:"",icon:"success"}),a(""),v()}catch(e){console.error("Error saving item:",e),i().fire({title:"something wrong",icon:"warning"})}};(0,l.useEffect)(()=>{v()},[]),(0,l.useEffect)(()=>{let s=async()=>{await v()};""!==e&&s()},[e]);let v=()=>{n.Z.get("http://65.2.172.195:8081/public/instprocedure/".concat(e)).then(e=>{p(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})};async function y(e){try{let s=localStorage.getItem("token");if(!(await fetch("http://65.2.172.195:8081/admin/deleteprocedure/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({id:e})})).ok)throw Error("Failed to delete item");console.log("Item deleted successfully"),v()}catch(e){console.error("Error deleting item:",e.message)}}async function w(e){try{let s=await n.Z.get("http://65.2.172.195:8081/public/instproceduresedit/".concat(e)),{id:t,items:r}=s.data;j(t),a(r),console.log("dataediiitttnewww...",s.data)}catch(e){console.log("err",e)}}return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[(0,r.jsx)(f.default,{}),(0,r.jsx)("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:(0,r.jsx)("div",{class:"p-2 md:p-4",children:(0,r.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[(0,r.jsx)("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),(0,r.jsx)("div",{className:"grid max-w-2xl mx-auto mt-8",children:(0,r.jsx)("div",{className:"grid max-w-2xl mx-auto mt-8",children:(0,r.jsx)("div",{className:"max-w-md mx-auto",children:(0,r.jsx)(d.Z,{className:"mb-8",children:(0,r.jsx)(d.Z.Body,{children:(0,r.jsxs)(c.Z,{className:"mb-4",children:[(0,r.jsx)(o.Z,{xl:3,lg:4,md:12,xs:12,children:(0,r.jsx)("div",{className:"mb-4 mb-lg-0",children:(0,r.jsx)("h4",{className:"mb-1 text-lg font-medium",children:"Downloading and Installing Procedure"})})}),(0,r.jsx)(o.Z,{xl:9,lg:8,md:12,xs:12,children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(d.Z.Body,{children:[(0,r.jsx)("h4",{className:"mb-3 text-lg font-semibold",children:"Add Installing Procedure"}),(0,r.jsx)(u.Z,{onSubmit:b,children:(0,r.jsxs)(c.Z,{className:"row g-3 align-items-center",children:[(0,r.jsxs)(u.Z.Group,{controlId:"formInput3",className:"col-md-4",children:[(0,r.jsx)(u.Z.Label,{className:"text-sm font-medium",children:"Select Operating System"}),(0,r.jsxs)(u.Z.Control,{as:"select",value:e,onChange:e=>{s(e.target.value)},className:"border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[(0,r.jsx)("option",{children:"Click Here"}),(0,r.jsx)("option",{value:"1",children:"Windows"}),(0,r.jsx)("option",{value:"2",children:"MacOs"}),(0,r.jsx)("option",{value:"3",children:"Linux"}),(0,r.jsx)("option",{value:"4",children:"Android"}),(0,r.jsx)("option",{value:"5",children:"iOS"})]})]}),(0,r.jsx)(o.Z,{md:6,xxl:8,className:"mt-3 mb-3 mt-md-3",children:(0,r.jsx)(x,{id:"name",value:t,onChange:e=>a(e),required:!0})}),(0,r.jsx)(o.Z,{md:2,xxl:2,children:(0,r.jsx)(m.Z,{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Post"})})]})}),(0,r.jsx)("hr",{className:"my-4 border-t border-gray-300 dark:border-gray-600"}),(0,r.jsx)("h4",{className:"mb-3 text-lg font-semibold",children:"Installing Procedure"}),(0,r.jsx)("div",{children:g.map((e,s)=>(0,r.jsxs)("div",{className:"mb-4 border-double border-4 border-indigo-600 ...",children:[(0,r.jsx)("p",{className:"text-gray-700 dark:text-gray-300",dangerouslySetInnerHTML:{__html:e.items}}),(0,r.jsx)("button",{type:"Delete",id:"del",onClick:()=>y(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Delete"}),(0,r.jsx)("button",{type:"Edit",id:"edit",onClick:()=>w(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Edit"})]}))})]})})})]})})})})})})]})})})]})})}},3239:function(e,s,t){"use strict";t.r(s);var r=t(3827);t(4090);var l=t(8792);s.default=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{class:"scrollbar-sidebar",children:(0,r.jsx)("div",{class:"app-sidebar__inner",children:(0,r.jsxs)("ul",{class:"vertical-nav-menu",children:[(0,r.jsx)("li",{class:"app-sidebar__heading",children:"Dashboards"}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin",class:"mm-active",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-rocket"}),"Home Page"]})}),(0,r.jsx)("li",{class:"app-sidebar__heading",children:"UI Components"}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(l.default,{href:"",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-diamond"}),"Home Section",(0,r.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"Update Specification Image"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/SpecificationAndFeature",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"    Specification & Features"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/Questions",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Frequently Asked Questions?"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/FAQs",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   Free/Paid FAQs"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/FeaturesMT",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," FeaturesMT"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/WhatMakes",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   WhatMakes MT Auto Clicker Different"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/TopVideo",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"    TopVideos"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/HeadTagData",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"HeadTagData"]})})]})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("a",{href:"#",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Download Page",(0,r.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Minimum System Requirements"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download/Procedure",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Downloading and Installing Procedure"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download/Applications",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"          Applications of MT Auto Clicker"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download/WorkFlow",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"  Work Flow"]})})]}),(0,r.jsxs)("a",{href:"",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Others",(0,r.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/PricingSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"    Pricing Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/AboutSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   About Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/BlogSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   Blog Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Documentation",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Documentation Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/PrivacyPolicy",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   Privacy Policy Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/TearmsOfUse",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Terms Of Use Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/ChangeLogPage",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"Change log Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/FooterSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"Footer Page"]})})]})]})]})})})})}}},function(e){e.O(0,[9461,8792,7908,6069,2971,8069,1744],function(){return e(e.s=7249)}),_N_E=e.O()}]);