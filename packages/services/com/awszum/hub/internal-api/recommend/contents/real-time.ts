/**
 * @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_recommend_contents_real_time_v1}
 * @file 인기 탭 오늘의 실시간 API
 */
import client from '@repo/services/lib/internal-client';
import { type GetQueries, Contents } from './real-time.schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import realtimeMock from './real-time.mock.json';

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_recommend_contents_real_time_v1} */
export async function GET(queries: GetQueries = {}) {
  const { limit = 12 } = queries;

  const url = pathcat(INTERNAL_API_BASE_URL, '/recommend/contents/real-time', {
    limit,
  });

  /** @cache 메인에서 새로운 게시글을 빠르게 반영하기 위해 5분 설정 */
  const contentsData = await client.get<Contents>(url, { next: { revalidate: 300 } });

  if (process.env.NODE_ENV === 'development') {
    return realtimeMock.contents;
  }

  return contentsData?.contents;
}
