import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./App.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow })
{

    //for youtube video
    const [trailer, setTrailer] = useState("");

    /// For state changing
    const [old, newd] = useState([]);

    /// For making a request 

    useEffect(()=>{
       
       async function fetchData()
       {
           /// here everything else comes up after the base_url
           const request = await instance.get(fetchUrl);
           newd(request.data.results);
        //    console.log(request.data.results);
           return request;
       }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          origin: 'http://localhost:3000'
        }};
    // console.table(old);

    const handleClick = (movie) =>
    {
        if(trailer)
        {
            setTrailer('');
        }
        else{
            // if get a movie name then fetch the url by
            movieTrailer(movie?.name || "").then((url)=>
        {
            const urlParams = new URLSearchParams(new URL(url).search);
            ///https://www.youtube.com/watch?v=I6ypD7qv3Z8 this is a youtube video url
            // after the v is the id of the video so we're getting everything present after the v 
            setTrailer(urlParams.get("v"));
        }).catch((error)=>{console.error(error);})
        }
    }
    
   return(
   <div className="row">
       <h2 className="tits">{title}</h2>
       <div className="row_images">
           {/*Map to get the data on the screen*/}
           {old.map(oldie=>(
           <img  key={oldie.id} onClick={()=> handleClick(oldie)} className={`row__images ${isLargeRow && "row__Largeimages"}`} src={`${baseURL}${ isLargeRow ? oldie.poster_path : oldie.backdrop_path}`} alt={oldie.name}/>
           ))}
       </div>
       {trailer && <YouTube videoId={trailer} opts={opts}/>}
       </div>
   )
}

export default Row;