import { useState } from "react";

import Button from "@/components/Button";

import { GoalCardProps } from "@/interfaces/GoalCardProps/GoalCardProps";

import { 
  StyledGoalCard, 
  Image, 
  BarsOne, 
  BarsTwo 
} from "./style";

const GoalCard = ({
  firstText,
  image
}: GoalCardProps) => {
  const [isHover, setIsHover] = useState(false)

  const StyledGoal = {
    initial: {
      scale: 1,
      filter: 'grayscale(100%)',
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      }
    },
    hover: {
      scale: 1.1,
      filter: 'grayscale(0%)',
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      }
    },
    initialBefore: {
      bottom: '0px',
      right: '110px'
    },
    beforeContent: {
      bottom: '0px',
      right: '45px',
    },
    initialAfter: {
      bottom: '0px',
      right: '90px'
    },
    afterContent: {
      bottom: '0px',
      right: '30px',
    },
  };

  return (
    <StyledGoalCard
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <Button
        color={'brand4'}
        fontFamily={'barlow'}
        fontSize={'14px'}
        fontStyle={'italic'}
        fontWeight={'700'}
        textTransform={'uppercase'}
        text={firstText}
        textAlign={'start'}
        width={'212px'}
        height={'40px'}
        bgColor={'brand1'}
        padding={'12px 83px 12px 16px'}
        hoverBg={'brand2'}
        whiteSpace={'nowrap'}
        animateClip
        animate={{
          backgroundColor: isHover ? '#FFC470' : '#FF9601',
          transition: { duration: 0.2 },
        }}
      />
      <Image
        variants={StyledGoal}
        src={image}
        animate={isHover ? "hover" : "initial"}
      />
      <BarsOne
        variants={StyledGoal}
        animate={isHover ? "beforeContent" : "initialBefore"} />
      <BarsTwo
        variants={StyledGoal}
        animate={isHover ? "afterContent" : "initialAfter"} />
    </StyledGoalCard>
  )
}

export default GoalCard;