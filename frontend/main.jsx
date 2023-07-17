import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Shop from './Shop.jsx';
import Contacts from './Contacts.jsx';
import Signin from './Signin.jsx'
import Cart from './Cart.jsx'
import Signup from './Signup'
import Signout from "./Signout";
import SingleProduct from "./SingleProduct";
import Footer from "./componants/public/Footer.jsx";
import Checkout from "./Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path: "/shop",
    children: [
      {
        index: true,
        element: <Shop />,
        label: "main",
      },
      {
        path: ":productId",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/contacts",
    element:<Contacts/>
  },
  {
    path: "/sign-in",
    element:<Signin/>
  },
  {
    path: "/sign-up",
    element:<Signup/>
  },{
    path: "/sign-out",
    element:<Signout/>
  },
  {
    path: "/cart",
    element:<Cart/>
  },
  {
    path: "/checkout",
    element:<Checkout/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <Footer></Footer>
  </React.StrictMode>,
)
