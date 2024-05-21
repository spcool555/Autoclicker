'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DownloadFrontPage from "../../../../DownloadFrontPage/page";
const Download = () => {
  const [data,setData] = useState([]);
  const [data2,setData2] = useState([]);
  const [data3,setData3] = useState([]);
  const [data4,setData4] = useState([]);
  
useEffect(()=>{
  GetAllFeaturebox();
  Getallinstprocedures();
  GetAllApllicationData();
  GetAllWorkflow();
},[]);
  const GetAllFeaturebox = ()=>{
      axios.get('http://65.2.172.195:8081/public/saverequirements/5').then((res)=>{
          setData(res.data)
          console.log("data...",res.data)
        }).catch((err)=>{
          console.log("err",err)
        })
      
  }
  const Getallinstprocedures=()=>{
    axios.get('http://65.2.172.195:8081/public/instprocedure/5').then((res)=>{
      setData2(res.data)
      console.log("data.instalprocedure..",res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  
  }

  const GetAllApllicationData =()=>{
    axios.get('http://65.2.172.195:8081/public/Applicationbox/5').then((res)=>{
      setData3(res.data)
      console.log("data.instalprocedure..",res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }
const GetAllWorkflow = () =>{
axios.get('http://65.2.172.195:8081/public/workflow/5').then((res)=>{
  setData4(res.data)
  console.log("data.workflow..",res.data)
}).catch((err)=>{
  console.log("err",err)
})

}

  return (
  
    <div className="p3 p4" >
        <DownloadFrontPage />
      <section className="space-y-10 max-w-screen-xl mx-auto">
     
    <div className="bg-[#F3F4F6] dark:bg-[#162458] p0 p-5 md:px-10 md:py-8 border-slate-500 dark:border-black drop-shadow-[0_7px_29px_rgba(0,0,0,0.3)] rounded-sm">
          <div className="grid items-center text-center grid-cols-1 md:grid-cols-4 gap-3">
            <div className="text-center">
              <Image
                src="/ios.svg" width={50} height={50}
                alt="Windows auto clicker"
                className="w-32 self-center m-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
           iOS
              </h2>
            </div>
            <div>
              <button className="w-full rounded-md bg-indigo-600 px-8 py-2.5 font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 duration-200 sm:w-auto outline-none">
                
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F4F6] dark:bg-[#162458] p0 p-5 md:px-10 md:py-8 border-slate-500 dark:border-black drop-shadow-[0_7px_29px_rgba(0,0,0,0.3)] rounded-sm">
          <div>
            <h2 className="text-xl md:text-xl font-semibold pb-2">
              Minimum System Requirements
            </h2>

            {
  data.map((item, ind) => (
    <div key={ind}> {/* Make sure to add a unique key for each element when using map */}
    <h3 className="font-semibold text-base text-gray-700 dark:text-gray-300 p4" dangerouslySetInnerHTML={{ __html: item.input1 }}></h3>
    <ul className="list-disc list-inside text-slate-600 dark:text-slate-200 md:pl-5 p4">
      <li dangerouslySetInnerHTML={{ __html: item.input2 }}></li> {/* Assuming item.input2 is a string, wrap it in a list item */}
    </ul>
  </div>
  ))
}

          </div>
        </div>
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold pt-10">
          Downloading and Installing Procedure of MT Auto Clicker
        </h1>
        <ol className="relative border-s border-gray-300 dark:border-gray-700">
        {
                data2.map((item,ind)=>(
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 p4 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="font-semibold p4 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item.items }}>
       
            </div>
          </li>
                ))
        }
         
        </ol>
        <div className="mx-auto max-w-screen-xl relative">
          <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
            Applications of MT Auto Clicker
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-10">
          {
                data3.map((item,ind)=>(

            <div className="p-5 space-y-2 md:space-y-4 p3 bg-[#F3F4F6] dark:bg-[#162458] dark:hover:bg-[#0C1633] hover:bg-[#0C1633] group duration-100 cursor-pointer rounded-xl flex flex-col items-center drop-shadow-[0_7px_29px_rgba(0,0,0,0.3)]">
              <div className="svg w-12 md:w-16 text-[#0795FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  style={{ width: 'inherit', height: 'inherit' }}
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center group-hover:text-slate-300" dangerouslySetInnerHTML={{ __html: item.input1 }}></h3>
              <p className="md:text-base text-center group-hover:text-slate-300" dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
            </div>
                ))
          }
        
        
          </div>
        </div>
        <div className="py-20">
          <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
            How Does MT Auto Clicker Work?
          </h1>
          <div className="space-y-4 pt-5">
            <p>
              MT Auto Clicker makes automating repetitive tasks simple through
              customizable feature sets. Here's a quick rundown:
            </p>
            {
              data4.map((item,ind)=>(
            <div className="flex items-start space-x-5 relative">
              <div className="absolute left-0 w-6 h-6 bg-[#6366F1] rounded-full text-black flex items-center justify-center font-bold">
                <div className="w-4 h-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    style={{ width: 'inherit', height: 'inherit' }}
                  >
                    <path
                      fill="currentColor"
                      d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41L4.157 8.5z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="pl-4" dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
              <p dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
            </div>
              ))
}
          
            <p>
              Get started with task automation now and reclaim hours lost in
              tedious, repetitive work!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
