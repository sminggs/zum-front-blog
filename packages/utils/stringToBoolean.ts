export const stringToBoolean = (str: string | null) => {
  if (!str) return false;
  const lowerStr = str.toLowerCase();
  return lowerStr === 'true' ? true : false;
};
