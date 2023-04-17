export interface LinkProps {
	text?: string | React.ReactNode;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    textTransform?: string;
    fontFamily?: string;
    textDecoration?: string;
    whiteSpace?: string;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    animateOn?: boolean;
    hover?: boolean;
}
