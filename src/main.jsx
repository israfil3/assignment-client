import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import CollageDetails from './Components/CollegeDetails/CollageDetails.jsx';
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import MoreCollege from './Components/moreCollege/MoreCollege.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Header></Header>
      },
      {
        path:'/details/:id',
        element:<CollageDetails></CollageDetails>,
        loader:({params})=>fetch(`http://localhost:5000/college/${params.id}`) 
      },
      {
        path:'college',
        element:<MoreCollege></MoreCollege>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
