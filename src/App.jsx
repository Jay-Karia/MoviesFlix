import {useEffect} from 'react'
import './App.css'

import HomeScreen from './Components/HomeScreen/HomeScreen'
import Login from './Components/Login/Login'
import MovieDetail from "./Components/MovieDetail/MovieDetail.jsx";

import {Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function App() {
    const user = localStorage.getItem("user")

    const navigate = useNavigate()

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const currentURL = window.location.href
        if (currentURL.endsWith("/"))
            if (user) {
                navigate('/')
            } else {
                navigate('/login')
            }
    }, [])

    return (
        <>
            <div className="app">
                <Routes>
                    {/* Home Route */}
                    <Route exact path="/" element={<HomeScreen/>}/>
                    {/* Login Route */}
                    <Route exact path="/login" element={<Login/>}/>
                    {/*  Movie Detail Route */}
                    <Route exact path="/movie/:id" element={<MovieDetail/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
