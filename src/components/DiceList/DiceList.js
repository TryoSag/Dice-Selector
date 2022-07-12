import { listOfDice } from "../../utils/utils";
import Dice from "../Dice/Dice";

const DiceList = () => {
  return (
    <>
      <ul>
        {listOfDice.map((dice, index) => (
          <Dice
            faces={dice.diceFaces}
            nameClass={dice.diceClass}
            index={index}
          />
        ))}
      </ul>
      <button>Throw</button>
    </>
  );
};

export default DiceList;
