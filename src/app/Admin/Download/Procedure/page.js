"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../../AdminSidebar/page';
import JoditEditor from "jodit-react";
 const DownloadSectionProcedure = () => {
    const [selectOs, setselectos] = useState('');
  const [itemName, setItemName] = useState('');
  const [editid, setEditid] = useState('');
  const [data,setData] = useState([]);
  const handleselectOsChange = (event) => {
    setselectos(event.target.value);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8081/admin/instprocedure',
        { id:editid,
          items: itemName ,
           selectOs: selectOs},
    
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
      setItemName('');
      Getall();
    } catch (error) {
      console.error('Error saving item:', error);
      Swal.fire({
        title:"something wrong",
        icon: 'warning',
    })
    }
  };

  useEffect(()=>{
    Getall();
    },[]);
    
    useEffect(() => {
      // Define a function to call GetAllFeaturebox
      const fetchData = async () => {
          // Call GetAllFeaturebox here
          await Getall();
      };
  
      // Call fetchData when input3 changes
      if (selectOs !== '') {
          fetchData();
      }
  }, [selectOs]);
    const Getall=()=>{
      axios.get(`http://localhost:8081/public/instprocedure/${selectOs}`).then((res)=>{
        setData(res.data)
        console.log("data...",res.data)
      }).catch((err)=>{
        console.log("err",err)
      })
    
    }
  

    async function handleDelete(id) {
      try {
          const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8081/admin/deleteprocedure/${id}`, {
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
        Getall();
      } catch (error) {
        console.error('Error deleting item:', error.message);
        // Handle error, maybe show an error message to the user
      }
    }


    
  async function EditById(editid) {
    try {
        const response = await axios.get(`http://localhost:8081/public/instproceduresedit/${editid}`);
        const { id, items } = response.data; // Assuming the response has id, question, and answers fields
        setEditid(id); // Assuming you have a state to hold the question id
        setItemName(items);
    
      
        console.log("dataediiitttnewww...", response.data);
    } catch (error) {
        console.log("err", error);
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

                <div className="grid max-w-2xl mx-auto mt-8">
                <div className="grid max-w-2xl mx-auto mt-8">
  <div className="max-w-md mx-auto">
    <Card className="mb-8">
      <Card.Body>
      

        <Row className="mb-4">
          <Col xl={3} lg={4} md={12} xs={12}>
            <div className="mb-4 mb-lg-0">
              <h4 className="mb-1 text-lg font-medium">Downloading and Installing Procedure</h4>
            </div>
          </Col>

          <Col xl={9} lg={8} md={12} xs={12}>
            <Card>
              <Card.Body>
                <h4 className="mb-3 text-lg font-semibold">Add Installing Procedure</h4>

                <Form onSubmit={handleSubmit}>
                  <Row className="row g-3 align-items-center">
              
                    <Form.Group controlId="formInput3" className="col-md-4">
                      <Form.Label className="text-sm font-medium">Select Operating System</Form.Label>
                      <Form.Control
                        as="select"  
                        value={selectOs}
                        onChange={handleselectOsChange}
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {/* Add options for dropdown */}
                        <option>Click Here</option>
                        <option value="1">Windows</option>
                        <option value="2">MacOs</option>
                        <option value="3">Linux</option>
                        <option value="4">Android</option>
                        <option value="5">iOS</option>
                        {/* Add more options as needed */}
                      </Form.Control>
                    </Form.Group>

                    <Col md={6} xxl={8} className="mt-3 mb-3 mt-md-3">
                      <JoditEditor
                        
                     
                        id="name"
                        value={itemName}
                        onChange={(value) => setItemName(value)}
                        required
                                 />
                    </Col>

                    <Col md={2} xxl={2}>
                      <Button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Post
                      </Button>
                    </Col>
                  </Row>
                </Form>

                <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />

                <h4 className='mb-3 text-lg font-semibold'>Installing Procedure</h4>
                <div>
                  {data.map((item,ind)=>(
                    <div className="mb-4 border-double border-4 border-indigo-600 ...">
                    <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item.items }}></p>
                  <button type="Delete" id="del"  onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                  <button type="Edit" id="edit"  onClick={() => EditById(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>

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
        </div>
    </main>
</div>
   </>
  );
};

export default DownloadSectionProcedure;