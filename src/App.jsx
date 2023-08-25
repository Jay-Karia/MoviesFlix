import * as React from 'react'
import './App.css'

import HomeScreen from './Components/HomeScreen/HomeScreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            {/* Home Route */}
            <Route exact path="/" element={<HomeScreen />} />
            {/* Login Route */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
