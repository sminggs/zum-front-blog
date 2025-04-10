// @todo 허브줌 세팅에서 블로그 세팅으로 변경 필요
const isProdApi = process.env.PROD_API === 'enabled';
const isDev = process.env.NODE_ENV === 'development';
const isQa = process.env.ZUM_QA === '1';
const URL_PREFIX = (isDev && !isProdApi) || isQa ? 'dev-' : '';

export const INTERNAL_API_BASE_URL = `http://${URL_PREFIX}internal-api.hub.awszum.com`;

export const SHOPPING_BOX_BASE_URL =
  isDev || isQa ? 'http://api.shopping.zum.com' : 'http://api.shopping.awszum.com:8080';
