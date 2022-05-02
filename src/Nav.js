import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./App.css"

 function Nav({})
{
   const [old,newd] = useState(false);

    useEffect(()=>
    {
        window.addEventListener("scroll", ()=>
        {
            if(window.scrollY > 70)
            {
                newd(true);
            }
            else
            {
                newd(false);
            }
        });
        return () =>{ window.removeEventListener("scroll",null);};
    },[]);
  return(
    <div className={`nav ${old && "nav_black"}`}>
        <img className="nav_title" src="https://pngroyale.com/wp-content/uploads/2021/11/Download-netflix-logo-text-emblem-.png" alt="Netflix Logo" />
        <img className="nav_logo" src="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png" alt="Netflix Avatar" />
    </div>
  )
}
export default Nav;