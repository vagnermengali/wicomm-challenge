import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";

import arrow_left from "@/assets/icons/svg/arrow-left.svg"
import arrow_right from "@/assets/icons/svg/arrow-right.svg"

import { CarouselProps } from "@/interfaces/CarouselProps/CarouselProps";

import { ContainerCarousel } from "./style";
import Icon from "../Icon";


const Carousel = ({
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    numberPagination,
    gap,
    numberSroll,
    width,
    pagination,
    autoplay,
    carouselWidth,
    containerWidth
}: CarouselProps) => {
    const customPrevButton = (
        <div className="swiper-button-prev">
            <Icon
                icon={arrow_left}
                width={'24px'}
                height={'24px'}
            />
        </div>
    );

    const customNextButton = (
        <div className="swiper-button-next">
            <Icon
                icon={arrow_right}
                width={'24px'}
                height={'24px'}
            />
        </div>
    );

    return (
        <>
            {autoplay ? (
                pagination ? (
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContainerCarousel width={width} carouselWidth={carouselWidth} containerWidth={containerWidth}>
                            <div className="content">
                                <Swiper
                                    rewind={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    slidesPerView={numberPagination}
                                    spaceBetween={gap}
                                    slidesPerGroup={numberSroll}
                                    loop={true}
                                    navigation={{
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}
                                    className="mySwiper"
                                >
                                    {card1 &&
                                        <SwiperSlide>
                                            {card1}
                                        </SwiperSlide>
                                    }
                                    {card2 &&
                                        <SwiperSlide>
                                            {card2}
                                        </SwiperSlide>
                                    }
                                    {card3 &&
                                        <SwiperSlide>
                                            {card3}
                                        </SwiperSlide>
                                    }
                                    {card4 &&
                                        <SwiperSlide>
                                            {card4}
                                        </SwiperSlide>
                                    }
                                    {card5 &&
                                        <SwiperSlide>
                                            {card5}
                                        </SwiperSlide>
                                    }
                                    {card6 &&
                                        <SwiperSlide>
                                            {card6}
                                        </SwiperSlide>
                                    }
                                    {card7 &&
                                        <SwiperSlide>
                                            {card7}
                                        </SwiperSlide>
                                    }
                                    {card8 &&
                                        <SwiperSlide>
                                            {card8}
                                        </SwiperSlide>
                                    }
                                    {card9 &&
                                        <SwiperSlide>
                                            {card9}
                                        </SwiperSlide>
                                    }
                                    {card10 &&
                                        <SwiperSlide>
                                            {card10}
                                        </SwiperSlide>
                                    }
                                    {card11 &&
                                        <SwiperSlide>
                                            {card11}
                                        </SwiperSlide>
                                    }
                                    {card12 &&
                                        <SwiperSlide>
                                            {card12}
                                        </SwiperSlide>
                                    }
                                    {customPrevButton}
                                    {customNextButton}
                                </Swiper>
                            </div>
                        </ContainerCarousel>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContainerCarousel width={width} carouselWidth={carouselWidth} containerWidth={containerWidth}>
                            <div className="content">
                                <Swiper
                                    slidesPerView={numberPagination}
                                    spaceBetween={gap}
                                    slidesPerGroup={numberSroll}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                    }}
                                    navigation={{
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                    rewind={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                >
                                    {card1 &&
                                        <SwiperSlide>
                                            {card1}
                                        </SwiperSlide>
                                    }
                                    {card2 &&
                                        <SwiperSlide>
                                            {card2}
                                        </SwiperSlide>
                                    }
                                    {card3 &&
                                        <SwiperSlide>
                                            {card3}
                                        </SwiperSlide>
                                    }
                                    {card4 &&
                                        <SwiperSlide>
                                            {card4}
                                        </SwiperSlide>
                                    }
                                    {card5 &&
                                        <SwiperSlide>
                                            {card5}
                                        </SwiperSlide>
                                    }
                                    {card6 &&
                                        <SwiperSlide>
                                            {card6}
                                        </SwiperSlide>
                                    }
                                    {card7 &&
                                        <SwiperSlide>
                                            {card7}
                                        </SwiperSlide>
                                    }
                                    {card8 &&
                                        <SwiperSlide>
                                            {card8}
                                        </SwiperSlide>
                                    }
                                    {card9 &&
                                        <SwiperSlide>
                                            {card9}
                                        </SwiperSlide>
                                    }
                                    {card10 &&
                                        <SwiperSlide>
                                            {card10}
                                        </SwiperSlide>
                                    }
                                    {card11 &&
                                        <SwiperSlide>
                                            {card11}
                                        </SwiperSlide>
                                    }
                                    {card12 &&
                                        <SwiperSlide>
                                            {card12}
                                        </SwiperSlide>
                                    }
                                    {customPrevButton}
                                    {customNextButton}
                                </Swiper>
                            </div>
                        </ContainerCarousel>
                    </motion.div>
                )
            ) : (
                pagination ? (
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContainerCarousel width={width} carouselWidth={carouselWidth} containerWidth={containerWidth}>
                            <div className="content">
                                <Swiper
                                    rewind={true}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    modules={[Pagination, Navigation]}
                                    slidesPerView={numberPagination}
                                    spaceBetween={gap}
                                    slidesPerGroup={numberSroll}
                                    loop={true}
                                    navigation={{
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}
                                    className="mySwiper"
                                >
                                    {card1 &&
                                        <SwiperSlide>
                                            {card1}
                                        </SwiperSlide>
                                    }
                                    {card2 &&
                                        <SwiperSlide>
                                            {card2}
                                        </SwiperSlide>
                                    }
                                    {card3 &&
                                        <SwiperSlide>
                                            {card3}
                                        </SwiperSlide>
                                    }
                                    {card4 &&
                                        <SwiperSlide>
                                            {card4}
                                        </SwiperSlide>
                                    }
                                    {card5 &&
                                        <SwiperSlide>
                                            {card5}
                                        </SwiperSlide>
                                    }
                                    {card6 &&
                                        <SwiperSlide>
                                            {card6}
                                        </SwiperSlide>
                                    }
                                    {card7 &&
                                        <SwiperSlide>
                                            {card7}
                                        </SwiperSlide>
                                    }
                                    {card8 &&
                                        <SwiperSlide>
                                            {card8}
                                        </SwiperSlide>
                                    }
                                    {card9 &&
                                        <SwiperSlide>
                                            {card9}
                                        </SwiperSlide>
                                    }
                                    {card10 &&
                                        <SwiperSlide>
                                            {card10}
                                        </SwiperSlide>
                                    }
                                    {card11 &&
                                        <SwiperSlide>
                                            {card11}
                                        </SwiperSlide>
                                    }
                                    {card12 &&
                                        <SwiperSlide>
                                            {card12}
                                        </SwiperSlide>
                                    }
                                    {customPrevButton}
                                    {customNextButton}
                                </Swiper>
                            </div>
                        </ContainerCarousel>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContainerCarousel width={width} carouselWidth={carouselWidth} containerWidth={containerWidth}>
                            <div className="content">
                                <Swiper
                                    slidesPerView={numberPagination}
                                    spaceBetween={gap}
                                    slidesPerGroup={numberSroll}
                                    loop={true}
                                    navigation={{
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    rewind={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                >
                                    {card1 &&
                                        <SwiperSlide>
                                            {card1}
                                        </SwiperSlide>
                                    }
                                    {card2 &&
                                        <SwiperSlide>
                                            {card2}
                                        </SwiperSlide>
                                    }
                                    {card3 &&
                                        <SwiperSlide>
                                            {card3}
                                        </SwiperSlide>
                                    }
                                    {card4 &&
                                        <SwiperSlide>
                                            {card4}
                                        </SwiperSlide>
                                    }
                                    {card5 &&
                                        <SwiperSlide>
                                            {card5}
                                        </SwiperSlide>
                                    }
                                    {card6 &&
                                        <SwiperSlide>
                                            {card6}
                                        </SwiperSlide>
                                    }
                                    {card7 &&
                                        <SwiperSlide>
                                            {card7}
                                        </SwiperSlide>
                                    }
                                    {card8 &&
                                        <SwiperSlide>
                                            {card8}
                                        </SwiperSlide>
                                    }
                                    {card9 &&
                                        <SwiperSlide>
                                            {card9}
                                        </SwiperSlide>
                                    }
                                    {card10 &&
                                        <SwiperSlide>
                                            {card10}
                                        </SwiperSlide>
                                    }
                                    {card11 &&
                                        <SwiperSlide>
                                            {card11}
                                        </SwiperSlide>
                                    }
                                    {card12 &&
                                        <SwiperSlide>
                                            {card12}
                                        </SwiperSlide>
                                    }
                                    {customPrevButton}
                                    {customNextButton}
                                </Swiper>
                            </div>
                        </ContainerCarousel>
                    </motion.div>
                )
            )}
        </>
    );
}

export default Carousel;
