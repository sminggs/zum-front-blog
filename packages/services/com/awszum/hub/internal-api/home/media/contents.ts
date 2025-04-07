/**
 * @file 인기 탭 매체 컨텐츠 API
 */
import client from '@repo/services/lib/internal-client';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { Contents } from '@repo/services/com/awszum/hub/internal-api/home/media/contents.schema';
import { getBaseAtFormatted } from '@repo/utils/baseAt';

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_home_media_contents_v1} */
export async function GET() {
  const url = pathcat(INTERNAL_API_BASE_URL, '/home/media/contents', {
    datetime: getBaseAtFormatted(),
    publish: true,
  });

  /** @cache 메인에서 새로운 게시글을 빠르게 반영하기 위해 5분 설정 */
  const mediaContentsData = await client.get<Contents>(url, {
    next: { revalidate: 300 },
  });

  return mediaContentsData?.contents.map((media) => {
    return {
      content: {
        title: media.title,
        category: media.categoryName,
        summary: media.summaryContent,
        image: media.contentImg || '',
        type: (media.hasMovie ? 'video' : 'plain') as 'video' | 'plain',
        url: media.contentUrl,
        hubContentIdx: media.hubContentIdx,
      },
      channel: {
        name: media.mediaName,
        profile: media.mediaProfile,
        url: media.mediaUrl,
        image: media.mediaImg,
        mediaIdx: media.mediaIdx,
      },
    };
  });
}
