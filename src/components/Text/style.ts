import { TextProps } from "@/interfaces/TextProps/TextProps";

import styled from "styled-components";

export const StyledText = styled.p<TextProps>`
    width: ${({ width }) => width };
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-align: ${({ textAlign }) => textAlign };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    z-index: 2;
`

export const SecondText = styled.p<TextProps>`
    color: ${({ secondColor }) => `var(--${secondColor})`};
    font-family: ${({ secondfontFamily }) => `var(--${secondfontFamily})`};
    z-index: 2;
`

export const StyledTextOverlaid = styled.p<TextProps>`
    width: ${({ width }) => width };
    position: absolute;
    bottom: ${({ bottom }) => bottom };
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-align: ${({ textAlign }) => textAlign };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    z-index: 2;
`

export const SecondTextOverlaid = styled.p<TextProps>`
    color: ${({ secondColor }) => `var(--${secondColor})`};
    font-family: ${({ secondfontFamily }) => `var(--${secondfontFamily})`};
    z-index: 2;
`

export const StyledTextInline = styled.p<TextProps>`
    display: flex;
    gap: 10px;
    width: ${({ width }) => width };
    font-family: ${({ fontFamily }) => `var(--${fontFamily})`};
    font-style: ${({ fontStyle }) => fontStyle };
    font-weight: ${({ fontWeight }) => fontWeight };
    font-size: ${({ fontSize }) => fontSize };
    text-align: ${({ textAlign }) => textAlign };
    text-transform: ${({ textTransform }) => textTransform };
    color: ${({ color }) => `var(--${color})`};
    white-space: ${({ whiteSpace }) => whiteSpace};
    z-index: 2;
`

export const SecondTextInline = styled.p<TextProps>`
    color: ${({ secondColor }) => `var(--${secondColor})`};
    font-family: ${({ secondfontFamily }) => `var(--${secondfontFamily})`};
    z-index: 2;
`