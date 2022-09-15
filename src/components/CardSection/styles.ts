import styled from "styled-components";

export const CardSectionSlide = styled.div`
  width: 70%;

  & .swiper-button-prev,
  .swiper-button-next {
    width: 20%;
    font-weight: bold;
    color: red; 
  }
`;

export const Mask = styled.div`
  width: 100vw;
  height: 120%;

  position: absolute;
  z-index:100;
  
  background-image: linear-gradient(to right, #000, #0009, #0005);
`;

