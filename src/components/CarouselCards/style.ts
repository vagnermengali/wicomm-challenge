import { CarouselProps } from "@/interfaces/CarouselProps/CarouselProps";

import styled from "styled-components";

export const ContainerCarousel = styled.div<CarouselProps>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;

  gap: 2rem;
  .content {
    width: 100%;
    height: 100%;
  }
  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: ${({ carouselWidth }) => carouselWidth};
  }
  .swiper-wrapper {
    width: ${({ containerWidth }) => containerWidth};
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 32px;
    height: 32px;
    color: var(--brand3);
    background: var(--brand8);
    padding: 4px;
    border-radius: 6px;
    top: 50%;
    :after {
      display: none;
    }
    :hover {
        background: var(--brand2);
    }
  }
  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--brand1) !important; 
    width: 40px !important;
    height: 6px !important;
  }
  .swiper-pagination-bullet {
    width: 40px;
    height: 2px;
    border-radius: 0;
    background-color: var(--brand8);
    opacity: 1;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: .5rem;
    border-radius: none;
    margin-bottom: 0rem;
  }
`
