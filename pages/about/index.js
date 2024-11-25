// icons
import React, { useState } from "react";
import { Tooltip } from 'react-tooltip';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaLightbulb,
  FaHandHolding,
  FaHandshake,
} from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiHandshake,
  SiClockify,
} from "react-icons/si";

// Remove the image on the left side
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          { icon: <FaHtml5 />, name: 'HTML5' },
          { icon: <FaCss3 />, name: 'CSS3' },
          { icon: <FaJs />, name: 'JavaScript' },
          { icon: <FaReact />, name: 'React' },
          { icon: <SiTypescript />, name: 'TypeScript' },
          { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
          { icon: <SiFirebase />, name: 'Firebase' },
        ],
      },
      {
        title: 'Soft skills',
        icons: [
          { icon: <FaHandshake />, name: 'Teamwork' },
          { icon: <FaLightbulb />, name: 'Problem solving' },
          { icon: <SiClockify />, name: 'Time management' },
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Best graduation project @Telerik Academy - TheQuizVortex',
        stage: '2023',
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Open-source Software Developer - Mattermost',
        stage: 'Aug 2024',
        description: 'Technologies: React, Typescript, Jest',
        githubLink: 'https://github.com/mattermost'
      },
      {
        title: 'Software Developer - Personal Project',
        stage: 'Mar 2024',
        description: 'Developed a basic weather app to try some new technologies. <br/>Technologies: Python, Flask, Django, Tkinter, Qt',
        githubLink: 'https://github.com/Tihomir-N/WeatherApp'
      },
      {
        title: 'Software Developer - Educational Project',
        stage: 'Nov - Dec 2023',
        description: 'Developed and hosted a React app for creating and managing quizzes. <br/>Technologies: NoSQL database (Firebase), Typescript, React, Jest for testing, Firebasehosting',
        webLink: 'https://thequizvortex.web.app/',
        githubLink: 'https://bit.ly/theQuizVortex-app'
      },
      {
        title: 'Software Developer - Educational Project',
        stage: 'Nov - Dec 2023',
        description: 'Developed React app for a travel forum <br/>Technologies: React, Firebase, JavaScript, Tailwind',
        webLink: 'https://react-project--forum.web.app/',
        githubLink: 'https://github.com/Giphy-Project-Buddy-Group-14/React-Project--forum'
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Alpha JavaScript Track',
        stage: '07/2023 - 01/2024',
      },
      {
        title: ' Javascript Basic & Fundamentals',
        stage: '09/2022 - 04/2023',
      }
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
//framer motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../../variants';
// counter
import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2"
          >
            <span className="text-accent">Simplicity</span> <br />is the soul of efficiency.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 years ago I started my path as a developer. I invested this time to learn and completed SoftUni academy
            and Telerik academy with JavaScript. Now that I have real-life experience contributing to the open source project of Mattermost,
            my goal is to join a team and apply my skills full-time.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase translate-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase translate-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={1} />
                </div>
                <div className="text-xs uppercase translate-[1px] leading-[1.4] max-w-[100px]">
                  Awarded projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 
                after:h-[2px] after:bg-white after:absolute after:-bottom-1 
                after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col gap-y-2 items-center xl:items-start text-white/60">
                  {/* title */}
                  <div className="flex flex-col md:flex-row gap-x-2 items-center">
                    {/* title and stage row */}
                    <div className="text-lg text-accent font-medium mb-2 md:mb-0">{item.title}</div>
                    {!item.icons && <div className="hidden md:flex">-</div>}
                    <div>{item.stage}</div>
                  </div>
                  {/* description */}
                  {item.description && (
                    <div className="text-slate-200 text-sm" dangerouslySetInnerHTML={{ __html: item.description }}/>
                  )}
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex}>
                          <span
                            className="text-2xl text-white cursor-pointer"
                            data-tooltip-id={`icon-tooltip-${itemIndex}-${iconIndex}`}
                            data-tooltip-content={icon.name}
                          >
                            {icon.icon}
                          </span>
                          <Tooltip id={`icon-tooltip-${itemIndex}-${iconIndex}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
