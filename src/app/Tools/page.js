'use client'
import { useEffect, useState } from "react";
import Modal from "react-modal";
import SEO from "../seo/Seo";
import CameraTest from '../toolsChild/CameraTest'
import MicTest from '../toolsChild/Mictest'
const Tools = () => {

 
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isCamera,setIsCamera] = useState(0);

        const [modalUrl, setModalUrl] = useState("");
    
        const openModal = (url) => {
            setModalUrl(url);
            setIsModalOpen(true);
        };
       
        const closeModal = () => {
            setIsModalOpen(false);
        };
        const openCamera=()=>{
            setIsCamera(1)
        }
        const openMictest=()=>{
            setIsCamera(2)
        }
        const closeCamera=()=>{
            setIsCamera(0)
        }
       
        useEffect(() => {
            // No longer opening modal on page load
        }, []);
    
        useEffect(() => {
            const iframe = document.getElementById("modalIframe");
    
            if (iframe) {
                const handleIframeLoad = () => {
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                    const leftSidebar = iframeDocument.querySelector('.left-sidebar');
                    if (leftSidebar) {
                        leftSidebar.style.display = 'none';
                    }
                };
    
                iframe.addEventListener('load', handleIframeLoad);
    
                return () => {
                    iframe.removeEventListener('load', handleIframeLoad);
                };
            }
        }, [modalUrl]);
        let metaData = {
            title: "blog page",
            description: "blog decription",
            ogTitle: "blog ogtitle",
            ogDescription: "blog ogtitle Description",
            conicalurl
              : "conicalurl"
              || "https://example.com",
            plaintext: "blog plaintext",
          } 

    return (
        <>
         <SEO title={metaData?.title} description={metaData?.description} ogTitle={metaData?.ogTitle} ogDescription={metaData?.ogDescription} plaintext={metaData?.plaintext} conicalurl={metaData?.conicalurl}  />
        {
                isCamera == 1?(
                    <CameraTest isclose={closeCamera}/>
                )
                :
                isCamera == 2?
                (
                    <MicTest isclose={closeCamera}/>
                )
                :
                <div className=" p3 p4 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
                <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                    <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            
                        <h2 className="pl-3 mb-4 text-2xl font-semibold">Tools Pages</h2>
            
                        <button onClick={() => openModal("https://spcool555.github.io/keyboard_mouse_test/")} className="flex items-center px-3 py-2.5 font-bold p3 p4  text-indigo-900 border rounded-full">
                        Keyboard Mouse Test
                        </button>
                      
                        <button onClick={() => openModal("https://spcool555.github.io/sapcebar_clicker/")} className="flex items-center px-3 py-2.5 font-bold p3 p4   text-indigo-900 border rounded-full">
                        Spacebar Clicker
                        </button>
                        <button onClick={() => openModal("https://cpsnew.onrender.com/")}
                            className="flex items-center px-3 py-2.5 font-bold  p3 p4  text-indigo-900 border rounded-full ">
                         CPSTest
                        </button>
                        <button onClick={() => openModal("https://spcool555.github.io/typing_test/")}
                            className="flex items-center px-3 py-2.5 font-bold  p3 p4  text-indigo-900 border rounded-full ">
                        Typing Test
                        </button>
                        <button onClick={() => openCamera()}
                            className="flex items-center px-3 py-2.5 font-bold  p3 p4  text-indigo-900 border rounded-full ">
                        WebCam Test
                        </button>
                        <button onClick={() => openModal("https://premium-cursors.netlify.app/")}
                            className="flex items-center px-3 py-2.5 font-bold   p3 p4 text-indigo-900 border rounded-full ">
                       Custome Cursor Test
                        </button>
                        <button onClick={() => openModal("https://spcool555.github.io/ReactionTimeTexster/")}
                            className="flex items-center px-3 py-2.5 font-bold   p3 p4 text-indigo-900 border rounded-full ">
                       Reaction Time Test
                        </button>
                        <button onClick={() => openMictest()}
                            className="flex items-center px-3 py-2.5 font-bold  p3 p4 text-indigo-900 border rounded-full ">
                     Mic Test & Speech to Text
                        </button>
             
                    </div>
                </aside>
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Tools</h2>
                            
                            <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="wrapper">
          
                            <div className="lg:hidden">
      <button onClick={() => openModal("https://spcool555.github.io/keyboard_mouse_test/")} className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        Keyboard Mouse Test
      </button>
    
      <button onClick={() => openModal("https://spcool555.github.io/sapcebar_clicker/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        Spacebar Clicker
      </button>
    
      <button onClick={() => openModal("https://cpsnew.onrender.com/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        CPSTest
      </button>
    
      <button onClick={() => openModal("https://spcool555.github.io/typing_test/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        Typing Test
      </button>
    
      <button onClick={() => openModal("https://premium-cursors.netlify.app/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        Custome Cursor Test
      </button>
    
      <button onClick={() => openModal("https://spcool555.github.io/ReactionTimeTexster/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        Reaction Time Test
      </button>
    
      <button onClick={() => openModal("https://spcool555.github.io/micAndSpeechTotext/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
        Mic Test & Speech to Text
      </button>
    </div>
    
           
    
    
            
            
               
         
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={{ content: { width: '100%', height: '100%', margin: 'auto',inset:'0px'} }}>
         <div className="iframeBody" >
    
         <iframe id="modalIframe" src={modalUrl} style={{ width: '100%', height: '100%' }}></iframe>
         <button onClick={closeModal}  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Close</button>
    
         </div>
          
    
                </Modal>
    
    
    
    
            </div>
                            </div>
                        </div>
                    </div>
                </main>
               
                
            </div>
            }
              
       
           </>
    );
}

export default Tools;
