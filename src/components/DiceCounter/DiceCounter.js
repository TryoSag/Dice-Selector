import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter/Counter";
import Dice from "../Dice/Dice";
import {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
} from "../../redux/features/dicesSlice";

const DiceCounter = (dice, diceIndex) => {
  const dispatch = useDispatch();
  const dicesCounter = useSelector((state) => state.dices);

  const incrementDice = () => dispatch(incrementDiceActionCreator(diceIndex));
  const decrementDice = () => {
    if (dicesCounter[diceIndex] > 0) {
      dispatch(decrementDiceActionCreator(diceIndex));
    }
  };

  return (
    <>
      <Dice diceClass={dice.diceClass} diceNumber={dice.diceFaces} />
      <Counter
        counterNumber={dicesCounter[diceIndex]}
        minusAction={decrementDice}
        plusAction={incrementDice}
      />
    </>
  );
};

export default DiceCounter;
