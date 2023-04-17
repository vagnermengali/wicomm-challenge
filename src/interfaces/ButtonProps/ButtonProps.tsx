import { TargetAndTransition } from "framer-motion";

export interface ButtonProps {
	text?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    textTransform?: string;
    fontFamily?: string;
    textDecoration?: string;
    whiteSpace?: string;
    textAlign?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    bgColor?: string;
    hoverColor?: string;
    padding: string;
    animateClip?: boolean;
    animateIcon?: boolean;
    animate?: TargetAndTransition;
    border?: string;
    hoverBg?: string;
    hoverBorder?: string;
    focus?: boolean;
}
