/**
 * @file 추천채널 API
 */

import client from '@repo/services/lib/internal-client';
import { MediaSearch } from '../search/search.schema';
import { decode } from 'html-entities';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';

/** @see {@link https://www.notion.so/zuminternet/92e3df6fe0c94663bdd7464af1a770fd?pvs=4} */
export async function GET() {
  const url = pathcat(INTERNAL_API_BASE_URL, '/media/recommend');

  try {
    /** @cache 연속적인 검색에서 추천채널을 다르게 보여주기 위해 1초 설정 */
    const data = await client.get<MediaSearch>(url, { next: { revalidate: 1 } });

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
  } catch (error) {
    console.error('Error fetching recommended media search data:', error);
    return [];
  }
}
