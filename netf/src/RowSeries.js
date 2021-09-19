import React,{forwardRef, useEffect,useState} from 'react'
import axios from "./axios"
import "./Row.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const RowSeries = forwardRef(({title,fetchUrl,isLargeRow=false},ref) => {
    const [movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    
    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
    }, [])
    return (
        <div className="row" ref={ref}>
            <h2 className="row__text">{title}</h2>
           <div className="row__posters">      

           {movies.slice(10-20).map(movie=>(
                <Link to = {"/seriesDetails/"+movie.id}>
                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}alt=""/>
                </Link>
            ))}
            </div> 
            
        </div>
    )

}
)

export default RowSeries
