'use client'

import { useRouter } from 'next/navigation';
import useClickToken from '../app/useClickToken/useClickToken';
import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SEO from './seo/Seo';
import Image from "next/image";

const Content = () => {

  const [imageUrl, setImageUrl] = useState('');
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReadMore2, setIsReadMore2] = useState(true);

  const { handleClick, clickCount, message } = useClickToken();
  useEffect(() => {

    Getall();
    GetAllFeaturebox();
    GetAllQuestionAnswer();
  }, []);
  const [allMetadata, setAllMetadata] = useState([]);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const toggleReadMore2 = () => {
    setIsReadMore2(!isReadMore2);
  };
  const generateMetadata = () => {
    return allMetadata.map((item, ind) => ({
      title: item.question || "Default Title",
      description: item.answers || "Default Description",
      ogTitle: item.ogTitle || "Default OG Title",
      ogDescription: item.ogDescription || "Default OG Description",
      conicalurl
        : item.conicalurl
        || "https://example.com",
      plaintext: item.plaintext || "Default Plaintext",
    }));
  };

  const metadata = generateMetadata();
  const GetAllFeaturebox = () => {
    axios.get('http://65.2.172.195:8081/public/featurebox').then((res) => {
      setData2(res.data)

    }).catch((err) => {
      console.log("err", err)
    })

  }

  const Getall = () => {
    axios.get('http://65.2.172.195:8081/public/items').then((res) => {
      setData(res.data)

    }).catch((err) => {
      console.log("err", err)
    })

  }

  const GetAllQuestionAnswer = () => {
    axios.get('http://65.2.172.195:8081/public/questionanswer').then((res) => {
      setQuestionAnswer(res.data)

    }).catch((err) => {
      console.log("err", err)
    })

  }
  useEffect(() => {
    fetch('http://65.2.172.195:8081/public/image/1') // Adjust the URL according to your endpoint
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


  const [data3, setData3] = useState([]);

  useEffect(() => {
    Getallwhatmakes();
  }, []);


  const Getallwhatmakes = () => {
    axios.get('http://65.2.172.195:8081/public/whatmakes').then((res) => {
      setData3(res.data)

    }).catch((err) => {
      console.log("err", err)
    })

  }


  const [data4, setData4] = useState([]);

  useEffect(() => {
    GetAllLatestMtblog();
  }, []);
  const GetAllLatestMtblog = () => {
    axios.get('http://65.2.172.195:8081/public/newsbox')
      .then((res) => {
        const processedData = res.data.map(newsItem => ({
          ...newsItem,
          imageUrl: `data:image/jpeg;base64,${newsItem.input3}` // Assuming input3 contains base64 encoded image data
        }));
        setData4(processedData);
        console.log("Processed data:", processedData);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }
  const router = useRouter();

  const handleClick2 = () => {
    router.push({
      pathname: '/BigBlog',
      state: { id: item.id } // Pass ID as state
    });
  };

  const [video, setVideo] = useState([]);

  useEffect(() => {
    GetallTopVideo();
  }, []);

  const GetallTopVideo = () => {
    axios.get('http://65.2.172.195:8081/public/topvideo').then((res) => {
      setVideo(res.data)

    }).catch((err) => {
      console.log("err", err)
    })

  }


  const MAX_WORDS = 25;
  const createMarkup = (content) => {
    return { __html: content };
  };

  const getTruncatedHTML = (html, length) => {
    const div = document.createElement('div');
    div.innerHTML = html;

    let truncatedText = '';
    let currentLength = 0;
    const nodes = Array.from(div.childNodes);

    for (const node of nodes) {
      if (currentLength >= length) break;

      if (node.nodeType === Node.TEXT_NODE) {
        const remainingLength = length - currentLength;
        if (node.textContent.length > remainingLength) {
          truncatedText += node.textContent.slice(0, remainingLength) + '...';
          currentLength = length;
        } else {
          truncatedText += node.textContent;
          currentLength += node.textContent.length;
        }
      } else {
        const outerHTML = node.outerHTML;
        const nodeLength = node.textContent.length;
        if (currentLength + nodeLength > length) {
          const truncatedNodeContent = getTruncatedHTML(node.innerHTML, length - currentLength);
          truncatedText += `<${node.nodeName.toLowerCase()}>${truncatedNodeContent}</${node.nodeName.toLowerCase()}>`;
          currentLength = length;
        } else {
          truncatedText += outerHTML;
          currentLength += nodeLength;
        }
      }
    }

    return truncatedText;
  };
  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <>
      <SEO title={metadata[0]?.title} description={metadata[0]?.description} ogTitle={metadata[0]?.ogTitle} ogDescription={metadata[0]?.ogDescription} plaintext={metadata[0]?.plaintext} conicalurl={metadata[0]?.conicalurl} />
      <div className=" p4 p0 ">
        <section className="relative overflow-hidden">
          <div >
            <div className="w-full m-auto relative px-3 py-10 md:py-20 md:px-20 mx-auto max-w-7xl">
              <div className="max-w-screen-lg mx-auto">
                <div className="flex items-center">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-slate-700  mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[60px]">
                      <span className="text-[#1C2B71] p1">
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

                      <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
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
            <div hidden>
              <button onClick={handleClick}>Click me!</button>
              {message && <p>{message}</p>}
              <p>Clicks: {clickCount}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <div
                  className='imageboxHome'>

                  <div className="col-span bg-contain bg-no-repeat WorkSmarterBox"
                    style={{ backgroundImage: `url('${imageUrl}')` }}>

                  </div>

                  <div>
                    <p className="text-lg homeSmarterP">
                      MT Auto Clicker is a user-friendly tool designed to automate your
                      multiple tasks with a bunch of features. Some of the features are
                      as follows:
                    </p>
                    <p className="py-5">Features</p>
                  </div>

                </div>

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
                      <p className="pl-4" dangerouslySetInnerHTML={{ __html: item.items }}></p>
                    </div>
                  ))}
                </section>

              </div>
            </div>
          </div>
          <div className="">
            <div className="mx-auto max-w-screen-xl relative pt-20">
              <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
                Features of MT Auto clicker
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                {
                  data2.map((item, ind) => (
                    <div key={ind} className="p-5 space-y-2 md:space-y-4 p4 p0 dark:hover:bg-[#0C1633] hover:bg-[#0C1633] group duration-100 cursor-pointer rounded-xl flex flex-col items-center drop-shadow-[0_7px_29px_rgba(0,0,0,0.3)]">
                      <div className="svg w-12 md:w-16 text-[#0795FF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          style={{ width: 'inherit', height: 'inherit' }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10" >
                {
                  data4.map((item, ind) => (
                    <div key={ind} class="flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg" style={{ width: '400px' }}>
                      <div style={{display:'flex',justifyContent:'center'}}>
                      <img src={item.imageUrl} alt="img" className="standard-image" />
                        </div>
                    
                      <div className='flex justify-center my-9' style={{ overflowWrap: 'anywhere', display: 'flex', flexDirection: 'column' }}>

                        <div className='mr-1 text-3xl font-extrabold'
                          // dangerouslySetInnerHTML={{ __html: item.input1 }}
                          dangerouslySetInnerHTML={createMarkup(
                            isReadMore ? getTruncatedHTML(item.input1, 20) : item.input1
                          )}
                        >


                        </div>
                        <div>
                          {item.input1.length > 20 && (
                            <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer', fontSize: '13px' }}>
                              {isReadMore ? 'read more' : 'show less'}
                            </span>
                          )}
                        </div>

                      </div>
                      <div className='flex justify-center  my-30' style={{ overflowWrap: 'anywhere', display: 'flex', flexDirection: 'column' }}>

                        <div className="font-light p4 sm:text-lg dark:text-gray-400"
                          // dangerouslySetInnerHTML={{ __html: item.input1 }}
                          dangerouslySetInnerHTML={createMarkup(
                            isReadMore2 ? getTruncatedHTML(item.input2, 20) : item.input2
                          )}
                        >
                     
                        

                        </div>
                        <div>
                          {item.input2.length > 20 && (
                            <span onClick={toggleReadMore2} style={{ color: 'blue', cursor: 'pointer', fontSize: '13px' }}>
                              {isReadMore2 ? 'read more' : 'show less'}
                            </span>
                          )}
                        </div>

                      </div>
                      {/* <div class="flex justify-center items-baseline my-8">
                        <span class="mr-2 text-5xl font-extrabold" dangerouslySetInnerHTML={{ __html: item.input1 }}></span>
                        <p>{item.input1}</p>
                        
                       
                      </div> */}
                      {/* <p className="font-light p4 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: truncateText(item.input2, MAX_WORDS) }}></p> */}
                      {/* <p>{item.input2}</p> */}
                      <Link href={`/BigBlog?id=${item.id}`} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</Link>

                    </div>
                  ))
                }

              </div>
              <center>
                <Link href="/Blog" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore All</Link>
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
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ borderRadius: '28px', border: '2px solid blue' }}>
                  </iframe>
                ))}

              </div>
              <center>
                <Link href="https://www.youtube.com/@OneMediaPlus" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore All</Link>
              </center>
            </div>
            <div className="mx-auto max-w-screen-xl relative py-20">
              <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
                What makes MT Auto Clicker Different?
              </h1>
              <div className="space-y-8 pt-5">
                {Array.isArray(data3) &&
                  data3.map((item, ind) => (
                    <p key={ind} dangerouslySetInnerHTML={{ __html: item.items }}></p> // Always use a key when mapping over an array in React
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
                    questionAnswer.slice(-4).map((item, ind) => (


                      <details
                        className="group [&amp;_summary::-webkit-details-marker]:hidden"

                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p3 bg-[#F3F4F6] dark:bg-[#0C1633] p-4">
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
      </div>

    </>
  )
}

export default Content;
