export function getKoreanPostPosition(word: string, type: '을/를' | '로/으로' = '을/를'): string {
  const lastChar = word.charCodeAt(word.length - 1);
  const hasBatchim = (lastChar - 0xac00) % 28 !== 0;

  let postPosition: string;
  switch (type) {
    case '을/를':
      postPosition = hasBatchim ? '을' : '를';
      break;
    case '로/으로':
      postPosition = hasBatchim ? '으로' : '로';
      break;
    default:
      throw new Error('Unsupported post-position type');
  }

  return postPosition;
}
