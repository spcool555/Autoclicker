'use client'
import { useEffect, useState } from "react";
import Modal from "react-modal";

const Tools = () => {

 
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalUrl, setModalUrl] = useState("");
    
        const openModal = (url) => {
            setModalUrl(url);
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false);
        };
    
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
    

    return (
        <>
   
   
        <div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div class="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
        
                    <h2 class="pl-3 mb-4 text-2xl font-semibold">Tools Pages</h2>
        
                    <button onClick={() => openModal("https://spcool555.github.io/keyboard_mouse_test/")} class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                    Keyboard Mouse Test
                    </button>
                  
                    <button onClick={() => openModal("https://spcool555.github.io/sapcebar_clicker/")} class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                    Spacebar Clicker
                    </button>
                    <button onClick={() => openModal("https://spcool555.github.io/cps_test/")}
                        class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full ">
                     CPSTest
                    </button>
                    <button onClick={() => openModal("https://spcool555.github.io/typing_test/practice.html")}
                        class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full ">
                    Typing Test
                    </button>
                    <button onClick={() => openModal("https://premium-cursors.netlify.app/")}
                        class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full ">
                   Custome Cursor Test
                    </button>
                    <button onClick={() => openModal("https://spcool555.github.io/ReactionTimeTexster/")}
                        class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full ">
                   Reaction Time Test
                    </button>
                    <button onClick={() => openModal("https://spcool555.github.io/micAndSpeechTotext/")}
                        class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full ">
                 Mic Test & Speech to Text
                    </button>
         
                </div>
            </aside>
            <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div class="p-2 md:p-4">
                    <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 class="pl-6 text-2xl font-bold sm:text-xl">Tools</h2>
                        
                        <div class="grid max-w-2xl mx-auto mt-8">
                        <div className="wrapper">
      
                        <div className="lg:hidden">
  <button onClick={() => openModal("https://spcool555.github.io/keyboard_mouse_test/")} className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
    Keyboard Mouse Test
  </button>

  <button onClick={() => openModal("https://spcool555.github.io/sapcebar_clicker/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
    Spacebar Clicker
  </button>

  <button onClick={() => openModal("https://spcool555.github.io/cps_test/")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
    CPSTest
  </button>

  <button onClick={() => openModal("https://spcool555.github.io/typing_test/practice.html")} className="flex items-center mt-2 px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
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

         


        
           
     
<Modal isOpen={isModalOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center">
  <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-lg overflow-y-auto">
    <iframe id="modalIframe" src={modalUrl} className="w-full" title="Modal Content" style={{ height: '80vh' }}></iframe>
    <button onClick={closeModal} className="mt-4 block w-full rounded-md bg-blue-500 text-white font-semibold py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Close</button>
  </div>
</Modal>


        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
           </>
    );
}

export default Tools;
