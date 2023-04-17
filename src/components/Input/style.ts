import { motion } from "framer-motion";
import styled from "styled-components";

import { InputProps } from "@/interfaces/InputProps/InputProps";

export const StyledInput = styled(motion.div)<InputProps>`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height };
`

export const InputComponent = styled(motion.input)<InputProps>`
    position: relative;
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    width: 100%;
    height: 100%;
    padding: ${({ padding }) => padding };
    border: ${({ border }) => border };
    border-radius: ${({ borderRadius }) => borderRadius };
    background-color: ${({ bgColor }) => `var(--${bgColor})`};
    cursor: pointer;
    :hover {
        color: ${({ hoverColor }) => `var(--${hoverColor})`};
        background-color: ${({ hoverBgColor }) => `var(--${hoverBgColor})`};
    }
    :focus {
        border: ${({ borderFocus }) => borderFocus };
        background-color: ${({ focusBgColor }) => `var(--${focusBgColor})`};
    }
`

export const Icon = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    top: 10px;
    right: 15px;
    height: 20px;
    border: none;
    outline: none;
    background: #0b0b0b00;
    z-index: 10;
`