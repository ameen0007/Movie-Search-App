import React, { useContext } from 'react'
import './searchlist.css'
import { Apicontext } from '../contextapi';


export const Searchlist = () => {

  

  const {movielist,defaultlist} = useContext(Apicontext)
   console.log(defaultlist);
      
  return (
    <div className='main-searchlist' >
    <div className='searchlist-container'>
        {(movielist.length > 0 ? movielist :defaultlist).map((data)=>(
           <div className='searchlist-div' key={data.id}>
           <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
         </div>
        ))
        }
      
    </div>
    </div>
  )
}
