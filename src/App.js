'use client';
import logo from './logo.svg';
import './App.css';
import { TextLoop } from "easy-react-text-loop";
import { Accordion, Tabs } from 'flowbite-react';
import { isMobile } from 'react-device-detect';
import { useRef, useEffect, useState } from 'react';
import { CustomFlowbiteTheme } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { tabTheme } from './Theme';

function App() {
  const speedDial1 = useRef(null);
  // if(event.target.parentNode.firstChild.classList.contains("hidden")){
  //   event.target.parentNode.firstChild.classList.remove("hidden")
  // }else{
  //   event.target.parentNode.firstChild.classList.add("hidden")
  // }
  function toggleSpeedDial(event) {
    if (isMobile) {
      if (speedDial1.current.classList.contains("hidden")) {
        speedDial1.current.classList.remove("hidden")
      } else {
        speedDial1.current.classList.add("hidden")
      }
    }
  }

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

  const leadershipLIst = [
    {
      "orgname": "TJ MAD",
      "org": "TJ Mobile App Developers",
      "title": "President",
      "time": "August 2020 - PRESENT",
      "desc": "As the Lead Developer of NavTJ, a map app for freshmen in my high school, I oversee its beta testing phase and pilot program for student feedback. I also lead instructional activities in mobile app development and coordinate the development of various apps using club resources. Furthermore, I organize research and service projects to engage club members. My multifaceted role drives app development, skills enrichment, and community involvement within our programming club."
    },
    {
      "orgname": "TJ Math Modeling Club",
      "org": "TJ Math Modeling Club",
      "title": "Captain ",
      "time": "August 2020 - PRESENT",
      "desc": "I apply for and lead competitions that cater to both underclassmen and upperclassmen, fostering participation opportunities for students. Additionally, I serve as a mentor for math modeling and statistics-based research projects."
    },
    {
      "orgname": "TJ Investment",
      "org": "TJ Investment Club",
      "title": "Head of Internal Relations ",
      "time": "August 2023 - PRESENT",
      "desc": "I managed club member retention and committee leadership positions, organized external mixers and member events, and led the research project committee while acting as a mentor for financial research alongside the Head of Research."
    },
    {
      "orgname": "CFESS",
      "org": "Calculus for Elementary School Students",
      "title": "Co-Founder",
      "time": "April 2023 - PRESENT",
      "desc": "I worked on creating engaging presentations about differential and integral calculus for younger students and also presented the concepts of infinity and limits to a group of advanced 6th-graders at a local elementary school. These findings were displayed at the National Council for Teachers of Mathematics Conference in October 2023"
    },
  ]

  const leadershipVals = leadershipLIst.map((leader, index) =>
    <Tabs.Item class="!text-white" title={leader.orgname}>
      <div className='font-extrabold text-2xl mb-1'>{leader.org} <span className='italic text-base font-semibold'>{leader.title}</span></div>
      <div className='font-bold  text-lime-300 mb-2'>{leader.time}</div>
      <div>{leader.desc}</div>
    </Tabs.Item>
  );

  return (
    <div className="relative w-screen min-h-screen snap-mandatory snap-y scroll-smooth ">
      <div data-dial-init class="fixed z-30 right-12 bottom-6 group">
        <div id="speed-dial-menu-default" ref={speedDial1} class="flex flex-col items-center hidden mb-4 space-y-2">
          <a href="#home" type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span class="sr-only">Share</span>
          </a>
          <a href='#experience' type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
            <span class="sr-only">Print</span>
          </a>
          <a href='#leadership' type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="sr-only">Download</span>
          </a>
        </div>
        <button type="button" onClick={toggleSpeedDial} data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-black bg-white rounded-full w-14 h-14 hover:bg-gray-100">
          <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
          </svg>
          <span class="sr-only">Open actions menu</span>
        </button>
      </div>
      <div id='home' className="relative min-h-screen flex p-16 bg-cyan-950 text-white snap-center snap-always">
        <div className='grid md:grid-cols-2 w-full'>
          <div className='order-1 md:order-2 flex my-auto font-bold leading-loose'>
            <img src='./img/placement.jpg' className='w-56 justify-items-center mx-auto aspect-square rounded-full' />
          </div>
          <div className='order-2 md:order-1 md:my-auto font-bold leading-loose md:text-left text-center'>
            <div className='text-4xl md:mb-0 mb-2 md:text-7xl font-medium'>Hi, I'm</div>
            <div className='text-7xl mb-2'>Rishabh Chhabra</div>
            {" "}
            <TextLoop interval={100}>
              <span className='text-xl text-lime-600'>A Developer</span>
              <span className='text-xl text-lime-600'>An Innovator</span>
              <span className='text-xl text-lime-600'>A Learner</span>
            </TextLoop>
            {" "}

          </div>
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
      <div id="leadership" className="relative min-h-fit bg-teal-950 text-white snap-center snap-always p-8">
        <h1 className='text-4xl font-bold drop-shadow-2xl p-8 md:pb-0'>My Leadership</h1>
        <div className='p-4  md:p-8 pt-2 mb-4 w-5/6 mx-auto'>
          <Tabs.Group theme={tabTheme} aria-label="Tabs with underline" className='!text-white' style="underline">
            {leadershipVals}
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
}

export default App;
