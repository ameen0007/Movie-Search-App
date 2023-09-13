import React, { useState ,useContext } from "react";
import "./logincard.css";
import { useNavigate } from "react-router-dom";
import { useHandlechange } from "../../Components/useHandlechange";
import { Authcontext } from "../../Components/Authcontext";

export const Logincard = () => {

  const {auth,setAuth} = useContext(Authcontext)
  const navigate = useNavigate()
 
  
  const {feild ,handleinputchange} = useHandlechange({
    "email" : "",
    "password" : ""
  })

  const [errorfield , seterrorfeild] = useState({
    "email" : false,
    "password" : false,
  })
     

 const Handleinput =(e)=>{
    handleinputchange(e);
 }
   console.log(feild,"inputvalue");
  const Handlesubmit = ()=>{
     if(Isformvid()){
       navigate("/Home")
       setAuth(true)
       console.log(auth, "===submitauth");
       localStorage.setItem("usertoken","token")
        return
     }
     }

const Isformvid =()=>{
   const errors = {
    "email" : false,
    "password" : false,
   }
   console.log(errors,"top");
   if (feild.email === ""){
      errors.email = true
      console.log(feild.email,"first");
   }
   if (feild.password === ""){
    errors.password = true
    console.log(errors,"second");
 }
 console.log(errors,"bottom");
 seterrorfeild(errors)
   
 
  if (Object.values(errors).some((error)=> error === true)){
    return false
  }
  return true
}

  return (
    <section className="section">
      <div className="card">
        <div className="inner">
          <div>
            <h1>Sign In</h1>
          </div>
          <div>
            <input onChange={Handleinput} name="email" type="email" placeholder="Email or Phone number" />
            {errorfield.email && <p className="errors">This feild is required</p>}
          </div>
          <div>
            <input onChange={Handleinput} type="text" name="password" placeholder="Password" />
            {errorfield.password &&  <p className="errors">This feild is required</p>}
          </div>
          <div>
            <button onClick={Handlesubmit}>Sign In</button>
          </div>
          <div >
            <p onClick={()=> navigate("/Forgot")} >Forgot Password?</p>
          </div>
          <div className="last">
            <small>
              New to Movie Hub?<span className="span" onClick={()=> navigate("/Signup")} >Sign Up now</span>.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
  }
