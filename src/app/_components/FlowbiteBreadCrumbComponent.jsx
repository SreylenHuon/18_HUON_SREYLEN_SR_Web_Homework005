import Link from "next/link";
import React from "react";

const FlowbiteBreadCrumbComponent = async ({ pageTitle, bookTitle }) => {
  return (
    <main className="px-20">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="text-[28px] font-medium inline-flex items-center md:space-x-2 rtl:space-x-reverse space-x-1">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="text-gray-700 dark:hover:text-white dark:text-gray-400 font-medium hover:text-blue-600 inline-flex items-center"
            >
              <svg
                className="h-7 w-5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="h-3 text-gray-400 w-3 mx-1 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={`${
                  pageTitle === "Book Categories" ? "/book" : "/cartoon"
                }`}
                className="text-[28px] text-gray-700 dark:hover:text-white dark:text-gray-400 font-medium hover:text-blue-600 md:ms-2 ms-1"
              >
                {pageTitle}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="h-3 text-gray-400 w-3 mx-1 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="text-[28px] text-rose-700 dark:text-gray-400 font-medium md:ms-2 ms-1">
                {bookTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </main>
  );
};

export default FlowbiteBreadCrumbComponent;
