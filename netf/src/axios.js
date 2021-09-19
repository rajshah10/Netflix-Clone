import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
export default instance;

//everybody who uses fetch() writes their own wrapper around fetch()
//You can use instances to create your own API wrappers using Axios.