import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";


export const router =createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {path:'/', element:<App></App>},
        {path:'/login', element: <Login></Login>},
        {path:'/register', element: <Register></Register>},
      ]
    }
  ])