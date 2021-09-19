import React,{useEffect} from 'react'
import { useState } from 'react';
import { fetchDetails, getMoviesVideos } from './fetchDetails';
import "./details.css"
import { Link } from 'react-router-dom';
import Nav from "./Nav"
import SimilarMovies from './SimilarMovies';
import Video from './Video';
import UpcomingMovies from './UpcomingMovies';
import { Fade, makeStyles, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import ReactPlayer from 'react-player';
import Credits from './Credits';
import axios from 'axios';
const useStyle=makeStyles((theme)=>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
     
     
}))
const Details =({match}) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    const params=match.params;
    const classes=useStyle()
    let [playlist,setPlaylist]=useState("playlist")
    // const [deletePlaylist,setDeletePlaylist]=useState("Remove")
    
    const [details,setDetails]=useState([]);
    const [videos,setVideos]=useState([]);
    const [open,setOpen]=useState(false)
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        window.scrollTo(0,0);
        const fetchAPI=async()=>{
            setDetails(await fetchDetails(params.id));
            setVideos(await getMoviesVideos(params.id))
        }   
      
        fetchAPI();
    }, [params.id])
    
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    function truncate(string,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    const postData=async()=>{
        const url="http://localhost:8000/playlist"
        const {data}=await axios.post(url,details)
        console.log(data)
    }
    const added=(e)=>{
                setPlaylist("added")
               
    }
    const wholedata=(e)=>{
        postData();
        added(e);
    }
    //Date
    var date=new Date([details].map(d=>(
        d.release_date
    )));
   
    return (
      <>
        <Nav/>
            {[details].map(movie=>(
                <>
                             
                           <div className="banners">
                            
                             <img src={`${base_url}/${movie?.backdrop_path}`} className="lucifer" alt="Lucifer" />
                             <div className="banner--fadeBotto"> 
                           <div className="content">
                             
                           <div className="content__title">
                                {movie?.title || movie?.name|| movie?.original_name}
                           </div>
                               <h4>
                                   <span>{date.getFullYear(movie?.release_date)}</span>
                                   <span><i>16+</i> </span>
                                   <span>{movie?.runtime} min</span>
                                   <span>IMDB Vote : {movie?.vote_count}</span>
                               </h4>
                               <p>
                                   {truncate(movie.overview,150)}
                               </p>
           
                               <div className="button">
                                   <Link to="" >Play</Link>
                                 
                                   <Link  onClick={wholedata} >{playlist}</Link>
                                   
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
            <Video id={params}/>
            <SimilarMovies id={params}/> 
        
            <UpcomingMovies/>  
            
            <Credits id={params}/>
            </>
    )
}

export default Details
