export interface Media {
  mediaIdx: number;
  name: string;
  hubUrl: string;
  urlLabel: string;
  url: string;
  socialUrl: string;
  type: string;
  profile: string;
  image: string;
  supportedPlatform: string;
  providerType: string;
  isOpenHubzum: boolean;
  isOpenSearch: boolean;
  isOpenMediaList: boolean;
  isDirectLink: boolean;
  isStartPage: boolean;
  isAssociatedLinkExpose: boolean;
  associatedLinksJson: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  updater: string;
  providerTypeQuality: number;
  mediaNameQuality: number;
  contentCount: number;
}

export interface MediaSearch {
  mediaList: Media[];
}

export type MediaList = MediaSearch['mediaList'];

export interface GetQueries {
  keyword: string;
}
