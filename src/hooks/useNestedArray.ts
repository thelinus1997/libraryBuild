export const createNestedArray = (input: any) => {
  const newArray = [];
  const newArraySize = 6;

  if (input) {
    if (input.author) {
      for (let i = 0; i < input.author.length; i += newArraySize) {
        newArray.push(input.author.slice(i, i + newArraySize));
      }

      return newArray;
    } else if (input.title) {
      for (let i = 0; i < input.title.length; i += newArraySize) {
        newArray.push(input.title.slice(i, i + newArraySize));
      }

      return newArray;
    } else if (!input.title && !input.author) {
      console.log("nesting for favorites");
      for (let i = 0; i < input.length; i += newArraySize) {
        newArray.push(input.slice(i, i + newArraySize));
      }
      return newArray;
    }
  }
};
