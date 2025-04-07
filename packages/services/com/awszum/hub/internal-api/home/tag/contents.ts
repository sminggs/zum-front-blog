/**
 * @file 인기 탭 태그 컨텐츠 API
 */
import client from '@repo/services/lib/internal-client';
import { Contents } from './contents.schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { getBaseAtFormatted } from '@repo/utils/baseAt';

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_home_tag_contents_v1} */
export async function GET() {
  const url = pathcat(INTERNAL_API_BASE_URL, '/home/tag/contents', {
    datetime: getBaseAtFormatted(),
    publish: true,
  });

  /** @cache 메인에서 새로운 게시글을 빠르게 반영하기 위해 5분 설정 */
  const { tags } = await client.get<Contents>(url, { next: { revalidate: 300 } });

  return tags;
}
