import DecorDice from "../DecorDice/DecorDice";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <DecorDice />
      <h1>Dice Selector</h1>
    </HeaderStyled>
  );
};

export default Header;
