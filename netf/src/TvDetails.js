import React,{useEffect} from 'react'
import { useState } from 'react';
import { fetchDetails, fetchTvDetails } from './fetchDetails';
import "./details.css"
import { Link } from 'react-router-dom';
import Nav from "./Nav"
import TvVideo from './TvVideo';
import SimilarTv from './SimilarTv';
import Episodes from './Episodes';
import TvCredit from './TvCredit';
const TvDetails =({match}) => {
    const params=match.params;
    const [details,setDetails]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        window.scrollTo(0,0);
        const fetchAPI=async()=>{
            setDetails(await fetchTvDetails(params.id));
        }
        fetchAPI();
    }, [params.id])

   
    function truncate(string,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    return (
      <>
        <Nav/>
            {[details].map(movie=>(
                <>
                             
                           <div className="banners">
                            
                             <img src={`${base_url}/${movie.backdrop_path}`} className="lucifer" alt="Lucifer" />
                             <div className="banner--fadeBotto"> 
                           <div className="content">
                             
                           <div className="content__title">
                                {movie?.title || movie?.name|| movie?.original_name}
                           </div>
                               <h4>
                                   <span><i>16+</i> </span>
                                   <span>IMDB Vote : {movie.vote_count}</span>
                               </h4>
                               <p>
                                   {truncate(movie.overview,150)}
                               </p>
           
                               <div className="button">
                                   <Link to="" >Play</Link>
                                   <Link to="" >My List</Link>
                               </div>
                           </div>
                           
                          
                       </div>
                       </div>
                       <div className="banner--fade">
                                <div className="netflix-container">
                                    
                                </div>
                       </div>
                        </>
            ))}
            <div className="videos-title">
                Trailer
            </div> 
            <TvVideo id={params}/> 
            <SimilarTv id={params}/>  
            <Episodes setDetails={setDetails} id={params} details={details}/>  
            <TvCredit id={params}/>
            </>
           
    )
}

export default TvDetails
