"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Item } from "../interfaces";
interface BookCardProps {
  book: Item;
}
const BookCard = ({ book }: BookCardProps) => {
  const renderStars = (rating = 0) => {
    const stars = [];
    const rounded = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400" />);
      }
    }

    return stars;
  };
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full md:w-[47%] lg:w-[30%] group relative bg-gray-800/30 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 shadow-lg hover:shadow-xl md:hover:shadow-2xl hover:shadow-cyan-400/10 mb-5"
      >
        <Link
          href={book?.volumeInfo?.infoLink || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer"
          aria-label="View Researching Second Language Learning and Teaching from a Psycholinguistic Perspective"
        />
        <div className="p-4 md:p-6">
          {/* ====== Book Imag ======  */}
          <div className="relative h-[300px] aspect-[4/5] w-full rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/10 to-blue-400/10">
            <Image
              alt="Book"
              src={book?.volumeInfo?.imageLinks?.thumbnail || "/book.png"}
              width={300}
              height={300}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
              <span className="text-xs md:text-sm font-medium text-cyan-300">
                BOOK
              </span>
            </div>
          </div>
          {/* ======== Book Details ======= */}
          <div className="mt-4 md:mt-6">
            {/* title */}
            <h3 className="text-lg md:text-xl line-clamp-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {book?.volumeInfo?.title || "Non Title"}
            </h3>
            {/* Description */}
            <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base line-clamp-3">
              {book?.volumeInfo?.description || "Non Description"}{" "}
            </p>
            {/* Rating */}
            <div className="flex items-center mt-2 md:mt-3">
              <div className="flex text-amber-400">
                {renderStars(book?.volumeInfo?.averageRating)}
              </div>
              <span className="ml-2 text-cyan-300 text-sm md:text-base">
                {book?.volumeInfo?.averageRating || "0"}
              </span>
            </div>
            {/* Page count */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4 text-xs md:text-sm">
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-gray-400">Pages:</span>
                <span className="text-cyan-300">
                  {book?.volumeInfo?.pageCount || "not found"}
                </span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-gray-400">Format:</span>
                <span className="text-purple-300">BOOK</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-gray-400">Ratings:</span>
                <span className="text-blue-300">
                  {book?.volumeInfo?.ratingsCount || 0}
                </span>
              </div>
            </div>
            {/* Book category */}
            <div className="mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
              <span className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-700/50 text-xs text-cyan-300 backdrop-blur-sm">
                {book?.volumeInfo?.categories?.[0] || "Non Category"}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </>
  );
};

export default BookCard;
// AIzaSyDIBC-4uqhIc_KgsBoE7N7ZzB5yiw5V49c
