"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SelectFilterComponent = ({ listBook }) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(" patht name :", pathName);

  //   console.log("listbook", listBook);
  const handleFilterChange = (e) => {
    console.log(e.target.value);
    console.log(pathName);
    const pathSearch = pathName == "/cartoon" ? "/cartoon" : "/book";
    console.log(" path search :", pathSearch);

    router.push(`http://localhost:3000/${pathSearch}/?genre=${e.target.value}`);
    // router.push(`/book?genre=${e.target.value}`);
  };
  return (
    <main>
      <select
        value="h"
        onChange={handleFilterChange}
        className="border rounded-lg shadow-sm text-blue-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 px-4 py-2"
      >
        <option value="all">Filter By Category</option>
        <>
          {listBook.payload.map((bk) => (
            <option key={bk.id} value={bk.id}>
              {bk.book_cate_name || bk.cartoon_genre}
            </option>
          ))}
        </>
      </select>
    </main>
  );
};

export default SelectFilterComponent;
