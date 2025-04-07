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

export type Contents = {
  contents: Content[];
};

export interface GetQueries {
  items?: ('media' | 'detail' | 'tag' | 'category')[];
  summaryContentSize?: number;
  medias?: string;
  excludeMedias?: string;
  states?: ('ACTIVE' | 'INACTIVE' | 'DELETE')[];
  categories?: (
    | 'HOME'
    | 'LIFE'
    | 'CULTURE'
    | 'TRIP'
    | 'IT'
    | 'PROMOTION'
    | 'ISSUE'
    | 'FOOD'
    | 'BIZ'
    | 'ENTERTAINMENT'
    | string
  )[];
  createdAtAfter?: string;
  createdAtBefore?: string;
  thumbnail?: boolean;
  limit?: number;
  order?: 'createdAt' | 'updatedAt' | 'idx';
}
