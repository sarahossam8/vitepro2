import React from "react";
import icon from "../../assets/avataaars.svg"
 
export default function Home(){
return(<>
    <div className="bg-teal-400 absolute top-20 left-0 right-0 flex justify-center h-[470px] items-center">
    <div>
        <img src={icon} alt=""/>
        <h2 className="font-bold text-white text-4xl">START FRAMEWORK</h2>
        <h2></h2>
        </div>
    </div>
    </>
)
}