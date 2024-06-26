"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Nav2 from "../../Nav2/page"
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const SpecificationAndFeatures = () => {
    const [itemName, setItemName] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        Getall();
    }, []);

    const Getall = () => {
        axios.get('http://65.2.172.195:8081/public/items').then((res) => {
            setData(res.data)
            console.log("data...", res.data)
        }).catch((err) => {
            console.log("err", err)
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (itemName.trim() === '') {
            setError('Please enter a value for the item name.');
            return;
        }
        showConfirmationDialog();
    };

    const showConfirmationDialog = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Post',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                // User clicked Yes, proceed with form submission
                submitForm();
            }
        });
    };

    const submitForm = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://65.2.172.195:8081/admin/items',
                { items: itemName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                        'Content-Type': 'application/json', // Set the content type to JSON
                    },
                }
            );
            console.log('Item saved:', response.data);
            setItemName('');
            Getall();
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    return (
        <>

            <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
                <Nav2 />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">

                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                            <div className="grid max-w-2xl mx-auto mt-8">
                                <div className="col-span-6 md:col-span-12 xs:col-span-12 mb-6">
                                    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <div className="flex justify-between mb-5 items-center">
                                                <div className="flex items-center">

                                                    <div className="ms-3">
                                                        {error && <p className="text-red-500">{error}</p>}
                                                        <h1 className="mb-0 font-bold">Specification & Features</h1>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="mb-4">
                                                {
                                                    data.map((item, ind) => (
                                                        <div key={ind}>
                                                            <p dangerouslySetInnerHTML={{ __html: item.items }} ></p>

                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <div className="flex items-center mb-3">

                                                <Form onSubmit={handleSubmit} className="flex-grow ml-3">
                                                    <div className="flex gap-4 justify-start flex-col">



                                                        <JoditEditor
                                                            id="name"
                                                            value={itemName}
                                                            onChange={(content) => setItemName(content)}
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required
                                                        />



                                                        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Post</button>
                                                        
                                                    </div>
                                                </Form>
                                            </div>
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

export default SpecificationAndFeatures;
