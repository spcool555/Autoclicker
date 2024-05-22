(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6712],{9257:function(e,r,a){Promise.resolve().then(a.bind(a,8331))},7907:function(e,r,a){"use strict";var t=a(5313);a.o(t,"useRouter")&&a.d(r,{useRouter:function(){return t.useRouter}})},8331:function(e,r,a){"use strict";a.r(r);var t=a(3827),s=a(8792);a(4090);var d=a(7907),l=a(3411),o=a.n(l);r.default=()=>{let e=(0,d.useRouter)();async function r(r){r.preventDefault();let a={email:r.target.email.value,password:r.target.password.value,role:r.target.role.value,firstname:r.target.firstname.value,lastname:r.target.lastname.value,contact:r.target.contact.value};(await fetch("http://65.2.172.195:8081/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?(o().fire({icon:"success",title:'"Registered successfull',showConfirmButton:!1,timer:1500}),e.push("SignIn?email=".concat(a.email))):o().fire({icon:"error",title:"Oops...",text:"There was a problem saving the form data!",footer:"Please try again later"})}return(0,t.jsx)("div",{children:(0,t.jsx)("section",{className:"bg-gray-50 dark:bg-gray-900",children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[(0,t.jsxs)("a",{href:"#",className:"flex items-center m-6 text-2xl font-semibold text-gray-900 dark:text-white",children:[(0,t.jsx)("img",{className:"w-8 h-8 mr-2",src:"/logo.png",alt:"logo"}),"MT Autoclicker"]}),(0,t.jsx)("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,t.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,t.jsx)("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Create and account"}),(0,t.jsxs)("form",{className:"space-y-4 md:space-y-6",method:"post",onSubmit:r,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{for:"firstname",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"First Name"}),(0,t.jsx)("input",{required:!0,type:"text",name:"firstname",id:"firstname",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter first name"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{for:"lastname",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Last Name"}),(0,t.jsx)("input",{required:!0,type:"text",name:"lastname",id:"lastname",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter last name"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{for:"contact",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Contact No."}),(0,t.jsx)("input",{required:!0,type:"tel",name:"contact",id:"contact",maxlength:"10",pattern:"\\d{10}",title:"Please enter 10 digits",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter contact number"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{for:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your Email"}),(0,t.jsx)("input",{required:!0,type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{for:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),(0,t.jsx)("input",{required:!0,type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,t.jsxs)("div",{hidden:!0,children:[(0,t.jsx)("label",{for:"confirm-password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Role"}),(0,t.jsx)("input",{required:!0,type:"text",value:"USER",name:"role",id:"role",placeholder:"Role",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,t.jsxs)("div",{className:"flex items-start",children:[(0,t.jsx)("div",{className:"flex items-center h-5",children:(0,t.jsx)("input",{required:!0,id:"terms","aria-describedby":"terms",type:"checkbox",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"})}),(0,t.jsx)("div",{className:"ml-3 text-sm",children:(0,t.jsxs)("label",{for:"terms",className:"font-light text-gray-500 dark:text-gray-300",children:["I accept the ",(0,t.jsx)("a",{className:"font-medium text-primary-600 hover:underline dark:text-primary-500",href:"#",children:"Terms and Conditions"})]})})]}),(0,t.jsx)("button",{type:"submit",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Create an account"}),(0,t.jsxs)("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Already have an account? ",(0,t.jsx)(s.default,{href:"/SignIn",className:"font-medium text-primary-600 hover:underline dark:text-primary-500",children:"Login here"})]})]})]})})]})})})}}},function(e){e.O(0,[9461,8792,2971,8069,1744],function(){return e(e.s=9257)}),_N_E=e.O()}]);