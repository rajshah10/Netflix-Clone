import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { fetchTvDetails, getSeriesVideos } from './fetchDetails';

const TvVideo = ({id}) => {
    const [Tvideos,setTVideos]=useState([]);
    const [details,setDetails]=useState([]);
    
    const base_url="https://image.tmdb.org/t/p/original";
    const k = Object.values(id)
  
    useEffect(() => {
        const fetchVideos=async()=>{
            setTVideos(await getSeriesVideos(id))
            setDetails(await fetchTvDetails(k))
        }
        fetchVideos();
        
    }, [id])
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
        <div className="videos--section">
               
                <div className="video">
                    {Tvideos &&
                        
                        Tvideos.slice(0,3).map(video=>(
                        <ReactPlayer
                            className="react-player"
                            url={youtubeUrl + video?.key}
                            height="290px"
                            width="480px"
                            controls
                        >

                        </ReactPlayer>
                    ))}
                </div>
            
        </div>
    )
}

export default TvVideo
