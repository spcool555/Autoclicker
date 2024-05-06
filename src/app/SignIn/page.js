'use client'
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';

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
    axios.post('http://localhost:8081/auth/signin',data)
    .then((res)=>{
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('uid',res.data.id)
      if(res.data.role == 'USER'){
        // router.push('/');    // without reloading
        window.location.href="/"   // with reloading
     
      }else if(res.data.role == 'ADMIN'){
        // window.location.href="http://localhost:3000" 
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
  const responseGoogle = (response) => {
    console.log(response);
    // Print user ID and name if available
    if (response.profileObj) {
      console.log('User ID:', response.profileObj.googleId);
      console.log('Name:', response.profileObj.name);
      // You can send the response.accessToken to your server for authentication
    }
    // Handle further authentication process
  };
  
  // const handleSignIn = () => {
  //   router.push('/oauth2/authorization/google');
  // };
  // useEffect(() => {
  //   // Function to handle redirect to Google Sign-In
  //   const handleSignInWithGoogle = async () => {
  //     // Perform a fetch to initiate OAuth2 flow
  //     const response = await fetch('/oauth2/authorization/google');
      
  //     // Redirect to the authorization URL received from the backend
  //     window.location.href = response.url;
  //   };

    // Attach event listener to the button
  //   const signInButton = document.getElementById('sign-in-with-google');
  //   signInButton.addEventListener('click', handleSignInWithGoogle);

  //   // Cleanup function
  //   return () => {
  //     signInButton.removeEventListener('click', handleSignInWithGoogle);
  //   };
  // }, []);
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
      <div class="flex flex-col max-w-sm gap-2">

{/* <button type="button" class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
<svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
    </path>
</svg>
Sign in with Facebook
</button> */}
{/* <Link href="http://localhost:8081/oauth2/authorization/google">
    <span id="sign-in-with-google" className="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
      <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
      </svg>
      Sign in with Google
    </span>
  </Link> */}


<GoogleLogin
          clientId="974361811013-8vefl7jsh1308jtrjd0brhp3lc4cp2i9.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="flex w-full justify-center rounded-md bg-red-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        />


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
