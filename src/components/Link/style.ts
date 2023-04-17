import { LinkProps } from "@/interfaces/LinkProps/LinkProps";
import { motion } from "framer-motion";

import styled from "styled-components";

export const StyledLink = styled.a<LinkProps>`
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    text-decoration: ${({ textDecoration }) => `var(--${textDecoration})`};
`   

export const StyledLinkAnimate = styled(motion.a)<LinkProps>`
    height: 100%;
    display: flex;
    position: relative;
    padding: 0px 18px;
    align-items: center;
    
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    text-decoration: ${({ textDecoration }) => `var(--${textDecoration})`};
    ::before {
        content: '';
        width: ${({ hover }) => hover ? `100%` : 0};
        transition: all ease-out .2s;
        transition-delay: ${({ hover }) => hover ? `0.3s` : 0};
        height: 2px;
        background-color: var(--brand1);
        position: absolute;
        bottom: 0;
        left: 0;
    }
`   