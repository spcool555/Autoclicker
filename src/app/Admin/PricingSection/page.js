"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import AdminSidebar from '../AdminSidebar/page';

const PricingSection = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        GetAllFeaturebox();
    }, []);

    const handleInput1Change = (value) => {
        setInput1(value);
    };

    const handleInput2Change = (value) => {
        setInput2(value);
    };
    const handleInput3Change = (event) => {
        setInput3(event.target.value);
    };
    const handleInput4Change = (value) => {
        setInput4(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const apiUrl = 'http://65.2.172.195:8081/admin/savePriceFormData';
        const token = localStorage.getItem('token');

        const formData = {
            input1: input1,
            input2: input2,
            input3: input3,
            input4: input4,
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
            setInput3('');
            setInput4('');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            Swal.fire({
                title: "",
                icon: 'success',
            });
            setInput1('');
            setInput2('');
            setInput3('');
            setInput4('');
            GetAllFeaturebox();
        }
    };

    const GetAllFeaturebox = () => {
        axios.get('http://65.2.172.195:8081/public/pricefeaturebox')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    return (
        <>
            <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <AdminSidebar />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Admin Page</h2>

                            <div className="grid max-w-2xl mx-auto mt-8">
                                <h4 className="text-lg font-semibold">Package Pricing</h4>
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
                                    <div className="mb-4">
                                        <label htmlFor="formInput3" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                        <input
                                        type='text'
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required
                                            id="formInput3"
                                            value={input3}
                                            onChange={handleInput3Change}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="formInput4" className="block mb-2 text-sm font-medium text-gray-900">benefits</label>
                                        <JoditEditor
                                            id="formInput4"
                                            value={input4}
                                            onChange={handleInput4Change}
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
                                            <div key={ind}>
                                                <p className="mb-1 font-semibold">Heading</p>
                                                <p  dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
                                                <p className="mb-1 font-semibold">Description</p>
                                                <p dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
                                                <p className="mb-1 font-semibold">Price</p>
                                                <p dangerouslySetInnerHTML={{ __html: item.input3 }}></p>
                                                <p className="mb-1 font-semibold">Benefits</p>
                                                <p dangerouslySetInnerHTML={{ __html: item.input4 }}></p>
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

export default PricingSection;
