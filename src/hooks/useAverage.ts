export const useAverage = (input: [number]) => {
  if (input.length === 1) {
    console.error("no books reviewed");
  } else {
    const slicedNumbers = input.slice(1);
    const sumOfNumbers = slicedNumbers.reduce(
      (current, added) => current + added,
      0
    );
    const average: number = sumOfNumbers / slicedNumbers.length;

    return average;
  }
};
