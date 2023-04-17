import { useState } from "react";

import { LinkProps } from "@/interfaces/LinkProps/LinkProps";

import { StyledLink, StyledLinkAnimate } from "./style";

const Link = ({
	text,
	color,
	fontFamily,
	fontSize,
	fontStyle,
	fontWeight,
	textTransform,
	textDecoration,
	whiteSpace,
	animateOn,
	hover
}: LinkProps) => {
	const [isHover, setIsHover] = useState(false)

	const StyledGoal = {
		initial: {
			transition: {
				duration: 0.3,
				ease: 'easeOut'
			}
		},
		hover: {
			backgroundColor: '#3A3A3C',
			color: '#FFFFFF',
			transition: {
				duration: 0.3,
				ease: 'easeOut'
			}
		},
	};

	return (
		<>
			{animateOn ? (
				<StyledLinkAnimate
					href="#"
					color={color}
					fontSize={fontSize}
					fontWeight={fontWeight}
					fontStyle={fontStyle}
					textTransform={textTransform}
					fontFamily={fontFamily}
					textDecoration={textDecoration}
					whiteSpace={whiteSpace}
					text={text}
					hover={isHover}
					variants={StyledGoal}
					animate={isHover ? "hover" : "initial"}
					onHoverStart={() => {
						setIsHover(true);
					}}
					onHoverEnd={() => {
						setIsHover(false);
					}}
				>
					{text}
				</StyledLinkAnimate>
			) : (
				<StyledLink
					href="#"
					color={color}
					fontSize={fontSize}
					fontWeight={fontWeight}
					fontStyle={fontStyle}
					textTransform={textTransform}
					fontFamily={fontFamily}
					textDecoration={textDecoration}
					whiteSpace={whiteSpace}
					text={text}
				>
					{text}
				</StyledLink>
			)}
		</>
	)
}

export default Link;