import { d6Sides, diceRandom } from "../../utils/utils";
import DecorDiceStyled from "./DecorDiceStyled";
const DecorDice = () => {
  return (
    <DecorDiceStyled>
      <div className={`dice ${d6Sides[diceRandom(6) - 1]}`}>
        <div className="dot dot-one" />
        <div className="dot dot-two" />
        <div className="dot dot-three" />
        <div className="dot dot-four" />
        <div className="dot dot-five" />
        <div className="dot dot-six" />
      </div>
    </DecorDiceStyled>
  );
};

export default DecorDice;
