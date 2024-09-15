"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IProps {
  images: string[];
}

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className="left-2 slider-arrow">
      {<ChevronLeft />}
    </button>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className="right-2 slider-arrow">
      {<ChevronRight />}
    </button>
  );
};

export const Carousel = ({ images }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => {
      setActiveIndex(next);
    },
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[9rem] s375:h-[11rem] s425:h-[12rem] s720:h-[14rem] s768:h-[15rem]
            s1024:h-[20rem] s1280:h-[21rem] s1366:h-[23rem] s1440:h-[24rem] s1920:h-[32rem] my-2"
          >
            <Image
              src={image}
              alt={`Carousel image ${index}`}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`custom-dots ${
              index === activeIndex
                ? "bg-black border border-white/10"
                : "bg-black/30 border border-white/20"
            } transition-all duration-200`}
          ></div>
        ))}
      </div>
    </div>
  );
};
