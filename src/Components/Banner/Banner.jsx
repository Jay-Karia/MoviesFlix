import React, { useState, useEffect } from 'react'

import './Banner.css'
import requests from '../api/requests'
import axios from 'axios'

import Movie1 from './movie1.jpg'
import Movie2 from './movie2.jpg'
import Movie3 from './movie3.jpg'

const Banner = () => {
  const [movies, setMovies] = useState([])
  const [images, setImages] = useState([Movie1, Movie2, Movie3])
  const [index, setIndex] = useState(0)

  const trim = (description, max) => {
    if (description.length > max) {
      return description.substring(0, max) + '...'
    } else {
      return description
    }
  }

  const update = (max) => {
    if (index + 1 > max) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    const fetchPopular = async () => {
      const request = await axios.get(requests.fetchPopular) // popular movie
      let arr = []
      for (let i = 0; i < 5; i++) {
        arr.push(request.data.results[i])
      }
      setMovies(arr)
      console.log(movies)
      return request
    }
    // fetchPopular()
  })

  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="banner-content">
          <div className="header">
            <h1>Movie Name</h1>
          </div>
          <div className="buttons">
            <button className="btn btn-1">
              <b>Play</b>
            </button>

            <button className="btn btn-2">
              <b>My List</b>
            </button>
          </div>
          <div className="description">
            {trim(
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam suscipit minima natus accusantium velminus facere corrupti iusto voluptatibus non quidem. Optio, impedit asperiores!',
              150,
            )}
          </div>
        </div>
        {/* <div className="carousel"> */}
          <div
            className="right"
            onClick={() => {
              update(2)
            }}
          >
            next
          </div>
        {/* </div> */}
        <div className="fade"></div>
      </div>
    </>
  )
}

export default Banner
