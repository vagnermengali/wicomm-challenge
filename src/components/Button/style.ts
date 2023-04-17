import { motion } from "framer-motion";
import styled from "styled-components";

import { ButtonProps } from "@/interfaces/ButtonProps/ButtonProps";

export const StyledButton = styled(motion.button)<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-align: ${({ textAlign }) => textAlign };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    width: ${({ width }) => width};
    height: ${({ height }) => height };
    background-color: ${({ bgColor }) => `var(--${bgColor})`};
    border: ${({ border }) => `1px solid var(--${border})`};
    border-radius: ${({ borderRadius }) => borderRadius };
    padding: ${({ padding }) => padding };
    outline: none;
    :hover {
        cursor: pointer;
        border: ${({ hoverBorder }) => `1px solid var(--${hoverBorder})`};
        color: ${({ hoverColor }) => `var(--${hoverColor})`};
        background-color: ${({ hoverBg }) => `var(--${hoverBg})`};
    }
`

export const StyledButtonAnimate = styled(motion.button)<ButtonProps>`
    position: absolute;
    z-index: 99;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-align: ${({ textAlign }) => textAlign };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    width: ${({ width }) => width};
    height: ${({ height }) => height };
    background-color: ${({ bgColor }) => `var(--${bgColor})`};
    border-radius: ${({ borderRadius }) => borderRadius };
    padding: ${({ padding }) => padding };
    border: ${({ border }) => `1px solid var(--${border})`};
    outline: none;
    :hover {
        cursor: pointer;
        border: ${({ hoverBorder }) => `1px solid var(--${hoverBorder})`};
        color: ${({ hoverColor }) => `var(--${hoverColor})`};
        background-color: ${({ hoverBg }) => `var(--${hoverBg})`};
    }
`