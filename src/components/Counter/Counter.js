const Counter = (counterNumber, minusAction, plusAction) => {
  const minusClick = () => minusAction();
  const plusClick = () => plusAction();

  return (
    <div className="container--counter">
      <button className="button--minus" onClick={minusClick} />
      <span className="text--number">{counterNumber}</span>
      <button className="button--plus" onClick={plusClick} />
    </div>
  );
};

export default Counter;
