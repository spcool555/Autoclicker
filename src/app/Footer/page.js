'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";


const Footer = () => {

  const [imageUrl, setImageUrl] = useState("");
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/public/footerimage/1") // Adjust the URL according to your endpoint
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => console.error("Error fetching image:", error));
      Getall();
  }, []);
  
  const Getall=()=>{
    axios.get('http://localhost:8081/public/footertext').then((res)=>{
      setData(res.data)
      console.log("data...",res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  
  }
  return (
  
    <footer className="bg-black p-5 relative text-slate-400 py-10">
      <section className="max-w-screen-xl mx-auto my-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-5 mx-auto pb-10">
          <div className="footer flex flex-col items-center md:items-start space-y-5 justify-center col-span-2">
          <div  className="router-link-active router-link-exact-active font-bold flex flex-row space-x-2">
          <Image src={imageUrl} alt="logo" width={150} height={56} />
                 
                </div>
                {
              data.map((item,ind)=>(
               
             
            <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: item.items }}></p>
             ))
            }
            <div className="">
              <div className="flex space-x-5">
                <a href="" className="w-8 h-8 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                </a>
                <a href="" className="w-8 h-8 cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                </a>
                <a href="" className="w-8 h-8 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    </a>
              </div>
            </div>
            <hr className="py-1 w-full md:hidden" />
          </div>
          <div className="footer flex md:justify-center py-5 md:py-0">
            <div className="">
              <p className="font-bold pb-2 text-white">Link</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/About" className="cursor-pointer" aria-label="">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs" className="cursor-pointer" aria-label="">
                    Contact Us
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="footer py-5 md:py-0">
            <p className="font-bold pb-2 text-white">Pages</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/cookie-policy"
                  className="cursor-pointer"
                  aria-label=""
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="cursor-pointer"
                  aria-label=""
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="cursor-pointer" aria-label="">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="container text-center w-full py-2 max-w-3xl mx-auto">
        <small>
          <p className="text-[#888888]">
            © 2024
            <a
              href="/"
              className="router-link-active router-link-exact-active"
              aria-label=""
              aria-current="page"
            >
              
              mtautoclicker.com
            </a>
            . All rights reserved.
          </p>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
