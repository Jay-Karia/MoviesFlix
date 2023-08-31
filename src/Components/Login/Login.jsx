import React, { useEffect, useState } from 'react'

import Navbar from '../Navbar/Navbar'

import './Login.css'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Login = () => {

  const [signIn, setSignIn] = useState(false)

  return (
    <>
      <div className="login">
        <div className="navbar">
          <Navbar btn />
        </div>
        <div className="contents">
          <div className="login_box">
            <h1 align="center" className="title">
              Unlimited movies, TV Shows and more
            </h1>
            <div className="paragraph" align="center">
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to Watch? Enter your email to create or restart your
                membership
              </h3>
            </div>
            <Box
            className={"input_box"}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TextField
                id="filled-basic"
                label="Email Address"
                variant="filled"
                sx={{
                  background: 'rgba(0, 0, 0, 80%)',
                  border: '1px solid grey',
                  borderRadius: '7px',
                  input: { color: 'white', fontFamily: 'Rubik' },
                  label: {
                    color: 'white',
                    fontFamily: 'Rubik',
                    ':active': { color: 'white' },
                  },
                  '& label.Mui-focused': { color: 'white' }
                }}
              />
              <Button
                variant="contained"
                className={"start"}
                sx={{
                  background: 'hsl(0, 100%, 35%)',
                  ':hover': {
                    bgcolor: 'hsl(0, 100%, 35%)',
                    color: 'white',
                  },
                  top: '-1px',
                  marginLeft: '30px',
                }}
              >
                Get Started {<ArrowForwardIosIcon />}
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
