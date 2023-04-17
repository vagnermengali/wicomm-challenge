import { useState } from "react";

import { ButtonProps } from "@/interfaces/ButtonProps/ButtonProps";

import { StyledButton, StyledButtonAnimate } from "./style";


const Button = ({
  text,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textTransform,
  whiteSpace,
  textAlign,
  height,
  width,
  borderRadius,
  bgColor,
  hoverColor,
  padding,
  animateClip,
  animate,
  animateIcon,
  border,
  hoverBg,
  hoverBorder,
  focus
}: ButtonProps) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <>
      {animateClip ? (
        <StyledButtonAnimate
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textTransform={textTransform}
          fontFamily={fontFamily}
          whiteSpace={whiteSpace}
          textAlign={textAlign}
          text={text}
          width={width}
          height={height}
          borderRadius={borderRadius}
          bgColor={bgColor}
          hoverColor={hoverColor}
          padding={padding}
          animate={animate}
          border={border}
          hoverBg={hoverBg}
          hoverBorder={hoverBorder}
        >
          {text}
        </StyledButtonAnimate>
      ) : focus ? (
        <StyledButton
          color={isFocus ? 'brand10' : color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textTransform={textTransform}
          fontFamily={fontFamily}
          whiteSpace={whiteSpace}
          textAlign={textAlign}
          text={text}
          width={width}
          height={height}
          borderRadius={borderRadius}
          bgColor={isFocus ? 'brand3' : bgColor}
          hoverColor={isFocus ? 'brand10' : hoverColor}
          padding={padding}
          animateIcon={animateIcon}
          border={border}
          hoverBg={isFocus ? 'brand3' : hoverBg}
          hoverBorder={hoverBorder}
          onClick={() => setIsFocus(prev => !prev)}
        >
          {text}
        </StyledButton>
      ) : (
        <StyledButton
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textTransform={textTransform}
          fontFamily={fontFamily}
          whiteSpace={whiteSpace}
          textAlign={textAlign}
          text={text}
          width={width}
          height={height}
          borderRadius={borderRadius}
          bgColor={bgColor}
          hoverColor={hoverColor}
          padding={padding}
          animateIcon={animateIcon}
          border={border}
          hoverBg={hoverBg}
          hoverBorder={hoverBorder}
        >
          {text}
        </StyledButton>
      )}
    </>
  )
}

export default Button;