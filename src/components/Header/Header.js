import { d6Faces, diceRandom } from "../../utils/utils";

const Header = () => {
  const dotsClass = diceRandom(6);

  return (
    <header>
      <div className={d6Faces[dotsClass]}>
        <div className="dot-one" />
        <div className="dot-two" />
        <div className="dot-three" />
        <div className="dot-four" />
        <div className="dot-five" />
        <div className="dot-six" />
      </div>
    </header>
  );
};
