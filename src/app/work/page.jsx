'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'e-commerce',
    description:
      'E-Commerce Pizza store the project written on the latest technologies and currently the most complex project I have written. You can add or remove a selected item. You can increase or decrease the counter of one item. There are categories and sorting by price, by popularity, etc. There is page routing full-fledged shopping cart and home page',
    stack: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Typescript' },
      { name: 'Tailwind' },
    ],
    image: '/assets/work/1.png',
    live: 'https://pizza-psi-six.vercel.app/',
    github: 'https://github.com/Baxa-1998/Pizza',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'building company',
    description:
      'Project written on React library.At first glance, it may seem like a simple site, but there is actually a precise calculation of apartments in quadrants and a slider on the main page. By the way, I designed it myself.',
    stack: [{ name: 'React' }, { name: 'CSS' }, { name: 'HTML' }, { name: 'CSS' }],
    image: '/assets/work/2.png',
    live: 'https://modent-view-lf6u.vercel.app/',
    github: 'https://github.com/Baxa-1998/modent-view',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Iphone page',
    description:
      'I developed a website similar to the Apple iPhone 15Pro page using React Three js and GSAP.The site has easy navigation and optimized 3D elements adapted to all devices',
    stack: [
      { name: 'React' },
      { name: 'GSAP' },
      { name: 'Tailwind' },
      { name: 'CSS' },
      { name: 'Three.js' },
    ],
    image: '/assets/work/3.png',
    live: 'https://clone-iphone-page.netlify.app/',
    github: 'https://github.com/Baxa-1998/Iphone-page',
  },
  {
    num: '04',
    category: 'full-stack',
    title: 'Oxmetal',
    description:
      'Multiwebsite where sells building materials. I developed it using React and Firebase. The site has a full-fledged admin panel with authorization whereyou can add, delete and change products flexible search, categories and flexible filtering. Firebase was used as a database',
    stack: [{ name: 'React' }, { name: 'GSAP' }, { name: 'Tailwind' }, { name: 'CSS' }],
    image: '/assets/work/4.png',
    live: 'https://oxmetal.uz/',
    github: 'https://github.com/Baxa-1998/oxmetal',
  },
  {
    num: '05',
    category: 'frontend',
    title: 'Plaze',
    description:
      'Landing Page with animations.Test task from the Eloqwnt web studio.The site has a lot of animations with beautiful design',
    stack: [{ name: 'React' }, { name: 'GSAP' }, { name: 'SCSS' }],
    image: '/assets/work/5.png',
    live: 'https://plaza1.netlify.app/',
    github: 'https://github.com/Baxa-1998/Plaza',
  },
  {
    num: '06',
    category: 'web-app',
    title: 'Weather app',
    description:
      'A weather application written in Next js. I get the weather information from the API. It has the current weather and the forecast for the week. Also information about humidity, wind speed, wind direction, wind speed and other details',
    stack: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Typescript' }],
    image: '/assets/work/6.png',
    live: 'https://weather-app-sage-delta.vercel.app/',
    github: 'https://github.com/Baxa-1998/weather-app-',
  },
];

const Work = () => {
  const [project, setProject] = React.useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-[14px] text-accent xl:text-xl">
                      {item.name}
                      {item !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"> </div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-contain" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
