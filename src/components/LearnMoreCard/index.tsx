import { useState } from "react";

import arrow from "@/assets/icons/svg/arrow-right.svg"

import Text from "@/components/Text";
import Icon from "@/components/Icon";
import AnimatedTextDown from "@/components/Animations/AnimatedTexDown";

import { LearnMoreCardProps } from "@/interfaces/LearnMoreCardProps/LearnMoreCardProps";

import { 
  StyledLearnMoreCard, 
  Image, 
  BarsOne, 
  DivTextIcon, 
  DivDetails 
} from "./style";

const LearnMoreCard = ({
  text,
  image
}: LearnMoreCardProps) => {
  const [isHover, setIsHover] = useState(false)

  const StyledLearnMore = {
    initial: {
      bottom: '0px',
      left: '0px',
      backgroundColor: '#FFC470'
    },
    hover: {
      width: '100%',
      bottom: '0px',
      left: '0px',
      backgroundColor: '#2c2c2ef2'
    },
    initialBefore: {
      opacity: '0',
      scale: '0'
    },
    beforeContent: {
      opacity: '1',
      scale: '1',
      transition: {
        duration: .5,
        delay: 0.5,
        ease: 'easeInOut'
      }
    },
  };

  return (
    <StyledLearnMoreCard
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <Image src={image} />
      <BarsOne
        variants={StyledLearnMore}
        animate={isHover ? "hover" : "initial"} />
      <DivDetails hover={isHover}>
        <AnimatedTextDown hover={isHover}>
          <Text
            color='brand1'
            fontFamily='roboto'
            fontSize='16px'
            fontStyle='italic'
            fontWeight='700'
            textTransform='uppercase'
            text={text}
            textAlign={'center'}
            whiteSpace="nowrap"
            width='125px'
          />
        </AnimatedTextDown>
        <AnimatedTextDown hover={isHover}>
          <DivTextIcon>
            <Text
              color='brand10'
              fontFamily='barlow'
              fontSize='12px'
              fontStyle='normal'
              fontWeight='700'
              textTransform='uppercase'
              text='Mais informações'
              whiteSpace={'nowrap'}
            />
            <Icon
              width={'18px'}
              height={'18px'}
              icon={arrow}
            />
          </DivTextIcon>
        </AnimatedTextDown>
      </DivDetails>
    </StyledLearnMoreCard >
  )
}

export default LearnMoreCard;