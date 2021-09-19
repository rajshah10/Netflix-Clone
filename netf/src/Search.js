import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchSearch, fetchTvSearch } from './fetchDetails';
import Nav from './Nav';
import "./searchAny.css"
const Search = ({match}) => {
    const[search,setSearch]=useState([]);
    const [searchtv,setSearchTv]=useState([])
    const params=match.params;
    useEffect(() => {
      const search=async()=>{
          setSearch(await fetchSearch(params.query))
          setSearchTv(await fetchTvSearch(params.query))
      }
      search();
    }, [params])

   
    return (
        <>
        <Nav/>
        <div className="search--page">
                    <div className="search--title">
                        {params.query}  <span>| Movies ({search.length})</span>
                    </div>
                    <div className="search-desc">
                                {search.map(s=>(
                                       <>
                                       <Link to={`/details/${s.id}`}>
                                       {s.backPoster=="https://image.tmdb.org/t/p/originalnull"?
                                       <img style={{display:"none"}}src={`${s.backPoster}`} />
                                        :  <img src={`${s.backPoster}`} />}
                                        
                                        </Link>
                                       </>
                                       
                                    ))}
                    </div>

                    <div className="search--title">
                        {params.query}  <span>| Series ({searchtv.length})</span>
                    </div>
                    <div className="search-desc">
                                {searchtv.map(s=>(
                                       <>
                                       <Link to={`/seriesDetails/${s.id}`}>
                                       {s.backPoster=="https://image.tmdb.org/t/p/originalnull"?
                                       <img style={{display:"none"}}src={`${s.backPoster}`} />
                                        :  <img src={`${s.backPoster}`} />}
                                        
                                        </Link>
                                       </>
                                       
                                    ))}
                    </div>
        </div>
        </>
    )
}

export default Search
