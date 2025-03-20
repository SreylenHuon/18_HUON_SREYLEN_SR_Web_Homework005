import Link from "next/link";
import React from "react";

const CartoonCardComponent = ({ dataCartoon }) => {
  const { payload } = dataCartoon;

  if (!payload || !Array.isArray(payload)) {
    return <div>No cartoons available</div>;
  }

  return (
    <main>
      {/* Grid Container */}
      <div className="grid grid-cols-3  gap-[20px]  w-full">
        {payload.map((cartoon) => (
          <Link
            key={cartoon.id}
            href={`/read-full-article/${cartoon.id}?type=cartoon&name=${cartoon.ct_title}`}
          >
            <div className="bg-white gap-[10] p-4 rounded-3xl shadow-md cursor-pointer">
              {/* Image */}
              <img
                src={cartoon.image || "https://via.placeholder.com/300x400"}
                alt={cartoon.ct_title || "Cartoon cover"}
                className="w-full h-[380px] object-cover rounded-4xl"
              />
              {/* Content */}
              <div className="mt-3">
                <h2 className="text-2xl font-bold">
                  {cartoon.ct_title || "Untitled Cartoon"}
                </h2>
                <div className="flex items-center text-1xl text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {cartoon.view_count || "N/A"} times |{" "}
                  {cartoon.published_year || "N/A"}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default CartoonCardComponent;
