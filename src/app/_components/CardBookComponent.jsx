import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCardComponent = async ({ dataBooks }) => {
  const { payload } = dataBooks;

  return (
    <main className="grid grid-cols-2 gap-[120px] p-[40px] mt-5 overflow-y-auto h-screen">
      {payload.map((data, index) => (
        <div
          key={index}
          className="relative flex items-center p-5 bg-[#F5F7F8] rounded-[30px] shadow-md h-[300px] w-[600px]"
        >
          {/* Image */}
          <Image
            src={data.image}
            alt={data.book_title}
            width={200}
            height={180}
            className="absolute bottom-[85px] left-7 rounded-[20px]"
          />

          {/* Content Container */}
          <div className="ml-[250px] flex flex-col justify-center max-w-[350px]">
            <h2 className="text-2xl font-bold text-[#0B3954] truncate">
              {data.book_title}
            </h2>
            <p className="mt-1 text-sm text-[#0B3954] line-clamp-3">
              {data.description}
            </p>
          </div>

          {/* Button */}
          <Link
            href={`/read-full-article/${
              data.id
            }?type=book&name=book+categories&title=${encodeURIComponent(
              data.book_title
            )}`}
            className="uppercase bg-[#BED6E9] absolute bottom-0 px-3.5 py-2.5 rounded-full w-45 hover:bg-deep-teal hover:text-ghost-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          >
            Read Full Book
          </Link>
        </div>
      ))}
    </main>
  );
};

export default BookCardComponent;
