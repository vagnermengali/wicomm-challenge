import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Autoplay, Pagination } from "swiper";

import { CarouselBannerProps } from "@/interfaces/CarouselProps/CarouselProps";

import { ContainerCarousel } from "./style";

function Carousel({
    banner1,
    banner2,
    banner3
}: CarouselBannerProps) {
    return (
        <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ContainerCarousel>
                <div className="content">
                    <Swiper
                        rewind={true}
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 5000,
                        }}
                        modules={[Autoplay, EffectFade, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {banner1}
                        </SwiperSlide>
                        <SwiperSlide>
                            {banner2}
                        </SwiperSlide>
                        <SwiperSlide>
                            {banner3}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </ContainerCarousel>
        </motion.div>
    );
}

export default Carousel;