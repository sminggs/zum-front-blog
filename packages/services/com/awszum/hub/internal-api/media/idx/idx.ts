/**
 * @file 채널 컨텐츠 API
 */

import client from '@repo/services/lib/internal-client';
import { MediaIdx, type GetQueries } from './idx.schema';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';

export async function GET(queries: GetQueries) {
  const { hubUrl } = queries;

  /** 사용 빈도가 높으면서 변경되지 않는 데이터이므로 revalidate 생략 */
  const url = pathcat(INTERNAL_API_BASE_URL, '/media/idx', {
    hubUrl,
  });

  const { mediaIdx } = await client.get<MediaIdx>(url, {});

  return mediaIdx;
}
