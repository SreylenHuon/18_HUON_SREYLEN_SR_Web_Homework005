"use client";
import { usePathname } from "next/navigation";
import React from "react";
import SelectFilterComponent from "./SelectFilterComponent";

const CategoryBarComponent = ({ listBook, listCartoon }) => {
  console.log("list book", listBook);
  console.log("list Cartoon", listCartoon);

  const pathName = usePathname();

  const routeTitles = {
    "/": "Homepage",
    "/book": "All Books",
    "/cartoon": "Old School Cartoons",
  };

  const pageTitle = routeTitles[pathName];

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    console.log("selected value : ", selectedValue);
    setSelectedFilter(selectedValue);

    router.push(`${pathName}?query=${selectedValue}`);
    // fetchData(selectedValue);
  };

  return (
    <main>
      <div className="flex border-b-2 border-blue-500 justify-between p-5 items-center px-10">
        <h2 className="bg-gray-100 p-3 rounded-2xl text-lg font-semibold">
          {pageTitle}
        </h2>
        {pathName == "/book" ? (
          <SelectFilterComponent listBook={listBook} />
        ) : (
          <SelectFilterComponent listBook={listCartoon} />
        )}
      </div>
    </main>
  );
};
export default CategoryBarComponent;
