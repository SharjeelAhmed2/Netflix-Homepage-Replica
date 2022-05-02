import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./App.css"

import requests from "./requests";
const baseURL = "https://image.tmdb.org/t/p/original/";


function Banner ({})
{
    //This will change everytime screen renders
    const [movie, setMovie] = useState([]);

    useEffect (()=>
    {
        async function fetchData()
        {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]);
                return request;
        }
        fetchData();
    },[]);
    console.log(movie);

    function truncat(str, n)
    {
        return str?.length > n ? str.substr(0,n-1) + "......" : str;
    }
    return(
      
        <header className="banner" style={{
      
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"}}>
            <div className="banner__contents">
                <h1 className="title_banner">{movie?.name || movie?.originalname}</h1>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                    <h2 className="banner_description">{truncat(movie?.overview,150)}</h2>
            </div>
            <div className="banner__fadded"/>
        </header>
      
    )
}

export default Banner;