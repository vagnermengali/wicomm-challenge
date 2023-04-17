import banner1 from "@/assets/images/carousel-banner-1.svg"
import banner2 from "@/assets/images/carousel-banner-1.svg"
import banner3 from "@/assets/images/carousel-banner-1.svg"

import Carousel from "@/components/CarouselBanner";
import BannerCarousel from "@/components//Banner";

import { StyledSectionCarousel } from "./style";

const SectionCarousel = () => {

  return (
    <StyledSectionCarousel>
      <Carousel
        banner1={
          <BannerCarousel
            firstTitle={'Ajudando você a ter'}
            SecondTitle={'mais performance'}
            text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'}
            banner={banner1}
          />
        }
        banner2={
          <BannerCarousel
            firstTitle={'Ajudando você a ter'}
            SecondTitle={'mais performance'}
            text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'}
            banner={banner2}
          />
        }
        banner3={
          <BannerCarousel
            firstTitle={'Ajudando você a ter'}
            SecondTitle={'mais performance'}
            text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'}
            banner={banner3}
          />
        }
      />
    </StyledSectionCarousel>
  )
}

export default SectionCarousel;