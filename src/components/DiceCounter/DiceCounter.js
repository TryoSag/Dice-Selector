import { useSelector, useDispatch } from "react-redux";
import {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
} from "../../redux/features/dicesSlice";

const DiceCounter = (faces, nameClass, index) => {
  const dispatch = useDispatch();
  const dicesCounter = useSelector((state) => state.dices);

  const incrementDice = () => dispatch(incrementDiceActionCreator(index));
  const decrementDice = () => {
    if (dicesCounter[index] > 0) {
      dispatch(decrementDiceActionCreator(index));
    }
  };

  return (
    <li className={nameClass}>
      <div className="container--shape">
        <span>{faces}</span>
      </div>
      <div className="container--counter">
        <button className="button--minus" onClick={decrementDice} />
        <span>{dicesCounter[index]}</span>
        <button className="button--plus" onClick={incrementDice} />
      </div>
    </li>
  );
};

export default DiceCounter;
