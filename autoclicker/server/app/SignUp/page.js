(()=>{var e={};e.id=6712,e.ids=[6712],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},76260:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>n});var a=t(50482),s=t(69108),i=t(62563),o=t.n(i),d=t(68300),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);t.d(r,l);let n=["",{children:["SignUp",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,22938)),"D:\\autoclicker_frontend\\src\\app\\SignUp\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,51965)),"D:\\autoclicker_frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\autoclicker_frontend\\src\\app\\SignUp\\page.js"],m="/SignUp/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/SignUp/page",pathname:"/SignUp",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},44442:(e,r,t)=>{Promise.resolve().then(t.bind(t,90895))},90895:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var a=t(95344),s=t(56506);t(3729);var i=t(8428),o=t(74314),d=t.n(o);let l=()=>{let e=(0,i.useRouter)();async function r(r){r.preventDefault();let t={email:r.target.email.value,password:r.target.password.value,role:r.target.role.value,firstname:r.target.firstname.value,lastname:r.target.lastname.value,contact:r.target.contact.value};(await fetch("http://65.2.172.195:8081/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(d().fire({icon:"success",title:'"Registered successfull',showConfirmButton:!1,timer:1500}),e.push(`SignIn?email=${t.email}`)):d().fire({icon:"error",title:"Oops...",text:"There was a problem saving the form data!",footer:"Please try again later"})}return a.jsx("div",{children:a.jsx("section",{className:"bg-gray-50 dark:bg-gray-900",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[(0,a.jsxs)("a",{href:"#",className:"flex items-center m-6 text-2xl font-semibold text-gray-900 dark:text-white",children:[a.jsx("img",{className:"w-8 h-8 mr-2",src:"/logo.png",alt:"logo"}),"MT Autoclicker"]}),a.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,a.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[a.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Create and account"}),(0,a.jsxs)("form",{className:"space-y-4 md:space-y-6",method:"post",onSubmit:r,children:[(0,a.jsxs)("div",{children:[a.jsx("label",{for:"firstname",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"First Name"}),a.jsx("input",{required:!0,type:"text",name:"firstname",id:"firstname",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter first name"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{for:"lastname",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Last Name"}),a.jsx("input",{required:!0,type:"text",name:"lastname",id:"lastname",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter last name"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{for:"contact",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Contact No."}),a.jsx("input",{required:!0,type:"tel",name:"contact",id:"contact",maxlength:"10",pattern:"\\d{10}",title:"Please enter 10 digits",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter contact number"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{for:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your Email"}),a.jsx("input",{required:!0,type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{for:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),a.jsx("input",{required:!0,type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,a.jsxs)("div",{hidden:!0,children:[a.jsx("label",{for:"confirm-password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Role"}),a.jsx("input",{required:!0,type:"text",value:"USER",name:"role",id:"role",placeholder:"Role",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex items-center h-5",children:a.jsx("input",{required:!0,id:"terms","aria-describedby":"terms",type:"checkbox",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"})}),a.jsx("div",{className:"ml-3 text-sm",children:(0,a.jsxs)("label",{for:"terms",className:"font-light text-gray-500 dark:text-gray-300",children:["I accept the ",a.jsx("a",{className:"font-medium text-primary-600 hover:underline dark:text-primary-500",href:"#",children:"Terms and Conditions"})]})})]}),a.jsx("button",{type:"submit",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Create an account"}),(0,a.jsxs)("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Already have an account? ",a.jsx(s.default,{href:"/SignIn",className:"font-medium text-primary-600 hover:underline dark:text-primary-500",children:"Login here"})]})]})]})})]})})})}},22938:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});let a=(0,t(86843).createProxy)(String.raw`D:\autoclicker_frontend\src\app\SignUp\page.js`),{__esModule:s,$$typeof:i}=a,o=a.default},73881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[1638,6088,337,4314,7984],()=>t(76260));module.exports=a})();