"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {useSearchParams} from "react-router-dom";

const BigBlog = () => {
  const [newsData, setNewsData] = useState(null);
 
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;
  const id = searchParams ? searchParams.get("id") : null;
  

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://65.2.172.195:8081/public/newsbox/${id}`);
      setNewsData(response?.data);
      console.log("Response:", response);
      console.log("Data:", response?.data);
     
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  return (
    <div id="bg">
      <div className="heroContainer overflow-x-clip">
        <div className="max-w-screen-lg mx-auto md:space-y-10">
          {newsData && ( // Check if newsData is not null
            <div className="grid md:grid-cols-2 gap-5 pt-8 p-5 md:pt-20">
              <div className="mx-auto max-w-screen-xl relative">
                <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold" dangerouslySetInnerHTML={{ __html: newsData.input1 }}></h1>

                <div className="space-y-8 pt-5">
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: newsData.input2 }}></p>
                  <div>
                    {/* Render any additional elements based on your data */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <span className="relative">
                  <div>
                  <img src={newsData.input3} alt="img" className="standard-image" />
                  </div>
                </span>
              </div>
            </div>
          )}
          {!newsData && ( // Show a loading message if newsData is null
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigBlog;
