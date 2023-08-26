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
        <div className="rows" id='movieRow'>
        <Row title="Netflix Originals" apiURL={requests.fetchNetFlixOriginals} isLarge key={1}/>
        <Row title="Trending Movies" apiURL={requests.fetchTrending} key={2}/>
        <Row key={3} title="Top Rated Movies" apiURL={requests.fetchTopRated}/>
        <Row key={4} title="Action Movies" apiURL={requests.fetchAction}/>
        <Row key={5} title="Comedy Movies" apiURL={requests.fetchComedy}/>
        <Row key={6} title="Horror Movies" apiURL={requests.fetchHorror}/>
        <Row key={7} title="Romance Movies" apiURL={requests.fetchRomance}/>
        <Row key={8} title="Documentary" apiURL={requests.fetchDocumentary}/>
        </div>
    </div>
  )
}

export default HomeScreen