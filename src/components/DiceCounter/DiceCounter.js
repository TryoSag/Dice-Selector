import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter/Counter";
import Dice from "../Dice/Dice";
import {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
} from "../../redux/features/dicesSlice";

const DiceCounter = ({ dice, diceIndex }) => {
  const dispatch = useDispatch();
  const { numberOfDicesList } = useSelector((state) => state.dices);

  const diceIncrement = () => dispatch(incrementDiceActionCreator(diceIndex));
  const diceDecrement = () => {
    if (numberOfDicesList[diceIndex] > 0) {
      dispatch(decrementDiceActionCreator(diceIndex));
    }
  };

  return (
    <>
      <Dice diceClass={dice.diceClass} diceNumber={dice.diceFaces} />
      <Counter
        counterNumber={numberOfDicesList[diceIndex]}
        minusAction={diceDecrement}
        plusAction={diceIncrement}
      />
    </>
  );
};

export default DiceCounter;
