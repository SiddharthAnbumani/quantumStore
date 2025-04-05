import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function ProductProfile({ title, description, id, isOnCart, toggleCart}) {


  return (
    <div className="w-70 h-80 bg-black/70 backdrop-blur-3xl border-1 rounded-4xl flex flex-col items-center relative">
      <h1 className="text-2xl font-bold py-3 px-2 text-center text-white">{title}</h1>

      <img 
        src="/placeholder.webp" 
        alt="" 
        className="self-center m-2 h-[40%] w-[40%] border-1" 
      />

      <p className="text-md font-semibold text-center text-white ">{description}</p>
<div className="flex justify-center items-center">
    <NavLink  
    className='font-extrabold  bg-green-500 py-2 px-10 rounded-xl m-2 hover:scale-110 transition-all duration-100' 
    to={`/allproducts/${id}`}>
    Buy now
    </NavLink>
<button className="rounded-4xl hover:scale-110 transition-all duration-200" 
onClick={()=> toggleCart(id)}>
          <img src="/cart2.jpeg" alt="" className="w-[40px] h-[40px] rounded-4xl"/>
</button>
</div>
    </div>
  );
}


