import { useSelector, useDispatch } from "react-redux";
import { resetDicesActionCreator } from "../../redux/features/dicesSlice";
import { diceRandom, listOfDices } from "../../utils/utils";
import Dice from "../Dice/Dice";

const DicesResultsList = () => {
  const dispatch = useDispatch();
  const dicesCounter = useSelector((state) => state.dices);

  const dicesResults = [];

  dicesCounter.forEach((diceCounter, index) => {
    for (let i = 0; i < diceCounter; i++) {
      const diceFormat = {
        diceClass: listOfDices[index].diceClass,
        diceNumber: diceRandom(listOfDices[index].diceFaces),
      };
      dicesResults.push(diceFormat);
    }
  });

  const resetDices = () => dispatch(resetDicesActionCreator());

  return (
    <>
      <ul>
        {dicesResults.map((dice) => (
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
