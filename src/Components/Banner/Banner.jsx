import React, {useState} from 'react'

import './Banner.css'

const Banner = () => {

    const trim = (description, max)=> {
        if (description.length > max) {
            return description.substring(0, max) + '...';
        } else {
            return description
        }
    }

  return (
    <>
      <div className="banner">
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
            {trim("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam suscipit minima natus accusantium velminus facere corrupti iusto voluptatibus non quidem. Optio, impedit asperiores!", 150)}
          </div>
        </div>
        <div className="fade"></div>
      </div>
    </>
  )
}

export default Banner
