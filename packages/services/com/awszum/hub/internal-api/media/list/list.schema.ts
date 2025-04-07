export interface Media {
  mediaIdx: number;
  name: string;
  hubUrl: string;
  url?: string;
  socialUrl?: string;
  type?: string;
  profile?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  contentCount?: number;
  state: string;
}

export interface MediaList {
  mediaList: Media[];
}

export interface GetQueries {
  start: number;
  baseAt: string;
  length: number;
  order: 'CONTENTS' | 'NAME';
}

export type PickedMedia = Pick<
  Media,
  | 'mediaIdx'
  | 'name'
  | 'hubUrl'
  | 'image'
  | 'createdAt'
  | 'updatedAt'
  | 'contentCount'
  | 'profile'
  | 'url'
  | 'socialUrl'
  | 'type'
>;
