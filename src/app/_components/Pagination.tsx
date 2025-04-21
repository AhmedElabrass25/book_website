"use client";
import React, { useContext } from "react";
import { BookContext, BookContextType } from "../utils/bookContext";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(
    BookContext
  ) as BookContextType;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < 6) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center gap-2 mt-10 flex-wrap">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-slate-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {Array.from({ length: 6 }).map((_, idx) => {
        const page = idx + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 rounded ${
              page === currentPage
                ? "bg-cyan-500 text-white"
                : "bg-slate-600 text-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-slate-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === 6}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
