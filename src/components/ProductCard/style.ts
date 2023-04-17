import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProductsCards = styled(motion.div)`
   width: 277px;
   height: 420px;
`

export const Container = styled(motion.div)`
   width: 277px;
   height: 341px;
   display: flex;
   flex-direction: column;
   position: relative;
   align-items: center;
   cursor: pointer;
   border: 1px solid var(--brand9);
   border-radius: 4px;
   gap: 24px;
`

export const DivDetails = styled(motion.div)`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 16px;
   padding: 25px 22px 22px 22px;
`

export const DivIcons = styled(motion.div)`
   position: absolute;
   right: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 16px;
   padding: 24px;
`

export const DivPurchase = styled(motion.div)`
   position: absolute;
   width: 100%;
   z-index: 3;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: var(--brand10);
   gap: 15px;
`

export const ButtonPurchase = styled(motion.button)`
   position: absolute;
   width: 100%;
   z-index: 3;
   bottom: -47px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 14px 24px;
   gap: 10px;
   width: 277px;
   height: 48px;
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   text-align: center;
   text-transform: uppercase;
   color: var(--brand3);
   background-color: var(--brand1);
   border-radius: 4px;
   border: none;
   outline: none;
   cursor: pointer;
   :hover {
      background-color: var(--brand2);
   }
`

export const DivButton = styled(motion.div)`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 10px;
`

export const DivPrice = styled(motion.div)`
   display: flex;
   flex-direction: column;
   gap: 4px;
`

export const Image = styled(motion.img)`
   padding-top: 32px;
   width: 165px;
   height: 185px;
`