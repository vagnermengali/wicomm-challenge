import { FaChevronUp } from "react-icons/fa";

import chat_dots from '@/assets/icons/svg/chat-dots.svg'

import Icon from "@/components/Icon";

import { StyledButtonDownAndFAQ, ButtonFAQ, ButtonDown } from "./style";

const ButtonDownAndFAQ = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <StyledButtonDownAndFAQ>
      <ButtonDown onClick={handleClick}>
        <FaChevronUp className={'icon'} onClick={handleClick} />
      </ButtonDown>
      <ButtonFAQ>
        <Icon
          width={'16px'}
          height={'16px'}
          icon={chat_dots}
        />
        Fale conosco
      </ButtonFAQ>
    </StyledButtonDownAndFAQ>
  )
}

export default ButtonDownAndFAQ;