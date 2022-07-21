import { listOfDices } from "../../utils/utils";
import Counter from "../Counter/Counter";
import Dice from "../Dice/Dice";

const DicesCounterList = () => {
  return (
    <>
      <ul>
        {listOfDices.map((dice, index) => (
          <li>
            <Dice diceClass={dice.diceClass} diceNumber={dice.diceFaces} />
            <Counter index={index} />
          </li>
        ))}
      </ul>
      <button>Throw</button>
    </>
  );
};

export default DicesCounterList;
