import axios from './axios';
import React from 'react'
import { useState ,useEffect} from 'react';
import "./Banner.css"
import req from "./Request";
const Banner = () => {
    const [movie,setMovie]=useState([]);
    useEffect(() => {
        async function fetchData()
        {
            const request=await axios.get(req.fetchComedyMovies);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        
        fetchData();
        
    }, []);
    console.log(movie);
    function truncate(string,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    return (
        <header className="banner" style={{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}>
          <div className="banner__contents">
                    <div className="banner__title">
                       {movie?.title || movie?.name|| movie?.original_name}
                    </div>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__descriptions">
                    {truncate(movie?.overview, 150)}
                    </h1>
              </div> 
              <div className="banner--fadeBottom">
                  
              </div>
        </header>
    )
}

export default Banner
