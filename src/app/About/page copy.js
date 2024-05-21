"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SEO from "../seo/Seo";

const About = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:8081/public/aboutimage/1") // Adjust the URL according to your endpoint
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => console.error("Error fetching image:", error));
    Getall();
  }, []);

  const Getall = () => {
    axios
      .get("http://localhost:8081/public/abouttext")
      .then((res) => {
        setData(res.data);
        console.log("data...", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  let metaData = {
    title: "About us page" || "Default Title",
    description: "About us decription" || "Default Description",
    ogTitle: "About us ogtitle" || "Default OG Title",
    ogDescription: "About us ogtitle Description" || "Default OG Description",
    conicalurl
      : "conicalurl"
      || "https://example.com",
    plaintext: "About us plaintext" || "Default Plaintext",
  }
  return (
    <>
      <SEO title={metaData?.title} description={metaData?.description} ogTitle={metaData?.ogTitle} ogDescription={metaData?.ogDescription} plaintext={metaData?.plaintext} conicalurl={metaData?.conicalurl}  />
      <div id="bg">
      <div class="heroContainer overflow-x-clip">
        <div class="max-w-screen-lg mx-auto md:space-y-10">
          <div class="grid md:grid-cols-2 gap-5 pt-8 p-5 md:pt-20">
            <div class="mx-auto max-w-screen-xl relative">
              <h1 class="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
                About us
              </h1>

              <div class="space-y-8 pt-5">
                <div>
                  {Array.isArray(data) &&
                    data.map((item, ind) => (
                      <p key={ind} dangerouslySetInnerHTML={{ __html: item.items }}></p> // Always use a key when mapping over an array in React
                    ))}
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <span class="relative">
                <div class="">
                  <Image src={imageUrl} alt="" width={500} height={50} />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default About;
