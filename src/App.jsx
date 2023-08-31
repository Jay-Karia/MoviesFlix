import React, { useEffect } from 'react'
import './App.css'

import HomeScreen from './Components/HomeScreen/HomeScreen'
import Login from './Components/Login/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const user = localStorage.getItem("user")

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <div className="app">
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={<HomeScreen />} />
          {/* Login Route */}
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
