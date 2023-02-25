import React, { useState } from 'react'
import Header from '../components/Header';
import { useParams } from "react-router-dom";
import { Allpost } from '../contex/Contex';


export default function Blog() {
    const {slug} = useParams()
  const post = Allpost();
  
  

 
  return (
     <>
     <Header/>
      {post.filter((blog)=> blog.slug == slug).map((element)=>{
       return (  

        <div>
            <div className='w-full h-[400px]'>
               <img src={element.coverPhoto.url} className = "m-auto h-full" alt="" />
            </div>
            <div className='py-6 px-6'>
                <h1 className='font-semibold text-3xl my-3'>{element.title}</h1>
                <h1 className='pt-3 my-6'>{element.author}</h1>
               <div  className='sm:text-xl text-md px-2 py-4' contentEditable='true' dangerouslySetInnerHTML={{ __html: element.content.html }}></div>

            </div>
        </div>
          
       )
      })}
     </>
  )
}
