import React, {useContext} from 'react'
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import './searchinput.css'
import { Apicontext } from '../contextapi';


export const Searchinput = () => {
  const {Handlechange,searinput,setsearinput} = useContext(Apicontext)

  
  const exit =()=>{
    setsearinput("")
  }

  return (
    <div className='Search-input-Componet'>
        <div className='input-div'>
        <input value={searinput} onChange={Handlechange} type="text" placeholder='Search your movies...' />
        <div className='logo1-div'>
          <span><BiSearch/></span>
          </div>
          <div  onClick={exit} className='logo2-div'>
            {searinput && 
            <span><CgClose/></span>
           }
        </div>
        </div>
    </div>
  )
}
