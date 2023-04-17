import { TextProps } from "@/interfaces/TextProps/TextProps";
import {
  StyledText,
  SecondText,
  StyledTextOverlaid,
  SecondTextOverlaid,
  StyledTextInline,
  SecondTextInline
} from "./style";

const Text = ({
  text,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textTransform,
  whiteSpace,
  secondColor,
  secondText,
  secondfontFamily,
  textAlign,
  overlaid,
  bottom,
  width,
  inline
}: TextProps) => {
  
  return (
    <>
      {overlaid ? (
        <StyledTextOverlaid
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textTransform={textTransform}
          fontFamily={fontFamily}
          whiteSpace={whiteSpace}
          textAlign={textAlign}
          text={text}
          bottom={bottom}
          width={width}
        >
          {text}
          {secondColor && secondText && (
            <SecondTextOverlaid
              secondColor={secondColor}
              secondText={secondText}
              secondfontFamily={secondfontFamily}
            >
              {secondText}
            </SecondTextOverlaid>
          )}
        </StyledTextOverlaid>
      ) : inline ? (
        <StyledTextInline
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
        >
          {text}
          {secondColor && secondText && (
            <SecondTextInline
              secondColor={secondColor}
              secondText={secondText}
              secondfontFamily={secondfontFamily}
            >
              {secondText}
            </SecondTextInline>
          )}
        </StyledTextInline>) : (
        <StyledText
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
        >
          {text}
          {secondColor && secondText && (
            <SecondText
              secondColor={secondColor}
              secondText={secondText}
              secondfontFamily={secondfontFamily}
            >
              {secondText}
            </SecondText>
          )}
        </StyledText>
      )}
    </>
  )
}

export default Text;