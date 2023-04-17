import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAdvertisingCard = styled(motion.div)`
   width: 475px;
   height: 280px;
   background: var(--brand11);
   padding: 40px;
   display: flex;
   cursor: pointer;
`

export const DivLeft = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
`

export const DivRight = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: flex-end;
    flex-direction: column;
`

export const IconAnimate = styled(motion.img)`
  
`