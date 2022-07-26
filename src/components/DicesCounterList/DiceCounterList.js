import { diceRandom, listOfDices } from "../../utils/utils";
import DiceCounter from "../DiceCounter/DiceCounter";

const DicesCounterList = () => {
  const dicesResults = [];

  //adaptar formula per el throw

  dicesResults.forEach((diceCounter, index) => {
    for (let i = 0; i < diceCounter; i++) {
      const diceFormat = {
        diceClass: listOfDices[index].diceClass,
        diceNumber: diceRandom(listOfDices[index].diceFaces),
      };
      dicesResults.push(diceFormat);
    }
  });

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
