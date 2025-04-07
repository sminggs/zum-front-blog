export interface GetQueries {
  mediaIdx: number;
  offset: number;
  length: number;
}

export interface Media {
  key: string;
  mediaIdx: number;
  name: string;
  hubUrl: string;
  url: string;
  thumbUrl?: string;
  type?: string;
  profile: string;
  image: string;
}

//Content 데이터를 사용하기 편하게 변경
export interface MediaContentsData {
  data: MediaContent[];
  currentPage: number;
}
export interface MediaContent {
  idx: number;
  title: string;
  summary: string;
  thumbnail?: string;
  hasMovie: boolean;
  pcUrl?: string;
  contentUrl: string;
  media: Media;
}

//실제로 받아오는 데이터 형태
export interface ContentsData {
  hubContentList: Content[];
}

export interface Content {
  hubContentIdx: number;
  title: string;
  subTitle?: string;
  content: string;
  isCard: boolean;
  hasMovie: boolean;
  thumbUrl?: string;
  pcUrl?: string;
  media: Media;
}
