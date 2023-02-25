 import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const  Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-around items-center h-24 max-w-[100%] mx-auto px-4 text-white  bg-regals-blue w-full'>
      <h1 className='text-2xl font-light  text-white'>Blogs<span className='text-4xl text-orange-600 font-bold '>i</span>te</h1>
      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-4 hover:text-orange-500'>C</li>
        <li className='p-4 hover:text-orange-500'>HTML</li>
        <li className='p-4 hover:text-orange-500'>CSS</li>
        <li className='p-4 hover:text-orange-500'>JS</li>
        <li className='p-4 hover:text-orange-500'>REACT</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r cursor-pointer border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
         <h1 className='text-2xl font-light  text-white pt-10 pl-5'>Blogs<span className='text-4xl text-orange-600 font-bold '>i</span>te</h1>
          <li className='p-5 border-b border-gray-600'>C</li>
          <li className='p-5 border-b border-gray-600'>CSS</li>
          <li className='p-5 border-b border-gray-600'>HTML</li>
          <li className='p-5 border-b border-gray-600'>JS</li>
          <li className='p-5'>REACT</li>
      </ul>
    </div>
  );
};

export default Header;



 
