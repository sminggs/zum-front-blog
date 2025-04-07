import { generateRobotsTxt } from '@repo/utils/generate-robots-txt';
import { GET as getCategories } from '@repo/services/com/awszum/hub/internal-api/categories';
import { MOBILE_HUBZUM_DOMAIN } from '@repo/constant/src/url';

const allowedUserAgentList = [
  'ZumBot',
  'Yeti',
  'Googlebot',
  'Googlebot-News',
  'Googlebot-Image',
  'Google-InspectionTool',
  'Daum',
  'Bingbot',
  'Slurp',
];

const disallowedPathList = [
  '/api/',
  '/_next/',
  '/preview/',
  '/smartincome/',
  '/smartdata/',
  '/singleliving/',
  '/autopost/',
  '/automobilek/',
  '/kccauto/',
  '/mground/',
  '/pikleco/',
  '/babshim/',
  '/entalktalk/',
  '/smart1min/',
  '/yclick/',
  '/grimb/',
  '/alonetravel/',
  '/latest',
];

export async function GET() {
  const baseUrl = MOBILE_HUBZUM_DOMAIN;
  const categories = await getCategories();
  const categoryPathList = categories.map(({ keyName }) =>
    keyName === 'popular' ? '/' : `/${keyName}`,
  );

  const robotsTxt = generateRobotsTxt({
    allowedUserAgentList,
    allowedPathList: [...categoryPathList, '/author', '/search'],
    disallowedPathList,
    baseUrl,
  }).trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export const dynamic = 'force-static';
