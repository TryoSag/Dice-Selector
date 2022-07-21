const Dice = (diceClass, diceNumber) => {
  return (
    <div className={diceClass}>
      <span>{diceNumber}</span>
    </div>
  );
};
export default Dice;
