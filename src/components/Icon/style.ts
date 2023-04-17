import { motion } from "framer-motion";
import styled from "styled-components";

import { IconProps } from "@/interfaces/IconProps/IconProps";

export const StyledIcon = styled(motion.img)<IconProps>`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height };
    color: ${({ color }) => `var(--${color})`};
    ::hover {
        color: ${({ colorHover }) => `var(--${colorHover})`};
    }
`