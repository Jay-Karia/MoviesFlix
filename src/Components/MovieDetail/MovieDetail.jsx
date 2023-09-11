import React from 'react'

import {useParams} from "react-router-dom";

function MovieDetail(props) {

    const {id} = useParams()

    return (
        <>
            <h1>Movie</h1>
            <h4>{id}</h4>
        </>
    )
}

export default MovieDetail