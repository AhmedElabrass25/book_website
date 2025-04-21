"use client";

import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { Item } from "../interfaces";

export interface BookContextType {
  paginationBooks: Item[];
  setSearchText: (text: string) => void;
  searchText: string;
  loading: boolean;
  error: string | null;
  fetchBooks: () => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

const BookContextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [books, setBooks] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const paginationBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${
          searchText || "react"
        }&maxResults=36&key=${apiKey}`
      );
      console.log(data?.items);
      setBooks(data?.items || []);
      setError(null);
    } catch (err: unknown) {
      console.log(err, "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        paginationBooks,
        setSearchText,
        searchText,
        loading,
        error,
        fetchBooks,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
