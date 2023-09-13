
import { useState } from "react";
export const useHandlechange = (initialstate) => {
    const [feild ,setfield] = useState(initialstate)
    const handleinputchange=(e)=>{
        setfield((prev)=>({
            ...prev,
           [e.target.name] :e.target.value
        }))
    }
    return{
        feild,
        handleinputchange,
    }

}
