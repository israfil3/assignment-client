import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import CollageDetails from './Components/CollegeDetails/CollageDetails.jsx';
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import MoreCollege from './Components/moreCollege/MoreCollege.jsx';
import SubCollageTag from './Components/subCollageTag/SubCollageTag.jsx';
import Admission from './Components/Admission/Admission.jsx';
import AdmissionCollage from './Components/AdmissionCollage/AdmissionCollage.jsx';
import MyCollege from './Components/myColege/MyCollege.jsx';




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
      },
      {
        path:'/subCollege/:id',
        element:<SubCollageTag></SubCollageTag>,
        loader:({params})=>  fetch(`http://localhost:5000/subCollege/${params.id}`)
      },
      {
        path:'admission',
        element:<Admission></Admission>,
      },
      {
        path:'/collegeID/:id',
        element:<AdmissionCollage></AdmissionCollage>,
        loader:({params}) => fetch(`http://localhost:5000/subCollege/${params.id}`)
      },
      {
        path:'myCollege',
        element:<MyCollege></MyCollege>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
