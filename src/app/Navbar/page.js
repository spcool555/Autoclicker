"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";


 const Navbar = () => {
  const [dark, setDark] = useState(false);
  function toggleTheme() {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('darkMode', newDark ? 'dark' : 'light'); // Store preference in localStorage
  }
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedMode) {
      setDark(storedMode === 'dark');
    } else {
      setDark(prefersDark);
    }
  }, []);
  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Effect to update the body's data-theme attribute based on dark state
  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      router.push('/');
      
      // Set timer to remove token after 5 minutes
      const removeTokenTimeout = setTimeout(() => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        alert("token expired");
        router.push('/SignIn'); // Redirect to login page after token expiration
      }, 10000 * 60 * 1000); // 5 minutes in milliseconds

      // Event handler function for 'unload' event
      const handleUnload = () => {
        localStorage.removeItem('token');
      };

      // Add event listener for 'unload' event
      window.addEventListener('unload', handleUnload);

      // Cleanup function to clear the timer and remove event listener
      return () => {
        clearTimeout(removeTokenTimeout);
        window.removeEventListener('unload', handleUnload);
      };
    } else {
      // Token doesn't exist or is empty
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

 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const router = useRouter();
  useEffect(() => {
      // Get the uid value from local storage
      const uid = localStorage.getItem('uid');
      console.log("UID value:", uid); // Log the value of uid

      if (!uid) {
          // If uid is undefined or null, redirect to the home page
          router.push('/');
      } else if (uid !== '1') {
          // If the user is not an admin, redirect to the home page
          router.push('/');
      } 
  }, []);

  
  return (
    <nav  className="bg-[#1C2B71] text-white relative z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
      <Link  href="/"     className="router-link-active router-link-exact-active flex items-center space-x-2 mr-5">
      <Image src="/logo.png" alt="logo" width={170} height={56}  className="h-8"/>
        
      </Link>
      <button
        onClick={toggleMobileMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isMobileMenuOpen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      {/* Normal navbar for large screens */}
      <div className="hidden md:flex md:items-center md:space-x-4">
        <Link href="/" className="text-white-900">Home</Link>
        <Link href="/Download" className="text-white-900">Download</Link>
        <Link href="/Token" className="text-white-900">Token</Link>
        <Link href="/Forum" className="text-white-900">Forum</Link>
        <Link href="/Pricing" className="text-white-900">Pricing</Link>
        <Link href="/FAQ" className="text-white-900">FAQ</Link>
        <Link href="/Blog" className="text-white-900">Blog</Link>
        <Link href="/Documentation" className="text-white-900">Documentation</Link>
        <Link href="/Tools" className="text-white-900">Tools</Link>


     
      {isLoggedIn ? (
        // Render this if the user is logged in
        <button onClick={handleLogout} className="text-white-900"
        
        >Logout</button>
        
      ) : (
        // Render this if the user is not logged in
        <Link href="/SignIn" className="text-white-900"
        
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >SignIn</Link>
      )}


      {isLoggedIn ? (
        // Render this if the user is logged in
        <Link href="/Profile" className="block py-2 px-3 text-white-900"
        
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen ? "true" : "false"}

        >Profile</Link>
        
      ) : (
        // Render this if the user is not logged in
        <Link hidden href=""></Link>
      )}
   <div id="toggle" onClick={toggleTheme} className="pl-4">
      <svg className={dark ? '' : 'hidden'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"></path>
      </svg>
      <svg className={dark ? 'hidden' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"></path>
      </svg>
    </div>





      </div>
    </div>
    {/* Mobile menu */}
    <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-y-2">
        <li>
          <Link href="/" className="block py-2 px-3 text-blue-700 rounded hover:bg-gray-100"
           onClick={toggleMobileMenu}
           aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Home</Link>
        </li>
        <li>
          <Link href="/Download" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" 
              onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Download</Link>
        </li>
        <li>
          <Link href="/Token" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
           onClick={toggleMobileMenu}
           aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Token</Link>
        </li>
        <li>
          <Link href="/Forum" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
           onClick={toggleMobileMenu}
           aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Forum</Link>
        </li>
        <li>
          <Link href="/Pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
           onClick={toggleMobileMenu}
           aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Pricing</Link>
        </li>
        <li>
          <Link href="/FAQ" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
           >FAQs</Link>
        </li>
        <li>
          <Link href="/Blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
          
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Blog</Link>
        </li>
        <li>
          <Link href="/Help" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
          
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Documentation</Link>
        </li>
        <li>
          <Link href="/Tools" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
          
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >Tools</Link>
        </li>

  
        <li>
      {isLoggedIn ? (
        // Render this if the user is logged in
        <button onClick={handleLogout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
        
        >Logout</button>
        
      ) : (
        // Render this if the user is not logged in
        <Link href="/SignIn" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
        
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >SignIn</Link>
      )}
    </li>
    <li>
      {isLoggedIn ? (
        // Render this if the user is logged in
        <Link href="/Profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
        
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen ? "true" : "false"}

        >Profile</Link>
        
      ) : (
        // Render this if the user is not logged in
        <Link hidden href=""></Link>
      )}
    </li>

 







      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
