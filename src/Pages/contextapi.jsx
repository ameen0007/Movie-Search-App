import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Apicontext = createContext()

export const Apiproivider =({children})=>{
  const [searinput,setsearinput]=useState("")
  const [movielist,setmovielist] =useState([])
  const [defaultlist,setdefaultlist]=useState([])

  const Api = "https://api.themoviedb.org/3/search/movie?api_key=30acea4d743f82372dde7f19001d12ed&page=2";

   const Fetchdefualtmovies = async ()=>{
      const response = await axios(Api ,{
        params : {
          query : "movie"
        }
      })  
      setdefaultlist(response.data.results)
   }
  
   useEffect(() => {
    Fetchdefualtmovies()
   }, [])

   const Fetchmovies = async () =>{
      const response = await axios(Api ,{
        params :{
          query : searinput,
        },
      })
      setmovielist(response.data.results)
      
   }

   useEffect(() => {
    const timeout = setTimeout(() => {
      Fetchmovies()
    }, 600);
    return ()=>{
      clearTimeout(timeout)
    }
 }, [searinput])

   const Handlechange =(e)=>{
    setsearinput(e.target.value)

     
   }
   return <Apicontext.Provider value={{movielist,Handlechange,setsearinput,searinput,defaultlist}}>{children}</Apicontext.Provider> 
}

