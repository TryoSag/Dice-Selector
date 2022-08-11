import { useDispatch } from "react-redux";
import { toggleHistoricalActionCreator } from "../../redux/features/uiSlice";
import DecorDice from "../DecorDice/DecorDice";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const dispatch = useDispatch();

  const historicalButtonAction = () =>
    dispatch(toggleHistoricalActionCreator());

  return (
    <HeaderStyled>
      <button onClick={historicalButtonAction}>Historical</button>
      <h1>Dice Selector</h1>
      <DecorDice />
    </HeaderStyled>
  );
};

export default Header;
