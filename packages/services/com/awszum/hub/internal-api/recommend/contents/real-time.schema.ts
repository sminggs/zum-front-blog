export interface Content {
  idx: number;
  title: string;
  author: string;
  pcUrl: string;
  mobileUrl: string;
  thumbUrl?: string;
  hasMovie: boolean;
  authorId: number;
}

export interface Contents {
  contents: Content[];
}

export interface GetQueries {
  limit?: number;
}
