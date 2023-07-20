import axios from "axios";
import {useEffect, useState} from "react";

// hooks are usually named exports rather than default
export function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const userExist = localStorage.getItem("userSession");
    if (userExist) {
      axios
        .get(`${REACT_APP_BACKEND_API}/api/user/${userExist.userId}`, {
          withCredentials: true,
        })
        .then((response) => response.data)
        .then((data) => console.log(data.data));
    }
    userExist ? setIsAdmin(true) : setIsAdmin(false);
  }, []);

  return isAdmin;
}
