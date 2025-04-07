import client from '@repo/services/lib/internal-client';
import { Contents, type GetQueries } from './contents.schema';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { pathcat } from 'pathcat';

/**
 * @file 게시글에 사용되는 채널 추천 컨텐츠 API
 */

/** @see {@link http://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_zum_provision_contents_v1} */
export async function GET(queries: GetQueries) {
  const {
    items,
    summaryContentSize,
    medias,
    excludeMedias,
    states,
    categories,
    createdAtAfter,
    createdAtBefore,
    thumbnail,
    limit = 16,
    order,
  } = queries;

  /** @cache 변경 빈도가 높지만 트래픽을 받아야 하므로 15분 설정 */
  const url = pathcat(INTERNAL_API_BASE_URL, '/zum-provision/contents', {
    items,
    summaryContentSize,
    medias,
    excludeMedias,
    states,
    categories,
    createdAtAfter,
    createdAtBefore,
    thumbnail,
    limit,
    order,
  });

  const data = await client.get<Contents>(url, { next: { revalidate: 900 } });

  return {
    ...data,
    contents: data.contents.filter(({ state }) => state === 'ACTIVE'),
  };
}
