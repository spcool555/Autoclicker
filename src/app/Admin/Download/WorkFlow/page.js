"use client";

import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Nav2 from "../../Nav2/page"
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
 const DownloadSectionApplication = () => {
  const router = useRouter();
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/authentication/sign-in');
      }
    }, [router]);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [data,setData] = useState([]);

  const handleInput1Change = (value) => {
      setInput1(value);
  };
  const handleInput3Change = (event) => {
    const { value } = event.target;
    setInput3(value);
};

  const handleInput2Change = (value) => {
      setInput2(value);
    
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      // Your API endpoint where the form data will be sent
      const apiUrl = 'http://65.2.172.195:8081/admin/workflow';
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
         
      } catch (error) {
          // Handle errors if the fetch fails (e.g., network error, server error)
          console.error('There was a problem with your fetch operation:', error);
          Swal.fire({
            title:"",
            icon: 'success',
        })
          setInput1('');
          setInput2('');
          GetAllFeaturebox();
      }
  };


useEffect(()=>{
  GetAllFeaturebox();
},[]);
  const GetAllFeaturebox2 = ()=>{
      axios.get(`http://65.2.172.195:8081/public/workflow/${input3}`).then((res)=>{
          setData(res.data)
          console.log("data...",res?.data)
        }).catch((err)=>{
          console.log("err",err)
        })
      
  }
  const fetchData = async () => {
    // Call GetAllFeaturebox here
    await GetAllFeaturebox2();
};

  useEffect(() => {
    // Define a function to call GetAllFeaturebox
    fetchData()
    // Call fetchData when input3 changes
    if (input3 !== '') {
        fetchData();
    }
  }, [input3]);

      const GetAllFeaturebox = ()=>{
          axios.get(`http://65.2.172.195:8081/public/workflow/${input3}`).then((res)=>{
              setData(res.data)
              console.log("data...",res.data)
            }).catch((err)=>{
              console.log("err",err)
            })
          
      }



       
    async function handleDelete(id) {
      try {
          const token = localStorage.getItem('token');
        const response = await fetch(`http://65.2.172.195:8081/admin/deleteworkflow/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ id }), // Send the ID of the item to be deleted
        });
    
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
    
        // Handle success, maybe update UI or state
        console.log('Item deleted successfully');
        GetAllFeaturebox();
      } catch (error) {
        console.error('Error deleting item:', error.message);
        // Handle error, maybe show an error message to the user
      }
    }
  return (
   <>
   
   
<div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
<Nav2  /> 
<main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>
                <div className="grid max-w-2xl mx-auto mt-8">
  <Row className="mb-8">
    <Col xl={3} lg={4} md={12} xs={12}>
      <div className="mb-4 mb-lg-0">
        <h4 className="mb-1 text-lg font-semibold">Work Flow</h4>
      </div>
    </Col>
    <Col xl={9} lg={8} md={12} xs={12}>
      <Card className="border border-gray-300 rounded-lg p-4">
        <Card.Body>
          <h4 className="mb-4 text-lg font-semibold">Add Points How Does MT Auto Clicker Work?</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formInput3">
              <Form.Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Operating System</Form.Label>
              <Form.Control
              required
                as="select"
                value={input3}
                onChange={handleInput3Change}
                className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Windows</option>
                <option value="2">MacOs</option>
                <option value="3">Linux</option>
                <option value="4">Android</option>
                <option value="5">iOS</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formInput1">
              <Form.Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading</Form.Label>
              <JoditEditor
              required
     
                value={input1}
                onChange={handleInput1Change}
                        />
            </Form.Group>
            <Form.Group controlId="formInput2">
              <Form.Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</Form.Label>
              <JoditEditor
              required
               
                value={input2}
                onChange={handleInput2Change}
                      />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </Button>
          </Form>
          <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Title as="h4" className="mb-3 text-lg font-semibold">Auto Clicker Workflow</Card.Title>
                  <div>
                    {data.map((item,ind)=>(
                      <div key={ind} className="mb-3 border-double border-4 border-indigo-600 ...">
                        <p className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Heading</p>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
                        <p className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</p>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
                        <button type="Delete" id="del"  onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                  
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>

                <div className="grid max-w-2xl mx-auto mt-8">



</div>


            </div>
        </div>
    </main>
</div>
   </>
  );
};

export default DownloadSectionApplication;