import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {getUpcomingMovies } from './fetchDetails';
import "./videos.css"
import "./upcoming.css"
const UpcomingMovies = ({id}) => {
    const [upcoming,setUpcoming]=useState([]);
    const handleClick=()=>{
        window.scrollTo(0,0);
    }
    // const base_url="https://image.tmdb.org/t/p/original";
    useEffect(() => {
        const fetchUpcoming=async()=>{
            setUpcoming(await getUpcomingMovies())
        }
        fetchUpcoming();
        
    }, [])
    function truncate(string ,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    return (
        <div className="upcoming--banner">
            <div className="upcoming-title">
                Upcoming Movies
            </div>
            <div className="upcoming--images">
            
               
                        <div className="three_wrapper">
                            <div className="partOne">
                            {upcoming.slice(0-3).map(up=>(
                                <>
                                <Link to={`/details/${up.id}`}><p style={{color:"white",fontSize:20}}>{up.title}</p></Link>
                                <p style={{color:"#a3a3a3",fontSize:18}}> {truncate(up.overview,170)}</p>
                                </>
                                ))}
                                
                            </div>

                            <div className="partTwo">
                            {upcoming.slice(4,7).map(up=>(
                                <>
                                <Link to={`/details/${up.id}`}><p style={{color:"white",fontSize:20}}>{up.title}</p></Link>
                                <p style={{color:"#a3a3a3",fontSize:18}}> {truncate(up.overview,170)}</p>
                                </>
                                ))}
                                
                            </div>

                            <div className="partThree">
                            {upcoming.slice(8,11).map(up=>(
                                <>
                                <Link to={`/details/${up.id}`}><p style={{color:"white",fontSize:20}}>{up.title}</p></Link>
                                <p style={{color:"#a3a3a3",fontSize:18}}> {truncate(up.overview,170)}</p>
                                </>
                                ))}
                                
                            </div>
                         
                        </div>
                        
           
             </div>
        </div>
    )
}

export default UpcomingMovies
