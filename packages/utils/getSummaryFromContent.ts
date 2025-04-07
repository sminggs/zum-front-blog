export const getSummaryFromContent = (text: string, length: number) => {
  const tagRemovedText = stripTag(text);
  return tagRemovedText.substring(0, length);
};

const stripTag = (value: string) => {
  const str = value.replace(/<[^>]*>?/g, '');
  return str
    .replace(/\s/g, ' ')
    .replace(/&nbsp;?/g, ' ')
    .replace(/&quot;?/g, '"')
    .replace(/&amp;?/g, '&')
    .replace(/&lt;?/g, '<')
    .replace(/&gt;?/g, '>')
    .trim();
};
