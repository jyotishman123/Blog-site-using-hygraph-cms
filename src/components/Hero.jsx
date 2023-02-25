import React from 'react';
import HeroImg from "../assets/img1.png"
import ReactTypingEffect from 'react-typing-effect';

export default function Hero() {
  return (
    <div className='h-full bg-regals-blue/100 shadow-2xl mb-3'>
          <div className='flex w-full justify-center items-center flex-wrap'>
            <div className=' text-slate-400  p-2 my-3'> 
            <h1 className='text-2xl sm:text-5xl  md:6xl font-light text-slate-200 my-4 shadow-xl'>Welcome To Blogsite</h1>
            <p className='text-2xl    font-light'>Learn with us
            <ReactTypingEffect  
        text={["C", "HTML","CSS","JS","REACT"]}
        typingDelay={500}
        eraseDelay={200}
        className="m-4 text-orange-500  text-4xl  font-light shadow-2xl"
      />
            </p>
            <button className='mt-5 hover:bg-orange-500 hover:font-bold  bg-blue-900 py-2 px-2 text-[15px] text-white rounded-md font-normal shadow-xl m-auto'>Join Our Community</button>
            </div>
            <div className='p-2'> 
            <img src={HeroImg} alt=""  className='md:w-[550px]  w-[300px] sm:w-[400px]  '/>
            </div>
          </div>

    </div>
  )
}
