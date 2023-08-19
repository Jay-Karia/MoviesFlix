import React from 'react'

import "./HomeScreen.css"

import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        {/* Navbar */}
        <Navbar/>

        {/* Banner */}
        <Banner/>
    </div>
  )
}

export default HomeScreen