import Button from "@/components/Button";
import Text from "@/components/Text";

import { BannerCarouselProps } from "@/interfaces/CarouselProps/CarouselProps";

import { StyledCarouselBanner, ImgBg, Div } from "./style";

const BannerCarousel = ({ 
    banner, 
    firstTitle, 
    SecondTitle, 
    text 
}: BannerCarouselProps) => {
    
    return (
        <StyledCarouselBanner>
            <ImgBg src={banner} />
            <Div>
                <Text
                    color='brand10'
                    fontFamily='roboto'
                    fontSize='56px'
                    fontStyle='italic'
                    fontWeight='700'
                    textTransform='uppercase'
                    text={firstTitle}
                    secondColor={'brand1'}
                    secondText={SecondTitle}
                    secondfontFamily='roboto'
                    textAlign={'center'}
                />
                <Text
                    color='brand10'
                    fontFamily='barlow'
                    fontSize='16px'
                    fontStyle='normal'
                    fontWeight='400'
                    textTransform='normal'
                    text={text}
                    width={'349px'}
                />
                <Button
                    color='brand3'
                    fontFamily='barlow'
                    fontSize='14px'
                    fontStyle='normal'
                    fontWeight='700'
                    textTransform='uppercase'
                    text='Confira'
                    textAlign='center'
                    width={'120px'}
                    height={'48px'}
                    bgColor={'brand1'}
                    borderRadius={'4px'}
                    padding={'14px 24px'}
                    hoverBg={'brand2'}
                />
            </Div>
        </StyledCarouselBanner>
    );
}

export default BannerCarousel;
