import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledGoalCard = styled(motion.div)`
   width: 277px;
   height: 340px;
   background: var(--brand11);
   display: flex;
   overflow: hidden;
   cursor: pointer;
   position: relative;
`

export const Image = styled(motion.img)`
    position: absolute;
`

export const BarsOne = styled(motion.div)`
    position: absolute;
    width: 32.5px;
    height: 40px;
    background-color: var(--brand1);
    clip-path: polygon(65% 0%, 100% 0%, 35% 100%, 0% 100%);
`

export const BarsTwo = styled(motion.div)`
    position: absolute;
    width: 29px;
    height: 40px;
    background-color: var(--brand1);
    clip-path: polygon(75% 0%, 100% 0%, 25% 100%, 0% 100%);
`