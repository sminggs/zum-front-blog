// @ts-expect-error; library
// @todo 허브줌 세팅에서 블로그 세팅으로 변경 필요
import { some } from '@zuminternet/async';
import { ESTatClient, type ESTatPayload } from '@zuminternet/statistics';
import { createPuid, getCookie } from './utils';

export const PageView = '@PageView';
export const HubZumClick = '@HubZumClick';
export const Click = '@Click';

/**
 * 기본 속성 객체를 생성합니다.
 * @param eventProperties - 이벤트에 관련된 속성 객체
 * @returns {Record<string, any>} - 생성된 기본 속성 객체
 */
const createBaseProperties = (eventProperties: Record<string, any>) => ({
  url: window.location.href,
  isAuth: getCookie('EZSID') ? 'true' : 'false',
  puid: createPuid(),
  codeVersion: process.env.version,
  time: String(Date.now()),
  ...eventProperties,
});

/**
 * `outurl` 속성이 상대 경로일 경우 절대 경로로 변환합니다.
 * @param properties - 처리할 속성 객체
 * @returns {Record<string, any>} - `outurl` 속성이 절대 경로로 수정된 속성 객체
 */
export const applyOutUrlFilter = (properties: Record<string, any>) => {
  if (properties.outurl && properties.outurl.startsWith('/')) {
    properties.outurl = window.location.origin + properties.outurl;
  }
  return properties;
};

/**
 * 값이 `undefined`가 아닌 속성만 필터링하여 반환합니다.
 * @param properties - 필터링할 속성 객체
 * @returns {Record<string, any>} - `undefined` 값이 제거된 속성 객체
 */
export const filterUndefinedValues = (properties: Record<string, any>) =>
  Object.fromEntries(Object.entries(properties).filter(([, value]) => value !== undefined));

/**
 * `referrer`가 특정 도메인일 경우 통계 파라미터를 제외합니다.
 * @param properties - 처리할 속성 객체
 * @returns {Record<string, any>} - `referrer` 도메인에 따라 수정된 속성 객체
 */
export const omitStatsParamByReferrer = (properties: Record<string, any>) => {
  if (process.env.NODE_ENV !== 'production') return properties;

  if (properties.referrer) {
    try {
      const referrer = new URL(properties.referrer);
      if (referrer.hostname.endsWith('.zum.com')) {
        return properties;
      }

      const url = new URL(properties.url);
      url.searchParams.delete('cm');
      return { ...properties, url: url.toString() };
    } catch {
      // URL 파싱 오류를 무시하고 기본 속성을 반환
    }
  }
  return properties;
};

/**
 * 속성에 필터를 적용하여 반환합니다.
 * @param properties - 필터를 적용할 속성 객체
 * @returns {Record<string, any>} - 필터가 적용된 속성 객체
 */
export const applyFilter = (properties: Record<string, any>) =>
  omitStatsParamByReferrer(filterUndefinedValues(properties));

/**
 * `undefined` 값이 포함된 속성을 제거하여 반환합니다.
 * @param properties - 필터링할 속성 객체
 * @returns {Record<string, any>} - `undefined` 값이 제거된 속성 객체
 */
export const removeUndefinedValues = (properties: Record<string, any>) =>
  Object.fromEntries(Object.entries(properties).filter(([, value]) => value !== undefined));

/**
 * 이벤트 페이로드를 기반으로 속성 객체를 생성합니다.
 * @param eventPayload - 이벤트 페이로드 (이벤트 이름과 속성)
 * @returns {Promise<ESTatPayload>} - 생성된 속성 객체를 포함한 이벤트 페이로드
 */
export const generateEventProperties = async (payload: ESTatPayload): Promise<ESTatPayload> => {
  const [eventName, eventProperties] = payload;

  const combinedProperties = createBaseProperties(eventProperties);

  const processedProperties = await some(combinedProperties);

  const finalProperties = removeUndefinedValues(applyOutUrlFilter(processedProperties));

  return [eventName, finalProperties];
};

/**
 * 개발 환경에서 데이터 로깅을 수행합니다.
 * @param estatClient - `ESTatClient` 인스턴스
 * @param eventName - 이벤트 이름
 * @param properties - 이벤트 속성
 */
export const logDevelopmentData = (
  estatClient: ESTatClient,
  eventName: string,
  properties: Record<string, any>,
) => {
  // @ts-expect-error; private class method
  const statData = estatClient.createData([eventName, applyFilter(properties)]);

  const sortedProperties = Object.fromEntries(
    Object.keys(statData.properties)
      .sort()
      .map((key) => [key, statData.properties[key]]),
  );

  console.group(
    `%c📊 Statistics: ${eventName} (${new Date().toLocaleTimeString()})`,
    'font-weight: bold; font-size: 14px; color: #39FF14;',
  );

  console.log(`%c🔍 Total Properties: ${Object.keys(sortedProperties).length}`, 'font-size: 13px;');
  console.table(sortedProperties);
  console.groupEnd();
};

