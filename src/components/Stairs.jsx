import React from 'react';
import { animate, motion } from 'framer-motion';

const starAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};
const Stairs = () => {
  const reversedIndex = (index) => {
    const totalStair = 6;
    return totalStair - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={starAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reversedIndex(index) * 0.1,
          }} 
          className='h-full w-full bg-white relative'
        />
      ))}
    </>
  );
};

export default Stairs;
