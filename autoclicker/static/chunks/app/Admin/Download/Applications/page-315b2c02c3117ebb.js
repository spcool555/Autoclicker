(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7564],{2399:function(e,t,s){Promise.resolve().then(s.bind(s,4924))},4232:function(e,t,s){"use strict";s.d(t,{default:function(){return l.a}});var r=s(4930),l=s.n(r)},4930:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=s(6921);s(3827),s(4090);let l=r._(s(4795));function a(e,t){let s={loading:e=>{let{error:t,isLoading:s,pastDelay:r}=e;return null}};return"function"==typeof e&&(s.loader=e),(0,l.default)({...s,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9721:function(e,t,s){"use strict";function r(e){let{reason:t,children:s}=e;return s}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}}),s(9775)},4795:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=s(3827),l=s(4090),a=s(9721);function n(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let i={loader:()=>Promise.resolve(n(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},s=(0,l.lazy)(()=>t.loader().then(n)),d=t.loading;function o(e){let n=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,r.jsx)(s,{...e}):(0,r.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(s,{...e})});return(0,r.jsx)(l.Suspense,{fallback:n,children:i})}return o.displayName="LoadableComponent",o}},6550:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var r=s(6480),l=s.n(r),a=s(4090),n=s(3827);let i=["as","disabled"];function d(e){let{tagName:t,disabled:s,href:r,target:l,rel:a,role:n,onClick:i,tabIndex:d=0,type:o}=e;t||(t=null!=r||null!=l||null!=a?"a":"button");let c={tagName:t};if("button"===t)return[{type:o||"button",disabled:s},c];let u=e=>{var l;if(!s&&("a"!==t||(l=r)&&"#"!==l.trim())||e.preventDefault(),s){e.stopPropagation();return}null==i||i(e)};return"a"===t&&(r||(r="#"),s&&(r=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:s?void 0:d,href:r,target:"a"===t?l:void 0,"aria-disabled":s||void 0,rel:"a"===t?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}a.forwardRef((e,t)=>{let{as:s,disabled:r}=e,l=function(e,t){if(null==e)return{};var s,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(l[s]=e[s]);return l}(e,i),[a,{tagName:o}]=d(Object.assign({tagName:s,disabled:r},l));return(0,n.jsx)(o,Object.assign({},l,a,{ref:t}))}).displayName="Button";var o=s(2865);let c=a.forwardRef((e,t)=>{let{as:s,bsPrefix:r,variant:a="primary",size:i,active:c=!1,disabled:u=!1,className:m,...f}=e,x=(0,o.vE)(r,"btn"),[h,{tagName:j}]=d({tagName:s,disabled:u,...f});return(0,n.jsx)(j,{...h,...f,ref:t,disabled:u,className:l()(m,x,c&&"active",a&&"".concat(x,"-").concat(a),i&&"".concat(x,"-").concat(i),f.href&&u&&"disabled")})});c.displayName="Button";var u=c},9175:function(e,t,s){"use strict";s.d(t,{Z:function(){return w}});var r=s(6480),l=s.n(r),a=s(4090),n=s(2865),i=s(3827);let d=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a="div",...d}=e;return r=(0,n.vE)(r,"card-body"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});d.displayName="CardBody";let o=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a="div",...d}=e;return r=(0,n.vE)(r,"card-footer"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});o.displayName="CardFooter";let c=a.createContext(null);c.displayName="CardHeaderContext";let u=a.forwardRef((e,t)=>{let{bsPrefix:s,className:r,as:d="div",...o}=e,u=(0,n.vE)(s,"card-header"),m=(0,a.useMemo)(()=>({cardHeaderBsPrefix:u}),[u]);return(0,i.jsx)(c.Provider,{value:m,children:(0,i.jsx)(d,{ref:t,...o,className:l()(r,u)})})});u.displayName="CardHeader";let m=a.forwardRef((e,t)=>{let{bsPrefix:s,className:r,variant:a,as:d="img",...o}=e,c=(0,n.vE)(s,"card-img");return(0,i.jsx)(d,{ref:t,className:l()(a?"".concat(c,"-").concat(a):c,r),...o})});m.displayName="CardImg";let f=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a="div",...d}=e;return r=(0,n.vE)(r,"card-img-overlay"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});f.displayName="CardImgOverlay";let x=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a="a",...d}=e;return r=(0,n.vE)(r,"card-link"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});x.displayName="CardLink";var h=e=>a.forwardRef((t,s)=>(0,i.jsx)("div",{...t,ref:s,className:l()(t.className,e)}));let j=h("h6"),p=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a=j,...d}=e;return r=(0,n.vE)(r,"card-subtitle"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});p.displayName="CardSubtitle";let g=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a="p",...d}=e;return r=(0,n.vE)(r,"card-text"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});g.displayName="CardText";let b=h("h5"),v=a.forwardRef((e,t)=>{let{className:s,bsPrefix:r,as:a=b,...d}=e;return r=(0,n.vE)(r,"card-title"),(0,i.jsx)(a,{ref:t,className:l()(s,r),...d})});v.displayName="CardTitle";let y=a.forwardRef((e,t)=>{let{bsPrefix:s,className:r,bg:a,text:o,border:c,body:u=!1,children:m,as:f="div",...x}=e,h=(0,n.vE)(s,"card");return(0,i.jsx)(f,{ref:t,...x,className:l()(r,h,a&&"bg-".concat(a),o&&"text-".concat(o),c&&"border-".concat(c)),children:u?(0,i.jsx)(d,{children:m}):m})});y.displayName="Card";var w=Object.assign(y,{Img:m,Title:v,Subtitle:p,Body:d,Link:x,Text:g,Header:u,Footer:o,ImgOverlay:f})},5914:function(e,t,s){"use strict";var r=s(6480),l=s.n(r),a=s(4090),n=s(2865),i=s(3827);let d=a.forwardRef((e,t)=>{let{bsPrefix:s,className:r,as:a="div",...d}=e,o=(0,n.vE)(s,"row"),c=(0,n.pi)(),u=(0,n.zG)(),m="".concat(o,"-cols"),f=[];return c.forEach(e=>{let t;let s=d[e];delete d[e],null!=s&&"object"==typeof s?{cols:t}=s:t=s,null!=t&&f.push("".concat(m).concat(e!==u?"-".concat(e):"","-").concat(t))}),(0,i.jsx)(a,{ref:t,...d,className:l()(r,o,...f)})});d.displayName="Row",t.Z=d},4924:function(e,t,s){"use strict";s.r(t);var r=s(3827),l=s(4232),a=s(4090),n=s(7908),i=s(3411),d=s.n(i),o=s(5914),c=s(590),u=s(9175),m=s(6069),f=s(6550),x=s(3239);let h=(0,l.default)(()=>Promise.all([s.e(8035),s.e(9079)]).then(s.t.bind(s,6744,23)),{loadableGenerated:{webpack:()=>[6744]},ssr:!1});t.default=()=>{let[e,t]=(0,a.useState)(""),[s,l]=(0,a.useState)(""),[i,j]=(0,a.useState)(""),[p,g]=(0,a.useState)([]),b=async r=>{r.preventDefault();let a=localStorage.getItem("token");try{let r=await fetch("http://65.2.172.195:8081/admin/saveApplicationFormData",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({input1:e,input2:s,selectOs:i})});if(!r.ok)throw Error("Network response was not ok");let n=await r.json();console.log(n),d().fire({title:"",icon:"success"}),t(""),l("")}catch(e){console.error("There was a problem with your fetch operation:",e),d().fire({title:"",icon:"success"}),t(""),l(""),v()}};(0,a.useEffect)(()=>{v()},[]),(0,a.useEffect)(()=>{let e=async()=>{await v()};""!==i&&e()},[i]);let v=()=>{n.Z.get("http://65.2.172.195:8081/public/Applicationbox/".concat(i)).then(e=>{g(e.data),console.log("data...",e.data)}).catch(e=>{console.log("err",e)})};async function y(e){try{let t=localStorage.getItem("token");if(!(await fetch("http://65.2.172.195:8081/admin/deleteApplicationbox/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({id:e})})).ok)throw Error("Failed to delete item");console.log("Item deleted successfully"),v()}catch(e){console.error("Error deleting item:",e.message)}}return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[(0,r.jsx)(x.default,{}),(0,r.jsx)("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:(0,r.jsx)("div",{class:"p-2 md:p-4",children:(0,r.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[(0,r.jsx)("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),(0,r.jsx)("div",{className:"grid max-w-2xl mx-auto mt-8",children:(0,r.jsx)("div",{className:"grid max-w-2xl mx-auto mt-8",children:(0,r.jsxs)(o.Z,{className:"mb-8",children:[(0,r.jsx)(c.Z,{xl:3,lg:4,md:12,xs:12,children:(0,r.jsx)("div",{className:"mb-4 mb-lg-0",children:(0,r.jsx)("h4",{className:"mb-1 text-lg font-semibold",children:"Applications of MT Auto Clicker"})})}),(0,r.jsx)(c.Z,{xl:9,lg:8,md:12,xs:12,children:(0,r.jsx)(u.Z,{id:"preferences",className:"border border-gray-300 rounded-lg p-4",children:(0,r.jsxs)(u.Z.Body,{children:[(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("h4",{className:"mb-1 text-lg font-semibold",children:"Add Applications"})}),(0,r.jsxs)(m.Z,{onSubmit:b,children:[(0,r.jsxs)(m.Z.Group,{controlId:"formInput3",children:[(0,r.jsx)(m.Z.Label,{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select Operating System"}),(0,r.jsxs)(m.Z.Control,{required:!0,as:"select",value:i,onChange:e=>{j(e.target.value)},className:"border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[(0,r.jsx)("option",{children:"Click Here"}),(0,r.jsx)("option",{value:"1",children:"Windows"}),(0,r.jsx)("option",{value:"2",children:"MacOs"}),(0,r.jsx)("option",{value:"3",children:"Linux"}),(0,r.jsx)("option",{value:"4",children:"Android"}),(0,r.jsx)("option",{value:"5",children:"iOS"})]})]}),(0,r.jsxs)(m.Z.Group,{controlId:"formInput1",children:[(0,r.jsx)(m.Z.Label,{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Heading"}),(0,r.jsx)(h,{required:!0,value:e,onChange:e=>{t(e)}})]}),(0,r.jsxs)(m.Z.Group,{controlId:"formInput2",children:[(0,r.jsx)(m.Z.Label,{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),(0,r.jsx)(h,{required:!0,value:s,onChange:e=>{l(e)}})]}),(0,r.jsx)(f.Z,{variant:"primary",type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Save"})]}),(0,r.jsx)("hr",{className:"my-4 border-t border-gray-300 dark:border-gray-600"}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(c.Z,{xs:12,children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)(u.Z.Body,{children:[(0,r.jsx)(u.Z.Title,{as:"h4",className:"mb-3 text-lg font-semibold",children:"Featuresbox"}),(0,r.jsx)("div",{children:p.map((e,t)=>(0,r.jsxs)("div",{className:"mb-3 border-double border-4 border-indigo-600 ...",children:[(0,r.jsx)("p",{className:"mb-1 text-sm font-medium text-gray-900 dark:text-white",children:"Heading"}),(0,r.jsx)("p",{className:"text-sm font-normal text-gray-700 dark:text-gray-300",dangerouslySetInnerHTML:{__html:e.input1}}),(0,r.jsx)("p",{className:"mb-1 text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),(0,r.jsx)("p",{className:"text-sm font-normal text-gray-700 dark:text-gray-300",dangerouslySetInnerHTML:{__html:e.input2}}),(0,r.jsx)("button",{type:"Delete",id:"del",onClick:()=>y(e.id),class:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Delete"})]},t))})]})})})})]})})})]})})})]})})})]})})}},3239:function(e,t,s){"use strict";s.r(t);var r=s(3827);s(4090);var l=s(8792);t.default=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{class:"scrollbar-sidebar",children:(0,r.jsx)("div",{class:"app-sidebar__inner",children:(0,r.jsxs)("ul",{class:"vertical-nav-menu",children:[(0,r.jsx)("li",{class:"app-sidebar__heading",children:"Dashboards"}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin",class:"mm-active",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-rocket"}),"Home Page"]})}),(0,r.jsx)("li",{class:"app-sidebar__heading",children:"UI Components"}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(l.default,{href:"",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-diamond"}),"Home Section",(0,r.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"Update Specification Image"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/SpecificationAndFeature",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"    Specification & Features"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/Questions",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Frequently Asked Questions?"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/FAQs",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   Free/Paid FAQs"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/FeaturesMT",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," FeaturesMT"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/WhatMakes",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   WhatMakes MT Auto Clicker Different"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/TopVideo",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"    TopVideos"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/HomeSection/HeadTagData",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"HeadTagData"]})})]})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("a",{href:"#",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Download Page",(0,r.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Minimum System Requirements"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download/Procedure",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Downloading and Installing Procedure"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download/Applications",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"          Applications of MT Auto Clicker"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Download/WorkFlow",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"  Work Flow"]})})]}),(0,r.jsxs)("a",{href:"",children:[(0,r.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Others",(0,r.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/PricingSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"    Pricing Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/AboutSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   About Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/BlogSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   Blog Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/Documentation",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Documentation Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/PrivacyPolicy",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"   Privacy Policy Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/TearmsOfUse",children:[(0,r.jsx)("i",{class:"metismenu-icon"})," Terms Of Use Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/ChangeLogPage",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"Change log Page"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(l.default,{href:"/Admin/FooterSection",children:[(0,r.jsx)("i",{class:"metismenu-icon"}),"Footer Page"]})})]})]})]})})})})}}},function(e){e.O(0,[9461,8792,7908,6069,2971,8069,1744],function(){return e(e.s=2399)}),_N_E=e.O()}]);