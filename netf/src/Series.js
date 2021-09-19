import React from 'react'
import "./movies.css"
import Nav from './Nav'
import req from './Request'
import FlipMove from "react-flip-move";
import RowSeries from './RowSeries'
const Series = () => {
    return (
        <>
        <div className="movie">
            <Nav/>
            <div className="movie-title">
                Series
            </div>
            <div className="movie-desc">
                    <p>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best shows on TV.</p> 
            </div>
            <div className="row-movies">
                 <FlipMove>
                    <RowSeries title="Action & Adventure " fetchUrl={req.fetchActionTv}/>
                    <RowSeries title="Sci-Fi & Fantasy " fetchUrl={req.fetchScifi}/>
                    <RowSeries title="Documentary " fetchUrl={req.fetchDocumentaryTv}/>
                    <RowSeries title="Mystery " fetchUrl={req.fetchMysteryTv}/>
                    <RowSeries title="Drama " fetchUrl={req.fetchDramaTv}/>
                    <RowSeries title="Comedy " fetchUrl={req.fetchComedyTv}/>
                    <RowSeries title="Animation " fetchUrl={req.fetchAnimeTv}/>
                 </FlipMove>
                
                 
            </div>
           
        </div>
        </>
    )
}

export default Series
