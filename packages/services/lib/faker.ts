export const createFakerSeed = (...values: any[]) => {
  return JSON.stringify(values)
    .split('')
    .map((char) => char.charCodeAt(0));
};
