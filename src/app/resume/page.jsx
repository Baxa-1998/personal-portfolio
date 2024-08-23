'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    "I love music, I am fond of psychology, I read books on self-development and classical literature. In my free time I immerse myself in the world of computer games, which is how my love for programming was awakened. By nature I'm an introvert, like most programmers, but lately I've been trying to come out of my cozy shell and become an extrovert, although I admit that it's sometimes a bit stressful.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Baxtiyor Narziyev',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+97) 289 98 00',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'baxtiyornarziev6@gmail.com',
    },
    {
      fieldName: 'Github',
      fieldValue: 'Baxa-1998',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Uzbek, Russian, English',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'I started earning from my programming knowledge in 2021. First I worked at a center that taught web development, and then I continued my career in an international company as a lead programmer. There, I not only strengthened my programming skills, but also expanded my knowledge in other areas.',
  items: [
    {
      company: 'UZIT Group',
      position: 'Frontend Developer',
      duration: '2023 - Present',
    },
    {
      company: 'Next Gen',
      position: 'Frontend Developer Intern',
      duration: '2022 - 2023',
    },
    {
      company: 'Liberty Code',
      position: 'Teacher',
      duration: '2021 - 2022',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'It all started with just a random YouTube video where a guy promised to teach programming from zero to pro in an hour. I know it sounds ridiculous, but I believed it at the time. That video became the starting point: soon I enrolled in a course, I chose JavaScript between JavaScript and Python, and I have never regretted it. Now I have not only a certificate of successful completion with a high score, but also dozens of online courses taken and tutorial videos watched.',
  items: [
    {
      institution: 'Liberty Code',
      degree: 'Frontend',
      duration: '2020',
    },
    {
      institution: 'Online Course Udemy',
      degree: 'Frontend React',
      duration: '2021',
    },
    {
      institution: 'Online Course Skillbox',
      degree: 'Full Stack Course',
      duration: '2022',
    },
    {
      institution: 'Design Course',
      degree: 'Figma and Photoshop Course',
      duration: '2023',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'Like all web developers I started with HTML markup language and thought it was a programming language). The real difficulty began when I started to learn JavaScript it was just a brain explosion, but after practicing I began to understand this language. After that other technologies came easily to me, especially React, which was a natural extension of my learning I could already create complex web applications in the browser.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group:">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-center justify-center xl:justify-start gap-4'
                      >
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>{' '}
    </motion.div>
  );
};

export default Resume;
