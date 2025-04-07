/**
 * @file 게시글 상세 API
 */

/** @see {@link http://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_zum_provision_content_v1} */
import client from '@repo/services/lib/internal-client';
import { Contents, Idx, GetQueries } from './content.schema';
import {
  updateContentListWithAdSlots,
  sanitizeHtmlContent,
  setHotelsCombinedBannerImage,
} from './content.helpers';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';

export async function GET(queries: GetQueries<Idx[]>) {
  const {
    idxList,
    items = ['media', 'detail', 'tag', 'category'].join(','),
    summaryContentSize = 0,
  } = queries;

  const url = pathcat(INTERNAL_API_BASE_URL, '/zum-provision/content', {
    idxList: idxList.join(','),
    items,
    summaryContentSize,
  });

  /** @cache 변경 빈도가 높지만 트래픽을 받아야 하므로 15분 설정 */
  const data = await client.get<Contents>(url, { next: { revalidate: 900 } });

  const activeContentList = Object.entries(data).filter(([_, value]) => value?.state === 'ACTIVE');

  const updatedEntries = updateContentListWithAdSlots(
    activeContentList.map(([key, value]) => ({
      ...value,
      detail: {
        ...value.detail,
        content: value.detail?.content
          ? setHotelsCombinedBannerImage({
              category: value.mainCategoryKey,
              author: value.media?.key ?? '',
            })(sanitizeHtmlContent(value.detail?.content))
          : '',
      },
      idx: Number(key),
    })),
  );

  return updatedEntries;
}
