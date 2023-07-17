import { useEffect, useState } from "react";

// hooks are usually named exports rather than default
export function useIsLoggedIn() {

    const [ islogin, setIsLogin ] = useState(null);
    
    useEffect(()=>{
        let userExist = localStorage.getItem("session");
        (userExist) ? setIsLogin(true) : setIsLogin(false);
      }, [islogin]);
      
      return islogin;
}