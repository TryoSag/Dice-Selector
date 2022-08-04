import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { throwDicesActionCreator } from "../../redux/features/dicesSlice";
import { listOfDices } from "../../utils/utils";
import DiceCounter from "../DiceCounter/DiceCounter";
import DiceCounterListStyled from "./DicesCounterListStyled";

const DicesCounterList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const throwDices = () => {
    dispatch(throwDicesActionCreator());
    navigate("/dicesResults");
  };

  return (
    <DiceCounterListStyled>
      <ul>
        {listOfDices.map((dice, index) => (
          <DiceCounter key={dice.diceSides} dice={dice} diceIndex={index} />
        ))}
      </ul>
      <button onClick={throwDices}>Throw</button>
    </DiceCounterListStyled>
  );
};

export default DicesCounterList;
