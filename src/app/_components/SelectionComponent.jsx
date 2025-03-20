import React from "react";

const SelectionComponent = async () => {
  return (
    <main>
      <form className="max-w-sm mx-auto">
        <select
          id="countries"
          className="rounded-lg text-gray-900 text-sm w-full block"
        >
          <option selected>Choose a country</option>
        </select>
      </form>
    </main>
  );
};

export default SelectionComponent;
