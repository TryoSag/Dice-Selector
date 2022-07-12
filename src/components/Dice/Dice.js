const Dice = (faces, nameClass, index) => {
  return (
    <li className={nameClass}>
      <div className="container--shape">
        <span>{faces}</span>
      </div>
      <div className="container--counter">
        <button className="button--minus" />
        <span></span>
        <button className="button--plus" />
      </div>
    </li>
  );
};

export default Dice;
