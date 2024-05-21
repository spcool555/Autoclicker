"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import { useEffect, useState } from "react";
import axios from "axios";
import SEO from './seo/Seo'
import { GoogleOAuthProvider } from '@react-oauth/google';
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children}) => {
  return (
    <html lang="en">
      <head>
      <link href="https://demo.dashboardpack.com/architectui-html-free/main.css" rel="stylesheet"/>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      {/* <SEO title={metadata[0]?.title} description={metadata[0]?.description} ogTitle={metadata[0]?.ogTitle} ogDescription={metadata[0]?.ogDescription} plaintext={metadata[0]?.plaintext} conicalurl={metadata[0]?.conicalurl}  /> */}
      </head>

      <body className={inter.className}>
        <div >
        <GoogleOAuthProvider clientId="126497486534-km344cdm7fvjhesdn4901ssn3o2m9nm1.apps.googleusercontent.com"></GoogleOAuthProvider>
        <Navbar />
        {children}
        <Footer />
        </div>
        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script type="text/javascript" src="https://demo.dashboardpack.com/architectui-html-free/assets/scripts/main.js"></script>
      </body>
    </html>

  );
}

export default RootLayout;
