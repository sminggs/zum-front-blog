import { dedent } from './dedent';

interface generateRobotsParams {
  allowedUserAgentList: string[];
  allowedPathList: string[];
  disallowedPathList: string[];
  baseUrl: string;
}

export const generateRobotsTxt = ({
  allowedUserAgentList,
  allowedPathList,
  disallowedPathList,
  baseUrl,
}: Partial<generateRobotsParams>) => {
  const allowLines = allowedPathList?.map((path) => `Allow: ${path}`).join('\n');
  const disallowLines = disallowedPathList?.map((path) => `Disallow: ${path}`).join('\n');
  const userAgentLines = allowedUserAgentList
    ?.map((agent) => `User-agent: ${agent}\n${allowLines}\n${disallowLines}`)
    .join('\n\n');

  return dedent`
    ${userAgentLines}

    Sitemap: ${baseUrl}/sitemap.xml
  `;
};
