const RECENT_STORAGE_KEY = 'recentArticle';

export const saveRecentArticlesToStorage = ({
  articleId,
  category,
}: {
  articleId: number;
  category: string;
}) => {
  try {
    const recentArticlesFromStorage = getRecentArticlesFromStorage();
    const recentArticlesMap = new Map(recentArticlesFromStorage);
    recentArticlesMap.set(articleId, { time: new Date().getTime(), category });
    return localStorage.setItem(
      RECENT_STORAGE_KEY,
      JSON.stringify(Array.from(recentArticlesMap.entries())),
    );
  } catch (error) {
    console.error(error);
    return new Map();
  }
};

export const getRecentArticlesFromStorage = (): Map<
  number,
  {
    time: number;
    category: string;
  }
> => {
  try {
    const currentTimestamp = new Date().getTime();
    const WEEK = 60 * 60 * 24 * 7 * 1000;
    const expirationTimestamp = currentTimestamp - WEEK;
    const storedArticles: Map<number, { time: number; category: string }> = new Map(
      JSON.parse(localStorage.getItem(RECENT_STORAGE_KEY) ?? '[]'),
    );

    storedArticles.forEach(({ time }, articleId: number) => {
      if (time < expirationTimestamp) {
        storedArticles.delete(articleId);
      }
    });

    return storedArticles;
  } catch (error) {
    console.error(error);
    return new Map();
  }
};
