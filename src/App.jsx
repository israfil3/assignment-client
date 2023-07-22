import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Home></Home>
        <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
