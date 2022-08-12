import { useDispatch } from "react-redux";
import { toggleHistoricalActionCreator } from "../../redux/features/uiSlice";
import Button from "../Button/Button";
import DecorDice from "../DecorDice/DecorDice";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const dispatch = useDispatch();

  const historicalButtonAction = () =>
    dispatch(toggleHistoricalActionCreator());

  return (
    <HeaderStyled>
      <Button
        onClickAction={historicalButtonAction}
        buttonText={"Historical"}
      />
      <h1>Dice Selector</h1>
      <DecorDice />
    </HeaderStyled>
  );
};

export default Header;
