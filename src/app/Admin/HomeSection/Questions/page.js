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

    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState('');
    const [questionAnswer,setQuestionAnswer] = useState([]);

    const handleInput1Change = (value) => {
        setQuestion(value);
    };

    const handleInput2Change = (value) => {
        setAnswers(value);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const apiUrl = 'http://localhost:8081/admin/questionanswer';
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        
        const formData = {
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
  return (
   <>
   
   
<div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
    <AdminSidebar />
    <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

  

                <div className="grid max-w-2xl mx-auto mt-8">
    <div>
        <h4 className="text-lg font-semibold mb-4">Frequently Asked Questions?</h4>
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
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
            <div>
                {questionAnswer.map((item, ind) => (
                    <div key={ind} className="mb-4">
                        <p className="mb-1 font-semibold">Questions</p>
                        <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
                        <p className="mb-1 font-semibold">Answer</p>
                        <p dangerouslySetInnerHTML={{ __html: item.answers }}></p>
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