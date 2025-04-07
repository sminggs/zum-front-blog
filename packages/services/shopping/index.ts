import { type ShoppingData, type ShoppingItem } from './index.schema';
import { makeBalancedList, shuffle } from './helpers/make-balanced-list';
import client from '@repo/services/lib/internal-client';
import { pathcat } from 'pathcat';
import { SHOPPING_BOX_BASE_URL } from '@repo/services/lib/constants';

const KEYS = {
  SHOPPING_MALL_LIST: 'shoppingMallList',
  SHOPPING_ITEM_LIST: 'shoppingItemList',
} as const;

const PAGE_SIZE = 9;

export interface Response {
  [KEYS.SHOPPING_MALL_LIST]: ShoppingItem[];
  [KEYS.SHOPPING_ITEM_LIST]: ShoppingItem[];
}

export const SLOTS = {
  HUB_TEXT_MALL: 'hubTextmallV11',
  HUB_SHOPPING_BOX: 'hubShoppingBoxV14',
} as const;

const SLOT_TO_LIST = {
  [SLOTS.HUB_TEXT_MALL]: KEYS.SHOPPING_MALL_LIST,
  [SLOTS.HUB_SHOPPING_BOX]: KEYS.SHOPPING_ITEM_LIST,
} as const;

export async function GET() {
  const url = pathcat(SHOPPING_BOX_BASE_URL, '/data/front', {
    slot: Object.values(SLOTS).join(','),
  });

  try {
    const { data } = await client.get<{ data: ShoppingData }>(url);

    const response = data.reduce<Response>(
      (accumulatedLists, currentSlot) => {
        const currentSlotId = currentSlot.id;
        const listKey = SLOT_TO_LIST[currentSlotId as keyof typeof SLOT_TO_LIST];

        if (!listKey) {
          throw new Error();
        }

        accumulatedLists[listKey].push(...currentSlot.value.shoppingItems);
        return accumulatedLists;
      },
      { [KEYS.SHOPPING_MALL_LIST]: [], [KEYS.SHOPPING_ITEM_LIST]: [] },
    );

    response[KEYS.SHOPPING_MALL_LIST] = shuffle(
      response[KEYS.SHOPPING_MALL_LIST],
      response[KEYS.SHOPPING_MALL_LIST].length,
    );

    response[KEYS.SHOPPING_ITEM_LIST] = makeBalancedList(
      response[KEYS.SHOPPING_ITEM_LIST],
      PAGE_SIZE,
    )
      .flat()
      .filter(Boolean); /** @todo `makeBalancedList`에서 undefined 섞는 이슈 */

    return response;
  } catch (error) {
    console.error(error);
    return { [KEYS.SHOPPING_MALL_LIST]: [], [KEYS.SHOPPING_ITEM_LIST]: [] };
  }
}
