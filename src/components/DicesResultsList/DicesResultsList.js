import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetDicesActionCreator } from "../../redux/features/dicesSlice";
import { listOfDices } from "../../utils/utils";
import Dice from "../Dice/Dice";

const DicesResultsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actualDicesResults } = useSelector((state) => state.dices);

  const resetDices = () => {
    dispatch(resetDicesActionCreator());
    navigate("/dicesCounter");
  };

  return (
    <>
      <ul>
        {actualDicesResults.map((diceResults, dicesIndex) => (
          <li>
            <ul>
              {diceResults.map((diceResult) => (
                <li>
                  <Dice
                    diceClass={listOfDices[dicesIndex].diceClass}
                    diceNumber={diceResult}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={resetDices}>Reset</button>
    </>
  );
};

export default DicesResultsList;
