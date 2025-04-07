export interface Content {
  order: number;
  homeContentType: 'TAG_NORMAL';
  hubContentIdx: number;
  mediaIdx: number;
  categoryIdx: number;
  categoryName: string;
  title: string;
  summaryContent: string;
  contentUrl: string;
  contentImg: string;
  mediaName: string;
  mediaUrl: string;
  useMobile: boolean;
  hasMovie: boolean;
  hrefTarget: 'SELF' | 'BLANK';
  tagName: string;
}

export interface Tag {
  tagName: string;
  contents: Content[];
}

export interface Contents {
  publish: boolean;
  tags: Tag[];
}
