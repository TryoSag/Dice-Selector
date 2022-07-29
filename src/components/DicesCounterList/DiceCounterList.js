import { useDispatch } from "react-redux";
import { throwDicesActionCreator } from "../../redux/features/dicesSlice";
import { listOfDices } from "../../utils/utils";
import DiceCounter from "../DiceCounter/DiceCounter";

const DicesCounterList = () => {
  const dispatch = useDispatch();

  const throwDices = () => {
    dispatch(throwDicesActionCreator());
  };
  //throw redirecciona a resultslist

  return (
    <>
      <ul>
        {listOfDices.map((dice, index) => (
          <li>
            <DiceCounter dice={dice} diceIndex={index} />
          </li>
        ))}
      </ul>
      <button onClick={throwDices}>Throw</button>
    </>
  );
};

export default DicesCounterList;
