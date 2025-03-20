import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCardComponent = async ({ dataBooks }) => {
  const { payload } = dataBooks;

  return (
    <main className="grid grid-cols-2 h-screen p-[40px] gap-[100px] mt-[60px] overflow-y-auto">
      {payload.map((data, index) => (
        <div
          key={index}
          className="flex bg-[#F5F7F8] h-[300px] p-4 rounded-[30px] shadow-md w-[500px] items-center relative"
        >
          {/* Image */}
          <Image
            src={data.image}
            alt={data.book_title}
            width={180}
            height={280}
            className="rounded-[20px] absolute bottom-[85px] left-7"
          />

          {/* Content Container */}
          <div className="flex flex-col justify-center max-w-[250px] ml-[200px]">
            <h2 className="text-[#0B3954] text-2xl font-bold truncate">
              {data.book_title}
            </h2>
            <p className="text-[#0B3954] text-sm line-clamp-3 mt-1">
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
            className="bg-[#BED6E9] rounded-full w-45 absolute bottom-5 delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-deep-teal hover:text-ghost-white px-3.5 py-4 transition uppercase"
          >
            Read Full Book
          </Link>
        </div>
      ))}
    </main>
  );
};

export default BookCardComponent;
