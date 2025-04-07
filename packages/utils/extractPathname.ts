export const extractPathname = (url?: string) => {
  if (!url) return '';

  try {
    return new URL(url).pathname;
  } catch (error) {
    return url;
  }
};
