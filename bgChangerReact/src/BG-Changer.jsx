"use client"

import { useState } from "react";

function BackgroundChanger() {
    const [color, setColor] = useState("#f3ef81")
  
    return (
     <div 
     className=" w-full h-screen duration-200"
     style={{backgroundColor:color}}
     >
  
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-amber-700 shadow-md bg-slate-50 px-3 py-2 rounded-full">
          <button 
          onClick={()=>{setColor("#be123c")}} 
          className="text-white bg-rose-700 shadow-md shadow-rose-950 outline-none px-4 rounded-full py-1 font-semibold">Rose</button>
  
          <button 
          onClick={()=>{setColor("#047857")}} 
          className="text-white bg-emerald-700 shadow-md shadow-emerald-950 outline-none px-4 rounded-full py-1 font-semibold">Emerald</button>
  
          <button 
          onClick={()=>{setColor("#14b8a6")}} 
          className="text-white bg-teal-500 shadow-md shadow-teal-800 outline-none px-4 rounded-full py-1 font-semibold">Teal</button>
  
          <button 
          onClick={()=>{setColor("#d97706")}} 
          className="text-white bg-amber-600 shadow-md shadow-amber-900 outline-none px-4 rounded-full py-1 font-semibold">Amber</button>
  
          <button 
          onClick={()=>{setColor("#8b5cf6")}} 
          className="text-white bg-violet-500 shadow-md shadow-violet-900 outline-none px-4 rounded-full py-1 font-semibold">Violet</button>
  
          <button 
          onClick={()=>{setColor("#f3ef81")}} 
          className="text-amber-800 bg-[#f3ef81] shadow-md shadow-yellow-800 px-2 rounded-full py-2 font-bold">Creme</button>
  
        </div>
  
        
      </div>
     </div>
    )
    
  }
  
  export default BackgroundChanger;
  