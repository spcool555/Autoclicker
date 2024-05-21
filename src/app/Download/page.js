"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SEO from "../seo/Seo";
const Download = () => {

  let metaData = {
    title: "download page" || "Default Title",
    description: "download decription" || "Default Description",
    ogTitle: "download ogtitle" || "Default OG Title",
    ogDescription: "download ogtitle Description" || "Default OG Description",
    conicalurl
      : "conicalurl"
      || "https://example.com",
    plaintext: "download plaintext" || "Default Plaintext",
  }

  return (
    <>
      {/* Download MT Auto Clicker */}
      <SEO title={metaData?.title} description={metaData?.description} ogTitle={metaData?.ogTitle} ogDescription={metaData?.ogDescription} plaintext={metaData?.plaintext} conicalurl={metaData?.conicalurl}  />
      <div className="w-full m-auto relative p-5 py-10 md:px-8 md:py-20 p4 p3 " id="bg">
        <div className="mx-auto">
          <div className="pt-10 md:pt-0 pb-10 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl text-center font-bold">
              Download MT Auto Clicker
            </h1>
            <p className="py-5 md:text-center">

              Unlock efficiency with MT Auto Clicker – your go-to solution for
              automating repetitive clicking tasks. Download now for a seamless,
              user-friendly experience.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-4 p0">
          <div></div>
          <div className="mb-5 ">
            <Link
              href="/Download/Windows"
            >

              <img src="../windows.svg" className="rounded-full w-56 h-56" />
            </Link>
          </div>
          <div className="mb-5">
            <Link
              href="/Download/Linux"
            >
              <img src="../chrome.svg" className="rounded-full w-56 h-56" />
            </Link>
          </div>
          <div className="mb-5">
            <Link
              href="/Download/MacOs"
            >
              <img src="../apple.svg" className="rounded-full w-56 h-56" />
            </Link>
          </div>
          <div className="mb-5"></div>
          <div className="mb-5">
            <Link
              href="/Download/Android"
            >
              <img src="../android.svg" className="rounded-full w-56 h-56" />
            </Link>
          </div>
          <div className="mb-5">

          </div>
          <div className="mb-5">
            <Link
              href="/Download/iOS"
            >
              <img src="../ios.svg" className="rounded-full w-48 h-48" />
            </Link>
          </div>
        </div>

      </div>

    </>
  );
};

export default Download;
