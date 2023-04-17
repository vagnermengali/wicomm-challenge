import { useState } from "react";

import Text from "@/components/Text";
import { CategoriesCardsProps } from "@/interfaces/CategoriesCardsProps/CategoriesCardsProps";

import { StyledCategoriesCards, Div, Image } from "./style";

const CategoriesCards = ({ image, title }: CategoriesCardsProps) => {
  const [isHover, setIsHover] = useState(false)

  const StyledBlog = {
    initial: {
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    hover: {
      scale: 1.5,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    initialBefore: {
      bottom: '40px',
      right: '220px',
      border: '0px solid #FFC470',
    },
    beforeContent: {
      bottom: '40px',
      right: '180px',
      backgroundColor: '#FF9601',
      border: '5px solid #FFC470',
      transition: {
        duration: .3,
        ease: 'easeInOut'
      }
    },
  };

  return (
    <StyledCategoriesCards
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <Div
        variants={StyledBlog}
        animate={isHover ? "beforeContent" : "initialBefore"}
      >
        <Image
          variants={StyledBlog}
          src={image}
          animate={isHover ? "hover" : "initial"}
        />

      </Div>
      <Text
        color='brand4'
        fontFamily='barlow'
        fontSize='12px'
        fontStyle='normal'
        fontWeight='700'
        textTransform='uppercase'
        text={title}
        whiteSpace="nowrap"
      />
    </StyledCategoriesCards>
  )
}

export default CategoriesCards;