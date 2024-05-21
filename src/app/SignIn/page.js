'use client'
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const SignIn = () => {
  const router = useRouter()
  const [email2, setEmail2]= useState('')
  
  const [email, setEmail] = useState('');
  // const [deviceid, setDeviceid] = useState('');

  const [password, setPassword] = useState('');
  useEffect(() => {
    // Create a URLSearchParams object from the current window location
    const queryParams = new URLSearchParams(window.location.search);
    // Fetch the email address from the URL query parameters
    const emailFromUrl = queryParams.get('email');
    // If there's an email parameter in the URL, set it in the state
    if (emailFromUrl) {
      setEmail2(emailFromUrl);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  useEffect(() => {
    // Check for the token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      router.push('/');
    }
    else if (token == ''){
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const emailFromUrl = queryParams.get('email');
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let data ={
      email:email,
      password:password,
      // deviceid:deviceid
    }
    axios.post('http://65.2.172.195:8081/auth/signin',data)
    .then((res)=>{
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('uid',res.data.id)
      localStorage.setItem('islogin',true)
      if(res.data.role == 'USER'){
        // router.push('/');    // without reloading
        window.location.href="/"   // with reloading
     
      }else if(res.data.role == 'ADMIN'){
        // window.location.href="http://65.2.172.195:3000" 
        window.location.href="/"
      }
      else{
          setEmail('');
        setPassword('');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a valid email id or password ',
          footer: 'Please try again later'
      });
        localStorage.removeItem('token');
        setIsLoggedIn(false);
       
           // without reloading
      }
      console.log("res..",res)
    }).catch((err)=>{
      console.log("err",err)
    })


  };
  const handleSubmitgoogles = async (data) => {

console.log("Received users:", data);
const { email, password } = data;
    let data2 ={
      email:email,
      password:password,
      // deviceid:deviceid
    }
    console.log("Received 22222222222222222222222222222222222222222users:", data2);
    axios.post('http://65.2.172.195:8081/auth/signin',data2)
    .then((res)=>{
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('uid',res.data.id)
      localStorage.setItem('islogin',true)
      if(res.data.role == 'USER'){
        // router.push('/');    // without reloading
        window.location.href="/"   // with reloading
     
      }else if(res.data.role == 'ADMIN'){
        // window.location.href="http://65.2.172.195:3000" 
        window.location.href="/"
      }
      else{
          setEmail('');
        setPassword('');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a valid email id or password ',
          footer: 'Please try again later'
      });
        localStorage.removeItem('token');
        setIsLoggedIn(false);
       
           // without reloading
      }
      console.log("res..",res)
    }).catch((err)=>{
      console.log("err",err)
    })


  };
  const emailInput = (event) => {
    setEmail(event.target.value);
  }
  const passwordInput = (event) => {
    setPassword(event.target.value);
  }
  const deviceids = (event) => {
    setDeviceid(event.target.value);
  }
  const handleSubmitgoogle = async (decodedHeader) => {
    
    let data ={
      iss: decodedHeader.iss,
        azp: decodedHeader.azp,
        aud: decodedHeader.aud,
        sub: decodedHeader.sub,
        email: decodedHeader.email,
        email_verified: decodedHeader.email_verified,
        name: decodedHeader.name,
        picture: decodedHeader.picture,
        given_name: decodedHeader.given_name,
        family_name: decodedHeader.family_name,
        iat: decodedHeader.iat,
        exp: decodedHeader.exp,
        jti: decodedHeader.jti,
        password:1234
    }
    axios.post('http://65.2.172.195:8081/auth/googlesignin',data)
    .then((res)=>{

      handleSubmitgoogles(data)
    
      console.log("res..",res)
    }).catch((err)=>{
      console.log("err",err)
    })


  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 p0">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="/logo.png"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight p4 text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6"  method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 p4 text-gray-900">
            Email address
          </label>
          <div className="mt-2 ">
            <input
            defaultValue={email2}
            onChange={emailInput}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {/* device in
            <input
            defaultValue={deviceid}
            onChange={deviceids}
              id="deviceid"
              name="deviceid"
              type="text"
              autoComplete="deviceid"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 p4 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              onChange={passwordInput}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="flex flex-col max-w-sm gap-2">



      <center>
      <GoogleOAuthProvider clientId="126497486534-km344cdm7fvjhesdn4901ssn3o2m9nm1.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decodedHeader = jwtDecode(
                credentialResponse.credential
              );
              console.log(decodedHeader);
              handleSubmitgoogle(decodedHeader);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
        </center>
 

</div>    
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}

        <Link href="/SignUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          SignUp
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignIn;
