import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';

import bgImage1 from "../assets/bgImages/bg-image-1.jpg";
import bgImage2 from "../assets/bgImages/bg-image-2.jpg";
import bgImage3 from "../assets/bgImages/bg-image-3.jpg";
import bgImage4 from "../assets/bgImages/bg-image-4.jpg";

const HeroSection = () => {
    const images = [bgImage1, bgImage2, bgImage3, bgImage4];
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="w-full h-full relative">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 text-white text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Explore Bangladesh <br />
                        <span className="text-2xl md:text-4xl">
                            <span className="text-secondary">
                                <Typewriter
                                    words={[
                                        "The Endless Beaches of Cox’s Bazar",
                                        "The Beauty of the Sundarbans",
                                        "The Serenity of Sylhet",
                                        "The Tranquility of Saint Martin's Island",
                                        "The Heritage of Paharpur",
                                        "The Hills of Bandarban",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={100}
                                    delaySpeed={1800}
                                />
                            </span>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg mb-6">
                        Let Travel Sphere take you to breathtaking destinations. <br />
                        Discover curated experiences and unforgettable memories.
                    </p>
                    <Link to="/packages">
                        <button className="bg-primary text-white px-6 py-3 md:px-10 md:py-4 btn border-none rounded-none md:text-lg font-medium shadow-md hover:bg-secondary hover:scale-105 transition duration-300 ease-in-out">
                            View Packages
                        </button>
                    </Link>
                </motion.div>
            </div>

        </div>
    );
};

export default HeroSection;