export const generateSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase() // 소문자로 변환
    .replace(/[\s,]+/g, '-') // 공백 및 쉼표를 하이픈으로 변환
    .replace(/[^a-zA-Z0-9가-힣-]/g, '') // 영문, 숫자, 한글, 하이픈을 제외한 문자 제거
    .replace(/-+/g, '-') // 연속된 하이픈을 하나로 줄임
    .replace(/^-|-$|^-$/g, ''); // 문자열의 시작과 끝의 하이픈 제거
};
