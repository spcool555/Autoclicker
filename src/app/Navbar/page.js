"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
  }
}

export const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const router = useRouter();
  useEffect(() => {
    // Check for the token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    else if (token == ''){
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  }, []);
  
  const handleLogout = () => {
    // Remove the token from local storage to log out
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
    // Redirect to home page or do something else after logging out
    // window.location.href = '/'; // Uncomment if redirection is needed
  };

 



  return (
    <header className="bg-[#1C2B71] text-white relative z-50">
      <nav className="max-w-screen-xl mx-auto py-3 px-5 flex justify-between">
        <div className="flex justify-between items-center w-full">
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active flex items-center space-x-2 mr-5"
          >
            <Image src="/logo.png" alt="logo" width={170} height={56} />
          </a>
          <div className="hidden md:flex items-center space-x-5">
           <ul className="hidden h-full gap-12 lg:flex">
            
           <li><Link href="/">Home</Link></li>
           <li><Link href="/Download">Download</Link></li>
           <li><Link href="/Token">Token</Link></li>
           <li><Link href="/Forum">Forum</Link></li>
           <li><Link href="/Pricing">Pricing</Link></li>
           <li><Link href="/FAQ">FAQs</Link></li>
           <li><Link href="/Blog">Blog</Link></li>
           <li><Link href="/Help">Documentation</Link ></li>
           <li><Link href="/Tools">Tools</Link></li>
           {/* <li><Link href="/About">About</Link></li> */}
         
           
           <li>
      {isLoggedIn ? (
        // Render this if the user is logged in
        <button onClick={handleLogout}>Logout</button>
        
      ) : (
        // Render this if the user is not logged in
        <Link href="/SignIn">SignIn</Link>
      )}
    </li>
    <li>
      {isLoggedIn ? (
        // Render this if the user is logged in
        <Link href="/Profile">Profile</Link>
        
      ) : (
        // Render this if the user is not logged in
        <Link hidden href=""></Link>
      )}
    </li>

           </ul>
          </div>
          {/* <div className="flex items-center space-x-2">
            <div id="toggle" onClick={toggleTheme} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"
                ></path>
              </svg>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center items-center space-x-2">
          <div className="block md:hidden">
            <div className="pl-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
                ></path>
              </svg>
              <svg
                className="hidden w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                ></path>
              </svg>
            </div>
           
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
