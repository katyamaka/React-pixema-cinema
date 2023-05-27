export const getRandomMovieKeyWord = (): string => {
  const keyWordMovieList = [
    "blood",
    "star",
    "family",
    "show",
    "magic",
    "love",
    "die",
    "gun",
    "killer",
    "nightmare",
    "death",
    "horror",
    "city",
    "game",
  ];

  return keyWordMovieList[Math.floor(Math.random() * keyWordMovieList.length)];
};
