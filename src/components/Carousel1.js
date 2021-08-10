import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  Virtual
} from "swiper/core";

// install Swiper modules
SwiperCore.use([
  Navigation,
  Virtual,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay
]);

const data = [
  {
    id: "001",
    src: "./assets/images/1.png"
  },
  {
    id: "001",
    src: "./assets/images/2.png"
  },
  {
    id: "001",
    src: "./assets/images/3.png"
  }
];

const StyledCarousel1 = styled.div`
  img {
    display: block;
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;

const Carousel1 = () => {
  return (
    <StyledCarousel1>
      <Swiper
        // cssMode={true}
        height={450}
        spaceBetween={0}
        navigation={true}
        pagination={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={6000}
        mousewheel={true}
        direction="vertical"
        keyboard={true}
        // className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt="1" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCarousel1>
  );
};
export default Carousel1;
