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
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at voluptates tempora, veritatis sint voluptatum quia molestias, harum tenetur quisquam alias pariatur commodi, sit eos nisi veniam dignissimos laudantium expedita!"
  },
  {
    id: "001",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at voluptates tempora, veritatis sint voluptatum quia molestias, harum tenetur quisquam alias pariatur commodi, sit eos nisi veniam dignissimos laudantium expedita!"
  },
  {
    id: "001",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at voluptates tempora, veritatis sint voluptatum quia molestias, harum tenetur quisquam alias pariatur commodi, sit eos nisi veniam dignissimos laudantium expedita!"
  }
];

const StyledCarousel2 = styled.div`
  .text-wrapper {
    width: 75%;
    margin: 0 auto;
  }
  .text-description {
    font-size: 13px;
    color: #fff;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    bottom: 15%;
  }
`;

const Carousel2 = () => {
  console.log(data[0].text);

  return (
    <StyledCarousel2>
      <Swiper
        // cssMode={true}
        // height={450}
        spaceBetween={0}
        navigation={true}
        pagination={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={6000}
        mousewheel={true}
        direction="horizontal"
        keyboard={true}
        // className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="text-wrapper">
              <p className="text-description">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCarousel2>
  );
};
export default Carousel2;
