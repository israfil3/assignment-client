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
import Sing from './Components/sing/Sing.jsx';
import Login from './Components/login/Login.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import PrivateRoute from '../PrivateRoute.jsx';
import Error from './Components/Erorr/Error.jsx';
import UserDetils from './Components/user/UserDetils.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Header></Header>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>,
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
      },
      {
        path:'sing',
        element:<Sing></Sing>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path: 'userD',
        element:<UserDetils></UserDetils>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
 </AuthProvider>
)
