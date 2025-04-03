import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center  absolute top-0 left-0 bg-black z-[9999]'>
      <motion.div 
      initial = {{opacity:0}}
      animate={{opacity:1}}
      transition={{type:'tween', duration:2}}
      >
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className='text-7xl font-extrabold font-[alan] text-white'> Welcome to QuantumStore</h1>
        <h1 className='text-3xl font-extrabold font-[alan] text-white'> Elevate Your Shopping Experience!</h1>
        <NavLink className='text-2xl font-extrabold bg-violet-600/50 px-15 py-3 text-white rounded-3xl hover:scale-110 transition-all duration-150 backdrop-blur-3xl my-5' to='/home'>Let's Shop!</NavLink>
      </div>
    </motion.div>
    </div>
  )
}

export default Landing;
