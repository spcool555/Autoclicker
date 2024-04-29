"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
const FAQs = () => {
  const [data, setData] = useState([]);
  const [datas, setData2] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  useEffect(() => {
    GetAllFeaturebox();
    GetAllQuestionAnswer();
  }, []);
  const GetAllFeaturebox = () => {
    axios
      .get(`http://localhost:8081/public/savefaq/1`)
      .then((res) => {
        setData(res.data);

        console.log("data...", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
    axios
      .get(`http://localhost:8081/public/savefaq/2`)
      .then((res) => {
        setData2(res.data);

        console.log("data...", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const GetAllQuestionAnswer = () => {
    axios
      .get("http://localhost:8081/public/questionanswer")
      .then((res) => {
        setQuestionAnswer(res.data);
        console.log("data...", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="p0">
      <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
        FAQs
      </h1>
      <div class="grid grid-cols-3 divide-x">
        <div className="p-5 mr-5">
          <div class="w-full max-w-sm p-4 p3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="text-xl font-medium text-gray-900 p4 dark:text-white">
              empty
            </h5>
            <hr />
            <div className="py-5">advertiment block</div>
          </div>
        </div>
        <div className=" p-5 mr-5">
          <div class="w-full max-w-sm p-4 p3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="text-xl font-medium text-gray-900 p4 dark:text-white">
              Free version
            </h5>
            <hr />
            <div className="py-5">
              <ul class="max-w-md space-y-1 p4 text-gray-500 list-inside dark:text-gray-400">
                {data.map((item, ind) => (
                  <li class="flex items-center">
                    <svg
                      class="w-3.5 h-3.5 me-2 text-yellow-500 dark:text-yellow-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>

                    <p dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" p-5 mr-5">
          <div class="w-full max-w-sm p-4 p3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="text-xl font-medium p4 text-gray-900 dark:text-white">
              Paid version
            </h5>
            <hr />
            <div className="py-5">
              <ul class="max-w-md space-y-1 p4 text-gray-500 list-inside dark:text-gray-400">
                {datas &&
                  datas.map((item, ind) => (
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                <p dangerouslySetInnerHTML={{ __html: item.input1 }}></p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="mx-auto max-w-screen-xl relative select-none py-2">
        <h1 className="pb-6 mb-5 border-b-2 border-[#256EFF] text-2xl md:text-4xl text-center font-bold">
          Frequently Asked Questions?
        </h1>
        <div className="max-w-screen-xl py-5">
          <div className="space-y-4">
            {questionAnswer.map((item, ind) => (
              <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p3 bg-[#F3F4F6] dark:bg-[#0C1633] p-4">
                  <h2
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: item.question }}
                  ></h2>
                  <svg
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p
                  className="mt-4 px-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answers }}
                ></p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
