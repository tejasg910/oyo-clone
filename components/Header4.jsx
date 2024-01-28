import Image from "next/image";
import React from "react";

const Header4 = () => {
  return (
    <div className="flex my-14 border rounded-md border-gray-300 px-5 justify-between items-center">
      <div className="flex items-center  ">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5"
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exlusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>

      <div className="flex">
        <input
          type="email"
          className="px-6 py-3 rounded-md mr-5 outline-none border w-80 h-14 border-gray-300 "
          placeholder="e.g. John@gmail.com"
        />
        <button
          type="submit"
          className="w-48 h-14  bg-[#ee2a24] text-base font-bold text-white cursor-pointer rounded-md"
        >
          Notify me
        </button>
      </div>
    </div>
  );
};

export default Header4;
