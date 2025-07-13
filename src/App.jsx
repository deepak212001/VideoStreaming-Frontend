import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import User from './Pages/User/User.jsx'
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import axios from 'axios'


function App() {
  const [sideNavbar, setSideNavbar] = useState(true)

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value)
  }



  return (
    <div className='App'>

      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
        <Route path='/watch/:id' element={<Video />} />
        <Route path='/user/:id' element={<User sideNavbar={sideNavbar} />} />
        <Route path='/:id/upload' element={<VideoUpload />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
