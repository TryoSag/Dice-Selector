export const listOfDices = [
  { diceFaces: 4, diceClass: "container--dice-4" },
  { diceFaces: 6, diceClass: "container--dice-6" },
  { diceFaces: 8, diceClass: "container--dice-8" },
  { diceFaces: 10, diceClass: "container--dice-10" },
  { diceFaces: 20, diceClass: "container--dice-20" },
];

export const diceRandom = (diceFaces) =>
  Math.floor(Math.random() * diceFaces + 1);
