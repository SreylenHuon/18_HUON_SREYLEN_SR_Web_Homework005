import React from "react";
const SearchBarComponent = () => {
  return (
    <main className="w-[100%]">
      <form className="w-full mx-auto">
        <label
          htmlFor="default-search"
          className="text-gray-900 text-sm dark:text-white font-medium mb-2 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 items-center pointer-events-none ps-3 start-0">
            <svg
              className="h-4 text-gray-500 w-4 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="bg-gray-50 border border-gray-300 p-4 rounded-lg text-gray-900 text-sm w-full block dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-500 focus:ring-blue-500 ps-10"
            placeholder="Search book or category"
            required
          />
        
        </div>
      </form>
    </main>
  );
};

export default SearchBarComponent;

// export default SearchbarComponent;
