"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SEO from "../seo/Seo";

const Token = () => {
  const [token, setToken] = useState("");
  const [isToken, setIsToken] = useState(false);
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isShowToken, setShowToken] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsToken(true);
    } else if (token == "") {
      setIsToken(false);
    }
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const emailInput = (event) => {
    setEmail(event.target.value);
  }
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(token)
      .then(() => {
        alert("Token copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy token to clipboard: ", error);
      });
  };
  const validateForm = () => {
    const isValid = email.trim() !== '';
    setIsFormValid(isValid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToken(true)
    // Handle form submission
  };
  useEffect(() => {
    validateForm();
  }, [email]);
  let metaData = {
    title: "Token page",
    description: "Token decription",
    ogTitle: "Token ogtitle",
    ogDescription: "Token ogtitle Description",
    conicalurl
      : "conicalurl"
      || "https://example.com",
    plaintext: "Token plaintext",
  }
  return (
    <>
      <SEO title={metaData?.title} description={metaData?.description} ogTitle={metaData?.ogTitle} ogDescription={metaData?.ogDescription} plaintext={metaData?.plaintext} conicalurl={metaData?.conicalurl} />
      <div>
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
          Token
        </h1>

        <center>
          <div className="tokenBox">
            {
              !isToken ? (
                <div className="m-10 tokenChildBox max-w-sm p-6 bg-white border p3 border-gray-200 rounded-lg p0 shadow dark:bg-gray-800 dark:border-gray-700">
                  <svg
                    class="w-7 h-7 text-gray-500 p4 mb-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                  </svg>

                  <Link href="/SignIn">Generate Token</Link>


                  {!isShowToken ? (
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div style={{ padding: "18px 1px" }}>
                          <input
                            style={{ padding: "5px 5px" }}
                            value={email}
                            onChange={emailInput}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Email Address"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <button
                          type="submit"

                          disabled={!isFormValid}

                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Generate Token
                        </button>
                      </form>
                    </div>
                  )
                    :
                    (
                      
                      <div>
                        <br/>
                        
                        <div className="max-w-xs w-full inline-flex gap-x-2">
                          <input
                            id="hs-clipboard-input"
                            type="text"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:placeholder:text-gray-500 dark:focus:ring-gray-600"
                            value={token}
                            readOnly // Make the input field read-only
                          />

                          <button
                            type="button"
                            className="py-3 px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            onClick={copyToClipboard} // Call the function to copy to clipboard on button click
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            </svg>
                            <span>Copy</span>
                          </button>

                        </div>
                         <br/>
                         <br/>
                        <button
                          type="submit" onClick={() => { setShowToken(false) }}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Cancel
                        </button>
                      </div>


                    )
                  }
                </div>
              ) : null
            }


            {/* *************************before login generate token with email**************** */}

            <div className="m-10 tokenChildBox max-w-sm p-6 bg-white border p3 border-gray-200 rounded-lg p0 shadow dark:bg-gray-800 dark:border-gray-700">
            <br />
           
              <svg
                className="w-7 h-7 text-gray-500 p4 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>

              {isToken ? (
                // Render this if the user is logged in

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 p4">
                  Your Generated Token
                </h5>
              ) : (
                // Render this if the user is not logged in
                <>
               
                  <Link href="/SignIn">SignIn To Generate Token</Link>
                  <br />
                  <br />
                  <br />
                 
                </>
              )}

              {isToken ? (
                <div className="max-w-xs w-full inline-flex gap-x-2">
                  <input
                    id="hs-clipboard-input"
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:placeholder:text-gray-500 dark:focus:ring-gray-600"
                    value={token}
                    readOnly // Make the input field read-only
                  />

                  <button
                    type="button"
                    className="py-3 px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={copyToClipboard} // Call the function to copy to clipboard on button click
                  >
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    </svg>
                    <span>Copy</span>
                  </button>
                </div>
              ) : (
                <Link
                  href="SignIn"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  SignIn
                </Link>
              )}
            </div>
          </div>



        </center>




      </div>
    </>

  );
};

export default Token;
