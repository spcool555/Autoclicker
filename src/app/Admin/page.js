"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminSidebar from '../Admin/AdminSidebar/page';

 const Profile = () => {
    const router = useRouter();
    useEffect(() => {
        // Get the uid value from local storage
        const uid = localStorage.getItem('uid');
        console.log("UID value:", uid); // Log the value of uid

        if (!uid) {
            // If uid is undefined or null, redirect to the home page
            router.push('/');
        } else if (uid !== '1') {
            // If the user is not an admin, redirect to the home page
            router.push('/');
        } 
    }, []);
    
  return (
   <>
   
   
<div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
<AdminSidebar />
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                  

                    <div class="items-center mt-8 sm:mt-14 text-[#202142]">

                    
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
   </>
  );
};

export default Profile;