"use client";
import Image from "next/image";
import { useRouter } from "next/router"; // Corrected import statement
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../AdminSidebar/page';
import JoditEditor from "jodit-react";
import Nav2 from "../Nav2/page"
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

  const handleFileChange = (event) => {
    console.log('Event:', event);
 
    const file = event.target.files[0]; // Get the first file from the input
    if (!file) return;
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
    formData.append('input3', input3); // Append the file directly, no need for input3[0]
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
        const processedData = res?.data.map(newsItem => ({
          ...newsItem,
          imageUrl: `data:image/jpeg;base64,${newsItem.input3}` // Assuming input3 contains base64 encoded image data
        }));
        setData(processedData);
        console.log("Processed data:", processedData);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  };
  

  async function handleDelete(id) {
    try {
        const token = localStorage.getItem('token');
      const response = await fetch(`http://65.2.172.195:8081/admin/deletenewsbox/${id}`, {
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
       <Nav2 />
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

              <div className="grid max-w-2xl mx-auto mt-8">
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
                            Add Image
                          </label>
                                            
                                <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className=""
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
                                {data.map((item, ind) => (
                                  <div className="border-double border-4 border-indigo-600 ..." key={item.id}>
                                    <p>News Heading</p>
                                    <p dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
                                    <p>News Description</p>
                                    <p dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
                                    <p>News Url</p>
                                    <hr />
                                    <img src={item.imageUrl} alt={item.input1} className="mb-4 w-100 h-100 mx-auto" />
                                     <button type="button" id="del" onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                                  </div>
                                ))}
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
