"use client";

import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className=" p-1.5 ">
        <h2 className="text-4xl font-bold text-white text-center">
          Over 157,000 hotels and homes accross 35 countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-24">
          <input
            type="text"
            placeholder="Search...."
            className=" h-16 outline-none px-3 border-r-2 border-gray-400  text-lg col-span-2"
          />
          <input
            type="text"
            placeholder="Search...."
            className="h-16 border-r-2 border-gray-400 outline-none px-3 text-lg col-span-1"
          />
          <input
            type="text"
            placeholder="Search...."
            className=" h-16 outline-none px-3 text-lg col-span-1"
          />
          <button className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-500 text-white text-xl">
            Search
          </button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button className="h-16 px-3 py-1  hover:cursor-pointer text-white text-xl mr-5">
            Continue your search
          </button>
          <button className="h-16 px-3 py-2  hover:cursor-pointer text-white text-xl mr-5 border-2 border-white hover:bg-gray-500 rounded-sm">
            Home stay in india
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
