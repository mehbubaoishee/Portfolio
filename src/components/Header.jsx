import React from 'react';
import { GoDotFill } from "react-icons/go";
import { TbLineDotted } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=' bg-[#F5F5F5]'>

      <div className='relative'>
        <div className='hidden md:block'>
          <div className='text-4xl top-36 left-48  opacity-90 text-[#5c53dc] absolute bottom-0'>
            <GoDotFill className='prop1' />
          </div>
          <div className='absolute top-44 left-40 h-2 w-16'>
            <hr className='border-t-4 border-blue-900' />
          </div>
          <div className='absolute top-48 left-40 h-2 w-16'>
            <hr className='border-t-4 border-blue-950' />
          </div>
        </div>

        {/* React Spin */}
        <div className='absolute md:top-[10.8rem] md:right-[20.2rem] top-[28.8rem] right-[2rem] text-6xl text-blue-800'>
          <FaReact className='reactspin' />
        </div>
      </div>



      <div className='md:w-8/12 md:text-start text-center px-4 md:px-0 py-20 m-auto flex flex-col md:flex-row items-center'>
        {/* Left Side */}
        <div className='md:w-1/2'>
          <h1 className='text-[#333333] text-4xl md:text-6xl font-bold'><span className='md:text-5xl'>Myself,</span> <br />
            <span className='mb-3 bg-clip-text text-transparent bg-gradient-to-tr from-[#262262] via-[#262262] to-current'> <span>Shimul Mahmud</span>
              <br />
              <span className='md:text-5xl'>Software Developer</span> </span><br />
            <span className='md:text-5xl text-[#404040]'>Innovation Meets Success!</span></h1>
          <p className='text-[#666666] mt-4'>Using software development to help your business grow, measure your success, and achieve your goals. I am ready to serve you with my offshore software development services and my own products. Take a look at my latest work and reach out to me to get started!</p>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2'>
          <img className='w-full ' src="https://i.ibb.co.com/hcjQfsM/Brown-Grey-Creative-Modern-Online-Portfolio-1-removebg-preview.png" alt="" />
        </div>
      </div>

      <div className='relative'>

        {/* Right dottet animation */}
        <div className='absolute body opacity-70 bottom-0 text-6xl right-20'>
          <div className='relative'>
            <TbLineDotted className='absolute bottom-0' />
            <TbLineDotted className='absolute bottom-2' />
            <TbLineDotted className='absolute bottom-4' />
            <TbLineDotted className='absolute bottom-6' />
          </div>
          <div className='relative right-10'>
            <TbLineDotted className='absolute bottom-0' />
            <TbLineDotted className='absolute bottom-2' />
            <TbLineDotted className='absolute bottom-4' />
            <TbLineDotted className='absolute bottom-6' />
          </div>

        </div>

      </div>








    </div>
  );
};

export default Header;