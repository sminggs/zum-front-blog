import { MOBILE_HUBZUM_DOMAIN } from '@repo/constant/src/url';

export function addCmToUrl(url: string, cm: string, baseUrl?: string): string {
  const fullUrl = new URL(url, baseUrl ?? MOBILE_HUBZUM_DOMAIN);

  fullUrl.searchParams.append('cm', cm);

  const finalUrl = baseUrl
    ? new URL(fullUrl.pathname + fullUrl.search + fullUrl.hash, baseUrl).toString()
    : fullUrl.pathname + fullUrl.search + fullUrl.hash;

  return finalUrl;
}


