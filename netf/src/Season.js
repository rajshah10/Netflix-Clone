import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchTvDetails, fetchTvSeasonsByEpisodes,fetchTvSeasons } from './fetchDetails'
import {Typography,Button} from "@material-ui/core"
import {Link} from "react-router-dom"
const useStyle=makeStyles({
    seasonContainer:{
        height:"100%",
    },
   
    seasonBackBanner:{
      
        '&>img':{
            width:"100%",
            height:"99.6vh",
            
            opacity: 0.4
        }
    },
    banner:{
        backgroundColor:"rgba(0, 0, 0, 0.3)",
        position:"absolute",
        top:0,
        width:"100%",
        display:"flex",
        
    }
    ,
    bannerPoster:{
        
        width:"20%",
       
        '&>img':{
            width:"60%",
            height:280,
            margin:20,
            paddingLeft:80,
            objectFit:"contain"
        }
    },
    bannerDetails:{
        
        width:"80%"
    },
    bannerHead:{
        fontSize: "3rem",
        fontWeight: 800,
        marginTop:5,
        color: "white",
        display:"flex",
        flexDirection:"column",
        textAlign:"left"
    },
    miniTitle:
    {
        textAlign:"left",
        
        '&>span':{
            margin:17
        }
    },
    nextDet:{
        display:"flex",
    },
    overview:{
        margin:5
    },
    middleBanner:{
        position:"absolute",
        top:"39%",
        width:"100%",
        backgroundColor:"rgba(0, 0, 0, 0.7)",
    }
})
const Season = ({match}) => {
    const base_url="https://image.tmdb.org/t/p/original/";
    const classes=useStyle()
    const [season,setSeason]=useState([])
    const [details,setDetails]=useState([])
    const [name,setName]=useState([])
    useEffect(() => {
       const fetchSeasons=async()=>{
            setSeason(await fetchTvSeasonsByEpisodes(match.params.id,match.params.seasonnumber))
            setDetails(await fetchTvDetails(match.params.id))
            setName(await fetchTvSeasons(match.params.id,match.params.seasonnumber))
       }
       fetchSeasons()
    }, [])
    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    console.log(name)
    console.log(season)
    return (
        
        <div className={classes.seasonContainer}>
                <div className={classes.seasonBackBanner}>
                    {
                       [details].map(data=>(
                           <>
                            <img src={`${base_url}${data.backdrop_path}`}/>
                            <img src={`${base_url}${data.backdrop_path}`}/>
                            </>
                        ))
                    }
                    <div className={classes.banner}>
                        {
                            <>
                            <div className={classes.bannerPoster}>
                                <img src={`${base_url}${name?.poster_path}`}/>
                            </div>
                            <div className={classes.bannerDetails}>
                                   
                                        <div className={classes.bannerHead}>
                                            <div>
                                                {details?.name}
                                            </div>
                                            <div>
                                                <Typography className={classes.nextDet} style={{padding:5,textAlign:"justify"}}>
                                                    <span >Comedy</span>
                                                    <span style={{paddingLeft:20}}>21 min</span>
                                                    <span  style={{paddingLeft:20}}>2013-2015</span>
                                                </Typography>
                                            </div>
                                            <div className={classes.overview}>
                                                <Typography>
                                                   {truncate(name?.overview,400)}
                                                </Typography>
                                            </div> 
                                            <div className={classes.overview}>
                                                <Typography>
                                                   <span>Season : </span>{name?.name}
                                                </Typography>
                                            </div>  
                                            <div className={classes.overview}>
                                                <Typography>
                                                <span>Total Number of Episodes : </span>{details?.number_of_episodes}
                                                </Typography>
                                            </div> 
                                            <div className={classes.overview}>
                                                <Typography>
                                                <span>Total Number of Season : </span>{details?.number_of_seasons}
                                                </Typography>
                                            </div> 
                                           
                                            
                                        </div>
                                    
                            </div>
                            
                            </>
                        }
                        
                    </div>
                    <div className={classes.middleBanner}>
                            <div className="episodes--images">
                                  
                                    {
                                       season.map(episod=>(
                                    
                                                <>
                                                {   console.log(episod.episode_number)}
                                                <div className="epi_image">
                                                {
                                                        `https://image.tmdb.org/t/p/original/${episod?.still_path}`=="https://image.tmdb.org/t/p/original/null"?
                                                    <>
                                                    <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" />
                                                    <div style={{textAlign:"center",color:"white",margin:10}}>
                                                        <span style={{color:"white",}}>{truncate(episod?.name,25)}</span>
                                                    </div>
                                                    </>
                                                    :
                                                    <>
                                                    <Link to={`/${match.params.id}/season/${match.params.seasonnumber}/episode/${episod.episode_number}`}>
                                                    <img src={"https://image.tmdb.org/t/p/original/"+episod.still_path} />
                                                    </Link>
                                                        <div style={{textAlign:"center",color:"white",margin:10}}>
                                                            <span style={{color:"white"}}>{truncate(episod?.name,25)}</span>
                                                        </div>
                                                    </>
                                                }
                                                        
                                                </div>
                                               </>
                                                   
                                          
                                       ))
                                    } 
                                        
                                   
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Season
