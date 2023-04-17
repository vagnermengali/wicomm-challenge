import { motion } from "framer-motion";
import styled from "styled-components";

import { AnimatedProps } from "@/interfaces/AnimatedProps/AnimatedProps";

export const StyledLearnMoreCard = styled(motion.div)`
   width: 277px;
   height: 294px;
   background: var(--brand11);
   display: flex;
   justify-content: space-between;
   overflow: hidden;
   cursor: pointer;
   position: relative;
`

export const Image = styled(motion.img)`
    position: absolute;
    height: 100%;
`

export const BarsOne = styled(motion.div)`
    position: absolute;
    height: 100px;
    background-color: var(--brand13);
`

export const DivTextIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const DivDetails = styled(motion.div)<AnimatedProps>`
    position: absolute;
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    left: 20px; 
    bottom: 20px;

    ::before {
        content: '';
        width: ${({ hover }) => hover ? `237px` : 0};
        transition: all ease-out .1s;
        transition-delay: ${({ hover }) => hover ? `0.3s` : 0};
        height: 1.5px;
        background-color: var(--brand7);
        position: absolute;
        top: 50%;
    }
`

