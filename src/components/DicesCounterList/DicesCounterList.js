import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { throwDicesActionCreator } from "../../redux/features/dicesSlice";
import { listOfDices } from "../../utils/utils";
import DiceCounter from "../DiceCounter/DiceCounter";

const DicesCounterList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const throwDices = () => {
    dispatch(throwDicesActionCreator());
    navigate("/dicesResults");
  };

  return (
    <>
      <ul>
        {listOfDices.map((dice, index) => (
          <li key={dice.diceFaces}>
            <DiceCounter dice={dice} diceIndex={index} />
          </li>
        ))}
      </ul>
      <button onClick={throwDices}>Throw</button>
    </>
  );
};

export default DicesCounterList;
