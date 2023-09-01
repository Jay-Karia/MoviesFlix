import React, { useState, useEffect } from 'react'

import './Navbar.css'

const Navbar = ({ btn }) => {
  const [show, setShow] = useState(false)

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <div className={`navbar ${!show ? 'navbar-black' : ''}`}>
      <div className="nav-contents">
        <img className="logo" src="/netflix.png" alt="logo" />
        {btn ? (
          <button className={"signUp"}>Sign Up</button>
        ) : (
          <img className="avatar" src="/profile.png" alt="avatar" />
        )}
      </div>
    </div>
  )
}

export default Navbar
