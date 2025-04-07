/**
 * @desc 캐싱 위한 분 단위 baseAt 파싱 함수
 */
export const getBaseAtEveryMinutes = (cur = new Date(), intervalMinute = 1) => {
  cur.setSeconds(0);
  cur.setMilliseconds(0);
  cur.setMinutes(cur.getMinutes() - (cur.getMinutes() % intervalMinute));

  return (
    new Date(cur.getTime() - cur.getTimezoneOffset() * 60000)
      .toISOString()
      .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}/)?.[0] || ''
  );
};

/**
 * @desc 캐싱 위한 정각 baseAt 파싱 함수
 */
export const getBaseAtOnTheHour = (cur = new Date()) => {
  cur.setMinutes(0, 0, 0); // 분, 초, 밀리초를 0으로 설정

  return (
    new Date(cur.getTime() - cur.getTimezoneOffset() * 60000)
      .toISOString()
      .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}/)?.[0] || ''
  );
};

/**
 * @desc 'YYYYMMDDHHMMSS' 형식으로 baseAt 반환하는 함수
 */
export const getBaseAtFormatted = (cur = new Date()): string => {
  const year = cur.getFullYear();
  const month = String(cur.getMonth() + 1).padStart(2, '0');
  const day = String(cur.getDate()).padStart(2, '0');
  const hours = String(cur.getHours()).padStart(2, '0');
  const minutes = String(cur.getMinutes()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}00`; // 분 단위
};


/**
 * @desc `baseAt` 파라미터를 위해 UTC가 아닌 현재 KST 시간대로 ISO 포맷 문자열을 출력한다.
 * "2023-10-30T17:3825.060"
 */
export const getISOStringForKST = (date: Date | string, includeTimezone = true) => {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  const offsetInMs = dateObject.getTimezoneOffset() * 60000;

  // 2024-11-21T05:54:00+09:00
  return `${new Date(dateObject.getTime() - offsetInMs).toISOString().slice(0, 19)}${
    includeTimezone ? '+09:00' : ''
  }`;
};
