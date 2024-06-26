'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SEO from "../seo/Seo";

const Blog = () => {
    const [data,setData] = useState([]);
    const [isReadMore, setIsReadMore] = useState(true);
    const [isReadMore2, setIsReadMore2] = useState(true);
    
    
useEffect(()=>{
    GetAllFeaturebox();
  },[]);
  const GetAllFeaturebox = () => {
    axios.get('http://65.2.172.195:8081/public/newsbox')
      .then((res) => {
        const processedData = res.data.map(newsItem => ({
          ...newsItem,
          imageUrl: `data:image/jpeg;base64,${newsItem.input3}` // Assuming input3 contains base64 encoded image data
        }));
        setData(processedData);
        console.log("Processed data:", processedData);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  };
  

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const toggleReadMore2 = () => {
    setIsReadMore2(!isReadMore2);
  };

    const MAX_WORDS = 15;
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
    let metaData = {
      title: "blog page",
      description: "blog decription",
      ogTitle: "blog ogtitle",
      ogDescription: "blog ogtitle Description",
      conicalurl
        : "conicalurl"
        || "https://example.com",
      plaintext: "blog plaintext",
    }
  return (
  
<>
<SEO title={metaData?.title} description={metaData?.description} ogTitle={metaData?.ogTitle} ogDescription={metaData?.ogDescription} plaintext={metaData?.plaintext} conicalurl={metaData?.conicalurl}  />

<section className=" dark:bg-gray-900 p3">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white">AutoClicker</h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4">A full-fledged autoclicker with two modes of autoclicking</p>
    </div>
    <div className="grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10 p0">
      {
        data.map((item, ind) => (
          <div key={ind} class="flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg" style={{ width: '400px' }}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={item.imageUrl} alt="img" className="standard-image" />
            </div>
        
          <div className='flex justify-center my-9' style={{ overflowWrap: 'anywhere', display: 'flex', flexDirection: 'column' }}>

            <div className='mr-1 text-3xl font-extrabold'
             
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
         
          <Link href={`/BigBlog?id=${item.id}`} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</Link>

        </div>
    //       <div key={ind} class="flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg">
    //   <img src={item.imageUrl} alt="img" className="standard-image" />
    //   <div class="flex justify-center items-baseline my-8">
    //     <span class="mr-2 text-5xl font-extrabold"   dangerouslySetInnerHTML={{ __html: item.input1 }}></span>
    //   </div> 
    //   <p className="font-light p4 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: truncateText(item.input1, MAX_WORDS) }}></p>
    //   <Link href={`/BigBlog?id=${item.id}`} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</Link>
       
    // </div>
        ))
      }
    </div>
  </div>
</section>

{/* 
<section className="bg-white dark:bg-gray-900 p0">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white">AutoClicker</h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4">A full-fledged autoclicker with two modes of autoclicking</p>
    </div>
   
  </div>
</section>
<div style={{flexWrap: 'wrap',
    justifyContent: 'center',
    display: 'flex',
    padding: '30px'}}>
  {
    leddata.map((item,index)=>(
<div key={index} style={{width:'400px'}}>
  <div>
  <img src={item.input3} alt="img" className="standard-image" />
  </div>
  <div>
    <label>{item.input1}</label>
  </div>
</div>
    ))
  }
</div>
 */}

</>
  )
}

export default Blog
