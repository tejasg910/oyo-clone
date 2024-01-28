import Image from "next/image";
import React from "react";

const Block = ({ title, para, imageSrc }) => {
  return (
    <div className="w-60 full border-r px-4 flex items-center ">
      <Image
        src={imageSrc}
        alt="demo"
        height={200}
        width={200}
        className="w-10 h-10 rounded-full mr-5"
      />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
