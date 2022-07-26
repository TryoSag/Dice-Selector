import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter/Counter";
import Dice from "../Dice/Dice";
import {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
} from "../../redux/features/dicesSlice";

const DiceCounter = ({ dice, diceIndex }) => {
  const dispatch = useDispatch();
  const { dicesCounters } = useSelector((state) => state.dices);

  const diceIncrement = () => dispatch(incrementDiceActionCreator(diceIndex));
  const diceDecrement = () => {
    if (dicesCounters[diceIndex].length > 0) {
      dispatch(decrementDiceActionCreator(diceIndex));
    }
  };

  return (
    <>
      <Dice diceClass={dice.diceClass} diceNumber={dice.diceFaces} />
      <Counter
        counterNumber={dicesCounters[diceIndex].length}
        minusAction={diceDecrement}
        plusAction={diceIncrement}
      />
    </>
  );
};

export default DiceCounter;
