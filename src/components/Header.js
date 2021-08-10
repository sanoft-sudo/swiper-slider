import React from "react";

import styled from "styled-components";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";

const StyledHeader = styled.div`
  width: 100%;
  height: 450px;
  overflow: hidden;
  position: relative;

  .image-box {
  }

  .text-box {
    position: absolute;
    top: 50%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="image-box">
        <Carousel1 />
      </div>
      <div className="text-box">
        <Carousel2 />
      </div>
    </StyledHeader>
  );
};

export default Header;
