import { useSelector, useDispatch } from "react-redux";
import { resetDicesActionCreator } from "../../redux/features/dicesSlice";
import Dice from "../Dice/Dice";

const DicesResultsList = () => {
  const dispatch = useDispatch();
  const { actualDicesResults } = useSelector((state) => state.dices);

  const resetDices = () => dispatch(resetDicesActionCreator());

  // doble loop per printar daus

  return (
    <>
      <ul>
        {actualDicesResults.map((dice) => (
          <li>
            <Dice diceClass={dice.diceClass} diceNumber={dice.diceNumber} />
          </li>
        ))}
      </ul>
      <button onClick={resetDices}>Reset</button>
    </>
  );
};

export default DicesResultsList;
