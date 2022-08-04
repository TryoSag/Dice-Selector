export const listOfDices = [
  { diceSides: 4, diceClass: "container--dice-4" },
  { diceSides: 6, diceClass: "container--dice-6" },
  { diceSides: 8, diceClass: "container--dice-8" },
  { diceSides: 10, diceClass: "container--dice-10" },
  { diceSides: 20, diceClass: "container--dice-20" },
];

export const diceRandom = (diceSides) =>
  Math.floor(Math.random() * diceSides + 1);

export const d6Sides = [
  "side-one",
  "side-two",
  "side-three",
  "side-four",
  "side-five",
  "side-six",
];
