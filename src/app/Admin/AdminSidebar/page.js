"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

 const AdminSidebar = () => {

   
  return (

   
   

    <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
    <div class="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

        <h2 class="pl-3 mb-4 text-2xl font-semibold">Website Update</h2>

      
        <div class="flex flex-col gap-2">
            <Link href="/Admin/HomeSection" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                Home Page 
            </Link>
            <div class="ml-6">
                <Link href="/Admin/HomeSection/SpecificationAndFeature" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Specification & Features
                </Link>
                <Link href="/Admin/HomeSection/Questions" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Frequently Asked Questions?
                </Link>
                <Link href="/Admin/HomeSection/FAQs" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Free/Paid FAQs
                </Link>
                <Link href="/Admin/HomeSection/FeaturesMT" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                FeaturesMT
                </Link>
                <Link href="/Admin/HomeSection/WhatMakes" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                WhatMakes MT Auto Clicker Different
                </Link>
                <Link href="/Admin/HomeSection/TopVideo" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                TopVideos
                </Link>
                <Link href="/Admin/HomeSection/HeadTagData" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                HeadTagData
                </Link>
              
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <Link href="" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                Download Page 
            </Link>
            <div class="ml-6">
                <Link href="/Admin/Download" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Minimum System Requirements
                </Link>
                <Link href="/Admin/Download/Procedure" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Downloading and Installing Procedure
                </Link>
                <Link href="/Admin/Download/Applications" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Applications of MT Auto Clicker
                </Link>
                <Link href="/Admin/Download/WorkFlow" class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                Work Flow
                </Link>
              
              
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <Link href="/Admin/PricingSection" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                Pricing Page 
            </Link>
           
        </div>
        <div class="flex flex-col gap-2">
            <Link href="/Admin/AboutSection" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                About Page 
            </Link>
           
        </div>

        {/* <div class="flex flex-col gap-2">
            <Link href="/Admin/Help" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                Help Section 
            </Link>
           
        </div> */}

        <div class="flex flex-col gap-2">
            <Link href="/Admin/BlogSection" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                Blog Page 
            </Link>
           
        </div>
        <div class="flex flex-col gap-2">
            <Link href="/Admin/Documentation" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
            Documentation Page
            </Link>
           
        </div>
        <div class="flex flex-col gap-2">
            <Link href="/Admin/PrivacyPolicy" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
         Privacy Policy Page
            </Link>
           
            <Link href="/Admin/TearmsOfUse" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
         Terms Of Use Page
            </Link>
            <Link href="/Admin/ChangeLogPage" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
         Change log Page
            </Link>
           
        </div>
        <div class="flex flex-col gap-2">
            <Link href="/Admin/FooterSection" class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
                Footer Page 
            </Link>
           
        </div>
    </div>
</aside>



  );
};

export default AdminSidebar;