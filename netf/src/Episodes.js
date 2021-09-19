import { Link, makeStyles, Menu, MenuItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./episodes.css"
import { fetchTvDetails, fetchTvDetailsBySeason, fetchTvSeasons, getEpisodes } from './fetchDetails'
const useStyle=makeStyles({
    component: {
        marginTop: 55,
        width:150,
    },
   menuItem:{
        marginTop:10,
        backgroundColor:"#f0f0f0",
       
      
   }
})
const Episodes = ({id,details}) => {
    
    //CSS STYLING
    const classes=useStyle()
    //HOOKS TO STORE DATA
    const [epi,setEpi]=useState([]);
    const [det,setDet]=useState([])
    const [menu,setMenu]=useState(false);
   

    useEffect(() => {
        const fetchEpisodes=async()=>{
             setEpi(await getEpisodes(id,1))  //Get Episodes By Id
             setDet(await fetchTvDetailsBySeason(id))//Get Tv Details for Season
             
        }
        fetchEpisodes();
     }, [id])

    
     //FUNCTIONS 
     //1.Truncate
     function truncate(string,n)
     {
         return string?.length>n?string.substr(0,n-1)+"...":string;
     }
     //2.handleClick
     const handleClick=(event)=>{
         setMenu(event.currentTarget)
     }
     //3.HandleClose
     const handleClose=()=>{
         setMenu(false)
     }
      const handleSeason=(key)=>{
        
      } 
      console.log(epi)
      console.log(det)
    return (
        <div style={{height:"100%"}}>
        <div className="episodes-title">
                Episodes | <span>{details.name} ( {epi.length} ) </span>
                    <Link> <span onClick={(e)=>handleClick(e)} style={{cursor:"pointer"}}>Season</span></Link>
                     {/* Menu Onpen OnClose for Season */}
                    <Menu
                        anchorEl={menu}
                        open={Boolean(menu)}
                        onClose={handleClose}
                        className={classes.component}
                    >
                    {/* Season Number Mapping */}
                      {
                          det?.map((data,seasonnumber)=>(
                            <a style={{color:"black"}} href={`/tv/`+Object.values(id)+`/season/${seasonnumber}`}><MenuItem  key={seasonnumber} className={classes.menuItem}>Season {data.season_number}</MenuItem></a>
                          ))
                      }
                    </Menu>
                
        </div>
         <div className="episodes--images">
                {
                    /* Tv Episodes Mapping */
                   epi.map((data)=>(
                       <>
                       <div className="epi_image">
                       {
                            `https://image.tmdb.org/t/p/original/${data.still_path}`=="https://image.tmdb.org/t/p/original/null"?
                           <>
                          <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" />
                          <div style={{textAlign:"center",color:"white",margin:10}}>
                             <span style={{color:"white",}}>{truncate(data?.name,25)}</span>
                          </div>
                          </>
                          :
                          <>
                           <img src={"https://image.tmdb.org/t/p/original/"+data.still_path} />
                             <div style={{textAlign:"center",color:"white",margin:10}}>
                                <span style={{color:"white"}}>{truncate(data?.name,25)}</span>
                             </div>
                          </>
                       }
                            
                       </div>
                       
        
                       
                       </>
                   ))
                }
         </div>
         </div>
    )   
}

export default Episodes
