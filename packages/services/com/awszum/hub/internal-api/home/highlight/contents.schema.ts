export interface Content {
  order: number;
  homeContentType: 'CONTENT_BIG' | 'CONTENT_PARTITION';
  hubContentIdx: number;
  mediaIdx: number;
  categoryIdx: number;
  categoryName: string;
  title: string;
  contentUrl: string;
  contentImg: string;
  mediaName: string;
  useMobile: boolean;
  hasMovie?: boolean;
  hrefTarget: 'SELF' | 'BLANK';
  mediaImg: string;
  mediaProfile?: string;
}

export interface Contents {
  publish: boolean;
  contents: Content[];
}
