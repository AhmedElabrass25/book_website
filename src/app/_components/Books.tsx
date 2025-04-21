"use client";
import React, { useContext } from "react";
import BookCard from "./BookCard";
import { Item } from "../interfaces";
import { BookContext, BookContextType } from "../utils/bookContext";
import Loading from "../loading";
import Pagination from "./Pagination";
const Books = () => {
  const { paginationBooks, searchText, loading } = useContext(
    BookContext
  ) as BookContextType;
  return (
    <section className="py-10 bg-[#111929]" id="books">
      <div className="container">
        <div className="title w-full text-center mb-10">
          <h1 className="font-bold italic tracking-[1px] text-lg md:text-4xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine">
            Display Books {searchText && `for (${searchText})`}
          </h1>
        </div>
        {loading && <Loading />}
        <div className="row flex items-start justify-between flex-wrap">
          {/* If there ara no books */}
          {paginationBooks?.length === 0 && (
            <p className="w-full text-center font-bold text-2xl text-[#2166a2]">
              No books found for ({searchText}) ! Please try another search.
            </p>
          )}
          {/* If there ara books */}
          {paginationBooks?.length > 0 &&
            paginationBooks?.map((book: Item) => (
              <BookCard key={book?.id} book={book} />
            ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Books;
