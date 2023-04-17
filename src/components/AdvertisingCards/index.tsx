import { useState } from "react";

import Button from "@/components/Button";
import Text from "@/components/Text";

import { AdvertisingCardProps } from "@/interfaces/AdvertisingCardProps/AdvertisingCardProps";

import { 
  StyledAdvertisingCard, 
  DivLeft, DivRight, 
  IconAnimate 
} from "./style";

const AdvertisingCard = ({
  firstText,
  secondText,
  icon,
  textButton
}: AdvertisingCardProps) => {
  const [isHover, setIsHover] = useState(false)

  const StyledAdvertisingCardVariantsBox = {
    initial: {
      rotate: 0, y: 0
    },
    hover: {
      rotate: 75, y: -35
    },
  };

  const StyledAdvertisingCardVariantsDollar = {
    initial: {
      rotate: 0, y: 0
    },
    hover: {
      rotate: -150, y: -35
    },
  };

  return (
    <StyledAdvertisingCard
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <DivLeft>
        <Text
          color='brand10'
          fontFamily='roboto'
          fontSize='40px'
          fontStyle='italic'
          fontWeight='700'
          textTransform='uppercase'
          text={firstText}
          secondColor={'brand1'}
          secondText={secondText}
          secondfontFamily='roboto'
          textAlign={'center'}
          whiteSpace="nowrap"
        />

        <Button
          color='brand3'
          fontFamily='barlow'
          fontSize='14px'
          fontStyle='normal'
          fontWeight='700'
          textTransform='uppercase'
          text={textButton}
          textAlign='center'
          width={'138px'}
          height={'40px'}
          bgColor={'brand1'}
          borderRadius={'4px'}
          padding={'14px 24px'}
          hoverBg={'brand2'}
        />
      </DivLeft>
      <DivRight>
        <IconAnimate src={icon}
          variants={icon === '/assets/package-59c0aef8.svg' ?  StyledAdvertisingCardVariantsBox : StyledAdvertisingCardVariantsDollar}
          initial="initial"
          animate={isHover ? "hover" : "initial"}
        />
      </DivRight>
    </StyledAdvertisingCard>
  )
}

export default AdvertisingCard;