/**
 * @file 채널 검색 API
 */

import client from '@repo/services/lib/internal-client';
import { type GetQueries, MediaSearch } from './search.schema';
import { decode } from 'html-entities';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';

/** @see {@link https://www.notion.so/zuminternet/92e3df6fe0c94663bdd7464af1a770fd?pvs=4} */
export async function GET(queries: GetQueries) {
  const url = pathcat(INTERNAL_API_BASE_URL, '/media/search', {
    keyword: queries.keyword ? encodeURIComponent(queries.keyword) : '',
  });

  /** @cache 신규 채널이 거의 없으므로 15분 설정 */
  const data = await client.get<MediaSearch>(url, { next: { revalidate: 900 } });

  /** 비활성 채널 필터링 및 프로필 포맷팅 */
  return data.mediaList
    .filter((mediaItem) => mediaItem.state === 'ACTIVE')
    .map((mediaItem) => ({
      ...mediaItem,
      profile: mediaItem.profile
        ? decode(mediaItem.profile.replace(/<br>/gi, ' '), {
            level: 'html5',
          })
        : '',
    }));
}
