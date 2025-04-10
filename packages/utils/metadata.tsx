// @todo 허브줌 세팅에서 블로그 세팅으로 변경 필요
import type { Metadata } from 'next';
import { convertNewlinesToSpaces } from './convertNewlinesToSpaces';
import { MOBILE_HUBZUM_DOMAIN } from '@repo/constant/src/url';
import VERIFICATION from '@repo/constant/src/verification';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '@repo/constant/src/meta';

interface MetadataParams {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
}

export function generateCommonMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = '/logo/zum_1024.png',
  path = '/',
}: MetadataParams): Metadata {
  const formattedTitle = convertNewlinesToSpaces(title);
  const formattedDescription = convertNewlinesToSpaces(description);

  return {
    title: formattedTitle,
    description: formattedDescription,
    openGraph: {
      title: formattedTitle,
      description: formattedDescription,
      url: path,
      siteName: '허브줌',
      images: ogImage,
      locale: 'ko_KR',
      type: 'website',
    },
    metadataBase: new URL(MOBILE_HUBZUM_DOMAIN),
    alternates: {
      canonical: path,
    },
    robots: {
      'max-image-preview': 'large',
    },
    icons: {
      shortcut: '/logo/zum_512.png',
      apple: '/logo/zum_180.png',
    },
    other: {
      'hubzum:url': `${MOBILE_HUBZUM_DOMAIN}${path}`,
      'fb:app_id': VERIFICATION.FACEBOOK,
      'naver-site-verification': VERIFICATION.NAVER,
      'google-site-verification': VERIFICATION.GOOGLE,
      'dable:image': `${MOBILE_HUBZUM_DOMAIN}${ogImage}`,
    },
  };
}
