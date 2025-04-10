// @todo 허브줌 세팅에서 블로그 세팅으로 변경 필요
import { MOBILE_HUBZUM_DOMAIN } from '@repo/constant/src/url';

export function addCmToUrl(url: string, cm: string, baseUrl?: string): string {
  const fullUrl = new URL(url, baseUrl ?? MOBILE_HUBZUM_DOMAIN);

  fullUrl.searchParams.append('cm', cm);

  const finalUrl = baseUrl
    ? new URL(fullUrl.pathname + fullUrl.search + fullUrl.hash, baseUrl).toString()
    : fullUrl.pathname + fullUrl.search + fullUrl.hash;

  return finalUrl;
}


