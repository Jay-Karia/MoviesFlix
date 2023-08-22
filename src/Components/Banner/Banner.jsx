import React, { useState, useEffect } from 'react'

import './Banner.css'
import requests from '../api/requests'
import axios from 'axios'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

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
    max--
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
      let p = 0
      for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * request.data.results.length)
        arr.push(request.data.results[num])
      }
      setMovies(arr)
      return request
    }
    fetchPopular()
  }, [])

  return (
    <>
      {movies.length > 0 ? (
        <header
          className="banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[index].backdrop_path})`,
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
          }}
        >
          <div className="banner-content">
            <div
              className="right"
              onClick={() => {
                update(5)
              }}
            >
              <ArrowForwardIosIcon />
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
            <div className="description">
              {trim(movies[index].overview, 200)}
            </div>
          </div>
          <div className="fade"></div>
        </header>
      ) : (
        <>
          {/* Skeleton */}
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rectangular"
              width={210}
              height={118}
              style={{height:"35rem", width:"100%"}}
            />
        </>
      )}
    </>
  )
}

export default Banner
