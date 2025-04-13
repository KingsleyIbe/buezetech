// components/Carousel.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import carousel1 from "../../public/carousel-1.jpg";
import carousel2 from "../../public/carousel-2.jpg";
import carousel3 from "../../public/carousel-4.jpg";

const images = [carousel1, carousel2, carousel3];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[100%] overflow-hidden shadow-lg mx-auto mt-[122px]">
      {/* Carousel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
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

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={classNames(
              "h-[12px] w-[12px] rounded-full cursor-pointer",
              currentIndex === idx ? "bg-gray-700" : "bg-gray-400"
            )}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
