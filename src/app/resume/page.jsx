'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi, nesciunt ratione delectus ad tempore necessitatibus neque sint ex! Fuga vel adipisci maiores unde labore a dolores cumque officiis voluptate.',
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
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi, nesciunt ratione delectus ad tempore necessitatibus neque sint ex! Fuga vel adipisci maiores unde labore a dolores cumque officiis voluptate.',
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
      duration: '2022 - 2023',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi, nesciunt ratione delectus ad tempore necessitatibus neque sint ex! Fuga vel adipisci maiores unde labore a dolores cumque officiis voluptate.',
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
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi, nesciunt ratione delectus ad tempore necessitatibus neque sint ex! Fuga vel adipisci maiores unde labore a dolores cumque officiis voluptate.',
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
            <TabsTrigger value="experience">experience</TabsTrigger>
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
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>{' '}
    </motion.div>
  );
};

export default Resume;
