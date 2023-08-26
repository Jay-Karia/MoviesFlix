import React, { useState, useEffect, useRef } from 'react'

import './Banner.css'
import requests from '../api/requests'
import axios from 'axios'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Skeleton from '@mui/material/Skeleton'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'

const Banner = () => {
  const [movies, setMovies] = useState([])
  const [index, setIndex] = useState(0)
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)

  const trim = (description, max) => {
    if (description.length > max) {
      return description.substring(0, max) + '...'
    } else {
      return description
    }
  }

  const update = (max) => {
    max--
    setChecked(true)
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
      for (let i = 0; i < request.data.results.length; i++) {
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
            <div className="header">
              <h1>{trim(movies[index].title, window.innerWidth < 300 ? 35 : 100)}</h1>
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
              {trim(movies[index].overview, window.innerWidth < 500 ? 100 : 500)}
            </div>
          </div>
          <Button
            variant="contained"
            className={'right'}
            onClick={() => {
              update(20)
            }}
            style={{ background: "linear-gradient(0.25turn, transparent,, transparent,  black)", boxShadow:"none" }}
          >
            <ArrowForwardIosIcon />
          </Button>
          <div className="fade"></div>
        </header>
      ) : (
        <>
          {/* Skeleton */}
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            style={{ height: '35rem', width: '100%' }}
          />
        </>
      )}
    </>
  )
}

export default Banner
