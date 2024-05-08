"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import SEO from "../seo/Seo";
import SidebarDocumentation from '../Documentation/sidebarDocumentation/page'
 const Documentation = () => {


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
<div class="bg-white p0 p4 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
   <SidebarDocumentation/>
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Documentation</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                

                  rgfg
                </div>
            </div>
        </div>
    </main>
</div>
   </>
  );
};

export default Documentation;