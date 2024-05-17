export const useTotal = (input: [number]) => {
  const sumOfNumbers = input.reduce((current, added) => current + added, 0);
  return sumOfNumbers;
};
