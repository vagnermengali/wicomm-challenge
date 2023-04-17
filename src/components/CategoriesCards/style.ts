import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCategoriesCards = styled(motion.div)`
   width: 178px;
   height: 210px;
   display: flex;
   flex-direction: column;
   position: relative;
   align-items: center;
   gap: 16px;
   cursor: pointer;
`

export const Div = styled(motion.div)`
   width: 178px;
   min-height: 178px;
   border-radius: 100%;
   height: min-content;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: var(--brand9);
`

export const Image = styled(motion.img)`
   width: 108px;
   height: 108px;
`