export interface Content {
  hubContentIdx: number;
  title: string;
  content: string;
  contentImages: string[];
  card: boolean;
  hasMovie: boolean;
  thumbUrl: string;
  category: string;
  createdAt: string;
  mediaIdx: number;
  mediaHubUrl: string;
  mediaName: string;
  contentMobileUrl: string;
  contentPcUrl: string;
  mediaMobileUrl: string;
  mediaPcUrl: string;
}

export type PickedContent = Pick<
  Content,
  | 'hubContentIdx'
  | 'title'
  | 'content'
  | 'hasMovie'
  | 'thumbUrl'
  | 'category'
  | 'createdAt'
  | 'mediaName'
  | 'contentMobileUrl'
  | 'contentPcUrl'
  | 'mediaMobileUrl'
  | 'mediaPcUrl'
> & { categoryName: string };

export interface Media {
  type: 'SEARCH' | 'RECOMMEND';
  contentCount: number;
  mediaIdx: number;
  hubUrl: string;
  name: string;
  image: string;
  mobileUrl: string;
  pcUrl: string;
}

export interface Tag {
  type: 'RELATED' | 'RECOMMEND';
  tags: string[];
}

export interface InnerSearch {
  next: boolean;
  totalCount: number;
  contents: Content[];
  media: { searchTotalCount: number; medias: Media[] };
  tag: Tag;
}

export type PickedInnerSearch = Omit<InnerSearch, 'contents'> & { contents: PickedContent[] };

export interface GetQueries {
  items?: string;
  order: 'ACCURACY' | 'LATEST';
  category?: string;
  keyword: string;
  start: number;
  length?: number;
}
