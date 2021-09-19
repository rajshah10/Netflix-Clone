import React, { useEffect, useState } from 'react'
import axios from "axios"
import Nav from './Nav'
import { Link } from 'react-router-dom'
const PlayList = () => {
    const url="https://image.tmdb.org/t/p/original/"
    const [playlist,setPlaylist]=useState([])
    const fetchPlaylist=async()=>{
        
        const {data}= await axios.get('http://localhost:8000/playlist')
        return data
    }
    useEffect(() => {
            const fetchPlaylistData=async()=>{
                setPlaylist(await fetchPlaylist())
            }
            fetchPlaylistData()
    }, [])
    return (
        <div>
            <Nav/>
            <div style={{marginTop:75,marginLeft:85,display:'flex',flexWrap:"wrap"}}>
                {
                    playlist.map(data=>(
                        
                        <Link to ={`/details/${data.id}`}>
                            <div style={{width:350,marginLeft:4,marginTop:10}}>
                                <img style={{width:"100%"}} src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}/>
                                <div style={{textAlign:"center",marginTop:4,color:"white"}}>
                                 <span style={{color:"white"}}>{data.title}</span>
                                </div>
                            </div>
                       </Link>
                    ))
                }
                
            </div>
        </div>
    )
}

export default PlayList
