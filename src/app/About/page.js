"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SEO from "../seo/Seo";

const About = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://65.2.172.195:8081/public/aboutimage/1") // Adjust the URL according to your endpoint
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
      .get("http://65.2.172.195:8081/public/abouttext")
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
      <>
      <SEO 
        title={metaData?.title} 
        description={metaData?.description} 
        ogTitle={metaData?.ogTitle} 
        ogDescription={metaData?.ogDescription} 
        plaintext={metaData?.plaintext} 
        conicalurl={metaData?.conicalurl} 
      />
      <div className="max-w-screen-lg mx-auto md:space-y-10 p-5">
        <div className="grid md:grid-cols-2 gap-5 pt-8 md:pt-20">
          <div className="order-2 md:order-1 flex justify-center items-center">
            <span className="relative">
              <div>
                <Image src={imageUrl} alt="About Us Image" width={500} height={50} />
              </div>
            </span>
          </div>
          <div className="order-1 md:order-2 mx-auto max-w-screen-xl relative">
            <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
              About us
            </h1>
            <div className="space-y-8 pt-5">
              {Array.isArray(data) && data.map((item, ind) => (
                <p key={ind} dangerouslySetInnerHTML={{ __html: item.items }}></p>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-10 space-y-8">
          <h2 className="font-bold text-xl sm:text-3xl">The Reason behind MT Auto Clicker</h2>
          <p>At MT Auto Clicker, our mission is simple: to empower users with a reliable and efficient tool that streamlines their digital tasks. We understand the challenges of repetitive actions and the valuable time they consume. That's why we've dedicated ourselves to developing a best-in-class auto clicker that goes beyond the ordinary.</p>
          <p>Our commitment to excellence is unwavering. We believe users deserve a certified, trustworthy solution that delivers consistent results. With MT Auto Clicker, you can rest assured that you're getting a top-notch product that has undergone rigorous testing and optimization.</p>
          <p>But we continue beyond just software. We've expanded our offerings to include apps and extensions, ensuring you can access MT Auto Clicker's powerful features across multiple platforms. Whether working on your computer, using your smartphone, or browsing the web, our auto clicker is always at your fingertips.</p>
          <p>We aim to provide you with a seamless and intuitive experience, no matter which device you use. We've designed our software, apps, and extensions with user-friendliness in mind, making it easy for anyone to harness the power of automation and boost their productivity.</p>
          <p>At MT Auto Clicker, we're not just providing a tool; we're offering a solution that simplifies your digital life. Join us on this journey and discover how our certified and best-in-class auto clicker can revolutionize how you work and interact with technology.</p>
          <h2 className="font-bold text-xl sm:text-3xl">Our Values</h2>
          <ul className="list-decimal space-y-2 pl-5">
            <li><strong>User-centric approach:</strong> We put our users at the heart of everything. Your feedback and satisfaction drive us to continually enhance MT Auto Clicker.</li>
            <li><strong>Innovation:</strong> We embrace innovation and constantly explore new ways to improve our software, staying ahead of the curve in the automation industry.</li>
            <li><strong>Reliability:</strong> We understand the importance of trust, which is why we prioritize the reliability and stability of MT Auto Clicker.</li>
            <li><strong>Security:</strong> Protecting our users' data and privacy is of utmost importance to us. We employ robust security measures to safeguard your information.</li>
            <li><strong>Excellence:</strong> We strive for excellence in every aspect of our work, from software development to customer support.</li>
          </ul>
          <h2 className="font-bold text-xl sm:text-3xl">Excellence</h2>
          <p>At Web Treta, we are committed to delivering an exceptional user experience. We value your trust and work hard to maintain it by providing a reliable, secure, and feature-rich automation tool. Our dedicated customer support team is always ready to assist you with any questions or concerns.</p>
          <p>Our commitment to our users remains unwavering as we continue to grow and evolve. We will continue to listen to your feedback, innovate, and push the boundaries of what is possible with automation technology.</p>
          <p>Thank you for choosing MT Auto Clicker and participating in our journey. Together, let's automate the world, one click at a time.</p>
          <h2 className="font-bold text-xl sm:text-3xl">Contact Us</h2>
          <p>If you have any questions, suggestions, or feedback, please don't hesitate to contact us. You can reach our friendly customer support team through the contact page on our website: <a href="https://www.webtreta.com/#contact" className="no-underline text-blue-600">MT Auto Clicker's Contact Page</a> or <a href="https://www.webtreta.com/#contact" className="no-underline text-blue-600">Web Treta's Contact Page</a>.</p>
          <p>We look forward to hearing from you and assisting you on your automation journey with <a href="/" className="no-underline text-blue-600">MT Auto Clicker</a>.</p>
        </div>
      </div>
    </>
    </>
    
  );
};

export default About;
