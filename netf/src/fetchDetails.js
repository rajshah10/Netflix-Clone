//What Is an Example of an API?
//When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an API is - all of this happens via API.

// To explain this better, let us take a familiar example.

// Imagine you’re sitting at a table in a restaurant with a menu of choices to order from. The kitchen is the part of the “system” that will prepare your order. What is missing is the critical link to communicate your order to the kitchen and deliver your food back to your table. That’s where the waiter or API comes in. The waiter is the messenger – or API – that takes your request or order and tells the kitchen – the system – what to do. Then the waiter delivers the response back to you; in this case, it is the food.

//axios is library which is used to send asynchronous request to endpoints and we can perform CRUD opertaions

//Axios 
//1.It is a third party library that is not provided by JS
//Axios on the other hand transforms the data automatically once the request has been resolved
//It can be used on Client as well as server.
//Axios is isomorphic, fetch is not-> The syntax for most basic Axios requests is the same in both Node.js and the browser. Since Node.js does not have a built-in fetch() function, you need to use a polyfill like node-fetch.
//Axios error handling is much easier: just use catch().

//Fetch
//1.It is a JS web API 
// fetch("").then(res=>res.json()).then(data=>console.log(data))
//It is supported by Browsers 
//When making a request using the fetch() method, it takes an extra step of converting the response to JSON.
//One of the most annoying issues with fetch() is that it does not throw an error when the server responds with an HTTP error status, like 404 or 500.

//How do you implement RESTAPI --Jersey & Sparing
import axios from "./axios"
import { API_KEY } from "./Request";
export const fetchDetails= async (id)=>{
    try{
        const {data}=await axios.get(`/movie/${id}`,{
            params:{
                api_key:API_KEY,
                language:"en-US"
            }
        });
        return data;  
    }
    catch(error)
    { }
         
}

export const fetchTvDetails= async (id)=>{
    try{
        const {data}=await axios.get(`/tv/${id}`,{
            params:{
                api_key:API_KEY,
                language:"en-US"
            }
        });
        return data;

        
    }
    catch(error)
    { }
         
}
export const fetchTvDetailsBySeason= async ({id})=>{
    try{
        const {data}=await axios.get(`/tv/${id}`,{
            params:{
                api_key:API_KEY,
                language:"en-US"
            }
        });
        const modifiedData = data['seasons'].map((a)=>({
            id: a['id'],
            season_number:a['season_number'],
            name:a['name'],
        }))

        return modifiedData
    }
    catch(error)
    { }
         
}
/////Related Videos////////////////
export const getSimilarMovies=async({id})=>{
    try{
        const {data}=await axios.get(`/movie/${id}/similar?`,{
            params:{
                api_key:API_KEY,
                language:"en-US",
                page:1,
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    }catch(error)
    { }

}

export const getSimilarTv=async({id})=>{
    try{
        const {data}=await axios.get(`/tv/${id}/similar?`,{
            params:{
                api_key:API_KEY,
                language:"en-US",
                page:1,
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    }catch(error)
    { }

}


export const getMoviesVideos=async({id})=>{
    try{
        const {data}=await axios.get(`/movie/${id}/videos?`,{
            params:{
                api_key:API_KEY,
            }
        });
       return data['results'].map((vid)=>({
           id:vid['id'],
           site:vid['site'],
           key:vid['key'],
           official:vid['official'],
           name:vid['name']
       }))
    }catch(error)
    { }

}


export const getSeriesVideos=async({id})=>{
    try{
        const {data}=await axios.get(`/tv/${id}/videos?`,{
            params:{
                api_key:API_KEY,
            }
        });
        return data['results'].map((vid)=>({
            id:vid['id'],
            site:vid['site'],
            key:vid['key'],
            official:vid['official'],
            name:vid['name']
        }))
    }catch(error)
    { }

}
//////UPCOMING MOVIES//////////////
export const getUpcomingMovies=async()=>{
    try{
        const {data}=await axios.get(`/movie/upcoming?`,{
            params:{
                api_key:API_KEY,
            }
        });

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
     
    }catch(error)
    { }

}

export const fetchSearch=async(query)=>{
    try{
        const {data}=await axios.get(`/search/movie?`,{
            params:{
                query:query,
                api_key:API_KEY,
                language:"en-US",
            }
           
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    }
    catch(error)
    {

    }
}


export const fetchTvSearch=async(query)=>{
    try{
        const {data}=await axios.get(`/search/tv?`,{
            params:{
                query:query,
                api_key:API_KEY,
                language:"en-US",
            }
           
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    }
    catch(error)
    {

    }
}

export const getCredits=async({id})=>{
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    try{
            const {data}=await axios.get(`/movie/${id}/credits?`,{
                params:{
                    api_key:API_KEY,
                }
            });
            const modifiedData=data['cast'].map((cast)=>({
                id: cast['id'],
                name: cast['name'],
                profile_path: posterUrl + cast['profile_path'],
                
            }));
            return modifiedData
            
    }catch(error)
    {
        console.log(error.message)
    }
}

export const getTvCredits=async({id})=>{
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    try{
            const {data}=await axios.get(`/tv/${id}/credits?`,{
                params:{
                    api_key:API_KEY,
                }
            });
            const modifiedData=data['cast'].map((cast)=>({
                id: cast['id'],
                name: cast['name'],
                profile_path: posterUrl + cast['profile_path'],
                
            }));
            return modifiedData
            
    }catch(error)
    {
        console.log(error.message)
    }
}

export const getEpisodes=async({id},season)=>{
    try{
       const {data} = await axios.get(`/tv/${id}/season/${season}`,{
           params:{
               api_key:API_KEY,
           }
       })
       const modifiedData=data['episodes'].map((episodes)=>({
        id: episodes['id'],
        overview: episodes['overview'],
        still_path: episodes['still_path'],
        season_number:episodes['season_number'],
        name:episodes['name'],
        
    }));
      return modifiedData;
    }catch(error){}
}


export const fetchTvSeasons=async(id,season_number)=>{
    try {
        const {data}=await axios.get(`/tv/${id}/season/${season_number}`,{
            params:{
                api_key:API_KEY,
            }
        })
        return data
    } catch (error) {
        
    }
}

export const fetchTvSeasonsByEpisodes=async(id,season_number)=>{
    try {
        const {data}=await axios.get(`/tv/${id}/season/${season_number}`,{
            params:{
                api_key:API_KEY,
            }
        })
        return data['episodes'].map((episode)=>({
            id:episode['id'],
            poster_path:episode['poster_path'],
            name:episode['name'],
            overview: episode['overview'],
            still_path: episode['still_path'],
            season_number:episode['season_number'],
            episode_number:episode['episode_number']

        }))
    } catch (error) {
        
    }
}

export const fetchTvEpisodesVideos=async(id,season_number,episode_number)=>{
    try{
        const {data}=await axios.get(`/tv/${id}/season/${season_number}/episode/${episode_number}/videos?`,{
            params:{
                api_key:API_KEY,
            }
        })
        return data['results']
    }catch(error){

    }
}