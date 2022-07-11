const Dice = (faces, index) => {
  <li>
    <div className={`container--shape${faces}`}>
      <span>{faces}</span>
    </div>
    <div className="container--counter">
      <button className="button--minus" />
      <span></span>
      <button className="button--plus" />
    </div>
  </li>;
};

export default Dice;
