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
import Carousel1 from "./components/Carousel1";
import Header from "./components/Header";

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

const StyledMainHead = styled.div``;

export default function App() {
  return (
    <StyledMainHead>
      <div className="image-carousel">
        <Header />
      </div>
    </StyledMainHead>
  );
}
