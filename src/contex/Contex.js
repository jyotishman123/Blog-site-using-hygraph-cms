import React from 'react';
import { createContext, useContext, useEffect, useState,useReducer } from 'react';
import { request, gql } from 'graphql-request'

const ContexApi = createContext();

export default function Contex({children}) {
// const [blog, setBlog] = useState(null)
const [post, setPost] = useState([]);


 


const fetch = async ()=>{

  const query = gql`
  {
    posts {
      title,
      slug,
      languageName,
      coverPhoto{
        url
      },
      content{
        html
      },
      date,
      author
      }
  }
`
 await request('https://api-ap-south-1.hygraph.com/v2/clbf64b430cv501uk7td065w5/master',query).then((data)=>{
      
    let newdata = data.posts
       setPost(newdata)
   
})
}



useEffect(() => {

    
 fetch()

}, []);
   
// console.log(post[0].title)

 
// console.log(post)

  return (
  <ContexApi.Provider value={post}>
    {children}
    </ContexApi.Provider>
  )
}

export function Allpost() {
  return useContext(ContexApi);
}

