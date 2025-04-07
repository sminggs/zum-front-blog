import { MOBILE_HUBZUM_DOMAIN } from '@repo/constant/src/url';

/**
 * @see {@link https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/OpenSearch}
 */
export function GET() {
  // @todo 변경 필요
  const openSearchXML = `<?xml version="1.0" encoding="UTF-8"?><OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/"><ShortName>ZUM 허브 검색</ShortName><Description>ZUM 허브 검색</Description><InputEncoding>UTF-8</InputEncoding><Image width="16" height="16" type="image/x-icon">${MOBILE_HUBZUM_DOMAIN}/favicon.ico</Image><Url type="text/html" template="${MOBILE_HUBZUM_DOMAIN}/search?keyword={searchTerms}"/><moz:SearchForm>${MOBILE_HUBZUM_DOMAIN}/search</moz:SearchForm></OpenSearchDescription>`;

  return new Response(openSearchXML, {
    headers: {
      'Content-Type': 'application/opensearchdescription+xml',
    },
  });
}

export const dynamic = 'force-static';
