export interface Category {
  categoryIdx: number;
  name: string;
  keyName: string;
  state: string;
  order: number;
  sideCategoryOrder: number[];
  level: number;
  createdAt: Date;
  updatedAt: Date;
  iconUrl: string;
  title: string;
  description: string;
  pathname?: string;
}

export interface Categories {
  categories: Category[];
}

export type PickedCategory = Pick<
  Category,
  'categoryIdx' | 'keyName' | 'name' | 'iconUrl' | 'title' | 'description'
> & { pathname: string };
