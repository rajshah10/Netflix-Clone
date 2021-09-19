import React, { useEffect, useState } from 'react'
import { getCredits, getTvCredits } from './fetchDetails'
import "./credit.css"
const TvCredit = ({id}) => {
    const [credit,setCredit]=useState([])
    useEffect(() => {
       const fetchCredits=async()=>{
            setCredit(await getTvCredits(id))
       }
       fetchCredits()
    }, [id])

    return (
        <div className="Tvcredit--banner">
            <div className="Tvcredit-title">
               More Details | <span>Cast</span>
            </div>
            
            <div className="Tvcredit--images">
                {
                    
                   credit.slice(0,8).map((data)=>(
                      <div className="cast-image">
                      {
                          data.profile_path=="https://image.tmdb.org/t/p/originalnull"? 
                          <>
                      <div className="castImage">
                         <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"/>
                      </div>
                      <div style={{textAlign:"center"}}>
                                <span style={{color:"white",fontSize:15}}>{data.name}</span>
                     </div>
                     </>
                      :
                      <>
                            <div className="castImage">
                                    <img src={data.profile_path}/>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <span style={{color:"white",fontSize:15}}>{data.name}</span>
                            </div>
                       </> 
                   }    
                      </div>
                      
                   ))
                }
                    
             </div>
        </div>
    )
}

export default TvCredit
