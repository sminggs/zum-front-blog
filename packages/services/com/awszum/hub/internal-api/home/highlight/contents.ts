/**
 * @file 인기 탭 상단 하이라이트 컨텐츠 API
 */
import client from '@repo/services/lib/internal-client';
import { type Contents } from './contents.schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { getBaseAtFormatted } from '@repo/utils/baseAt';

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_home_highlight_contents_v1} */
export async function GET() {
  const datetime = getBaseAtFormatted();

  const url = pathcat(INTERNAL_API_BASE_URL, '/home/highlight/contents', {
    datetime,
    publish: true,
  });

  /** @cache 메인에서 새로운 게시글을 빠르게 반영하기 위해 5분 설정 */
  const { contents } = await client.get<Contents>(url, { next: { revalidate: 300 } });

  /** 시간대별 하이라이트 컨텐츠 노출 처리 기획 */
  const currentHour = new Date(datetime).getHours();

  // 09:00 ~ 20:59
  if (currentHour >= 9 && currentHour <= 20) {
    return contents.slice(0, 4);
  }

  // 21:00 ~ 08:59
  return contents.slice(2, 6);
}
