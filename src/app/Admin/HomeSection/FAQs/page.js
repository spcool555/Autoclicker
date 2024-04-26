"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../../AdminSidebar/page';
import JoditEditor from "jodit-react";
 const FAQs = () => {
  
  const router = useRouter();
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/authentication/sign-in');
      }
    }, [router]);
  const [input1, setInput1] = useState('');
 
  const [input3, setInput3] = useState('');
  const [data,setData] = useState([]);

  const [error, setError] = useState('');

  const handleInput1Change = (value) => {
      setInput1(value);
     
  };
  const handleInput3Change = (event) => {
    setInput3(event.target.value);
};
 
  useEffect(() => {
    // Define a function to call GetAllFeaturebox
    const fetchData = async () => {
        // Call GetAllFeaturebox here
        await GetAllFeaturebox();
    };

    // Call fetchData when input3 changes
    if (input3 !== '') {
        fetchData();
    }
}, [input3]);
  const handleSubmit = async (event) => {
      event.preventDefault();
      if (input1.trim() === '' || input3.trim() === '') {
        setError('Please enter a value .');
        return;
      }
      // Your API endpoint where the form data will be sent
      const apiUrl = 'http://65.2.172.195:8081/admin/savefaq';
      const token = localStorage.getItem('token');
      // The data you want to send in JSON format
      const formData = {
     
          input1: input1,
       
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
  
          setInput3('');
         
      } catch (error) {
          // Handle errors if the fetch fails (e.g., network error, server error)
          console.error('There was a problem with your fetch operation:', error);
          Swal.fire({
            title:"",
            icon: 'success',
        })
          setInput1('');
   
        
          GetAllFeaturebox();
      }
  };


useEffect(()=>{
  GetAllFeaturebox();
},[]);
  const GetAllFeaturebox = ()=>{
      axios.get(`http://65.2.172.195:8081/public/savefaq/${input3}`).then((res)=>{
          setData(res.data)
          console.log("data...",res.data)
        }).catch((err)=>{
          console.log("err",err)
        })
      
  }
  

  async function handleDelete(id) {
    try {
        const token = localStorage.getItem('token');
      const response = await fetch(`http://65.2.172.195:8081/admin/deleteFaq/${id}`, {
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
   
   
<div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
<AdminSidebar />
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                <div className="grid max-w-2xl mx-auto mt-8 border border-black">
  <div className="max-w-md mx-auto">
    <Card className="mb-4">
      <Card.Body>
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Add Free /  Paid FAQs</h2>
      {error && <p className="text-red-500">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formInput3">
            <Form.Label>Select Option</Form.Label>
            <Form.Control
            required
              as="select"  
              value={input3}
              onChange={handleInput3Change}
              className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {/* Add options for dropdown */}
              <option>Click Here</option>
              <option value="1">Free FAQs</option>
              <option value="2">Paid FAQs</option>
        
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formInput1 " className="mt-3">
            <Form.Label>Heading</Form.Label>
            <JoditEditor
              
              required
              placeholder="Enter Heading"
              value={input1}
              onChange={handleInput1Change}
                  />
          </Form.Group>

     

          <Button
            variant="primary"
            type="submit"
            className="mt-3 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </Button>

          <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />

        </Form>

        <Card className="mt-8">
          <Card.Body>
            <Card.Title as="h4">Free/Paid FAQs</Card.Title>
            
            <div className="mt-3">
              {data.map((item, ind) => (
                <div key={ind} className="mb-4 border-double border-4 border-indigo-600 ...">
                 
                 <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
    <li class="flex items-center">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        
         <p dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
         <button type="Delete" id="del"  onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                                   
    </li>
    </ul>
                 
            
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

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

export default FAQs;