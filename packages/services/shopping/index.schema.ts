import { ValueOf } from '@repo/types';
import { SLOTS } from './index';

export interface ShoppingItem {
  url: string;
  stat: string;
  adrUrl: string;
  image: string;
  text: string;
  brandName?: string;
  priceInfo?: string;
  mallId: string;
  mallName: string;
}

export type ShoppingData = Array<{
  id: ValueOf<typeof SLOTS>;
  value: { shoppingItems: ShoppingItem[] };
}>;
