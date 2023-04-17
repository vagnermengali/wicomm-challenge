import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledButtonDownAndFAQ = styled(motion.div)`
    position: fixed;
    right: 40px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    z-index:99;
`

export const ButtonFAQ = styled(motion.button)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 6px;
    background: #FF9601;
    border: 1px solid var(--brand6);
    border-radius: 6px 6px 0px 6px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #0B0B0B;
    cursor: pointer;
    :hover {
        background-color: var(--brand2);
    }
`

export const ButtonDown = styled(motion.button)`
    width: 56px;
    height: 56px;
    background: var(--brand6);
    border: 1px solid var(--brand7);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
        color: var(--brand7);
        font-size: 20px;
    }
    :hover {
        background: var(--brand1);
        border: 1px solid var(--brand3);
        .icon {
        color: var(--brand3);
    }
    }
`

