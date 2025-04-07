/**
 * @file 허브글 검색 결과 API
 */
import client from '@repo/services/lib/internal-client';
import {
  type PickedContent,
  type PickedInnerSearch,
  type GetQueries,
  type InnerSearch,
} from './contents.schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { GET as getCategories } from '@repo/services/com/awszum/hub/internal-api/categories';

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_inner_search_contents_v1} */
export async function GET(queries: GetQueries): Promise<PickedInnerSearch> {
  const { items, order, category, keyword, start, length = 30 } = queries;

  const url = pathcat(INTERNAL_API_BASE_URL, '/inner-search/contents', {
    items,
    order,
    category,
    keyword: encodeURIComponent(keyword),
    start,
    length,
  });

  const categories = await getCategories();

  const res = await client.get<InnerSearch>(url, {
    headers: {
      Accept: 'application/vnd.zum.resource-2.0+json',
    },
    /** @cache 비교적 중요성이 떨어지고, 검색 페이지의 트래픽이 높기 때문에 15분 설정 */
    next: { revalidate: 600 },
  });

  const pickedContents: PickedContent[] = res.contents.map((content) => ({
    hubContentIdx: content.hubContentIdx,
    title: content.title,
    content: content.content,
    hasMovie: content.hasMovie,
    thumbUrl: content.thumbUrl,
    category: content.category.toLowerCase(),
    createdAt: content.createdAt,
    mediaName: content.mediaName,
    contentMobileUrl: content.contentMobileUrl,
    contentPcUrl: content.contentPcUrl,
    mediaMobileUrl: content.mediaMobileUrl,
    mediaPcUrl: content.mediaPcUrl,
    // 한글 카테고리명 추가
    categoryName:
      categories.find((category) => category.keyName === content.category.toLowerCase())?.name ||
      '',
  }));

  return {
    ...res,
    contents: pickedContents,
  };
}
