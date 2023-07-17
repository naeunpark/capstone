import { useEffect, useState } from "react";

// hooks are usually named exports rather than default
export function useIsAdmin() {

    const [ isAdmin, setIsAdmin ] = useState(null);
    
    useEffect(()=>{
        const userExist = localStorage.getItem("userSession");
        (userExist) ? setIsLogin(true) : setIsLogin(false);
      }, [isAdmin]);
      
      return useIsAdmin;
}