(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4345],{3396:function(e,s,i){Promise.resolve().then(i.bind(i,8347))},7907:function(e,s,i){"use strict";var n=i(5313);i.o(n,"useRouter")&&i.d(s,{useRouter:function(){return n.useRouter}})},8347:function(e,s,i){"use strict";i.r(s);var n=i(3827);i(703),i(7907),i(4090);var l=i(3411),r=i.n(l),c=i(3239);s.default=()=>{let e=async e=>{let s=e.target.files[0];if(!s)return;let i=new FormData;i.append("file",s);let n=localStorage.getItem("token");try{(await fetch("http://65.2.172.195:8081/admin/upload",{method:"POST",body:i,headers:{Authorization:"Bearer ".concat(n)}})).ok?r().fire({title:"Upload successful"}):r().fire({title:"Somthing went wrong"})}catch(e){console.error("Error:",e)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{class:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[(0,n.jsx)(c.default,{}),(0,n.jsx)("main",{class:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:(0,n.jsx)("div",{class:"p-2 md:p-4",children:(0,n.jsxs)("div",{class:"w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[(0,n.jsx)("h2",{class:"pl-6 text-2xl font-bold sm:text-xl",children:"Admin Page"}),(0,n.jsx)("div",{class:"grid max-w-2xl mx-auto mt-8",children:(0,n.jsx)("div",{class:"col-span-6 lg:col-span-12 md:col-span-12 xs:col-span-12 mb-6",children:(0,n.jsx)("div",{class:"bg-white dark:bg-gray-700 shadow-sm rounded-lg overflow-hidden",children:(0,n.jsxs)("div",{class:"p-6",children:[(0,n.jsx)("h4",{class:"text-lg font-semibold mb-5",children:"Update Specification Image"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{class:"flex items-center justify-center w-full",children:(0,n.jsxs)("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500",children:[(0,n.jsxs)("div",{class:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,n.jsx)("svg",{class:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 16",children:(0,n.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,n.jsxs)("p",{class:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,n.jsx)("span",{class:"font-semibold",children:"Click to upload"})," or drag and drop"]}),(0,n.jsx)("p",{class:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),(0,n.jsx)("input",{id:"dropzone-file",type:"file",class:"hidden",onChange:e})]})})})]})})})})]})})})]})})}},3239:function(e,s,i){"use strict";i.r(s);var n=i(3827);i(4090);var l=i(8792);s.default=function(){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{class:"scrollbar-sidebar",children:(0,n.jsx)("div",{class:"app-sidebar__inner",children:(0,n.jsxs)("ul",{class:"vertical-nav-menu",children:[(0,n.jsx)("li",{class:"app-sidebar__heading",children:"Dashboards"}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin",class:"mm-active",children:[(0,n.jsx)("i",{class:"metismenu-icon pe-7s-rocket"}),"Home Page"]})}),(0,n.jsx)("li",{class:"app-sidebar__heading",children:"UI Components"}),(0,n.jsxs)("li",{children:[(0,n.jsxs)(l.default,{href:"",children:[(0,n.jsx)("i",{class:"metismenu-icon pe-7s-diamond"}),"Home Section",(0,n.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"Update Specification Image"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/SpecificationAndFeature",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"    Specification & Features"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/Questions",children:[(0,n.jsx)("i",{class:"metismenu-icon"})," Frequently Asked Questions?"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/FAQs",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"   Free/Paid FAQs"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/FeaturesMT",children:[(0,n.jsx)("i",{class:"metismenu-icon"})," FeaturesMT"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/WhatMakes",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"   WhatMakes MT Auto Clicker Different"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/TopVideo",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"    TopVideos"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/HomeSection/HeadTagData",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"HeadTagData"]})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("a",{href:"#",children:[(0,n.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Download Page",(0,n.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/Download",children:[(0,n.jsx)("i",{class:"metismenu-icon"})," Minimum System Requirements"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/Download/Procedure",children:[(0,n.jsx)("i",{class:"metismenu-icon"})," Downloading and Installing Procedure"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/Download/Applications",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"          Applications of MT Auto Clicker"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/Download/WorkFlow",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"  Work Flow"]})})]}),(0,n.jsxs)("a",{href:"",children:[(0,n.jsx)("i",{class:"metismenu-icon pe-7s-car"}),"Others",(0,n.jsx)("i",{class:"metismenu-state-icon pe-7s-angle-down caret-left"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/PricingSection",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"    Pricing Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/AboutSection",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"   About Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/BlogSection",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"   Blog Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/Documentation",children:[(0,n.jsx)("i",{class:"metismenu-icon"})," Documentation Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/PrivacyPolicy",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"   Privacy Policy Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/TearmsOfUse",children:[(0,n.jsx)("i",{class:"metismenu-icon"})," Terms Of Use Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/ChangeLogPage",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"Change log Page"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:"/Admin/FooterSection",children:[(0,n.jsx)("i",{class:"metismenu-icon"}),"Footer Page"]})})]})]})]})})})})}}},function(e){e.O(0,[9461,8792,703,2971,8069,1744],function(){return e(e.s=3396)}),_N_E=e.O()}]);