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

 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


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
