"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const [allMetadata, setAllMetadata] = useState([]);
  
  useEffect(() => {
    GetAllQuestionAnswer();
  }, []);

  const GetAllQuestionAnswer = () => {
    axios.get('http://localhost:8081/public/metadata')
      .then((res) => {
        setAllMetadata(res.data);
        console.log("Metadata:", res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
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

  return (
    <html lang="en">
      <head>
        <meta property="title" content={metadata[0]?.title || "Default Title"} />
        <meta property="description" content={metadata[0]?.description || "Default Title"} />
        <meta property="og:title" content={metadata[0]?.ogTitle || "Default Title"} />
        <meta property="og:description" content={metadata[0]?.ogDescription || "Default Description"} />
        <meta name="plaintext" content={metadata[0]?.plaintext || ""} />
        <link rel="canonical" href={metadata[0]?.conicalurl || "https://yourwebsite.com"} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
