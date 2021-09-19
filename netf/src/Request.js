export const API_KEY='';

const req={
     fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US `,
     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US `,
     fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&with_networks=213`,
     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentary:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
     fetchMovies:`/discover/movie?api_key=${API_KEY}`,
     fetchDrama:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
     fetchNO:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
     fetchFantasy:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
     fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
     fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
     fetchCrime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
     fetchNowPlaying:`/movie/now_playing?api_key=${API_KEY}`,


     //TV

     fetchScifi:`/discover/tv?api_key=${API_KEY}&with_genres=10765`,
     fetchDocumentaryTv:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
     fetchDramaTv:`/discover/tv?api_key=${API_KEY}&with_genres=18`,
     fetchMysteryTv:`/discover/tv?api_key=${API_KEY}&with_genres=9648`,
     fetchWesternTv:`/discover/tv?api_key=${API_KEY}&with_genres=37`,
     fetchAnimeTv:`/discover/tv?api_key=${API_KEY}&with_genres=16`,
     fetchComedyTv:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
     fetchActionTv:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,


     
     
    
}

export default req;