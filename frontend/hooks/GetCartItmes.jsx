import {REACT_APP_BACKEND_API} from "./config.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function GetCartItmes() {
  const session = JSON.parse(localStorage.getItem("session"));
  const [cartItems, setCartItems] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      axios
        .get(`${REACT_APP_BACKEND_API}/api/cart/userid/${session.userId}`, {
          withCredentials: true,
        })
        .then((response) => response.data.data.id)
        .then((cartId) => {
          axios
            .get(`${REACT_APP_BACKEND_API}/api/cart/${cartId}`, {
              withCredentials: true,
            })
            .then((response) => response.data.data)
            .then((datas) => {
              setCartItems(datas);
            })
            .catch((error) => {
              throw error.message;
            });

          localStorage.setItem("cartId", cartId);
        });
    } else {
      navigate("/sign-in");
    }
  }, []);

  return cartItems;
}
