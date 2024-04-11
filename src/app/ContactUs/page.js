'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap"
import Swal from 'sweetalert2';
const Help = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    const formData = {
      name: name,
      email: email,
      message: message,
    };
  
    try {
      const response = await axios.post(
        'http://65.2.172.195:8081/public/contactus',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Message sent:', response.data);
      Swal.fire(
        'Submitted!',
        'Thank you for contacting us. Admin will contact you shortly',
        'success'
      );
      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }finally {
      setIsLoading(false); // Stop loading regardless of the outcome
    }
  };
  


  return (
    <div>
   <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  {isLoading && (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
)}

      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Thank you for visiting MTAutoClicker.com ! We value your feedback, questions, and suggestions. Please feel free to reach out to us; we’d love to hear from you.</p>
      <Form onSubmit={handleSubmit}>
      <div className='m-2'>
          
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
      </div>
          <div className='m-2'>
             
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email Address" required />
          </div>
          
          <div class="sm:col-span-2" className='m-2'>
              
              <textarea id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
         <center> <button  type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button></center>
      </Form>
  </div>
</section>
      
    </div>
  )
}

export default Help
