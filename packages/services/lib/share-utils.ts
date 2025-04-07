import { kakaoShareService } from '@repo/services/lib/kakao';

export type SnsType = 'facebook' | 'twitter' | 'kakaotalk';

export interface SharePageOptions {
  title: string;
  url: string;
  description?: string;
  imageUrl?: string;
}

export function composeShareURL(url: string, snsType?: SnsType): string {
  const shareUrl = new URL(url);
  if (snsType) {
    shareUrl.searchParams.set('cm', `share_${snsType}`);
  }
  return shareUrl.toString();
}

export function sharePage(snsType: SnsType, options: SharePageOptions): void {
  const { title, url, description, imageUrl } = options;
  const encodeShareUrl = encodeURIComponent(composeShareURL(url, snsType));
  const encodeText = encodeURIComponent(title);

  switch (snsType) {
    case 'facebook':
      window.open(`https://facebook.com/sharer/sharer.php?u=${encodeShareUrl}`, snsType);
      break;
    case 'twitter':
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeText}&url=${encodeShareUrl}`,
        snsType,
      );
      break;
    case 'kakaotalk':
      kakaoShareService.shareKakaoTalk({
        imageUrl: imageUrl || '',
        title: encodeText,
        description: description || '',
        url: encodeShareUrl,
      });
      break;
  }
}
