/** 스크립트의 로딩 여부 **/
let loadedScript = false;

export const KAKAO_SDK_URL = '//developers.kakao.com/sdk/js/kakao.min.js';
export const KAKAO_API_KEY = 'a5429b099056017de2fceab40a7c2842';

export interface Size {
  width: number;
  height: number;
}

export interface KakaoTalkShareProps {
  url: string;
  title: string;
  description?: string;
  imageUrl: string;
}

interface KakaoImageUploadResult {
  infos: {
    original: {
      url: string;
      length: number;
      content_type: 'image/png';
      width: number;
      height: number;
    };
  };
}

interface KakaoImageShareProps extends Size {
  thumb: string;
  imgSrc: string;
  market: string;
  category: string;
  dateString: string;
}

declare global {
  interface Window {
    Kakao?: any;
  }
}

export const kakaoShareService = {
  /** 카카오톡 SDK 스크립트 로드 **/
  async loadScripts(): Promise<void> {
    if (loadedScript) return;
    const $script = document.createElement('script');
    $script.src = KAKAO_SDK_URL;
    $script.defer = true;
    document.head.appendChild($script);
    await new Promise<void>((resolve) => {
      $script.onload = () => {
        loadedScript = true;
        window.Kakao.init(KAKAO_API_KEY);
        resolve();
      };
    });
  },

  async shareKakaoTalk(props: KakaoTalkShareProps): Promise<void> {
    try {
      await this.loadScripts();

      const { url, title, imageUrl = '', description = '' } = props;
      const { width, height } = await this.getImageSize(imageUrl);

      const configs = {
        objectType: 'feed',
        content: {
          title,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
          description,
          imageUrl,
          imageWidth: width,
          imageHeight: height,
        },
        installTalk: true,
      };

      window.Kakao.Link.sendDefault(configs);
    } catch (error) {
      console.log(error);
    }
  },

  async uploadKakaoTalkImage(
    imageFile: File,
  ): Promise<KakaoImageUploadResult['infos']['original'] | void> {
    try {
      const uploadResult = (await window.Kakao.Share.uploadImage({
        file: [imageFile],
      })) as KakaoImageUploadResult;

      if (!uploadResult.infos || !uploadResult.infos.original)
        throw Error(`Kakao 이미지 업로드 실패`);

      return uploadResult.infos.original;
    } catch (error) {
      return console.error(`[KakaoShareService#uploadKakaoTalkImage]\n`, error);
    }
  },

  async shareKakaoTalkImage(props: KakaoImageShareProps): Promise<void> {
    const configs = {
      templateId: 80680,
      templateArgs: props,
    };

    window.Kakao.Share.sendCustom(configs);
  },

  async getImageSize(imageUrl: string): Promise<Size> {
    if (!imageUrl) return { width: 0, height: 0 };

    return new Promise<Size>((resolve, reject) => {
      const imageContainer = new Image();
      const timeout = setTimeout(() => {
        reject(new Error('Image loading timed out'));
      }, 10000);

      imageContainer.onload = () => {
        clearTimeout(timeout);
        resolve({
          width: imageContainer.width,
          height: imageContainer.height,
        });
      };

      imageContainer.onerror = () => {
        clearTimeout(timeout);
        reject(new Error('Failed to load image'));
      };

      imageContainer.src = imageUrl;
    }).catch(() => {
      return { width: 0, height: 0 };
    });
  },
};
