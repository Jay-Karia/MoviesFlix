import React, { useEffect } from 'react'

import Navbar from '../Navbar/Navbar'

import './Login.css'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import makeStyles from '@mui/styles/makeStyles'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const useStyles = makeStyles((theme) => {
  textField: {
    color: 'white'
  }
})

const Login = () => {
  const classes = useStyles()

  useEffect(() => {
    console.log(classes)
  }, [])

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
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <TextField
                //   className={classes.textField}
                id="filled-basic"
                label="Email Address"
                variant="filled"
                sx={{
                  background: 'rgba(0, 0, 0, 80%)',
                  color: 'black',
                  border: '1px solid grey',
                  borderRadius: '7px',
                  width: '40%',
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: 'hsl(0, 100%, 35%)',
                  ':hover': {
                    bgcolor: 'hsl(0, 100%, 35%)',
                    color: 'white',
                  },
                  height: '3rem',
                  width: '10rem',
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
