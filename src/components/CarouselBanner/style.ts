import styled from "styled-components";

export const ContainerCarousel = styled.div`
    margin: 0 auto;
    width: 1280px;
    min-height: 548px;
    display: flex;
    align-items: center;
    flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .container-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .img-carousel {
    width: 100%;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
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
    background-color: var(--brand10);
    opacity: 1;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: .5rem;
    border-radius: none;
    margin-bottom: 1.5rem;
  }
`;
