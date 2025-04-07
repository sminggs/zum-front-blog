export const extractMediaId = (url: string) => {
  return /(?<=https?:\/\/[^\/]+\/)[a-zA-Z0-9_-]+/.exec(url)?.[0] ?? '';
};
