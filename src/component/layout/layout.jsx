import React from "react";
 import Navbar from "../Navbar/Navbar";
 import Footer from "../footer/footer";
 import { Outlet } from"react-router-dom";

export default function Layout(){
return(
    <>
    <Navbar />
<div className="container py-10 mt-10 flex justify-center">
<Outlet />
</div>


    <Footer/>
    </>
)
}