'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Pricing = () => {
    const [input1, setInput1] = useState('');
    const [input3, setInput3] = useState('');
    const [uid, setUid] = useState('');
    const [data, setData] = useState([]);
    const [userplan, setUserPlan] = useState([]);

    useEffect(() => {
        const uids = localStorage.getItem('uid');
        setUid(uids);
        GetAllFeaturebox();
        GetUserPlan();
    }, []);

    const GetAllFeaturebox = () => {
        axios.get('http://localhost:8081/public/pricefeaturebox')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    const GetUserPlan = () => {
        const uid = localStorage.getItem('uid');
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json', // example header, modify as needed
            'Authorization': `Bearer ${token}` // example header for authentication, modify as needed
            // Add more headers as needed
        };
    
        axios.get(`http://localhost:8081/adminuser/getPlanFormData/${uid}`, { headers })
            .then((res) => {
                setUserPlan(res.data);
                console.log("dddddddddddddd" + res.data);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    const handleSubmit = async (event, planid, planname, price) => {
        event.preventDefault();

        const apiUrl = 'http://localhost:8081/adminuser/savePlanFormData';
        const token = localStorage.getItem('token');

        const generateTransactionId = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const length = 10;
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        };
    
        // Set default status to 1 and generate random transaction id
        const formData = {
            uid,
            planid,
            planname,
            price,
            status: 1, // Default status
            transactionid: generateTransactionId(), // Random transaction id
        };
    

        try {
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                // Handle success
             
                Swal.fire({
                    title:"Plan Activated successfully",
                    icon:"success"
                })
                GetUserPlan();
            } else {
                throw new Error('Network response was not ok');
                
            }
           
            setInput1('');
            setInput3('');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            Swal.fire({
                title:"You Already Purchased a Plan. Please Delete Your Plan First. ",
                icon:"warning"
            })
            // Handle error
        }
    };

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* Pricing Card */}
                        {data.map((item) => (
                            <div key={item.id} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: item.input1 }}></h3>
                                <form onSubmit={(event) => handleSubmit(event, item.id, item.input1, item.input3)} className="mt-4">
                                    <input type='hidden' id="uid" value={uid} onChange={(e) => setUid(e.target.value)} />
                                    <input type='hidden' id="planid" value={item.id} />
                                    <input type='hidden' id="planname" value={item.input1} />
                                    <input type='hidden' id="price" value={item.input3} onChange={(e) => setInput3(e.target.value)} />

                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: item.input2 }}></p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-5xl font-extrabold" dangerouslySetInnerHTML={{ __html: item.input3 }}></span>
                                        <span className="text-gray-500 dark:text-gray-400">/Year</span>
                                    </div>
                                    {/* List */}
                                  
                                    <ul role="list" className="mb-8 space-y-4 text-left" dangerouslySetInnerHTML={{ __html: item.input4 }}></ul>
                                    {item.id === userplan.planid ? (
                <button disabled className="text-white bg-primary-600 opacity-50 cursor-not-allowed hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Active Plan</button>
            ) : (
                <button type='submit' className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</button>
            )}
                                     </form>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
