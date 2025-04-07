import client from '@repo/services/lib/internal-client';
import { type GetQueries, MediaList, Media, PickedMedia } from './list.schema';
import { decode } from 'html-entities';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { pick } from '@repo/services/lib/pick';

/**
 * @file `/author` 페이지에 사용되는 채널 리스트 페이지네이션 API
 */

export async function GET(queries: GetQueries) {
  const { start, baseAt, length, order } = queries;

  const url = pathcat(INTERNAL_API_BASE_URL, '/media/list', {
    start,
    baseAt,
    length,
    order,
  });

  /** @cache 신규 채널이 거의 없으므로 15분 설정 */
  const { mediaList } = await client.get<MediaList>(url, { next: { revalidate: 900 } });

  return mediaList
    .map((mediaItem) =>
      pick<Media, keyof PickedMedia>(
        mediaItem,
        'mediaIdx',
        'name',
        'hubUrl',
        'image',
        'createdAt',
        'updatedAt',
        'contentCount',
        'profile',
        'url',
        'socialUrl',
        'type',
      ),
    )
    .map((mediaItem) => ({
      ...mediaItem,
      image: mediaItem.image ?? '',
      profile: mediaItem.profile
        ? decode(mediaItem.profile.replace(/<br>/gi, ' '), {
            level: 'html5',
          })
        : undefined,
    }));
}
