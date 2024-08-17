"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'
export const PageTransition = ({children}) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div 
        initial={{opacity: 1}}
        animate={{opacity: 0, transition: {delay: 1, duration: 0.4, ease: "easeInOut"}}} 
        className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
      />
      </div>
      {children}
    </AnimatePresence>
  )
}
