import React, { useState, useEffect } from 'react'

import './Row.css'

import requests from '../api/requests'
import axios from 'axios'

import Skeleton from '@mui/material/Skeleton'

const Row = ({ title, apiURL, isLarge }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(apiURL)
      let arr = []
      for (let i = 0; i < request.data.results.length; i++) {
        arr.push(request.data.results[i])
      }
      setMovies(arr)
      return request
    }
    fetchMovies()
  }, [])

  return (
    <>
      <div className="row">
        <div className="title">
          <h2>{title}</h2>
        </div>

        <div className="movies">
          {movies.length > 0 ? (
            movies.map((movie) => {
              return (
                <>
                  <img
                    key={movie.key}
                    src={
                      isLarge
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                    }
                    alt={movie.title}
                    className={`"movie" ${isLarge ? 'large' : 'small'}`}
                    style={{borderRadius:"4px"}}
                  />
                </>
              )
            })
          ) : (
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rectangular"
              width={'100%'}
              height={isLarge ? '15rem' : '10rem'}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Row
