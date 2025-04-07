/**
 * @file 각 카테고리 별 페이징 콘텐츠 API
 */
import client from '@repo/services/lib/internal-client';
import { Contents, type GetQueries } from './index.schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { getBaseAtEveryMinutes } from '@repo/utils/baseAt';
import { JSDOM } from 'jsdom';
import DOMPurify from 'isomorphic-dompurify';

export async function GET(queries: GetQueries) {
  const { categoryIdx, start = 0, baseAt = getBaseAtEveryMinutes(), length = 20 } = queries;

  const url = pathcat(INTERNAL_API_BASE_URL, '/contents', {
    categoryIdx,
    start,
    baseAt,
    length,
  });

  const data = await client.get<Contents>(url);

  return data.hubContentList
    .filter(({ state }) => state === 'ACTIVE') // 비활성화 게시글 제거
    .map((item) => ({
      hubContentIdx: item.hubContentIdx,
      title: item.title,
      summaryContent: getSummaryContent(item.content), // 컨텐츠 요약
      thumbUrl: item.thumbUrl ?? '',
      hasMovie: item.hasMovie,
      media: {
        mediaIdx: item.media.mediaIdx,
        hubUrl: item.media.hubUrl, // 영문 채널명
        name: item.media.name, // 한글 채널명
        url: item.media.url ?? '',
        state: item.media.state,
      },
    }));
}

const getSummaryContent = (html: string) => {
  try {
    const cleanHtml = DOMPurify.sanitize(html);
    const dom = new JSDOM(cleanHtml);
    const textContents =
      dom.window.document.body.textContent?.trim().split(/\s+/).filter(Boolean) ?? [];
    return textContents.slice(0, 50).join(' ').substring(0, 500);
  } catch (error) {
    return '';
  }
};
