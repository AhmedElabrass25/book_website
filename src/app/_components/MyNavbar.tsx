"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaBook } from "react-icons/fa";
import { BookContext, BookContextType } from "../utils/bookContext";

const MyNavbar = () => {
  const { searchText, setSearchText, fetchBooks } = useContext(
    BookContext
  ) as BookContextType;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchBooks();
    console.log(searchText);
    // setSearchText("");
    window.document
      .getElementById("books")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="sticky top-0 z-50 bg-[#111929] backdrop-blur-2xl border-b border-gray-800 shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)] py-4">
      <div className="container">
        <div className="row flex justify-between items-center">
          {/* logo */}
          <Link
            href={"/"}
            className="font-bold uppercase text-white flex items-center gap-2 mb-3 md:mb-0"
          >
            <FaBook className="h-5 w-5 md:h-6 md:w-6 inline-block animate-float text-cyan-400 stroke-[2.5]" />
            <span className="text-lg md:text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine">
              {" "}
              BOOKSHOW
            </span>
          </Link>
          {/* search input */}

          <form className="w-[300px] lg:w-[600px]" onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full py-[14px] ps-10 pe-2 text-sm font-semibold text-slate-300 border border-slate-600 rounded-lg bg-[#11223a] focus:ring-blue-500 focus:border-slate-500 outline-none"
                placeholder="Search ..."
                required
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <button
                type="submit"
                className="text-white absolute end-2 bottom-[7px] bg-cyan-600 font-semibold rounded-lg text-sm px-4 py-[8px] hover:bg-cyan-700 transition-all duration-200"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
