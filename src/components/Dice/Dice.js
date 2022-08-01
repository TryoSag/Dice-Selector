import DiceStyled from "./DiceStyled";

const Dice = ({ diceClass, diceNumber }) => {
  return (
    <DiceStyled>
      <div className={diceClass}>
        <span>{diceNumber}</span>
      </div>
    </DiceStyled>
  );
};
export default Dice;
