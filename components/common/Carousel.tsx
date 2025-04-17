// components/Carousel.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import carousel1 from "../../public/carousel-1.jpg";
import carousel2 from "../../public/carousel-2.jpg";
import carousel3 from "../../public/carousel-4.jpg";

const slides = [
    {
        image: carousel1,
        heading: "Software Consulting and Development",
        subheading: "We power project success",
        buttonText1: "Read More",
        buttonText2: "Book Free Session",
        buttonLink1: "/",
        buttonLink2: "/",
    },
    {
        image: carousel2,
        heading: "Digital Solutions For All",
        subheading: "From innovative startups to enterprises, businesses trust us to develop, test, upgrade, and scale their digital products.",
        buttonText1: "Read More",
        buttonText2: "Book Free Session",
        buttonLink1: "/",
        buttonLink2: "/",
    },
    {
        image: carousel3,
        heading: "Personalized Solutions For Your Business Growth",
        subheading: "We ensure smooth growth and lasting success every step of the way",
        buttonText1: "Read More",
        buttonText2: "Book Free Session",
        buttonLink1: "/",
        buttonLink2: "/",
    },
];


const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[100%] overflow-hidden shadow-lg mx-auto mt-[115px]">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="relative flex-shrink-0 w-screen h-[100vh]"
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${idx}`}
                            fill
                            className="object-cover brightness-60"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.heading}</h1>
                            <p className="text-lg md:text-2xl mb-6 text-[#ccc]">{slide.subheading}</p>
                            <div className="flex gap-10 justify-center">
                                <a
                                    href={slide.buttonLink1}
                                    className="bg-[#fd9800] hover:bg-[#181842] hover:text-[#fd9800] text-[#181842] px-6 py-3 rounded-lg text-lg"
                                >
                                    {slide.buttonText1}
                                </a>
                                <a
                                    href={slide.buttonLink2}
                                    className="bg-[#fd9800] hover:bg-[#181842] hover:text-[#fd9800] text-[#181842] px-6 py-3 rounded-lg text-lg"
                                >
                                    {slide.buttonText2}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white text-2xl px-3 py-1 rounded hover:bg-black/70 z-10"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white text-2xl px-3 py-1 rounded hover:bg-black/70 z-10"
            >
                &#10095;
            </button>

            <div className="absolute bottom-3 w-full flex justify-center gap-2">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={classNames(
                            "h-[12px] w-[12px] rounded-full cursor-pointer",
                            currentIndex === idx ? "bg-gray-700" : "bg-gray-400"
                        )}
                    >
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
