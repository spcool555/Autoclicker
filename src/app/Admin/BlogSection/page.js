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
  const [data, setData] = useState([]);

  const handleInput1Change = (value) => {
    setInput1(value);
  };

  const handleInput2Change = (value) => {
    setInput2(value);
  };

  const handleInput3Change = (file) => {
    setInput3(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input3) {
      Swal.fire({
        icon: 'error',
        text: 'Please select a file.',
      });
      return;
    }

    const formData = new FormData();
    formData.append('input3', input3);
    formData.append('input1', input1);
    formData.append('input2', input2);

    try {
      const response = await axios.post('http://65.2.172.195:8081/admin/news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Form data saved successfully.',
        });
        setInput1('');
        setInput2('');
        setInput3('');
        // Optionally, you can reload the blog entries after successful submission
        GetAllFeaturebox();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      Swal.fire({
        icon: 'error',
        text: 'Failed to upload file.',
      });
    }
  };

  useEffect(() => {
    GetAllFeaturebox();
  }, []);

  const GetAllFeaturebox = () => {
    axios.get('http://65.2.172.195:8081/public/newsbox')
      .then((res) => {
        setData(res.data);
        console.log("data...", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
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
          
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Image Update</h5>
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
    <input id="dropzone-file" type="file" className="hidden" name="input3" onChange={(event) => handleInput3Change(event.target.files[0])} />


  </label>
</div>
</div>
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
                 {/* <p>{item.input3}</p> */}
                 {/* <img src="D:/autoclicker/Autoclickers/public/a.jpg" alt="ssss"  />
                  */}
<img src={item.input3} alt="Starter" class="mb-4 w-100 h-100 mx-auto" />

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