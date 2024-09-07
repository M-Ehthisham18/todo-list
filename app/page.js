"use client";
import React, { useState } from "react";
import Home from "./Home/page";

const page = () => {
  // const [marks, setMarks]=useState(92+"%")
  return (
    <>
      {/* <Header/> */}
      <Home />

      {/* <div>
      <div className='p-5 bg-black text-white'>
        <h1 className='font-extrabold text-3xl'>
          My Total CGPA of SSC is {marks}
        </h1>
      </div>
      <button className='border-2 border-black rounded-xl m-3 py-3 px-5 bg-black text-white font-extrabold text-2xl' onClick={() => {
        setMarks(87+'%')
      }}>
        Update
      </button>
    </div> */}
    </>
  );
};

export default page;
