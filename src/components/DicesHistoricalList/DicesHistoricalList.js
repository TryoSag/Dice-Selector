import { useSelector, useDispatch } from "react-redux";
import { resetHistoricalActionCreator } from "../../redux/features/dicesSlice";
import { toggleHistoricalActionCreator } from "../../redux/features/uiSlice";
import { listOfDices } from "../../utils/utils";
import Button from "../Button/Button";
import Dice from "../Dice/Dice";
import DicesHistoricalListStyled from "./DicesHistoricalListStyled";

const DicesHistoricalList = () => {
  const dispatch = useDispatch();
  const { listDicesResults } = useSelector((state) => state.dices);

  const resetHistorical = () => {
    dispatch(resetHistoricalActionCreator());
    dispatch(toggleHistoricalActionCreator());
  };

  return (
    <DicesHistoricalListStyled>
      <h2>Last throws</h2>
      <ul className="list--throws">
        {listDicesResults.map((listDices, throwIndex) => (
          <li key={`throw-${throwIndex}`}>
            <ul className="list--dices">
              {listDices.map(
                (diceResults, diceIndex) =>
                  diceResults.length > 0 && (
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
                  )
              )}
            </ul>
          </li>
        ))}
      </ul>
      <Button onClickAction={resetHistorical} buttonText={"Reset"} />
    </DicesHistoricalListStyled>
  );
};

export default DicesHistoricalList;
