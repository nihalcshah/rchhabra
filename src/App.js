'use client';
import logo from './logo.svg';
import './App.css';
import { TextLoop } from "easy-react-text-loop";
import { Accordion } from 'flowbite-react';


function App() {

  const experienceList = [
    {
      "company": "Graduate Management Admission Council",
      "start": "July 2023",
      "end": "August 2023",
      "title": "Data Science Intern",
      "description": "Made data visualization and analysis for various university engagements with the company**Aggregated GMAT testing policy data for graduate university programs involved with GMAC**Took GMAC’s Business Fundamentals course and provided feedback from a student perspective".split("**")
    },
    {
      "company": "Knowt",
      "start": "June 2022",
      "end": "June 2023",
      "title": "Operations and Business Intern",
      "description": "Managed payments and content regulation for “Paid Notes” and “Paid Textbook Notes” programs**Part of the AP Hub team - organized preparatory notes and materials for every AP exam and various IB / A-Level topics**Created a multi-subject textbook library for notes to be created by the KnowtTakers program".split("**")
    },
    {
      "company": "A-List Empire",
      "start": "September 2019",
      "end": "June 2020",
      "title": "Programming Team",
      "description": "Created an interactive number line tool for early math education**Published in the International Journal for Social Science and Economic Research in January 2020 (Volume 5, Issue 1)".split("**")
    },
  ]
  const exp = experienceList.map((job, index) =>
    <Accordion.Panel className='bg-white !focus:ring-0 !focus:ring-transparent'>
      <Accordion.Title className='text-black focus:ring-0 focus:ring-transparent'>
        <div className='flex'>
          <div className="text-lg md:text-2xl text-left px-3 font-bold justify-left">{job.company}</div>
          <div className='text-lime-700 ml-2 text-sm md:text-base my-auto align-items-center italic font-bold'>{job.start} - {job.end} </div>
        </div>

        <div className="w-full text-lg px-3 text-sm line border-white font-bold" >{job.title}</div>
      </Accordion.Title>
      <Accordion.Content className='bg-sky-800 text-white'>
        <ul className='p-2 list-disc list-inside font-semibold'>
          {job.description.map((item) =>
            <li className='mb-2'>{item}</li>
          )}
        </ul>
      </Accordion.Content>
    </Accordion.Panel>
  );

  return (
    <div className="relative w-screen min-h-screen snap-mandatory snap-y ">
      <div className="relative min-h-screen flex p-16 bg-cyan-950 text-white snap-center snap-always">
        <div className='grid md:grid-cols-2 w-full'>
          <div className='order-1 md:order-2 flex my-auto font-bold leading-loose'>
            <img src='./img/placement.jpg' className='w-56 justify-items-center mx-auto aspect-square rounded-full' />
          </div>
          <div className='order-2 md:order-1 md:my-auto font-bold leading-loose md:text-left text-center'>
            <div className='text-4xl md:mb-0 mb-2 md:text-7xl font-medium'>Hi, I'm</div>
            <div className='text-7xl mb-2'>Rishabh Chhabra</div>
            {" "}
            <TextLoop>
              <span className='text-xl text-lime-600'>A Developer</span>
              <span className='text-xl text-lime-600'>An Innovator</span>
              <span className='text-xl text-lime-600'>A Learner</span>
            </TextLoop>
            {" "}

          </div>
        </div>

        <div data-dial-init class="absolute right-10 bottom-6 group">
          <div id="speed-dial-menu-default" class="flex flex-col items-center hidden mb-4 space-y-2">
            <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
              </svg>
              <span class="sr-only">Share</span>
            </button>
            <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Share
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
                <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z" />
              </svg>
              <span class="sr-only">Print</span>
            </button>
            <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Print
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Download</span>
            </button>
            <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Download
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
              </svg>
              <span class="sr-only">Copy</span>
            </button>
            <div id="tooltip-copy" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Copy
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
            </svg>
            <span class="sr-only">Open actions menu</span>
          </button>
        </div>

      </div>
      <div id="experience" className="relative min-h-screen bg-sky-900 text-white snap-center snap-always p-8">
        <h1 className='text-4xl font-bold drop-shadow-2xl p-8'>My Experience</h1>

        <div className='p-8 md:p-8 mb-4'>

          <Accordion className='!text-white bg-white border-none' >
            {exp}
          </Accordion>

        </div>
      </div>
    </div>
  );
}

export default App;
