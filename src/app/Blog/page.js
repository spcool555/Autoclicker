'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
const Blog = () => {
    const [data,setData] = useState([]);
    
useEffect(()=>{
    GetAllFeaturebox();
  },[]);
    const GetAllFeaturebox = ()=>{
        axios.get('http://localhost:8081/public/newsbox').then((res)=>{
            setData(res.data)
            console.log("data...",res.data)
          }).catch((err)=>{
            console.log("err",err)
          })
        
    }
  return (
  
<>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">AutoClicker</h2>
      <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">A full-fledged autoclicker with two modes of autoclicking</p>
    </div>
    <div class="grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10">
      {
        data.map((item, ind) => (
          <div key={ind} class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg">
            <img src="./a.jpg" alt="Starter" class="mb-4 w-100 h-100 mx-auto" />
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold" dangerouslySetInnerHTML={{ __html: item.input1 }}></span>
            </div>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
            <ul role="list" class="m-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>{item.input3}</span>
              </li>
              {/* <!-- Other list items --> */}
            </ul>
          </div>
        ))
      }
    </div>
  </div>
</section>

</>
  )
}

export default Blog
