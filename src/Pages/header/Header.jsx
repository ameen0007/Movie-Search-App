import React, { useEffect, useState ,useContext} from 'react'
import './header.css'
import { BsSunFill } from "react-icons/bs";
import { BiSolidLogInCircle } from "react-icons/bi";
import { BsMoonFill  } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Components/Authcontext';
export const Header = () => {

const {auth,setAuth} = useContext(Authcontext)

   const [isDarkMode ,setIsDarkMode] = useState(true)
   const navigate = useNavigate()
  useEffect(() => {
    if (isDarkMode){
     document.body.classList.remove('light')
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  
  }, [isDarkMode])
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  
  const logout = ()=>{
    setAuth(false)
    localStorage.clear()
    console.log(auth,"after logout");
    navigate("/")
  }
  return (

    <header>
         <div className="nav">
            <div className='left'>
           <div>
           <img src="\src\assets\icon-park-solid_movie.png" alt="" />
           </div>
           <div>
           <h1>MovieHub</h1>
           </div>
           </div>
           <div className='right'>
            <div className='button'>
              <button onClick={toggleDarkMode}>
              {isDarkMode ? <BsSunFill /> : <BsMoonFill color='black' />}
              </button>
           </div>
           {auth && 
           
           <div>
            <button onClick={logout}>{isDarkMode?<BiSolidLogInCircle /> : <BiSolidLogInCircle color='black' />}</button>
           </div>
           }
           </div>
        </div>
    </header>
    
 
  )
}
 