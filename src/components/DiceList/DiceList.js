import { listOfDice } from "../../utils/utils";
import Dice from "../Dice/Dice";

const DiceList = () => {
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

export default DiceList;
