import { listOfDices } from "../../utils/utils";
import DiceCounter from "../DiceCounter/DiceCounter";

const DicesCounterList = () => {
  return (
    <>
      <ul>
        {listOfDices.map((dice, index) => (
          <li>
            <DiceCounter dice={dice} diceIndex={index} />
          </li>
        ))}
      </ul>
      <button>Throw</button>
    </>
  );
};

export default DicesCounterList;
