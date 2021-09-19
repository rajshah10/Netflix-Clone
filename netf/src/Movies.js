import React from 'react'
import "./movies.css"
import Nav from './Nav'
import req from './Request'
import Row from './Row'
const Movies = () => {
    return (
        <>
        <div className="movie">
            <Nav/>
            <div className="movie-title">
                Movies
            </div>
            <div className="movie-desc">
                    <p>Movies move us like nothing else can, whether they’re scary, funny,dramatic,
                     romantic or anywhere in-between. So many titles, so much to experience.</p> 
            </div>
            <div className="row-movies">
                 <Row title="Popular on Netflix" fetchUrl={req.fetchNO}/>
                 <Row title="Fantasy Movies" fetchUrl={req.fetchFantasy}/>
                 <Row title="Drama" fetchUrl={req.fetchDrama}/>
                 <Row title="Now Playing" fetchUrl={req.fetchNowPlaying}/>
                 <Row title="Mystery Movies" fetchUrl={req.fetchMystery}/>
                 <Row title="Western Movies" fetchUrl={req.fetchWestern}/>
                 <Row title="Crime Movies" fetchUrl={req.fetchCrime}/>
                 
            </div>
           
        </div>
        </>
    )
}

export default Movies
