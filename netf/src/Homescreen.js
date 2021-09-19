import React from 'react'
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import req from "./Request";
const Homescreen = () => {
    return (
        <div className="homescreen">
            {/* Nav */}
            <Nav/>
            {/* Banner */}
            <Banner/>
            {/* Row */}
            <Row title="NETFLIX ORIGINALS"
                fetchUrl={req.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now"
                fetchUrl={req.fetchTrending}
                
            />
            <Row title="Top Rated"
                fetchUrl={req.fetchTopRated}
                
            />
            <Row title="Action Movies"
                fetchUrl={req.fetchActionMovies}
                
            />
            <Row title="Comedy Movies"
                fetchUrl={req.fetchComedyMovies}
                
            />
            <Row title="Horror Movies"
                fetchUrl={req.fetchHorrorMovies}
                
            />
             <Row title="Romance Movies"
                fetchUrl={req.fetchRomanceMovies}
                
            />
             <Row title="Documentaries"
                fetchUrl={req.fetchDocumentary}
                
            />
        </div>
    )
}

export default Homescreen
