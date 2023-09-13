import React, { useContext } from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { Authcontext } from './Components/Authcontext'

export const Protectedlogin =()=>{
    const {auth} = useContext(Authcontext)
    if (auth){
        return <Navigate to="/Home"/>
    }
    return <Outlet/>
}

export const Protected = () => {
     
     const {auth} = useContext(Authcontext)
     if (!auth){
        return <Navigate to="/"/>
     }
     return <Outlet/>
}
