"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Forum/style.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import SEO from "../seo/Seo";
const Forum = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [forumTitle, setforumTitle] = useState(false);
  const [FilterTopic, setfilterTopic] = useState([]);
  const [latestpost, setLatestpost] = useState([
    {
      id: 1,
      comment: 'Looking for perfect screen capture but struggling with quality',
      label: 'L'
    },
    {
      id: 2,
      comment: 'Looking for perfect screen capture but struggling with quality',
      label: 'N'
    },
    {
      id: 3,
      comment: 'Looking for perfect screen capture but struggling with quality',
      label: 'M'
    },
    {
      id: 4,
      comment: 'Looking for perfect screen capture but struggling with quality',
      label: 'H'
    }
  ])
  const [operatingList, setOperationList] = useState([
    {
      id: 1,
      operater: 'Windows Support',
      threads: '86.1K',
      message: '301.7K',
      comment: 'I DONT UNDERSTAND',
      time: '15 minutes ago',
      label: 'L'
    },
    {
      id: 2,
      operater: 'Mac Support',
      threads: '86.2K',
      message: '302.9K',
      comment: 'Effects through Logic to OBS',
      time: '15 minutes ago',
      label: 'N'
    },
    {
      id: 3,
      operater: 'Linux Support',
      threads: '86.2K',

      message: '302.9K',
      comment: 'Effects through Logic to OBS',
      time: '15 minutes ago',
      label: 'M'
    }
  ])
  const [topicList, setTopiclist] = useState([
    {
      id: 1,
      label: 'High CPU Usage/High Encoding/Taking too long to encode? Read this first!',
      avtar: 'M',
      operater: 'Mac Support',
      description: 'Jan 6, 2015',
      description2: 'dodgepong',
      point: 1,
      point2: '742K'
    },
    {
      id: 2,
      label: 'High CPU Usage/High Encoding/Taking too long to encode? Read this first!',
      avtar: 'M',
      operater: 'Windows Support',
      description: 'Jan 6, 2015',
      description2: 'dodgepong',
      point: 1,
      point2: '742K'
    },
    {
      id: 3,
      label: 'High CPU Usage/High Encoding/Taking too long to encode? Read this first!',
      avtar: 'M',
      operater: 'Linux Support',
      description: 'Jan 6, 2015',
      description2: 'dodgepong',
      point: 1,
      point2: '742K'
    },
    {
      id: 4,
      label: 'High CPU Usage/High Encoding/Taking too long to encode? Read this first!',
      avtar: 'M',
      operater: 'Linux Support',
      description: 'Jan 6, 2015',
      description2: 'dodgepong',
      point: 1,
      point2: '742K'
    }
  ])
  const router = useRouter();
  useEffect(() => {
    // Check for the token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    else if (token == '') {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const [ForumTitleName, setForumTitleName] = useState('');
  const [replyUid, setReplyUid] = useState(null);
  const [replyUname, setReplyUname] = useState('');
  const [isTopic, setIstopic] = useState(false)
  const toggleModal = (uid, uname) => {
    setIsOpen(!isOpen);
    setReplyUid(uid);
    setReplyUname(uname);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [newpost, setNewpost] = useState('');
  const [uid, setUid] = useState('');
  const [uname, setUname] = useState('');
  const [data, setData] = useState([]);
  const [curentuid2, setCurentuid2] = useState([]);
  const [replydata, setReplydata] = useState([]);


  useEffect(() => {
    Getall();
  }, []);

  const Getall = () => {
    axios.get('http://65.2.172.195:8081/public/newpost').then((res) => {
      const curentuid = localStorage.getItem('uid');
      setCurentuid2(curentuid);
      setData(res.data)
      console.log("data...", res.data)
    }).catch((err) => {
      console.log("err", err)
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const uid = localStorage.getItem('uid');

      // Check if the newpost contains any URLs
      const urlRegex = /(http(s)?:\/\/[^\s]+)|(www\.[^\s]+)|(\.com)/gi;
      if (urlRegex.test(newpost)) {
        // If it contains URLs, prevent the submission and display an error message
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Post contains URLs or restricted patterns. URLs are not allowed.'
        });
        return;
      }

      const response = await axios.post(
        'http://65.2.172.195:8081/adminuser/newpost',
        { newpost: newpost, uname: formData.firstname, uid: uid },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        }
      );
      console.log('Item saved:', response.data);
      setNewpost('');
      Getall();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    email: '',
    profession: '',
    bio: ''
  });
  const goToTopic = (data) => {
    const topiclist = topicList.filter((item) => item.operater == data.operater)
    setfilterTopic(topiclist)
    setForumTitleName(data.operater)
    setIstopic(true)
    setforumTitle(true)
  }
  useEffect(() => {
    GetAllReplies();
    const uid = localStorage.getItem('uid');
    axios.get(`http://65.2.172.195:8081/public/userdata/${uid}`)
      .then((res) => {
        console.log("Received data:", res.data);
        setFormData(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const touidToSenderunameMap = {};
  replydata.forEach(reply => {
    touidToSenderunameMap[reply.touid] = reply.senderuname;
  });
  const GetAllReplies = () => {
    axios.get('http://65.2.172.195:8081/public/replypost').then((res) => {
      setReplydata(res.data)

    }).catch((err) => {
      console.log("err", err)
    })

  }

  const [replypost, setReplypost] = useState('');
  const handleInputChange = (event) => {
    setReplypost(event.target.value);
  };

  const handleReplySubmit = async (event) => {
    event.preventDefault();
    const urlRegex = /(http(s)?:\/\/[^\s]+)|(www\.[^\s]+)|(\.com)/gi;
    const newpost = replypost; // Assuming replypost is already defined
    if (urlRegex.test(newpost)) {
      // If it contains URLs, prevent the submission and display an error message
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Post contains URLs or restricted patterns. URLs are not allowed.'
      });
      return;
    }
    const apiUrl = 'http://65.2.172.195:8081/adminuser/replypost';
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    const formData2 = {
      senderid: document.getElementById('touid').value, // Get value from input element
      touid: document.getElementById('senderid').value, // Get value from input element
      senderuname: formData.firstname, // Assuming formData is already defined and contains firstname
      replyUname: replyUname, // Assuming replyUname is already defined
      replypost: replypost // Assuming replypost is already defined
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(formData2),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setReplypost(''); // Assuming setReplypost is a function to update the state of replypost
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  let metaData = {
    title: "Forum page",
    description: "Forum decription",
    ogTitle: "Forum ogtitle",
    ogDescription: "Forum ogtitle Description",
    conicalurl
      : "conicalurl"
      || "https://example.com",
    plaintext: "Forum plaintext",
  }
  const style = {
    mainBox: {
      padding: '30px',
    },
    tableBox: {
      width: '100%',
    },
    textendLabel: {
      textAlign: 'left'
    },
    boxEndBox: {
      display: 'flex',
      justifyContent: 'center'
    },

    table1: {
      width: '80%'
    },
    table2: {
      width: '20%'
    },
    labelForum: {
      padding: '16px 10px',
      fontSize: '20px',
      fontWeight: '600'
    },
    tdTable: {
      padding: '16px 10px',
      fontSize: '16px'
    },
    tdTableFirst: {
      color: 'blue',
      padding: '16px 10px',
      fontSize: '20px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    trSecond: {
      color: 'white',
      background: '#162458'
    },
    forumTitle: {
      fontSize: '22px',

      fontWeight: '600',
      paddingBottom: '10px'

    },
    labelCenter: {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      textAlign: 'center',
      padding: '7px',
    }
  }
  return (
    <>
      <SEO title={metaData?.title} description={metaData?.description} ogTitle={metaData?.ogTitle} ogDescription={metaData?.ogDescription} plaintext={metaData?.plaintext} conicalurl={metaData?.conicalurl} />
      {/* <div className="md:grid md:grid-cols-3 gap-4 p-4 p0">
      
        <div className="md:col-span-1 bg-gray-200 p-4 p0 rounded mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Categories</h2>
        
          <div class="col-md-3">
            <div class="grid support">
              <div class="grid-body">
                <h2>Browse</h2>
                <hr />
                <ul>
                  <li class="active">
                    <a href="#">
                      Everyone's Issues<span class="pull-right">142</span>
                    </a>
                  </li>
                  <li>
                    <Link href="/ContactUs">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      Mentioning you<span class="pull-right">18</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <p>
                  <strong>Labels</strong>
                </p>
                <ul class="support-label">
                  <li>
                    <a href="#">
                      <span class="bg-blue">&nbsp;</span>
                      &nbsp;&nbsp;&nbsp;application
                      <span class="pull-right">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-red">&nbsp;</span>&nbsp;&nbsp;&nbsp;css
                      <span class="pull-right">7</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-yellow">&nbsp;</span>
                      &nbsp;&nbsp;&nbsp;design
                      <span class="pull-right">128</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-black">&nbsp;</span>&nbsp;&nbsp;&nbsp;html
                      <span class="pull-right">41</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-light-blue">&nbsp;</span>
                      &nbsp;&nbsp;&nbsp;javascript
                      <span class="pull-right">22</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-green">&nbsp;</span>
                      &nbsp;&nbsp;&nbsp;management
                      <span class="pull-right">87</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-purple">&nbsp;</span>
                      &nbsp;&nbsp;&nbsp;mobile<span class="pull-right">92</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="bg-teal">&nbsp;</span>&nbsp;&nbsp;&nbsp;php
                      <span class="pull-right">140</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {isLoggedIn ? (
            


              <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div class="w-full px-3 mb-2 mt-6">


                  <input type="hidden" value={curentuid2} readOnly id="uid" name="uid" onChange={(e) => setUid(e.target.value)} />
                  <input type="hidden" value={formData.firstname} readOnly id="uname" name="uname" onChange={(e) => setUname(e.target.value)} />


                  <textarea
                    class="bg-gray-100 p3 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none"
                    name="body"
                    placeholder="Comment"
                    required
                    value={newpost}
                    onChange={(e) => setNewpost(e.target.value)}
                  ></textarea>

                </div>

                <div class="w-full flex justify-end px-3 my-3">
                  <input
                    type="submit"
                    class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 text-lg"
                    value="Post Comment"
                  />
                </div>
              </form>
            ) : (
           
              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/SignIn">SignIn To Post</Link>
            )}
          </div>
        </div>

      
        <div className="md:col-span-2">
      
          <div className="bg-gray-100 p-4 rounded mb-4 p0">
            <h2 className="text-lg font-bold mb-2">Threads</h2>
          
            <div class="col-span-9">
              <div class="grid grid-cols-1 gap-4">
                <div class="p-4">
                  <h2 class="font-bold text-xl mb-4 " >Issues</h2>

                  <hr class="mb-4" />
                  <div class="flex space-x-2 mb-4">
                    <button
                      id="hs-dropdown-custom-trigger"
                      type="button"
                      class="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <span class="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
                        675 Open
                      </span>
                    </button>{" "}
                    <button
                      id="hs-dropdown-custom-trigger"
                      type="button"
                      class="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <span class="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
                        345 Closed
                      </span>
                    </button>{" "}
                    <div class="hs-dropdown relative inline-flex">
                      <button
                        id="hs-dropdown-custom-trigger"
                        type="button"
                        class="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span class="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
                          Sort: Newest
                        </span>
                        <svg
                          class="hs-dropdown-open:rotate-180 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h3 class="font-semibold p-1">Discussion</h3>
                  <div class="w-fullbg-white rounded-lg border p-1 md:p-3 m-10 max-h-80 h-80  overflow-x-auto">
                    <div class="flex flex-col gap-5 m-3 overflow-x-auto max-w-4xl mx-auto">
                  
                      <div>
                        {
                          data.map((item, index) => (
                            <div key={index} class="flex w-full justify-between border rounded-md">
                              <div class="p-3">
                                <div class="flex gap-3 items-center">
                                  <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnstyAK6o9wRzo7lfkZNgQtST7JvgXj4lCJH0ADcjjOQ&s"
                                    class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"
                                  />
                                  <h3 class="font-bold">
                                    {item.uname}
                                    <br />
                                  </h3>
                                </div>
                                <p class="text-gray-600 p4 mt-2">
                                  {item.newpost}
                                </p>
                                {isLoggedIn ? (
                                  <button onClick={() => toggleModal(item.uid, item.uname)} className="text-right text-blue-500">
                                    Reply
                                  </button>
                                ) : (
                                  <Link className="text-white bg-blue-700 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-1 py-1.5 me-1 mb-1 dark:bg-blue-200 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-300" href="/SignIn">SignIn To Reply</Link>

                                )}
                                <button className="ml-4 text-green-500" onClick={() => setShowReplies(!showReplies)}>
                                  {showReplies ? 'Hide Replies' : 'Show Replies'}
                                </button>
                                <div class="text-gray-300 font-bold pl-14">|</div>



                                {showReplies && replydata.map((reply, index) => {
                                  if (reply.touid === item.uid) {
                                    return (
                                      <div key={index} className="flex justify-between border ml-5 rounded-md">
                                        <div className="p-3">
                                          <div className="flex gap-3 items-center">
                                            <img
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnstyAK6o9wRzo7lfkZNgQtST7JvgXj4lCJH0ADcjjOQ&s"
                                              className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
                                            />
                                            <h3 className="font-bold">
                                              {touidToSenderunameMap[reply.touid] || 'Unknown User'}
                                              <br />
                                            </h3>
                                          </div>
                                          <p className="text-gray-600 p4 mt-2">
                                            {reply.replypost}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  } else {
                                    return null;
                                  }
                                })}
                              </div>
                            </div>
                          ))
                        }

                      </div>
                    </div>


                   

                  </div>
                </div>
              </div>

           
              {isOpen && (
                <div
                  id="default-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative p-4 w-full max-w-2xl max-h-full">
               
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <div class="flex gap-3 items-center">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnstyAK6o9wRzo7lfkZNgQtST7JvgXj4lCJH0ADcjjOQ&s"
                            class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"
                          />
                          <h3 class="font-bold">
                            {replyUname}


                          </h3>
                        </div>

                        <button type="button" onClick={closeModal} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                     
                      <form onSubmit={handleReplySubmit}>
                        <div class="p-4 md:p-5 space-y-4">
                          <div class="w-full px-3 mb-2 mt-6">
                            <textarea
                              class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                              name="body"
                              placeholder="Comment"
                              required
                              value={replypost}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                          <div class="w-full px-3 mb-2 mt-6">

                            <input type="hidden" id="senderid" name="senderid" value={replyUid} />

                            <input type="hidden" id="touid" name="touid" value={curentuid2} />
                            <input type="hidden" id="senderuname" name="senderuname" value={formData.firstname} />


                          </div>

                        </div>
                     
                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button data-modal-hide="default-modal" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post Comment</button>
                          <button data-modal-hide="default-modal" onClick={closeModal} type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
     
      </div> */}

      <div style={style.mainBox} className="p3">
        <div style={{
          justifyContent: 'space-between',
          display: 'flex'
        }}>
          {
            isTopic ?
              <div style={style.forumTitle} className="p4">{ForumTitleName}</div>
              :
              <div style={style.forumTitle} className="p4">Forum</div>

          }
          {
            isTopic ?

              <div style={style.forumTitle} className="p4">

                <Link href="" className="text-blue-700 hover:text-blue-700" onClick={() => { setIstopic(false) }}>Back</Link>
              </div>
              :
              <div style={style.forumTitle} className="p4">
                <button className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">New Post</button>

              </div>
          }
        </div>

        {
          isTopic ?
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '100%' }}>
                <table style={style.tableBox} className="tableBox">
                  <tbody>
                    <tr>
                      <td colSpan="12">
                        <div style={{ padding: '29px 10px', }} className="labelForum1"></div>
                      </td>
                    </tr>
                    {
                      FilterTopic.map((item, ind) => (
                        <tr className="trSecond" key={ind}>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div className="bordercss" style={style.labelCenter}>
                                {item.avtar}
                              </div>
                            </div>

                          </td>

                          <td style={style.tdTableFirst}>
                            <div style={style.boxEndBox}>
                              <div >
                                <div><Link href="" className="text-red-700 hover:text-red-700">{item.label}</Link></div>
                                <div style={{
                                  color: 'grey',
                                  fontSize: '14px'
                                }}>{item.description2} . &nbsp; {item.description}</div>
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div style={{ display: 'flex', gap: '5px' }}>
                                <div><i className="fa fa-lock" aria-hidden="true"></i></div>
                                <div><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div>
                                <div>Replies</div>
                                <div>Views</div>
                              </div>
                            </div>

                          </td>

                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div >
                                <div>{item.point}</div>
                                <div>{item.point2}</div>
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div >
                                <div>{item.description}</div>
                                <div>{item.description2}</div>
                              </div>
                            </div>

                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>

            </div>
            :
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={style.table1}>
                <table style={style.tableBox} className="tableBox">
                  <tbody>
                    <tr>
                      <td colSpan="12">
                        <div style={style.labelForum} className="labelForum">MT Studio Support</div>
                      </td>
                    </tr>
                    {
                      operatingList.map((item, ind) => (
                        <tr className="trSecond" key={ind}>
                          <td style={style.tdTable} className="p4">
                            <div>
                              <i className="far fa-comments" style={{ fontSize: '30px' }} aria-hidden="true"></i>
                            </div>
                          </td>
                          <td style={style.tdTableFirst}>
                            <Link href="" className="text-blue-700 hover:text-blue-700 " onClick={() => { goToTopic(item) }}


                            >{item.operater}</Link>



                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div >
                                <div>Threads</div>
                                <div>{item.threads}</div>
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div>
                                <div>Messages</div>
                                <div>{item.message}</div>
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div className="bordercss" style={style.labelCenter}>
                                {item.label}
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div >
                                <div>{item.comment}</div>
                                <div>{item.time}</div>
                              </div>
                            </div>

                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
              <div style={style.table2}>
                <table style={style.tableBox} className="tableBox">
                  <tbody>
                    <tr>
                      <td colSpan="12">
                        <div style={style.labelForum} className="labelForum">Latest Post</div>
                      </td>
                    </tr>
                    {
                      latestpost.map((item, ind) => (
                        <tr className="trSecond" key={ind}>

                          <td style={style.tdTable} className="p4">
                            <div style={style.boxEndBox}>
                              <div className="bordercss" style={style.labelCenter}>
                                {item.label}
                              </div>
                            </div>

                          </td>
                          <td style={style.tdTable} className="p4">
                            <Link href="" className="text-blue-700 hover:text-blue-700 "


                            >  {item.comment}</Link>




                          </td>



                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
        }

      </div>
    </>
  );
};

export default Forum;
