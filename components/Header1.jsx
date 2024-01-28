import Image from "next/image";
import React from "react";
import Block from "./Block";

const Header1 = () => {
  return (
    <div className="flex  border-b-2 border-gray-300 justify-between items-center h-24 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28 "
      />
      <div className=" border-gray-300 h-full flex">
        <Block
          imageSrc={"/business.png"}
          title={"Become a member"}
          para={"Additional 10% off on stays"}
        />
        <Block
          imageSrc={"/property.png"}
          title={"OYO for Business"}
          para={"Trusted by 500 companies"}
        />
        <Block
          imageSrc={"/call.png"}
          title={"List your properties"}
          para={"Start earning in 30 minutes"}
        />
        <Block
          imageSrc={"/language.png"}
          title={"1-1212131232"}
          para={"Call us to book now"}
        />

        <div className="flex px-3  items-center">
          <Image
            src={"/login.png"}
            alt="demo"
            height={200}
            width={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          <h3 className="font-bold">Login/Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default Header1;
