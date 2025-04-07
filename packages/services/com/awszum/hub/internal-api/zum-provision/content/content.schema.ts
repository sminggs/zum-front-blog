export interface Content {
  idx: number;
  mediaName: string;
  title: string;
  subTitle?: string;
  summaryContent: string;
  originUrl?: string;
  thumbUrl?: string;
  hasMovie: boolean;
  card: boolean;
  associatedLinkExpose: boolean;
  state: 'ACTIVE' | 'INACTIVE' | 'DELETE';
  pcUrl: string;
  mobileUrl: string;
  createdAt: string;
  updatedAt: string;
  mainCategoryKey: string;
  detail?: {
    content: string;
    associatedLinks?: {
      title: string;
      url: string;
      thumbLink: string;
    }[];
  };
  media?: {
    idx: number;
    name: string;
    key: string;
    url: string;
    socialUrl?: string;
    profile: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
  categories?: {
    name: string;
    key: string;
    main: boolean;
  }[];
  tags?: string[];
}

export type Idx = string | number;

export type IdxList = Idx[];

export type Item = 'media' | 'category' | 'tag' | 'detail';

export type Contents = Record<Idx, Content>;

export interface GetQueries<T> {
  idxList: T;
  items?: Item[];
  summaryContentSize?: number;
}
