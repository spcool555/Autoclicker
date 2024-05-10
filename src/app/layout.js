"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import { useEffect, useState } from "react";
import axios from "axios";
import SEO from './seo/Seo'
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children}) => {
  // const [allMetadata, setAllMetadata] = useState([]);
  
  // useEffect(() => {
  //   GetAllQuestionAnswer();
  // }, []);

  // const GetAllQuestionAnswer = () => {
  //   axios.get('http://65.2.172.195:8081/public/metadata')
  //     .then((res) => {
  //       setAllMetadata(res.data);
  //       console.log("Metadata:", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error:", err);
  //     });
  // };

//   const generateMetadata = () => {
//     return allMetadata.map((item, ind) => ({
//       title: item.question || "Default Title",
//       description: item.answers || "Default Description",
//       ogTitle: item.ogTitle || "Default OG Title",
//       ogDescription: item.ogDescription || "Default OG Description",
//       conicalurl
// : item.conicalurl
//       || "https://example.com",
//       plaintext: item.plaintext || "Default Plaintext",
//     }));
//   };

  // const metadata = generateMetadata();

  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      {/* <SEO title={metadata[0]?.title} description={metadata[0]?.description} ogTitle={metadata[0]?.ogTitle} ogDescription={metadata[0]?.ogDescription} plaintext={metadata[0]?.plaintext} conicalurl={metadata[0]?.conicalurl}  /> */}
      </head>

      <body className={inter.className}>
        <div >
        <Navbar />
        {children}
        <Footer />
        </div>
      
      </body>
    </html>

  );
}

export default RootLayout;
