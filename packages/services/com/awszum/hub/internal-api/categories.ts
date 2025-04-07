/**
 * @file 카테고리 API (UNDOCUMENTED)
 */
import client from '@repo/services/lib/internal-client';
import { pathcat } from 'pathcat';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import type { Categories, Category, PickedCategory } from './categories.schema';
import { pick } from '@repo/services/lib/pick';

export async function GET() {
  const url = pathcat(INTERNAL_API_BASE_URL, '/categories');

  /** @cache 거의 변경이 없지만, CMS에서 변경된 데이터 반영이 필요하므로 5분 설정 */
  const { categories } = await client.get<Categories>(url, { next: { revalidate: 300 } });

  return categories
    .filter((category) => category.state === 'ACTIVE')
    .map((category) => ({
      ...pick<Category, keyof PickedCategory>(
        category,
        'categoryIdx',
        'keyName',
        'name',
        'iconUrl',
        'title',
        'description',
      ),
      keyName: category.keyName === 'home' ? 'popular' : category.keyName,
      pathname: category.keyName === 'home' ? '/' : `/${category.keyName.toLowerCase()}`,
      name: category.name === '홈' ? '인기' : category.name,
    }));
}
