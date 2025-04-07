/**
 * @file 각 채널 별 페이징 콘텐츠 API
 */
import client from '@repo/services/lib/internal-client';

import { type GetQueries, ContentsData } from './[mediaIdx].schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';

export async function GET(queries: GetQueries) {
  const url = pathcat(INTERNAL_API_BASE_URL, `/contents/media/:mediaIdx`, {
    mediaIdx: queries.mediaIdx,
    offset: queries.offset,
    length: queries.length,
  });

  /** @cache 새로운 게시글을 반영하기 위해 5분 설정 */
  return client.get<ContentsData>(url, { next: { revalidate: 300 } });
}
