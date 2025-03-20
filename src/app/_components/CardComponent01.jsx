import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardComponent01 = ({ src, title, description, link }) => {
  return (
    <div className="h-[350px] m-10 rounded-2xl shadow-2xl w-[280px] group relative">
      <Link href={link}>
        <Image
          className="rounded-3xl w-full"
          src={src}
          width={300}
          height={500}
          alt="image"
        />
        {/* Overlay effect on hover */}
        <div className="bg-black rounded-2xl absolute duration-300 group-hover:opacity-30 inset-0 opacity-0 transition-opacity"></div>
        {/* Book Tag */}
        <span className="bg-gray-100 rounded-full text-green-400 text-xs absolute left-2 px-2 py-1 top-2">
          {title}
        </span>
        {/* Hover Text */}
        <div className="flex justify-center absolute duration-300 group-hover:opacity-100 inset-0 items-center opacity-0 transition-opacity">
          <span className="text-center text-lg text-white w-20 font-semibold">
            {description}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent01;
