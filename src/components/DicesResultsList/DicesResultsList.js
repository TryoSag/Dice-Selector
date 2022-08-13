import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetDicesActionCreator } from "../../redux/features/dicesSlice";
import { listOfDices } from "../../utils/utils";
import Dice from "../Dice/Dice";
import DicesResultsListStyled from "./DicesResultsListStyled";
import Button from "../Button/Button";

const DicesResultsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actualDicesResults } = useSelector((state) => state.dices);

  const resetDices = () => {
    dispatch(resetDicesActionCreator());
    navigate("/dicesCounter");
  };

  return (
    <DicesResultsListStyled>
      <ul className="list--dices">
        {actualDicesResults.map(
          (diceResults, dicesIndex) =>
            diceResults.length > 0 && (
              <li key={`${listOfDices[dicesIndex].diceSides}`}>
                <h3 className="list--dices-sides">
                  D{listOfDices[dicesIndex].diceSides}
                </h3>
                <ul className="list--dice-results">
                  {diceResults.map((diceResult, rowIndex) => (
                    <li
                      key={`${listOfDices[dicesIndex].diceSides}-${rowIndex}`}
                    >
                      <Dice
                        diceClass={listOfDices[dicesIndex].diceClass}
                        diceNumber={diceResult}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            )
        )}
      </ul>
      <Button onClickAction={resetDices} buttonText={"Reset"} />
    </DicesResultsListStyled>
  );
};

export default DicesResultsList;
