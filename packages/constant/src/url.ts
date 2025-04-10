// @todo 허브줌 세팅에서 블로그 세팅으로 변경 필요

import { isQA } from './env';

export const HUBZUM_DOMAIN = isQA ? 'https://dev-front-hub.zum.com' : 'https://hub.zum.com';

export const MOBILE_HUBZUM_DOMAIN = isQA ? 'https://dev-m-hub.zum.com' : 'https://m.hub.zum.com';
export const MOBILE_ZUM_DOMAIN = isQA ? 'https://dev-m.zum.com' : 'https://m.zum.com';

export const CUSTOMER_SERVICE_URL = {
  PC: 'https://help.zum.com/home',
  MOBILE: 'https://m.help.zum.com/mobiles/inquiry',
};
