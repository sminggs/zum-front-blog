import * as cheerio from 'cheerio';
import { Content } from './content.schema';

/**
 * 광고 슬롯 HTML을 생성합니다.
 * @returns {string} 광고 슬롯 HTML
 */
const createAdSlotHtml = (): string => '<span id="article_video"></span>';

/**
 * HTML 문자열에서 특정 위치에 광고 슬롯을 삽입합니다.
 * @param {string} html - 원본 HTML 문자열
 * @param {number} position - 광고 슬롯을 삽입할 위치
 * @param {string} adSlotHtml - 광고 슬롯 HTML 문자열
 * @returns {string} 광고 슬롯이 삽입된 업데이트된 HTML 문자열
 */
const insertAdSlotIntoHtml = (html: string, position: number, adSlotHtml: string): string => {
  const $ = cheerio.load(html);
  const elements = $('p, img, table, tbody').toArray();

  if (position >= 0 && position < elements.length) {
    $(elements[position]).append(adSlotHtml);
  }

  return $.html();
};

/**
 * 주어진 요소 배열에서 광고 슬롯을 삽입할 위치를 찾습니다.
 * @param {cheerio.Element[]} elements - 검사할 요소 배열
 * @returns {{position: number, html: string}} 광고 슬롯 위치와 HTML 문자열
 */
const findAdSlotInsertionPosition = (elements: any[]): { position: number; html: string } => {
  let accumulatedText = '';
  let adSlotInserted = false;

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];

    // 비텍스트 요소가 나타나면 누적 텍스트 초기화
    if (el.tagName === 'img' || el.tagName === 'table' || el.tagName === 'tbody') {
      accumulatedText = '';
      continue;
    }

    // 텍스트 요소의 경우
    if (el.tagName === 'p') {
      const text = cheerio.load(el).text().trim();
      accumulatedText += text + ' ';

      // 210자 이상 누적된 경우
      if (accumulatedText.length >= 210) {
        const nextEl = elements[i + 1];

        // 다음 요소가 비텍스트 요소일 경우 누적 텍스트 초기화
        if (
          nextEl &&
          (nextEl.tagName === 'img' || nextEl.tagName === 'table' || nextEl.tagName === 'tbody')
        ) {
          accumulatedText = '';
          continue;
        }

        // 다음 요소가 텍스트면서 조건을 만족하는 경우, 광고 슬롯 위치와 HTML 반환
        if (!adSlotInserted) {
          return { position: i, html: createAdSlotHtml() };
        }
      }
    }
  }

  return { position: -1, html: '' }; // 광고 슬롯 삽입 위치가 없으면 빈 값을 반환
};

/**
 * HTML 콘텐츠를 처리하여 광고 슬롯을 삽입합니다.
 * @param {string} content - 원본 HTML 콘텐츠
 * @returns {string} 광고 슬롯이 삽입된 HTML 콘텐츠
 */
const addAdSlotToContent = (content: string): string => {
  const $ = cheerio.load(content);
  const elements = $('p, img, table, tbody, blockquote').toArray();

  const { position, html: adSlotHtml } = findAdSlotInsertionPosition(elements);

  if (position >= 0) {
    return insertAdSlotIntoHtml(content, position, adSlotHtml);
  }

  return content; // 광고 슬롯을 삽입할 위치가 없으면 원본 콘텐츠 반환
};

/**
 * 콘텐츠 객체를 업데이트하여 광고 슬롯을 삽입합니다.
 * @param {Content} contentItem - 업데이트할 콘텐츠 객체
 * @returns {Content} 업데이트된 콘텐츠 객체
 */
const updateContentWithAdSlot = (contentItem: Content): Content & { hasVideoAdSlot: boolean } => {
  if (!contentItem.detail) return { ...contentItem, hasVideoAdSlot: false };

  const content = contentItem.detail.content;
  const hasVideoAdSlot = checkAdEligibility(cheerio.load(content));
  if (!hasVideoAdSlot) return { ...contentItem, hasVideoAdSlot };

  return {
    ...contentItem,
    detail: {
      ...contentItem.detail,
      content: addAdSlotToContent(content), // 광고 슬롯 삽입 처리
      associatedLinks: contentItem.detail.associatedLinks, // 관련 링크 유지
    },
    hasVideoAdSlot,
  };
};

/**
 * 콘텐츠 객체 배열을 처리하여 광고 슬롯을 삽입한 콘텐츠 객체를 반환합니다.
 * @param {Content[]} contentList - 처리할 콘텐츠 객체 배열
 * @returns {Record<string, Content>} 업데이트된 콘텐츠 객체를 키-값 쌍으로 반환
 */
export const updateContentListWithAdSlots = (
  contentList: Content[],
): Record<string, Content | undefined> => {
  const entries: [string, Content][] = contentList.map((contentItem) => [
    contentItem.idx.toString(),
    updateContentWithAdSlot(contentItem), // 콘텐츠 업데이트
  ]);

  return Object.fromEntries(entries); // 키-값 쌍으로 객체 생성
};

/**
 * 텍스트의 공백을 하나로 처리합니다.
 * @param {cheerio.CheerioAPI} $ - Cheerio 인스턴스
 * @returns {string} 정규화된 텍스트
 */
const normalizeTextContent = ($: cheerio.CheerioAPI) => {
  return $.text().replace(/\s+/g, ' ').trim();
};

/**
 * 텍스트 길이가 최소 길이 이상인지 확인합니다.
 * @param {string} textContent - 텍스트 콘텐츠
 * @param {number} minLength - 최소 길이
 * @returns {boolean} 길이 조건 만족 여부
 */
const hasSufficientTextLength = (textContent: string, minLength: number) => {
  return textContent.length >= minLength;
};

/**
 * HTML에서 줄 바꿈 개수를 셉니다.
 * @param {cheerio.CheerioAPI} $ - Cheerio 인스턴스
 * @returns {number} 줄 바꿈 개수
 */
const countLineBreaks = ($: cheerio.CheerioAPI) => {
  return $('br').toArray().length;
};

/**
 * 광고 삽입 조건을 확인합니다.
 * @param {cheerio.CheerioAPI} $ - Cheerio 인스턴스
 * @returns {boolean} 광고 삽입 가능 여부
 */
const checkAdEligibility = ($: cheerio.CheerioAPI) => {
  const textContent = normalizeTextContent($);
  const hasSufficientLength = hasSufficientTextLength(textContent, 1500);
  const lineBreaksCount = countLineBreaks($);
  const hasEnoughLineBreaks = lineBreaksCount >= 10;

  return hasSufficientLength && hasEnoughLineBreaks;
};

export const sanitizeHtmlContent = (html: string): string => {
  //img태그에 alt속성 넣어주는 로직
  const $ = cheerio.load(html);
  $('img').each((index, imgElement) => {
    const alt = $(imgElement).attr('alt');
    const src = $(imgElement).attr('src');

    if (!alt) {
      $(imgElement).attr('alt', '');
    }

    if (index === 0) {
      $(imgElement).attr('fetchPriority', 'high');
    } else {
      $(imgElement).attr('loading', 'lazy');
    }

    $(imgElement).attr('width', '100%');
    $(imgElement).attr('height', 'auto');

    if (src) {
      $(imgElement).attr('src', `/_next/image?url=${encodeURIComponent(src)}&w=430&q=70`);
      $(imgElement).attr('data-thumb-url', src);
    }
  });

  //a태그의 href url trim으로 비정상적 url 접근방지
  $('a').each((_, anchorElement) => {
    const originalUrl = $(anchorElement).prop('href');
    if (originalUrl) {
      const trimmedUrl = originalUrl.replace(/^(%20|\s)+|(%20|\s)+$/g, '');
      if (originalUrl !== trimmedUrl) {
        $(anchorElement).prop('href', trimmedUrl);
      }
    }
  });

  $('h1, h2, h3, h4, h5, h6').each((_, headingElement) => {
    $(headingElement).replaceWith(`<b class="sub_title">${$(headingElement).html()}</b>`);
  });

  return $('body').html() ?? '';
};

/** @see {link https://www.figma.com/design/aEhOZb9AidqozcOWF40TuA/[2023-2024]-%EC%A4%8C%EB%8B%B7%EC%BB%B4-%EC%88%98%EC%A0%95-%EA%B8%B0%ED%9A%8D?node-id=54-311&t=1xazuttbYCGeuVYG-0} */
export const setHotelsCombinedBannerImage =
  ({ category, author }: { category: string; author: string }) =>
  (html: string) => {
    if (category !== 'TRIP') return html;
    if (!author || author === 'kkday') return html;

    const $ = cheerio.load(html);
    const imgCount = $('img').length;

    let insertNextImageElementIdx = -1;

    if (imgCount >= 4 && imgCount < 10) {
      insertNextImageElementIdx = 2;
    } else if (imgCount >= 10 && imgCount < 15) {
      insertNextImageElementIdx = 5;
    } else if (imgCount >= 15) {
      insertNextImageElementIdx = 9;
    }

    const tipHtml = `
      <div style="
        background-color: #27cc9b;
        color: white;
        font-weight: 700;
        font-size: 12px;
        border-radius: 6px;
        width: 28px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1px 4px 2px 4px;
        position: absolute;
        top: -0.5rem;
        left: 1rem;
        z-index: 1;
      ">Tip!</div>
    `;

    const arrow = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5 12L10 8L5 4" stroke="#63756A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

    if (imgCount >= 1 && insertNextImageElementIdx !== -1) {
      $('table.img_block')
        .eq(insertNextImageElementIdx)
        .after(
          `<a data-idx="1" style="position: relative;" href="https://www.hotelscombined.co.kr/in?a=kan_316069_592111&url=%2Fhotels" target="_blank">
            <div>
              ${tipHtml}
            </div>
            <div style="
              width: 100%;
              margin: 24px 0px;
              display: flex;
              justify-content: center;
              background-color: #e8faf6;
              border-radius: 8px;
              padding: 18px 0px;
            ">
              <div style="font-weight: 400; font-size: 16px; line-height: 24px;">
                <p>이 쯤에서, 여행지가 더 궁금해졌다면?!</p>
                <p style="display: flex; align-items: center;"><b>호텔 예약</b>은&nbsp<b>호텔스컴바인</b>에서!&nbsp${arrow}</p>
              </div>
            </div>
          </a>`,
        );
    }

    $('p:last').after(
      `<a data-idx="2" style="position: relative" href="https://www.hotelscombined.co.kr/in?a=kan_316069_592111&url=%2Fhotels" target="_blank">
            <div>
              ${tipHtml}
            </div>
            <div style="
              width: 100%;
              margin-top: 24px;
              display: flex;
              justify-content: center;
              background-color: #e8faf6;
              border-radius: 8px;
              padding: 18px 0px;
            ">
              <div style="font-weight: 400; font-size: 16px; line-height: 24px;">
                <p>여행 계획의 시작! <b>호텔스컴바인</b>에서</p>
                <p style="display: flex; align-items: center;">전 세계&nbsp<b>최저가 숙소</b>를 비교해보세요.&nbsp${arrow}</p>
              </div>
            </div>
          </a>`,
    );

    return $('body').html() ?? html;
  };
