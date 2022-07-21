import { useSelector, useDispatch } from "react-redux";
import {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
} from "../../redux/features/dicesSlice";

const DiceCounter = (index) => {
  const dispatch = useDispatch();
  const dicesCounter = useSelector((state) => state.dices);

  const increment = () => dispatch(incrementDiceActionCreator(index));
  const decrement = () => {
    if (dicesCounter[index] > 0) {
      dispatch(decrementDiceActionCreator(index));
    }
  };

  return (
    <div className="container--counter">
      <button className="button--minus" onClick={decrement} />
      <span>{dicesCounter[index]}</span>
      <button className="button--plus" onClick={increment} />
    </div>
  );
};

export default DiceCounter;
