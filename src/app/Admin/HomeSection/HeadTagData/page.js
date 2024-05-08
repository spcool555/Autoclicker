"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../../AdminSidebar/page';
import JoditEditor from "jodit-react";
 const HeadTagData = () => {

    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState('');
    const [questionAnswer,setQuestionAnswer] = useState([]);
    const [ogTitle,setOgTitle] = useState([]);
    const [ogDescription,setOgDescription] = useState([]);
    const [conicalurl,setConicalurl] = useState([]);
    const [plainText,setPlainText] = useState([]);

    const handleInput1Change = (e) => {
        setQuestion(e.target.value);
    };

    const handleInput2Change = (e) => {
        setAnswers(e.target.value);

    };
    const handleInput3Change = (e) => {
        setOgTitle(e.target.value);

    };
    const handleInput4Change = (e) => {
        setOgDescription(e.target.value);

    };
    const handleInput5Change = (e) => {
        setConicalurl(e.target.value);

    };
    const handleInput6Change = (e) => {
        setPlainText(e.target.value);

    };
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (question.trim() === '' && answers.trim() === '' )  {
            setError('Please enter a value for the question And Answer');
            return;
          }
        const apiUrl = 'http://65.2.172.195:8081/admin/metadata';
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        
        const formData = {
            question: question,
            answers: answers,
            conicalurl:conicalurl,
            ogDescription:ogDescription,
            ogTitle:ogTitle,
            plainText:plainText,

        };
    
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            
          
            Swal.fire({
                title:"",
                icon: 'success',
            })
            
            setQuestion('');
            setAnswers('');
            setConicalurl('')
            setOgDescription('')
            setOgTitle('')
            setPlainText('')
            GetAllQuestionAnswer();
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };
    

    useEffect(()=>{
        GetAllQuestionAnswer();
    },[]);
        const GetAllQuestionAnswer = ()=>{
            axios.get('http://65.2.172.195:8081/public/metadata').then((res)=>{
                setQuestionAnswer(res.data)
                console.log("data...",res.data)
              }).catch((err)=>{
                console.log("err",err)
              })
            
        }
        async function handleDelete(id) {
            try {
                const token = localStorage.getItem('token');
              const response = await fetch(`http://65.2.172.195:8081/admin/deletemetadata/${id}`, {
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
              GetAllQuestionAnswer();
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

                {error && <p className="text-red-500">{error}</p>}

                <div className="grid max-w-2xl mx-auto mt-8">
    <div>
        <h4 className="text-lg font-semibold mb-4">Add Meta Data In Head Tag</h4>
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
                <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900">Meta Title</label>
                <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Meta Title"
                  type="text"
                    id="question"
                    required
                   
                    value={question}
                    onChange={handleInput1Change}
                     />
                 
            </div>
            <div className="mb-4">
                <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900">Meta Description</label>
                <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Meta Description"
                  type="text"
                    id="answer"
                   
                    
                    required
                    value={answers}
                    onChange={handleInput2Change}
                   />
            </div>
            <div className="mb-4">
                <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900">Og Title</label>
                <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Og Title"
                  type="text"
                    id="ogtitle"
                   
                    
                    required
                    value={ogTitle}
                    onChange={handleInput3Change}
                   />
            </div>
            <div className="mb-4">
                <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900">Og Description</label>
                <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Og Description"
                  type="text"
                    id="ogdescription"
                   
                    
                    required
                    value={ogDescription}
                    onChange={handleInput4Change}
                   />
            </div>
            <div className="mb-4">
                <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900">Cononical Url</label>
                <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter conical url"
                  type="text"
                    id="conicalurl"
                   
                    
                    required
                    value={conicalurl}
                    onChange={handleInput5Change}
                   />
            </div>
            <div className="mb-4">
                <label htmlFor="palintext" className="block mb-2 text-sm font-medium text-gray-900">Plain Text</label>
                <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter plain text"
                  type="text"
                    id="palintext"
                   
                    
                    required
                    value={plainText}
                    onChange={handleInput6Change}
                   />
            </div>
            <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Save
            </button>
            <hr className="my-4 border-t border-gray-300" />
        </form>
        <div>
            <h4 className="text-lg font-semibold mb-4">Featuresbox</h4>
            <div className="border-double border-4 border-indigo-600 ...">
                {questionAnswer.map((item, ind) => (
                    <div key={ind} className="mb-4">
                        <p className="mb-1 font-semibold">Meta Title</p>
                        <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
                        <hr/>
                        <p className="mb-1 font-semibold">Meta Description </p>
                        <p dangerouslySetInnerHTML={{ __html: item.answers }}></p>
                        <hr/>
                        <p className="mb-1 font-semibold">Meta Og title </p>
                        <p dangerouslySetInnerHTML={{ __html: item.ogTitle }}></p>
                        <hr/>
                        <p className="mb-1 font-semibold">Meta Og Description </p>
                        <p dangerouslySetInnerHTML={{ __html: item.ogDescription }}></p>
                        <hr/>
                        <p className="mb-1 font-semibold">Meta Conical Url </p>
                        <p dangerouslySetInnerHTML={{ __html: item.conicalurl }}></p>
                        <hr/>
                        <p className="mb-1 font-semibold">Meta Plain text </p>
                        <p dangerouslySetInnerHTML={{ __html: item.plainText }}></p>
                        <hr/>
                        <button hidden type="Delete" id="del"  onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
        
                    </div>
                ))}
            </div>
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

export default HeadTagData;