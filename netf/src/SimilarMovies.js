import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getSimilarMovies } from './fetchDetails';
import "./Similar.css"
const SimilarMovies = ({id}) => {
    const [similar,setSimilar]=useState([]);
    const handleClick=()=>{
        window.scrollTo(0,0);
    }
    useEffect(() => {
       const fetchSimilarMovie=async()=>{
            setSimilar(await getSimilarMovies(id))
       }
       fetchSimilarMovie();
    }, [id])
    return (
        <div className="similar--banner">
            <div className="similar-title">
                Similar Movies
            </div>
            <div className="similar--images">
            {similar.slice(0,12).map(sm=>(
                <>
                        <Link onClick={handleClick}  to={`/details/${sm?.id}`}>
                            {
                                sm?.backPoster=="https://image.tmdb.org/t/p/original/null"?
                                <div></div>:
                                <img src={`${sm?.backPoster}`} />
                            }
                         
                        </Link>
                </>        
            ))}
             </div>
        </div>

        
    )
}

export default SimilarMovies
