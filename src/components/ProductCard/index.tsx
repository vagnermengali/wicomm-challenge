import { useState } from "react";

import star_1 from "@/assets/icons/svg/star-1.svg"
import star_2 from "@/assets/icons/svg/star-2.svg"
import star_3 from "@/assets/icons/svg/star-3.svg"
import cart from "@/assets/icons/svg/cart.svg"

import Button from "@/components/Button";
import Text from "@/components/Text";
import Icon from "@/components/Icon";

import { ProductsCardsProps } from "@/interfaces/ProductsCardsProps/ProductsCardsProps";

import {
  StyledProductsCards,
  DivDetails,
  Image,
  DivPrice,
  DivPurchase,
  DivButton,
  ButtonPurchase,
  Container,
  DivIcons
} from "./style";

const ProductsCards = ({
  image,
  title,
  price,
  installments
}: ProductsCardsProps) => {

  const [isHover, setIsHover] = useState(false)
  const [isHoverStar, setIsHoverStar] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

  const StyledBlog = {
    initial: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    initialBefore: {
      backgroundColor: '#FFFFFF',
    },
    beforeContent: {
      backgroundColor: '#F1F1F1',
      transition: {
        duration: .3,
        ease: 'easeInOut'
      }
    },
  };

  const StyledDivPurchace = {
    initial: {
      opacity: 0,
      height: '0vh',
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    hover: {
      opacity: 1,
      height: '60%',
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
  };

  const StyledButtomPurchace = {
    initial: {
      opacity: 0,

      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
  };

  return (
    <StyledProductsCards>
      <Container
        onHoverStart={() => {
          setIsHover(true);
        }}
        onHoverEnd={() => {
          setIsHover(false);
        }}
        variants={StyledBlog}
        animate={isHover ? "beforeContent" : "initialBefore"}
      >
        <DivIcons>
          <Icon
            width={'19.5px'}
            height={'19.5px'}
            icon={isFocus ? star_1 : isHoverStar ? star_3 : star_2}
            onClick={() => setIsFocus(prev => !prev)}
            onHoverStart={() => {
              setIsHoverStar(true);
            }}
            onHoverEnd={() => {
              setIsHoverStar(false);
            }} 
          />
          <Icon
            width={'19.5px'}
            height={'19.5px'}
            icon={cart}
          />
        </DivIcons>
        <Image
          src={image}
        />
        <DivDetails>
          <Text
            color='brand4'
            fontFamily='barlow'
            fontSize='12px'
            fontStyle='normal'
            fontWeight='600'
            textTransform='uppercase'
            text={title}
            width={'182px'}
          />
          <DivPrice>
            <Text
              color='brand1'
              fontFamily='barlow'
              fontSize='22px'
              fontStyle='normal'
              fontWeight='700'
              textTransform='uppercase'
              text={price}
              whiteSpace="nowrap"
            />
            <Text
              color='brand6'
              fontFamily='barlow'
              fontSize='14px'
              fontStyle='normal'
              fontWeight='400'
              textTransform='uppercase'
              text={installments}
              whiteSpace="nowrap"
            />
          </DivPrice>
        </DivDetails>
        <DivPurchase
          variants={StyledDivPurchace}
          animate={isHover ? "hover" : "initial"}
        >
          <Text
            color='brand4'
            fontFamily='barlow'
            fontSize='14px'
            fontStyle='normal'
            fontWeight='700'
            textTransform='uppercase'
            text={'Sabor'}
            textAlign={'center'}
          />
          <DivButton>
            <Button
              color='brand7'
              fontFamily='barlow'
              fontSize='10px'
              fontStyle='normal'
              fontWeight='700'
              textTransform='uppercase'
              text='Toffee'
              width={'80px'}
              height={'32px'}
              bgColor={'brand10'}
              borderRadius={'4px'}
              padding={'14px 24px'}
              hoverColor={'brand6'}
              hoverBg={'brand9'}
              hoverBorder={'brand6'}
              border={'brand7'}
              focus
            />
            <Button
              color='brand7'
              fontFamily='barlow'
              fontSize='10px'
              fontStyle='normal'
              fontWeight='700'
              textTransform='uppercase'
              text='Chocolate'
              width={'80px'}
              height={'32px'}
              bgColor={'brand10'}
              borderRadius={'4px'}
              padding={'14px 24px'}
              hoverColor={'brand6'}
              hoverBg={'brand9'}
              hoverBorder={'brand6'}
              border={'brand7'}
              focus
            />
            <Button
              color='brand7'
              fontFamily='barlow'
              fontSize='10px'
              fontStyle='normal'
              fontWeight='700'
              textTransform='uppercase'
              text='Morango'
              width={'80px'}
              height={'32px'}
              bgColor={'brand10'}
              borderRadius={'4px'}
              padding={'14px 24px'}
              hoverColor={'brand6'}
              hoverBg={'brand9'}
              hoverBorder={'brand6'}
              border={'brand7'}
              focus
            />
            <Button
              color='brand7'
              fontFamily='barlow'
              fontSize='10px'
              fontStyle='normal'
              fontWeight='700'
              textTransform='uppercase'
              text='Baunilha'
              width={'80px'}
              height={'32px'}
              bgColor={'brand10'}
              borderRadius={'4px'}
              padding={'14px 24px'}
              hoverColor={'brand6'}
              hoverBg={'brand9'}
              hoverBorder={'brand6'}
              border={'brand7'}
              focus
            />
          </DivButton>
        </DivPurchase>
        <ButtonPurchase
          variants={StyledButtomPurchace}
          animate={isHover ? "hover" : "initial"}
        >
          Comprar
        </ButtonPurchase>
      </Container>
    </StyledProductsCards>
  )
}

export default ProductsCards;