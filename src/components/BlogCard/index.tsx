import { useState } from "react";

import arrow from "@/assets/icons/svg/arrow-square-out.svg"

import Button from "@/components/Button";
import Text from "@/components/Text";
import Icon from "@/components/Icon";

import { BlogCardProps } from "@/interfaces/BlogCardProps/BlogCardProps";

import {
  StyledBlogCard,
  DivTop,
  DivBottom,
  IconAnimate,
  IconRedirect
} from "./style";

const BlogCard = ({
  image,
  date,
  title
}: BlogCardProps) => {
  const [isHover, setIsHover] = useState(false)

  const StyledBlog = {
    initial: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    initialBefore: {
      bottom: '40px',
      right: '220px'
    },
    beforeContent: {
      bottom: '40px',
      right: '180px',
    },
  };

  return (
    <StyledBlogCard
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <DivTop>
        <IconAnimate
          variants={StyledBlog}
          src={image}
          animate={isHover ? "hover" : "initial"}
        />

      </DivTop>
      <DivBottom>
        <Text
          color='brand8'
          fontFamily='barlow'
          fontSize='14px'
          fontStyle='normal'
          fontWeight='400'
          textTransform='uppercase'
          text={date}
          whiteSpace="nowrap"
        />
        <Text
          color='brand10'
          fontFamily='barlow'
          fontSize='14px'
          fontStyle='normal'
          fontWeight='700'
          textTransform='uppercase'
          text={title}
        />
        <Button
          color='brand3'
          fontFamily='barlow'
          fontSize='14px'
          fontStyle='normal'
          fontWeight='700'
          textTransform='uppercase'
          text='Ler mais'
          textAlign='center'
          width={'138px'}
          height={'40px'}
          bgColor={'brand1'}
          borderRadius={'4px'}
          padding={'14px 24px'}
          hoverBg={'brand2'}
          animateIcon
          animate={{
            backgroundColor: isHover ? '#FFC470' : '#FF9601',
            transition: { duration: 0.2 },
          }}
        />
        <IconRedirect
          variants={StyledBlog}
          animate={isHover ? "beforeContent" : "initialBefore"}>
          <Icon
            width={'24px'}
            height={'24px'}
            icon={arrow}
          />
        </IconRedirect>
      </DivBottom>
    </StyledBlogCard>
  )
}

export default BlogCard;