/** TODO: 날짜 변환 케이스가 많지 않아 우선 대응 */
export const formatDate = (dateInput: number | Date, format: string) => {
  const date = typeof dateInput === 'number' ? new Date(dateInput) : dateInput;

  if (format === 'MM.DD') {
    return `${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(
      2,
      '0',
    )}`;
  }

  if (format === 'YYYY.MM.DD') {
    return `${String(date.getFullYear())}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
      date.getDate(),
    ).padStart(2, '0')}`;
  }

  return dateInput.toString();
};
