"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles loaded", container);
    },
    []
  );

  return (
    <section className="relative py-16 bg-[#121d35] overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#3b82f6", // Blue color matching your theme
              },
              links: {
                color: "#7dd3fc", // Lighter blue
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="row flex items-start justify-between flex-wrap">
          {/* Hero Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[48%] flex flex-col items-start justify-center text-start py-20 lg:py-32"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine">
              Interactive Library
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8">
              Explore a world of knowledge and imagination with our curated
              collection of books.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onClick={() =>
                document
                  .getElementById("books")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Start Exploring
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[48%] bg-[#ffffff0a] rounded-3xl shadow-lg backdrop-blur-xl flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                height={570}
                width={400}
                src="/book.png"
                alt="Hero Image"
                className="w-full h-[570px] object-cover object-center rounded-3xl backdrop-blur-xl overflow-hidden shadow-[inset_0_0_60px_rgba(59,130,246,0.2)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
