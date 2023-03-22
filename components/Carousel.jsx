import React, { useState, useEffect, useRef } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import Image from "next/image";

const featuredProducts = [
  "/pwpics/editedbfaf.webp",
  "/pwpics/pergolaba.webp",
  "/pwpics/pwbfaf.webp",
  "/pwpics/beforeandafterpatio.webp"
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3500);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div className="mx-auto mt-16 max-w-3xl">
      <div ref={slideRef} className="relative w-full select-none">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={featuredProducts[currentIndex]}
            alt="Photos of our past work"
            width={1803}
            height={1334}
            priority
          />
        </div>

        <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-3">
          <button
            id="Back A Slide"
            title="Back A Slide"
            aria-label="Back A Slide"
            className="trans cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100"
            onClick={handleOnPrevClick}
          >
            <BsFillArrowLeftCircleFill size={30} />
          </button>
          <button
            id="Forward A Slide"
            title="Forward A Slide"
            aria-label="Forward A Slide"
            className="trans cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100"
            onClick={handleOnNextClick}
          >
            <BsFillArrowRightCircleFill size={30} />
          </button>
        </div>
      </div>
      <div
        className="mt-10 flex items-center space-x-2 justify-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {/* <a
          href="https://nextdoor.com/profile/01RNBHRjWwTgWtjP9/"
          className="trans rounded-full border-2 border-white bg-white py-4 px-6 font-metBold uppercase tracking-widest text-black hover:bg-black hover:text-white"
        >
          View Our Nextoor Page
        </a>
        <a
          href="https://nextdoor.com/profile/01RNBHRjWwTgWtjP9/"
          className="trans rounded-full border-2 border-white bg-white py-4 px-6 font-metBold uppercase tracking-widest text-black hover:bg-black hover:text-white"
        >
          View Our Instagram Page
        </a> */}
      </div>
    </div>
  );
}
