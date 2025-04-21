"use client";
import React from "react";
import Hero from "./_components/Hero";
import Books from "./_components/Books";
import MyNavbar from "./_components/MyNavbar";
import Footer from "./_components/Footer";
import BookContextProvider from "./utils/bookContext";

const Home = () => {
  return (
    <div>
      <BookContextProvider>
        <MyNavbar />
        <main>
          <Hero />
          <Books />
        </main>
        <Footer />
      </BookContextProvider>
    </div>
  );
};

export default Home;
