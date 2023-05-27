export const getRandomMovieKeyWord = (): string => {
  const keyWordMovieList = [
    "blood",
    "star",
    "family",
    "show",
    "letter",
    "magic",
    "love",
    "sex",
    "die",
    "animal",
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
