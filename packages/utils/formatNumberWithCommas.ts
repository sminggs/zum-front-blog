export const formatNumberWithCommas = (value: number) => {
  if (!value) return value;
  return value.toLocaleString('ko-KR');
};
