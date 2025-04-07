/** @desc UTC -> KST */
export const getKoDate = (date = new Date()) => {
  const kr_diff = 9 * 60 * 60 * 1_000;
  return new Date(date.getTime() + kr_diff);
};
