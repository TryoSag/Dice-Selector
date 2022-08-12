import ButtonStyled from "./ButtonStyled";

const Button = ({ onClickAction, buttonText }) => {
  return <ButtonStyled onClick={onClickAction}>{buttonText}</ButtonStyled>;
};

export default Button;
