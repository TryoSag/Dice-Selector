import { useSelector, useDispatch } from "react-redux";
import { listOfDices } from "../../utils/utils";
import Dice from "../Dice/Dice";

const DicesHistoricalList = () => {
  const dispatch = useDispatch();
  const { listDicesResults } = useSelector((state) => state.dices);

  const deleteHistorical = () => {
    dispatch();
  };

  return (
    <>
      <h2>Last throws</h2>
      <ul className="list--throws">
        {listDicesResults.map((listDices, throwIndex) => (
          <li key={`throw-${throwIndex}`}>
            <ul className="list--dices">
              {listDices.map((diceResults, diceIndex) => (
                <li key={`throw-${throwIndex}-dice-${diceIndex}`}>
                  <h3>D{listOfDices[diceIndex].diceSides}</h3>
                  <ul className="list--dice-results">
                    {diceResults.map((result, resultIndex) => (
                      <li
                        key={`throw-${throwIndex}-dice-${diceIndex}-result-${resultIndex}`}
                      >
                        <Dice
                          diceClass={listOfDices[diceIndex].diceClass}
                          diceNumber={result}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={deleteHistorical}>Delete</button>
    </>
  );
};

export default DicesHistoricalList;
