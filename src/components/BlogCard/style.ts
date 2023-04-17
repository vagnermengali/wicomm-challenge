import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBlogCard = styled(motion.div)`
   width: 376px;
   height: 380px;
   background: var(--brand4);
   display: flex;
   flex-direction: column;
   position: relative;
   gap: 15px;
   cursor: pointer;
   overflow: hidden;
`

export const DivTop = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
`

export const IconRedirect = styled(motion.a)`
    position: absolute;
`

export const DivBottom = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 24px;
    padding: 0px 24px 24px 24px;
    justify-content: space-between;
    flex-direction: column;
`

export const IconAnimate = styled(motion.img)`
  
`