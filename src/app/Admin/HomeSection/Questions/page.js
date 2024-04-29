"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AdminSidebar from '../../AdminSidebar/page';
import JoditEditor from "jodit-react";
 const QuestionsSection = () => {
    const[questionId,setQuestionId]=useState('')
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState('');
    const [questionAnswer,setQuestionAnswer] = useState([]);
  

    const handleInput1Change = (value) => {
        setQuestion(value);
    };

    const handleInput2Change = (value) => {
        setAnswers(value);

    };
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (question.trim() === '' && answers.trim() === '' )  {
            setError('Please enter a value for the question And Answer');
            return;
          }
        const apiUrl = 'http://localhost:8081/admin/questionanswer';
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        
        const formData = {
            id:questionId,
            question: question,
            answers: answers,
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
            GetAllQuestionAnswer();
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };
    

    useEffect(()=>{
        GetAllQuestionAnswer();
    },[]);
        const GetAllQuestionAnswer = ()=>{
            axios.get('http://localhost:8081/public/questionanswer').then((res)=>{
                setQuestionAnswer(res.data)
                console.log("data...",res.data)
              }).catch((err)=>{
                console.log("err",err)
              })
            
        }

        async function EditQuestionAnswerById(questionId) {
            try {
                const response = await axios.get(`http://localhost:8081/public/questionansweredit/${questionId}`);
                const { id, question, answers } = response.data; // Assuming the response has id, question, and answers fields
                setQuestionId(id); // Assuming you have a state to hold the question id
                setQuestion(question);
                setAnswers(answers);
                console.log("dataediiittt...", response.data);
            } catch (error) {
                console.log("err", error);
            }
        }
        
        




        async function handleDelete(id) {
            try {
                const token = localStorage.getItem('token');
              const response = await fetch(`http://localhost:8081/admin/deleteQuestion/${id}`, {
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
        <h4 className="text-lg font-semibold mb-4">Frequently Asked Questions?</h4>
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
                 <input type="hidden" value={questionId} placeholder="id"/>
                <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900">Question</label>
                <JoditEditor
                  
                    id="question"
                    required
                   
                    value={question}
                    onChange={handleInput1Change}
                     />
                 
            </div>
            <div className="mb-4">
                <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900">Answer</label>
                <JoditEditor
                    id="answer"
                   
                    
                    required
                    value={answers}
                    onChange={handleInput2Change}
                   ></JoditEditor>
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
            <div >
                {questionAnswer.map((item, ind) => (
                    <div key={ind} className="mb-4 border-double border-4 border-indigo-600 ...">
                        
                        <p className="mb-1 font-semibold">Questions</p>
                        <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
                        <p className="mb-1 font-semibold">Answer</p>
                        <p dangerouslySetInnerHTML={{ __html: item.answers }}></p>
                        <button type="Delete" id="del"  onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                        <button type="Edit" id="edit"  onClick={() => EditQuestionAnswerById(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>

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

export default QuestionsSection;