import { useState } from "react";
import { randomDots } from "../../utils/utils";
import DecorDiceStyled from "./DecorDiceStyled";
const DecorDice = () => {
  const [dotsClass, setDotsClass] = useState(randomDots());

  const changeDots = () => setDotsClass(randomDots());
  return (
    <DecorDiceStyled>
      <div className={`dice ${dotsClass}`} onClick={changeDots}>
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
