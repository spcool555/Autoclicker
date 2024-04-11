"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../AdminSidebar/page';
 const HomeSection = () => {
   
    

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
      
        const formData = new FormData();
        formData.append('file', file);
        
        const token = localStorage.getItem('token');
        try {
          const response = await fetch('http://localhost:8081/admin/upload', {
            method: 'POST',
            body: formData,
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          if (response.ok) {
            
            Swal.fire({
              title:"Upload successful"
            })
          } else {
            Swal.fire({
              title:"Somthing went wrong"
            })
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    
    

  return (
   <>
   
   
<div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
<AdminSidebar />
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
    <div class="col-span-6 lg:col-span-12 md:col-span-12 xs:col-span-12 mb-6">
        <div class="bg-white dark:bg-gray-700 shadow-sm rounded-lg overflow-hidden">
            <div class="p-6">
                <h4 class="text-lg font-semibold mb-5">Update Specification Image</h4>
                <div>
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

            </div>
        </div>
    </main>
</div>
   </>
  );
};

export default HomeSection;