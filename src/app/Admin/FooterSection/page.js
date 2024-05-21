"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Nav2 from "../Nav2/page"
import JoditEditor from "jodit-react";
 const FooterSection = () => {
   
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/authentication/sign-in');
        }
      }, [router]);
  
      
      const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
      
        const formData = new FormData();
        formData.append('file', file);
        
        const token = localStorage.getItem('token');
        try {
          const response = await fetch('http://65.2.172.195:8081/admin/footerupload', {
            method: 'POST',
            body: formData,
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          if (response.ok) {
            Swal.fire({
              title:"",
              icon: 'success',
          })
          } else {
            console.error('Upload failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    
      const [about, setAbout] = useState('');
  
    
  
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'http://65.2.172.195:8081/admin/footertext',
          { items: about },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          }
        );
        Swal.fire({
          title:"",
          icon: 'success',
      })
        setAbout('');
        Getall();
      } catch (error) {
        console.error('Error saving item:', error);
      }
    };

   
  return (
   <>
   
   
<div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
<Nav2 />
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                  

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Footer Image Update</h5>
    </span>
    <div class="flex items-center justify-center w-full">
  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
      </svg>
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />

  </label>
</div>
</div>
                </div>
                <div class="grid max-w-2xl mx-auto mt-8">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Footer Text Update</h5>
    </span>

    <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div class="mb-5 mt-5">

  <JoditEditor

  
  value={about}
  onChange={(value) => setAbout(value)}
  required
/>
    </div>

 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
                    </div>
            </div>
        </div>
    </main>
</div>
   </>
  );
};

export default FooterSection;