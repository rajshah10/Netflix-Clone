import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { fetchDetails, getMoviesVideos } from './fetchDetails';
import "./videos.css"
const Video = ({id}) => {
    const [videos,setVideos]=useState([]);
    const [details,setDetails]=useState([]);
    
    const base_url="https://image.tmdb.org/t/p/original";
    const k = Object.values(id)
  
    useEffect(() => {
        const fetchVideos=async()=>{
            setVideos(await getMoviesVideos(id))
            setDetails(await fetchDetails(k))
        }
        fetchVideos();
        
    }, [id])
  
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
        <div className="videos--section">
      
                <div className="video">
                {videos.slice(0,3).map(video=>(
                        <ReactPlayer
                            className="react-player"
                            url={youtubeUrl + video?.key}
                         
                            height="280px"
                            width="490px"
                            controls
                        >

                        </ReactPlayer>
                        ))}
                </div>
               
            
        </div>
    )
}

export default Video
