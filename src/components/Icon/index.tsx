import { IconProps } from "@/interfaces/IconProps/IconProps";

import { StyledIcon } from "./style";

const Icon = ({
	height,
	width,
	color,
	colorHover,
	icon,
	onClick,
	onHoverStart,
	onHoverEnd
}: IconProps) => {

	return (
		<StyledIcon
			src={icon}
			color={color}
			height={height}
			width={width}
			colorHover={colorHover}
			icon={icon}
			onClick={onClick}
			onHoverEnd={onHoverEnd}
			onHoverStart={onHoverStart}
		/>
	)
}

export default Icon;