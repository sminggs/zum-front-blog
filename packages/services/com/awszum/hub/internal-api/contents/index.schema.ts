export interface Media {
  mediaIdx: number;
  hubUrl: string;
  name: string;
  url?: string;
  state: boolean;
}

export interface Content {
  hubContentIdx: number;
  title: string;
  content: string;
  thumbUrl?: string;
  hasMovie: boolean;
  state: string;
  media: Media;
}

export interface MediaContent {
  idx: number;
  title: string;
  summary: string;
  thumbnail: string | undefined;
  hasMovie: boolean;
  pcUrl: string | undefined;
  contentUrl: string;
  media: Media;
}

export interface Contents {
  hubContentList: Content[];
}

export interface GetQueries {
  categoryIdx: number;
  start: number;
  length: number;
  baseAt?: string;
}

export interface PickedCategoryContent {
  hubContentIdx: number;
  title: string;
  summaryContent: string;
  thumbUrl?: string;
  hasMovie: boolean;
  media: Media;
}
