export const getMovieRating = (): string => {
  return (Math.random() * (9 - 7 + 1) + 7).toFixed(1);
};
