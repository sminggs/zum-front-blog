import { generateSlug } from './generateSlug';

export const createArticleUrl = (path: string, postTitle: string): string => {
  if (!path || !postTitle) return '';

  const segments = path.split('/').filter(Boolean);
  const articleId = segments.pop();
  const channelName = segments.pop();
  const sanitizedTitle = sanitize(postTitle);
  const slug = encodeURIComponent(generateSlug(sanitizedTitle));

  return `/${channelName}/${slug}-${articleId}`;
};

const sanitize = (input: string): string => {
  return input
    .replace(/<br\s*\/?>/gi, ' ') // <br> 및 <br/> 태그를 공백으로 변환
    .replace(/<\/?[^>]+>/gi, ''); // 모든 다른 HTML 태그 제거
};
