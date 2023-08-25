import React from 'react'

import "./HomeScreen.css"

import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"
import Row from "../Row/Row"

import requests from '../api/requests'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        {/* Navbar */}
        <Navbar/>

        {/* Banner */}
        <Banner/>

        {/* Row */}
        <div className="rows">
        <Row title="Netflix Originals" apiURL={requests.fetchNetFlixOriginals} isLarge/>
        <Row title="Trending Movies" apiURL={requests.fetchTrending}/>
        <Row title="Top Rated Movies" apiURL={requests.fetchTopRated}/>
        <Row title="Action Movies" apiURL={requests.fetchAction}/>
        <Row title="Comedy Movies" apiURL={requests.fetchComedy}/>
        <Row title="Horror Movies" apiURL={requests.fetchHorror}/>
        <Row title="Romance Movies" apiURL={requests.fetchRomance}/>
        <Row title="Documentary" apiURL={requests.fetchDocumentary}/>
        </div>
    </div>
  )
}

export default HomeScreen