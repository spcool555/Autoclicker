"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import AdminSidebar from '../../AdminSidebar/page';

const FeaturesMT = () => {
    const [editid, setEditid] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        GetAllFeaturebox();
    }, []);

    const handleInput1Change = (value) => {
        setInput1(value);
    };

    const handleInput2Change = (value) => {
        setInput2(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (input1.trim() === '' || input2.trim() === '') {
            setError('Please enter a value for the item name.');
            return;
          }
        const apiUrl = 'http://65.2.172.195:8081/admin/saveFormData';
        const token = localStorage.getItem('token');

        const formData = {
            id: editid,
            input1: input1,
            input2: input2,
        };

        try {
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            Swal.fire({
                title: "",
                icon: 'success',
            });

            setInput1('');
            setInput2('');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            Swal.fire({
                title: "",
                icon: 'success',
            });
            setInput1('');
            setInput2('');
            GetAllFeaturebox();
        }
    };

    const GetAllFeaturebox = () => {
        axios.get('http://65.2.172.195:8081/public/featurebox')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    async function EditById(editid) {
        try {
            const response = await axios.get(`http://65.2.172.195:8081/public/featureboxedit/${editid}`);
            const { id, input1, input2 } = response.data; // Assuming the response has id, question, and answers fields
            setEditid(id); // Assuming you have a state to hold the question id
            setInput1(input1);
            setInput2(input2);
            console.log("dataediiitttnewww...", response.data);
        } catch (error) {
            console.log("err", error);
        }
    }
    async function handleDelete(id) {
        try {
            const token = localStorage.getItem('token');
          const response = await fetch(`http://65.2.172.195:8081/admin/deletefeaturebox/${id}`, {
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
            <AdminSidebar />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                            <div className="grid max-w-2xl mx-auto mt-8">
                            {error && <p className="text-red-500">{error}</p>}
                                <h4 className="text-lg font-semibold">Features of MT Auto clicker</h4>
                                <form onSubmit={handleSubmit} className="mt-4">
                                    <div className="mb-4">
                                        <label htmlFor="formInput1" className="block mb-2 text-sm font-medium text-gray-900">Heading</label>
                                        <JoditEditor
                                           
                                            id="formInput1"
                                         
                                            required
                                            value={input1}
                                            onChange={handleInput1Change}
                                                />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="formInput2" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                        <JoditEditor
                                            id="formInput2"
                                            value={input2}
                                            onChange={handleInput2Change}
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
                                    <h4 className="text-lg font-semibold mt-6 mb-4">Featuresbox</h4>
                                    <div>
                                        {data.map((item, ind) => (
                                            <div key={ind} className='border-double border-4 border-indigo-600 ...'>
                                                <p className="mb-1 font-semibold">Heading</p>
                                                <p  dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
                                                <p className="mb-1 font-semibold">Description</p>
                                                <p dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
                                                <button type="Delete" id="del"  onClick={() => handleDelete(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                                                <button type="Edit" id="edit"  onClick={() => EditById(item.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>

                                            </div>
                                        ))}
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

export default FeaturesMT;
