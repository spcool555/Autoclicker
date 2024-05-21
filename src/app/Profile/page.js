"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

 const Profile = () => {
    const [imageUrl, setImageUrl] = useState('');
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        profession: '',
        bio: ''
    });

    const profileChangeNav = () => {
        const uid = localStorage.getItem('uid');
        fetch(`http://localhost:8081/public/profileimage/${uid}`)
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })
            .catch((error) => console.error("Error fetching image:", error));
    };

    useEffect(() => {
        profileChangeNav();
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/');
        }
    }, [router]);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        const uid = localStorage.getItem('uid');
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8081/adminuser/profileupload/${uid}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log('Upload successful');
                profileChangeNav();
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        const uid = localStorage.getItem('uid');
        const token = localStorage.getItem('token');
        e.preventDefault();

        // Send data to the REST API
        axios.post(`http://localhost:8081/adminuser/saveprofiledata/${uid}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            console.log("Response:", response);
            Swal.fire({
                icon: 'success',
                title: 'Form data saved successfully',
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was a problem saving the form data!',
                footer: 'Please try again later'
            });
        });
    };

    useEffect(() => {
        const uid = localStorage.getItem('uid');
        axios.get(`http://localhost:8081/public/userdata/${uid}`)
        .then((res) => {
            console.log("Received data:", res.data);
            setFormData(res.data);
        })
        .catch((err) => {
            console.log("Error:", err);
        });
    }, []);



















    
  return (
   <>
   
   
<div class="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row p0 p4 text-[#161931]">
    <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div class="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

            <h2 class="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

            <a href="#" class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                Pubic Profile
            </a>
            <a href="#"
                class="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full hover:bg-white">
                Current Plan
            </a>
            <a href="#"
                class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full hover:bg-white ">
                Notifications
            </a>
            {formData && formData.role === "ADMIN" && (
                    <Link href="/Admin" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full hover:bg-white">
                        Admin Panel
                    </Link>
                )}
        </div>
    </aside>
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                    <div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <Image className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                           src={imageUrl}    alt="Bordered avatar"  width={40} height={40}/>
 
                        <div class="flex flex-col space-y-5 sm:ml-8">
                  
                        <label htmlFor="file-upload" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 cursor-pointer">
        Change picture
        {/* Hidden file input */}
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
                    
                        
                        </div>
                    </div>

                    <div class="items-center mt-8 sm:mt-14 text-[#202142]">

                    <form onSubmit={handleSubmit}>
                        <div
                            class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div class="w-full">
                           
                                <label for="first_name"
                                    class="block mb-2 text-sm font-medium text-indigo-900 p4">Your
                                    first name</label>
                                <input type="text" id="firstname"  value={formData.firstname} onChange={handleChange}
                                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name"  required />
                            </div>

                            <div class="w-full">
                                <label for="last_name" 
                                    class="block mb-2 text-sm font-medium text-indigo-900 p4">Your
                                    last name</label>
                                <input type="text" id="lastname" value={formData.lastname} onChange={handleChange}
                                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your last name" required />
                            </div>
                           

                        
                        </div>
                        <div class="mb-2 sm:mb-6">
                                <label for="contact" 
                                    class="block mb-2 text-sm font-medium text-indigo-900 p4">Your
                                    Contact No</label>
                                    <input 
    type="number" 
    id="contact" 
    value={formData.contact} 
    onChange={handleChange} 
    onInput={(e) => {
        if (e.target.value.length > 10) {
            e.target.value = e.target.value.slice(0, 10); // Restrict input to 10 characters
        }
    }}
    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
    placeholder="Your contact number" 
    required 
/>


                            </div>
                        <div class="mb-2 sm:mb-6">
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-indigo-900 p4">Your
                                Email</label>
                            <input type="email" id="email"  value={formData.email} onChange={handleChange}
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" required  readOnly/>
                        </div>
                        <div class="mb-2 sm:mb-6">
                            <label for="refferal"
                                class="block mb-2 text-sm font-medium text-indigo-900 p4">Your
                                 Refferal Code</label>
                            <input type="refferal" id="refferal"  value={formData.refferalcode} 
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" required  readOnly/>
                        </div>

                        <div class="mb-2 sm:mb-6">
                            <label for="profession"
                                class="block mb-2 text-sm font-medium text-indigo-900 p4">Profession</label>
                            <input type="text" id="profession"  value={formData.profession} onChange={handleChange}
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your profession" required />

                                
                        </div>

                        <div class="mb-6">
                            <label for="message"
                                class="block mb-2 text-sm font-medium text-indigo-900 p4">Bio</label>
                            <textarea id="bio" rows="4"  value={formData.bio} onChange={handleChange}
                                class="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                                placeholder="Write your bio here..."></textarea>
                        </div>

                        

                        <div class="flex justify-end">
                            <button type="submit"
                                class="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                        </div>

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

export default Profile;