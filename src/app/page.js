'use client'


import useClickToken from '../app/useClickToken/useClickToken';
import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
const Content = () => {

  const [imageUrl, setImageUrl] = useState('');
  const [data,setData] = useState([]);
  const [data2,setData2] = useState([]);
  const [questionAnswer,setQuestionAnswer] = useState([]);

  const { handleClick, clickCount, message } = useClickToken();
useEffect(()=>{
Getall();
GetAllFeaturebox();
GetAllQuestionAnswer();
},[]);

const GetAllFeaturebox = ()=>{
  axios.get('http://localhost:8081/public/featurebox').then((res)=>{
      setData2(res.data)
      console.log("data...",res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  
}
const Getall=()=>{
  axios.get('http://localhost:8081/public/items').then((res)=>{
    setData(res.data)
    console.log("data...",res.data)
  }).catch((err)=>{
    console.log("err",err)
  })

}

  const GetAllQuestionAnswer = ()=>{
      axios.get('http://localhost:8081/public/questionanswer').then((res)=>{
          setQuestionAnswer(res.data)
          console.log("data...",res.data)
        }).catch((err)=>{
          console.log("err",err)
        })
      
  }
  useEffect(() => {
      fetch('http://localhost:8081/public/image/1') // Adjust the URL according to your endpoint
          .then(response => response.blob())
          .then(blob => {
              const url = URL.createObjectURL(blob);
              setImageUrl(url);
          })
          .catch(error => console.error('Error fetching image:', error));
  }, []);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['./windows.svg', './apple.svg', './chrome.svg', './linux.svg'];
  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through images
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once


  const [data3,setData3] = useState([]);

  useEffect(()=>{
    Getallwhatmakes();
    },[]);
    
    
    const Getallwhatmakes=()=>{
      axios.get('http://localhost:8081/public/whatmakes').then((res)=>{
        setData3(res.data)
        console.log("data333333333...",res.data)
      }).catch((err)=>{
        console.log("err",err)
      })
    
    }


    const [data4,setData4] = useState([]);
    
    useEffect(()=>{
      GetAllLatestMtblog();
      },[]);
        const GetAllLatestMtblog= ()=>{
            axios.get('http://localhost:8081/public/newsbox').then((res)=>{
                setData4(res.data)
                console.log("data44444444...",res.data)
              }).catch((err)=>{
                console.log("err",err)
              })
            
        }


const[video, setVideo]=useState([]);

        useEffect(() => {
          GetallTopVideo();
      }, []);
  
      const GetallTopVideo = () => {
          axios.get('http://localhost:8081/public/topvideo').then((res) => {
              setVideo(res.data)
              console.log("videodata...", res.data)
          }).catch((err) => {
              console.log("err", err)
          })
  
      }





  return (
    <>
    <section className="relative overflow-hidden">
     
     
    <div className="bg-white dark:bg-[rgb(22,36,88)]">
      <div className="w-full m-auto relative px-3 py-10 md:py-20 md:px-20 mx-auto max-w-7xl">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex items-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-slate-700 dark:text-slate-200 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[60px]">
                <span className="text-[#1C2B71] dark:text-[#22DEFE]">
                  {" "}
                  MT Auto Clicker{" "}
                </span>
              </h1>
              <p className="mb-4 md:mb-8 md:text-xl py-6">
                {" "}
                Auto Clicker by MTAutoClicker.com: Streamline tasks with
                features like auto-clicking, scrolling, swiping, form-filling,
                hotkeys, zoom, screen capture, and more. Enhance efficiency
                and productivity effortlessly.{" "}
              </p>
              <Link
                href="/Download"
                className="w-full flex justify-center drop-shadow-2xl"
                aria-label="download"
              >
      
<button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
<img src={images[imageIndex]} alt="Download" className="w-6 h-6 inline-block mr-2" />

Download
</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-screen-xl relative md:py-20 p-5">
      <h2 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
        Work Smarter, Not Harder with MT
      </h2>
      <div>
            <button onClick={handleClick}>Click me!</button>
            {message && <p>{message}</p>}
            <p>Clicks: {clickCount}</p>
        </div>
      <div className="grid md:grid-cols-2 gap-5">
      <div className="col-span-1 bg-center bg-contain bg-no-repeat scale-105 h-[500px]"
             style={{ backgroundImage: `url('${imageUrl}')` }}>
        </div>

        <div>
          <p className="text-lg">
            MT Auto Clicker is a user-friendly tool designed to automate your
            multiple tasks with a bunch of features. Some of the features are
            as follows:
          </p>
          <p className="py-5">Features</p>
          <section className="space-y-3 md:space-y-3 text-slate-350 font-medium">
  {data.map((item, index) => (
    <div className="flex items-start space-x-5 relative" key={index}>
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
      <p className="pl-4"   dangerouslySetInnerHTML={{ __html: item.items }}></p>
    </div>
  ))}
</section>

        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-[#162458] relative p-5">
      <div className="mx-auto max-w-screen-xl relative pt-20">
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
          Features of MT Auto clicker
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {
            data2.map((item,ind)=>(
          <div className="p-5 space-y-2 md:space-y-4 bg-[#F3F4F6] dark:bg-[#162458] dark:hover:bg-[#0C1633] hover:bg-[#0C1633] group duration-100 cursor-pointer rounded-xl flex flex-col items-center drop-shadow-[0_7px_29px_rgba(0,0,0,0.3)]">
            <div className="svg w-12 md:w-16 text-[#0795FF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                  style={{ width: 'inherit', height: 'inherit' }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
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
      {/* latest from MT Blog */}
      <div className="mx-auto max-w-screen-xl relative pt-20">
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
        Latest from MT Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {
  data4.slice(-3).map((item, ind) => (
    <div key={ind} class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg">
      <img src="./a.jpg" alt="Starter" class="mb-4 w-100 h-100 mx-auto" />
      <div class="flex justify-center items-baseline my-8">
        <span class="mr-2 text-5xl font-extrabold"   dangerouslySetInnerHTML={{ __html: item.input1 }}></span>
      </div> 
      <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
      <ul role="list" class="m-8 space-y-4 text-left">
        <li class="flex items-center space-x-3">
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </li>
        {/* <!-- Other list items --> */}
      </ul>
      <Link href={item.input3} class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore</Link>

       
    </div>
  ))
}

        </div>
        <center>
        <Link href="/Blog" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore All</Link>
        </center>
      </div>
      {/* Top Videos from Our Channel */}
      <div className="mx-auto max-w-screen-xl relative pt-20">
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
        Top Videos from Our Channel
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {video.slice(-3).map((item, index) => (
         
      
        <iframe key={index}
  width="388" 
  height="315" 
  src={item.items}
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen 
  style={{borderRadius: '28px', border: '2px solid blue'}}>
</iframe>
  ))}
    
        </div>
        <center>
        <Link href="https://www.youtube.com/@OneMediaPlus" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore All</Link>
        </center>
      </div>
      <div className="mx-auto max-w-screen-xl relative py-20">
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
          What makes MT Auto Clicker Different?
        </h1>
        <div className="space-y-8 pt-5">
        {Array.isArray(data3) &&
                    data3.map((item, ind) => (
                      <p key={ind}  dangerouslySetInnerHTML={{ __html: item.items }}></p> // Always use a key when mapping over an array in React
                    ))}
      
    
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl relative select-none">
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
          Frequently Asked Questions?
        </h1>
        <div className="max-w-screen-xl py-5">
          <div className="space-y-4">
            {
              questionAnswer.slice(-4).map((item,ind)=>(

          
            <details
              className="group [&amp;_summary::-webkit-details-marker]:hidden"
            
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#F3F4F6] dark:bg-[#0C1633] p-4">
                <h2 className="font-medium" dangerouslySetInnerHTML={{ __html: item.question }}></h2>
               
              
            
              
                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p className="mt-4 px-4 leading-relaxed">
                <strong> Ans.</strong><p dangerouslySetInnerHTML={{ __html: item.answers }}></p>
              </p>
            </details>
                ))
              }
      
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Content;
