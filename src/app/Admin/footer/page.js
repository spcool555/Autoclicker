'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Col, Card, Dropdown, Image, Button, Row, Form } from 'react-bootstrap';
import { useRouter } from "next/navigation";
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/page';
const Footer = () => {

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
          console.log('Upload successful');
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
      console.log('Item saved:', response.data);
      setAbout('');
      Getall();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };
  
  return (
   <div>
    <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            <Card>
            <Card.Title as="h2">Footer Section</Card.Title>
            <Card.Body>
  <Card.Title as="h4">Update Footer Image</Card.Title>
  <div>
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
<hr/>
<Card.Title as="h4">Update Footer Text</Card.Title>
  <Row>
        
        <Col xl={11} lg={10} md={9} xs={12}>
        <Form onSubmit={handleSubmit}>
  <Row className="row g-3 align-items-center">
   
    <Col md={8} xxl={9} className="mt-0 mt-md-3">
    <textarea
    required
id="about"
rows={'5'}
cols={'35'}
value={about}
onChange={(e) => setAbout(e.target.value)}

/>

    </Col>
  </Row>
  <hr/>
    <Col md={2} xxl={2}>
      <Button type="submit" className="d-grid">
        Save
      </Button>
    </Col>
</Form>
        </Col>
      </Row>
</Card.Body>


            </Card>
        </Col>
      
   </div>
  )
}

export default Footer