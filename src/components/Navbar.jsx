import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = () => {
    const section = {
        Home: "/",
        AddUsers: "/add",
        AllUsers: "/all",
        RandomUsers: "/random",
        About: "/about",
        AboutClass: "/aboutc"
    } 
    const clickHandle= () => {
        const nav= document.querySelector('nav');
        nav.classList.toggle('open')
    }
    const Navlink = Object.keys(section).map((keyname,index) => {
        return (
            <li key={index}>
                <Link to={section[keyname]} onClick={clickHandle} className="Menu-link">{keyname}</Link>
            </li>
        )
    })
  return (
   <div className='Navbar-container'>
    <ul>
    {Navlink}
    </ul>
   </div>
  
  )
}
