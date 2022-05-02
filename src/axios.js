import axios from "axios";

/// this instance has a constant base-url
// sort of like unison/ where unison is by default
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance