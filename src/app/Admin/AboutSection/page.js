"use client";
// Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";

import { Button, Card, Col, Form, Row } from "react-bootstrap";

import AboutImage from '../AboutImage/page';
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";
import Nav2 from "../Nav2/page"
 const AboutSection = () => {
  const [about, setAbout] = useState('');
  const [data,setData] = useState([]);

useEffect(()=>{
Getall();
},[]);


const Getall=()=>{
  axios.get('http://localhost:8081/public/abouttext').then((res)=>{
    setData(res.data)
    console.log("data...",res.data)
  }).catch((err)=>{
    console.log("err",err)
  })

}
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      'http://localhost:8081/admin/abouttext',
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

                <div class="grid max-w-2xl mx-auto mt-8 border border-black p-5">
                  

                    <div class="items-center mt-8 sm:mt-14 text-[#202142]">

                    <Col xl={6} md={12} xs={12} className="mb-6">
    <Card>
      <Card.Body>
      <h4> About Text</h4>
        <div className="d-flex justify-content-between mb-5 align-items-center">
          {/* avatar */}
      
       
        </div>
        <div className="mb-4">
          {/* text */}
          <div>
            {
              data.map((item,ind)=>(
                <p dangerouslySetInnerHTML={{ __html: item.items }}></p>
              ))
            }
          </div>
         
        </div>
        {/* icons */}
    
        {/* row */}
        <Row>
        
     
        </Row>
      </Card.Body>
    </Card>
  </Col>




  
<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div class="mb-5 mt-5">
  <Card.Body>
      <h4>Update About Text</h4>

  </Card.Body>
  <JoditEditor
  className="border border-black"
  id="about"

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
    <AboutImage />
    
</div>
   </>
  );
};

export default AboutSection;