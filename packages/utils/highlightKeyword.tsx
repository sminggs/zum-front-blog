/**
 * 주어진 텍스트에서 키워드와 일치하는 부분에 strong 태그를 추가합니다.
 * @param text 검색 대상 텍스트
 * @param keyword 강조할 키워드
 */
export const highlightKeyword = (text: string, keyword?: string) => {
  if (!keyword) return text;

  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  );
};
