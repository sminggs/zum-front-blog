export interface Content {
  order: number;
  homeContentType: 'MEDIA_NORMAL' | 'MEDIA_BOX';
  hubContentIdx: number;
  mediaIdx: number;
  categoryIdx: number;
  categoryName: string;
  title: string;
  summaryContent: string;
  mediaName: string;
  mediaProfile: string;
  mediaUrl: string;
  mediaImg: string;
  useMobile: boolean;
  hrefTarget: 'SELF' | 'BLANK';
  contentUrl: string;
  contentImg: string;
  hasMovie: boolean;
}

export interface Contents {
  publish: boolean;
  contents: Content[];
}
