import { useState, useEffect } from "react";

import magnifying_glass from "@/assets/icons/svg/magnifying-glass.svg";
import x from "@/assets/icons/svg/x.svg";

import { InputProps } from "@/interfaces/InputProps/InputProps";

import { StyledInput, Icon, InputComponent } from "./style";

const Input = ({
  type = "text",
  text,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  textTransform,
  fontFamily,
  textDecoration,
  whiteSpace,
  textAlign,
  width,
  height,
  borderRadius,
  bgColor,
  hoverColor,
  padding,
  border,
  hoverBgColor,
  borderFocus,
  focusBgColor,
  search,
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearButtonClick = () => {
    setInputValue("");
  };

  useEffect(() => {
    setShowClearButton(Boolean(inputValue));
  }, [inputValue]);

  return (
    <StyledInput width={width} height={height}>
      <InputComponent
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textTransform={textTransform}
        fontFamily={fontFamily}
        textDecoration={textDecoration}
        whiteSpace={whiteSpace}
        textAlign={textAlign}
        padding={padding}
        border={border}
        borderRadius={borderRadius}
        borderFocus={borderFocus}
        focusBgColor={focusBgColor}
        bgColor={bgColor}
        hoverBgColor={hoverBgColor}
        autoFocus={false}
      />
      {search && (
        <Icon onClick={handleClearButtonClick}>
          {showClearButton ? (
            <img src={x} alt="Clear" />
          ) : (
            <img src={magnifying_glass} alt="Search" />
          )}
        </Icon>
      )}
    </StyledInput>
  );
};

export default Input;