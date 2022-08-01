import CounterStyled from "./CounterStyled";

const Counter = ({ counterNumber, minusAction, plusAction }) => {
  const minusClick = () => minusAction();
  const plusClick = () => plusAction();

  return (
    <CounterStyled>
      <button className="button--minus" onClick={minusClick} />
      <span className="text--number">{counterNumber}</span>
      <button className="button--plus" onClick={plusClick} />
    </CounterStyled>
  );
};

export default Counter;
