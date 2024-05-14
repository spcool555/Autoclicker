'use client'
// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import sub components



import { useEffect, useState } from 'react';

const Pricing = () => {
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [data,setData] = useState([]);



  const handleInput1Change = (event) => {
      setInput1(event.target.value);
  };
  const handleInput3Change = (event) => {
      setInput3(event.target.value);
  };

  const handleInput2Change = (event) => {
      setInput2(event.target.value);
      let value = event.target.value;
      // Split existing input into lines
      let lines = value.split('\n');
      // Apply wrapping logic
      lines = lines.map(line => {
        if (line.length <= 38) return line;
        // Split long lines - simplistic approach
        let newLines = [];
        for (let i = 0; i < line.length; i += 38) {
          newLines.push(line.substring(i, i + 38));
        }
        return newLines.join('\n');
      });
      setInput2(lines.join('\n'));
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      // Your API endpoint where the form data will be sent
      const apiUrl = 'http://65.2.172.195:8081/admin/savehelpdata';
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
          alert('Form submitted successfully!');
          
          // Optionally, reset the form fields to blank after successful submission

       
          setInput1('');
          setInput2('');
          setInput3('');
         
      } catch (error) {
          // Handle errors if the fetch fails (e.g., network error, server error)
          console.error('There was a problem with your fetch operation:', error);
          alert('Form submitted successfully!');
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
      axios.get('http://65.2.172.195:8081/public/helpbox').then((res)=>{
          setData(res.data)
          console.log("data...",res.data)
        }).catch((err)=>{
          console.log("err",err)
        })
      
  }
  return (
 <> <Card className="mb-4">
 <Card.Body>
     <Card.Title as="h4">Features of MT Auto clicker</Card.Title>
     <Form onSubmit={handleSubmit}>
        
         <Form.Group controlId="formInput1">
             <Form.Label>Heading</Form.Label>
             <Form.Control
                 type="text"
                 placeholder="Enter Heading"
                 value={input1}
                 onChange={handleInput1Change}
             />
         </Form.Group>
         <Form.Group controlId="formInput2">
<Form.Label>Description</Form.Label>
<Form.Control
 as="textarea" // Changes this input to a textarea
 rows={3} // Optionally, you can specify the number of rows

 placeholder="Enter Description"
 value={input2}
 onChange={handleInput2Change}
/>
</Form.Group>
<Form.Group controlId="formInput3">
             <Form.Label>Add URL</Form.Label>
             <Form.Control
                 type="text"
                 placeholder="Enter Heading"
                 value={input3}
                 onChange={handleInput3Change}
             />
         </Form.Group>
<br/>
         <Button variant="primary" type="submit">
             Save
         </Button>
         <hr/>
     </Form>
     <Row>
     <Col xs={12}>
         {/* card */}
         <Card>
             {/* card body */}
             <Card.Body>
                 {/* card title */}
                 <Card.Title as="h4">Featuresbox</Card.Title>
                 <div>
       {
         data.map((item,ind)=>(
             <div>
                 <p>Heading</p>
                 <p>{item.input1}</p>
                 <p>Description</p>
                 <p>{item.input2}</p>
                 <p>Url</p>
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
</Card></>
  )
}

export default Pricing