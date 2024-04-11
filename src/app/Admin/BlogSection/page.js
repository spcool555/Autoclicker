"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../AdminSidebar/page';
import JoditEditor from "jodit-react";
 const BlogSection = () => {
   
  
 
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [data,setData] = useState([]);



  const handleInput1Change = (value) => {
      setInput1(value);
  };
  const handleInput3Change = (event) => {
      setInput3(event.target.value);
  };

  const handleInput2Change = (value) => {
      setInput2(value);
    
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      // Your API endpoint where the form data will be sent
      const apiUrl = 'http://localhost:8081/admin/news';
      const token = localStorage.getItem('token');
      // The data you want to send in JSON format
      const formData = {
     
          input1: input1,
          input2: input2,
          input3: input3,
      };
  
      try {
          // Making a POST request to the server with the form data
          const response = await fetch(apiUrl, {
              method: 'POST', // Method itself
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              },
              
              body: JSON.stringify(formData), // body data type must match "Content-Type" header
          });
  
          if (!response.ok) {
              // If the server response was not ok (e.g., 400, 401, 500, etc.), throw an error
              throw new Error('Network response was not ok');
          }
  
          // Assuming your server responds with the saved data or some message
          const result = await response.json();
  
          // Here, you can handle the response. For example, show a success message, clear the form, etc.
          console.log(result); // For demonstration purposes, we just log the result
          Swal.fire({
            title:"",
            icon: 'success',
        })
          
          // Optionally, reset the form fields to blank after successful submission

       
          setInput1('');
          setInput2('');
          setInput3('');
         
      } catch (error) {
          // Handle errors if the fetch fails (e.g., network error, server error)
          console.error('There was a problem with your fetch operation:', error);
          Swal.fire({
            title:"",
            icon: 'success',
        })
          setInput1('');
          setInput2('');
          setInput3('');
          GetAllFeaturebox();
      }
  };


useEffect(()=>{
  GetAllFeaturebox();
},[]);
  const GetAllFeaturebox = ()=>{
      axios.get('http://localhost:8081/public/newsbox').then((res)=>{
          setData(res.data)
          console.log("data...",res.data)
        }).catch((err)=>{
          console.log("err",err)
        })
      
  }

   
  return (
   <>
   
   
<div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
<AdminSidebar />
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                  

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
  <Card className="mb-4">
    <Card.Body>
      <Card.Title as="h4">    <Form.Label>Blog Section</Form.Label></Card.Title>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="m-4">
          <label htmlFor="formInput1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Heading
          </label>
          <JoditEditor
          required
        
            value={input1}
            onChange={handleInput1Change}
               />
        </div>
        <div className="mb-4">
          <label htmlFor="formInput2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <JoditEditor
           required
            id="formInput2"
      
            value={input2}
            onChange={handleInput2Change}
                />
        </div>
        <div className="mb-4">
          <label htmlFor="formInput3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Add URL
          </label>
          <input
           required
            id="formInput3"
            type="text"
            placeholder="Enter Url"
            value={input3}
            onChange={handleInput3Change}
            className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />
      </form>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title as="h4">News Box</Card.Title>
                          <div>
       {
         data.map((item,ind)=>(
             <div>
                 <p>News Heading</p>
                 <p  dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
           
                 <p>News Description</p>
                 <p dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
                 <p>News Url</p>
                 <p>{item.input3}</p>

             </div>
         ))
       }
       </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card.Body>
  </Card>
</div>

                </div>
            </div>
        </div>
    </main>
</div>
   </>
  );
};

export default BlogSection;