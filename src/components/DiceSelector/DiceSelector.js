import { listOfDice } from "../../utils/utils";
import Dice from "../Dice/Dice";

const DiceSelector = () => {
  return (
    <>
      <ul>
        {listOfDice.map((dice, index) => (
          <Dice faces={dice.diceFaces} index={index} />
        ))}
      </ul>
      <button>Throw</button>
    </>
  );
};

export default DiceSelector;
