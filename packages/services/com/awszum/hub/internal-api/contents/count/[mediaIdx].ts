/**
 * @file 각 채널 별 콘텐츠 수 API
 */
import client from '@repo/services/lib/internal-client';
import { type GetQueries, Contents } from './[mediaIdx].schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';

export async function GET(queries: GetQueries) {
  const url = pathcat(INTERNAL_API_BASE_URL, '/contents/count/:mediaIdx', {
    mediaIdx: queries.mediaIdx,
  });

  /** @cache 각 채널 상세 페이지에서만 사용되고 중요도가 떨어지므로 1시간 설정 */
  const result = await client.get<Contents>(url, { next: { revalidate: 3600 } });

  return result.countItem;
}
