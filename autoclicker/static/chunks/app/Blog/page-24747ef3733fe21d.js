(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5260],{9455:function(e,t,l){Promise.resolve().then(l.bind(l,2296))},5601:function(e,t){"use strict";function l(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2296:function(e,t,l){"use strict";l.r(t);var i=l(3827),n=l(8792),r=l(4090),a=l(7908),o=l(3061);t.default=()=>{let[e,t]=(0,r.useState)([]),[l,s]=(0,r.useState)([{id:1,input3:"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png",input1:"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"},{id:2,input3:"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png",input1:"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkk"}]);(0,r.useEffect)(()=>{h()},[]);let h=()=>{a.Z.get("http://65.2.172.195:8081/public/newsbox").then(e=>{let l=e.data.map(e=>({...e,imageUrl:"data:image/jpeg;base64,".concat(e.input3)}));t(l),console.log("Processed data:",l)}).catch(e=>{console.log("Error fetching data:",e)})},c=(e,t)=>{let l=e.split(" ");return l.length>t?l.slice(0,t).join(" ")+"...":e},d={title:"blog page",description:"blog decription",ogTitle:"blog ogtitle",ogDescription:"blog ogtitle Description",conicalurl:"conicalurl",plaintext:"blog plaintext"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{title:null==d?void 0:d.title,description:null==d?void 0:d.description,ogTitle:null==d?void 0:d.ogTitle,ogDescription:null==d?void 0:d.ogDescription,plaintext:null==d?void 0:d.plaintext,conicalurl:null==d?void 0:d.conicalurl}),(0,i.jsx)("section",{className:" dark:bg-gray-900 p3",children:(0,i.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",children:[(0,i.jsxs)("div",{className:"mx-auto max-w-screen-md text-center mb-8 lg:mb-12",children:[(0,i.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white",children:"AutoClicker"}),(0,i.jsx)("p",{className:"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4",children:"A full-fledged autoclicker with two modes of autoclicking"})]}),(0,i.jsx)("div",{className:"grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10 p0",children:e.map((e,t)=>(0,i.jsxs)("div",{class:"flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg",children:[(0,i.jsx)("img",{src:e.imageUrl,alt:"img",className:"standard-image"}),(0,i.jsx)("div",{class:"flex justify-center items-baseline my-8",children:(0,i.jsx)("span",{class:"mr-2 text-5xl font-extrabold",dangerouslySetInnerHTML:{__html:e.input1}})}),(0,i.jsx)("p",{className:"font-light p4 sm:text-lg dark:text-gray-400",dangerouslySetInnerHTML:{__html:c(e.input1,15)}}),(0,i.jsx)(n.default,{href:"/BigBlog?id=".concat(e.id),className:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Read More"})]},t))})]})})]})}},3061:function(e,t,l){"use strict";var i=l(3827);l(5601),t.Z=e=>{let{title:t,description:l,ogTitle:n,ogDescription:r,plaintext:a,conicalurl:o}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("head",{children:[(0,i.jsx)("meta",{property:"title",content:t||"Default Title"}),(0,i.jsx)("meta",{property:"description",content:l||"Default Title"}),(0,i.jsx)("meta",{property:"og:title",content:n||"Default Title"}),(0,i.jsx)("meta",{property:"og:description",content:r||"Default Description"}),(0,i.jsx)("meta",{name:"plaintext",content:a||""}),(0,i.jsx)("link",{rel:"canonical",href:o||"https://yourwebsite.com"})]})})}}},function(e){e.O(0,[8792,7908,2971,8069,1744],function(){return e(e.s=9455)}),_N_E=e.O()}]);