"use client";
import Promo from "./promo";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useState, useRef } from "react";

const Carousel = () => {
  const [play, setPlay] = useState(true);

  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      className="bg-gray-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000, // 3 seconds between slides
          disableOnInteraction: false, // keep autoplay even after user interaction
        }}
        loop={true}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="bg-[url('/shop.jpg')] bg-cover bg-center h-[calc(100vh-0.5rem)] ">
            <div className="w-[calc(100vw-120px)] mx-auto text-white flex justify-center items-center h-full">
              <Promo>
                <h1 className="text-4xl font-extrabold text-center">
                  {" "}
                  Fresh Finds Just for You
                </h1>
                <p>
                  Discover the latest arrivals handpicked to elevate your style.
                  Shop now and stay ahead of the trends!
                </p>
              </Promo>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/shopview.jpg')] bg-cover bg-center h-[calc(100vh-0.5rem)] ">
            <div className="w-[calc(100vw-120px)] flex justify-center items-center h-full text-white">
              <Promo>
                <h1 className="text-4xl font-extrabold text-center">
                  {" "}
                  Deals You&#x27;ll Love!
                </h1>
                <p>
                  Unwrap big savings on your favorite products. New surprises
                  every day – grab them before they're gone!
                </p>
              </Promo>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/image.jpg')] bg-cover bg-center h-[calc(100vh-0.5rem)] ">
            <div className="w-[calc(100vw-120px)] mx-auto flex justify-center items-center h-full text-slate-200">
              <Promo>
                <h1 className="text-4xl font-extrabold text-center leading-tight">
                  New Season, New Essentials
                </h1>
                <p>
                  Refresh your wardrobe and home with carefully selected
                  must-haves. Shop the collection today.
                </p>
              </Promo>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
