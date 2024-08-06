import React from "react";
import {  NavLink } from "react-router-dom";

 
export default function Navbar(){
return(
    <>
    <div className="bg-blue-900 absolute top-0 right-0 left-0 h-20 p-3">
        <div className="flex text-2xl text-slate-50 absolute left-20 top-5">start framework</div>
        <ul className="flex gap-5 text-slate-50 absolute right-20 top-5">  
        <li><NavLink to="About">About</NavLink></li>
        <li><NavLink to="portfolio">Protfolio</NavLink></li>
        <li><NavLink to="contact">contact</NavLink></li>
        </ul>
    </div>
    </>
)
}