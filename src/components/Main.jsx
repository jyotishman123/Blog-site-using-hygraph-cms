import React,{useState,useEffect} from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css-3.png"
import REACT from "../assets/react.png";
import CODING from "../assets/coding.jpg";
import C from "../assets/C.png";
import { Allpost } from '../contex/Contex';
// import {AiOutlineArrowRight} from 'react-icons/ai'



export default function Main() {
  

 
  const post = Allpost();
  console.log(post)

  let recentPost = post.length - 3
 
   
    
 
  return (
    
      <>

      <div className='my-6 py-5 text-center'>
        <h2 className='font-semibold text-2xl'>What we know</h2>
      </div>
       

<div className=' w-full flex  justify-around flex-wrap my-3'>

   <div className=' sm:w-[400px]  w-[80%] border-2 p-3 rounded-md shadow-md my-5'>
     <img src={HTML} alt="" className='w-[50px] m-3' />
     <h3 className='text-xl font-bold m-3  '>
      HTML
     </h3>
     <p className='m-3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque et at!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque et at!
       
     </p>
     <button className='m-3 text-lg font-normal text-orange-500'>Read</button>
   </div>

   <div className=' sm:w-[400px]  w-[80%] border-2 p-3 rounded-md shadow-md my-5'>
     <img src={CSS} alt="" className='w-[50px] m-3  ' />
     <h3 className='text-xl font-bold m-3'>
      HTML
     </h3>
     <p className='m-3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque et at!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque et at!
      
     </p>
     <button className='m-3 text-lg font-normal text-blue-500'>Read</button>

   </div>

   <div className=' sm:w-[400px]  w-[80%] border-2 p-3 rounded-md shadow-md my-5'>
     <img src={REACT} alt="" className='w-[50px] m-3' />
     <h3 className='text-xl font-bold m-3  '>
      HTML
     </h3>
     <p className='m-3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque et at!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque et at!
       
     </p>
     <button className='m-3 text-lg font-normal text-sky-500'>Read</button>

   </div>

</div>

   


   <div className='relative  lg:h-[800px] sm:h-[930px]  h-[910px] w-full mt-[80px] mb-6'>
<img src={CODING} alt="" className='w-[100%] h-[100%]' />

<div className='absolute  w-[100%] h-[100%] top-0 left-0 bg-gray-900/50 '> 

<div className='p-6 text-center'>
  <h1 className='text-slate-400 text-6xl font-extralight   mt-5'>Learn C</h1>
  <p className='text-slate-300 font-light py-3 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat!</p>
</div>
 

<div className='flex items-center w-full flex-wrap  justify-center m-autooo mt-[50px]'>

  <div className=' px-6 py-2 w-[500px] '>
  <img src={C} alt="" className='w-[400px]'/>
  </div>
  <div className='p-2 px-6 w-[500px] lg:border-l-2'>
    <h2 className='text-5xl font-light text-slate-200 py-3'>Learn C with Us</h2>
    <p className='font-light text-slate-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolore sequi asperiores nihil, quibusdam quas doloremque vel fuga eum dolorem earum aut praesentium commodi necessitatibus!</p>
    <button className='my-2  text-white  bg-blue-900 py-2 px-6 rounded-md hover:bg-orange-500'>Learn</button>
  </div>

</div>




</div>
   </div>



 <div className='py-6 px-[80px]'>
    

   <h1 className='text-2xl font-semibold text-slate-600'>Recent Post</h1>
   <div className='flex flex-wrap justify-center  py-5   w-[full]  '>


   {post.slice(recentPost, post.length).map((ele)=>{
    return (
           <div className='py-5 px-5 w-[100%] sm:w-[400px] my-5 mx-2 border-2'>
               <img src={ele.coverPhoto.url}  alt=""  className='sm:w-[200px] w-[130px] m-auto' />
               <h2 className='sm:text-2xl text-lg py-4 px-2 sm:text-center'>{ele.title}</h2>
               <div  className='sm:text-xl text-md px-2 py-4' contentEditable='true' dangerouslySetInnerHTML={{ __html: ele.content.html }}></div>
             <a href={ele.slug} className = "sm:px-2 sm:py-4 px-6 py-3">  <button className='bg-sky-600 py-2 px-6 rounded-sm text-white'>Read</button> </a>
           </div>

    )
   })}
        </div>


 </div>


    
       
     </>
  )
}
