import React, { useState, useEffect } from 'react'

import './Banner.css'
import requests from '../api/requests'
import axios from 'axios'

const Banner = () => {
  const [movies, setMovies] = useState([])
  const [index, setIndex] = useState(0)

  const trim = (description, max) => {
    if (description.length > max) {
      return description.substring(0, max) + '...'
    } else {
      return description
    }
  }

  const update = (max) => {
    max--;
    if (index >= max) {
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
      return request
    }
    fetchPopular()
  }, [])

  return (
    <>
      <header
        className="banner"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[index].backdrop_path})` }}
      >
        <div className="banner-content">
          <div
            className="right"
            onClick={() => {
              update(5)
            }}
          >
            {'>'}
          </div>
          <div className="header">
            <h1>{movies[index].original_title}</h1>
          </div>
          <div className="buttons">
            <button className="btn btn-1">
              <b>Play</b>
            </button>

            <button className="btn btn-2">
              <b>My List</b>
            </button>
          </div>
          <div className="description">{trim(movies[index].overview, 200)}</div>
        </div>
        <div className="fade"></div>
      </header>
    </>
  )
}

export default Banner
