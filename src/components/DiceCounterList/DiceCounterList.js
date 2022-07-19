import { listOfDices } from "../../utils/utils";
import DiceCounter from "../DiceCounter/DiceCounter";

const DicesCounterList = () => {
  return (
    <>
      <ul>
        {listOfDices.map((dice, index) => (
          <DiceCounter
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

export default DicesCounterList;
