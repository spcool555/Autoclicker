(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{1067:function(e,t,o){Promise.resolve().then(o.bind(o,1280))},8028:function(e,t,o){"use strict";o.d(t,{kZ:function(){return a},rg:function(){return i}});var n=o(4090);let l=(0,n.createContext)(null);function i(e){let{clientId:t,nonce:o,onScriptLoadSuccess:i,onScriptLoadError:r,children:a}=e,s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{nonce:t,onScriptLoadSuccess:o,onScriptLoadError:l}=e,[i,r]=(0,n.useState)(!1),a=(0,n.useRef)(o);a.current=o;let s=(0,n.useRef)(l);return s.current=l,(0,n.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=t,e.onload=()=>{var e;r(!0),null===(e=a.current)||void 0===e||e.call(a)},e.onerror=()=>{var e;r(!1),null===(e=s.current)||void 0===e||e.call(s)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t]),i}({nonce:o,onScriptLoadSuccess:i,onScriptLoadError:r}),c=(0,n.useMemo)(()=>({clientId:t,scriptLoadedSuccessfully:s}),[t,s]);return n.createElement(l.Provider,{value:c},a)}let r={large:40,medium:32,small:20};function a(e){let{onSuccess:t,onError:o,useOneTap:i,promptMomentNotification:a,type:s="standard",theme:c="outline",size:d="large",text:u,shape:m,logo_alignment:g,width:f,locale:h,click_listener:v,containerProps:p,...x}=e,w=(0,n.useRef)(null),{clientId:b,scriptLoadedSuccessfully:y}=function(){let e=(0,n.useContext)(l);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),j=(0,n.useRef)(t);j.current=t;let k=(0,n.useRef)(o);k.current=o;let S=(0,n.useRef)(a);return S.current=a,(0,n.useEffect)(()=>{var e,t,o,n,l,r,a,p,N;if(y)return null===(o=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===o||o.initialize({client_id:b,callback:e=>{var t,o;if(!(null==e?void 0:e.credential))return null===(t=k.current)||void 0===t?void 0:t.call(k);let{credential:n,select_by:l}=e;j.current({credential:n,clientId:null!==(o=null==e?void 0:e.clientId)&&void 0!==o?o:null==e?void 0:e.client_id,select_by:l})},...x}),null===(r=null===(l=null===(n=null==window?void 0:window.google)||void 0===n?void 0:n.accounts)||void 0===l?void 0:l.id)||void 0===r||r.renderButton(w.current,{type:s,theme:c,size:d,text:u,shape:m,logo_alignment:g,width:f,locale:h,click_listener:v}),i&&(null===(N=null===(p=null===(a=null==window?void 0:window.google)||void 0===a?void 0:a.accounts)||void 0===p?void 0:p.id)||void 0===N||N.prompt(S.current)),()=>{var e,t,o;i&&(null===(o=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===o||o.cancel())}},[b,y,i,s,c,d,u,m,g,f,h]),n.createElement("div",{...p,ref:w,style:{height:r[d],...null==p?void 0:p.style}})}},7907:function(e,t,o){"use strict";var n=o(5313);o.o(n,"useRouter")&&o.d(t,{useRouter:function(){return n.useRouter}})},1280:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return m}});var n=o(3827),l=o(7908),i=o(8792),r=o(7907),a=o(4090);class s extends Error{}s.prototype.name="InvalidTokenError";var c=o(3411),d=o.n(c),u=o(8028),m=()=>{let e=(0,r.useRouter)(),[t,o]=(0,a.useState)(""),[c,m]=(0,a.useState)(""),[g,f]=(0,a.useState)("");(0,a.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("email");e&&o(e)},[]);let[h,v]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let t=localStorage.getItem("token");t?(v(!0),e.push("/")):""==t&&(localStorage.removeItem("token"),v(!1))},[]),(0,a.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("email");e&&m(e)},[]);let p=async e=>{e.preventDefault(),l.Z.post("http://65.2.172.195:8081/auth/signin",{email:c,password:g}).then(e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("uid",e.data.id),localStorage.setItem("islogin",!0),"USER"==e.data.role?window.location.href="/":"ADMIN"==e.data.role?window.location.href="/":(m(""),f(""),d().fire({icon:"error",title:"Oops...",text:"Please enter a valid email id or password ",footer:"Please try again later"}),localStorage.removeItem("token"),v(!1)),console.log("res..",e)}).catch(e=>{console.log("err",e)})},x=async e=>{console.log("Received users:",e);let{email:t,password:o}=e;l.Z.post("http://65.2.172.195:8081/auth/signin",{email:t,password:o}).then(e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("uid",e.data.id),localStorage.setItem("islogin",!0),"USER"==e.data.role?window.location.href="/":"ADMIN"==e.data.role?window.location.href="/":(m(""),f(""),d().fire({icon:"error",title:"Oops...",text:"Please enter a valid email id or password ",footer:"Please try again later"}),localStorage.removeItem("token"),v(!1)),console.log("res..",e)}).catch(e=>{console.log("err",e)})},w=async e=>{let t={iss:e.iss,azp:e.azp,aud:e.aud,sub:e.sub,email:e.email,email_verified:e.email_verified,name:e.name,picture:e.picture,given_name:e.given_name,family_name:e.family_name,iat:e.iat,exp:e.exp,jti:e.jti,password:1234};l.Z.post("http://65.2.172.195:8081/auth/googlesignin",t).then(e=>{x(t),console.log("res..",e)}).catch(e=>{console.log("err",e)})};return(0,n.jsxs)("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 p0",children:[(0,n.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,n.jsx)("img",{className:"mx-auto h-10 w-auto",src:"/logo.png",alt:"Your Company"}),(0,n.jsx)("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight p4 text-gray-900",children:"Sign in to your account"})]}),(0,n.jsxs)("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,n.jsxs)("form",{className:"space-y-6",method:"POST",onSubmit:p,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 p4 text-gray-900",children:"Email address"}),(0,n.jsx)("div",{className:"mt-2 ",children:(0,n.jsx)("input",{defaultValue:t,onChange:e=>{m(e.target.value)},id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 p4 text-gray-900",children:"Password"}),(0,n.jsx)("div",{className:"text-sm",children:(0,n.jsx)("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Forgot password?"})})]}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("input",{onChange:e=>{f(e.target.value)},id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Sign in"})})]}),(0,n.jsx)("div",{className:"flex flex-col max-w-sm gap-2",children:(0,n.jsx)("center",{children:(0,n.jsx)(u.rg,{clientId:"126497486534-km344cdm7fvjhesdn4901ssn3o2m9nm1.apps.googleusercontent.com",children:(0,n.jsx)(u.kZ,{onSuccess:e=>{let t=function(e,t){let o;if("string"!=typeof e)throw new s("Invalid token specified: must be a string");t||(t={});let n=!0===t.header?0:1,l=e.split(".")[n];if("string"!=typeof l)throw new s("Invalid token specified: missing part #".concat(n+1));try{o=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var o;return o=t,decodeURIComponent(atob(o).replace(/(.)/g,(e,t)=>{let o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}catch(e){return atob(t)}}(l)}catch(e){throw new s("Invalid token specified: invalid base64 for part #".concat(n+1," (").concat(e.message,")"))}try{return JSON.parse(o)}catch(e){throw new s("Invalid token specified: invalid json for part #".concat(n+1," (").concat(e.message,")"))}}(e.credential);console.log(t),w(t)},onError:()=>{console.log("Login Failed")}})})})}),(0,n.jsxs)("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Not a member?"," ",(0,n.jsx)(i.default,{href:"/SignUp",className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"SignUp"})]})]})]})}}},function(e){e.O(0,[9461,8792,7908,2971,8069,1744],function(){return e(e.s=1067)}),_N_E=e.O()}]);