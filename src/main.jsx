import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddData from './components/AddData.jsx';
import UpdateData from './components/UpdateData.jsx';
import Err from './components/Err.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Authprovider from './Authprovider.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Home from './components/Home.jsx';
import Equipments from './components/Equipments.jsx';
import ViewData from './components/ViewData.jsx';
import CartEquip from './components/CartEquip.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://equisports-server.vercel.app/cricketData'),
   
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://equisports-server.vercel.app/products'),
        
      },
      {
        path: "/cartEquip",
        element: <PrivateRoute><CartEquip /></PrivateRoute>
        ,
        
    }
    ]
  
  },
 
  {
    path:"addData",
    element:(<PrivateRoute><AddData></AddData></PrivateRoute>),
  },
  {
    
      path: "/equipments",
      element: <PrivateRoute><Equipments></Equipments></PrivateRoute>,
      loader:()=>fetch('https://equisports-server.vercel.app/cricketData'),
      
   
  },

  {
    path:"/updateData/:id",
    element: <PrivateRoute> <UpdateData></UpdateData></PrivateRoute>,
    loader:({params})=>fetch(`https://equisports-server.vercel.app/cricketData/${params.id}`)

  },
  {
    path:"/viewData/:id",
    element: <PrivateRoute> <ViewData></ViewData></PrivateRoute>,
    loader:({params})=>fetch(`https://equisports-server.vercel.app/cricketData/${params.id}`)

  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path:"*",
    element:<Err></Err>,
    
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider><RouterProvider router={router} />  </Authprovider>
     
    
  </StrictMode>,
)
