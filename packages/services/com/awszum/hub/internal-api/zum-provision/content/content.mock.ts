import { rest } from 'msw';
import type { Content } from './content.schema';

function createContent(idx: number): Content {
  return {
    idx,
    mediaName: '테크홀릭',
    title: '충주시 홍보맨 ‘김선태 주무관’이 강추하는 충주 당일치기 핵심 여행코스',
    subTitle: '윈도10으로 업그레이드',
    summaryContent:
      '마이크로소프트는 오는 7월 29일 차기 운영체제인 윈도10을 발표할 예정이다. 윈도7이나 8.1 사용자는 윈도10 출시 1년 안에 무료로 제공되는 업그레이드 혜택을 받을 수 있다.',
    originUrl: 'http://techholic.co.kr/archives/34664',
    thumbUrl: `https://picsum.photos/seed/${idx}/780/488`,
    hasMovie: false,
    card: false,
    associatedLinkExpose: false,
    state: 'ACTIVE',
    pcUrl: 'https://hub.zum.com/techholic/1030',
    mobileUrl: 'https://m.hub.zum.com/techholic/1030',
    createdAt: '2015-06-10 17:51:41',
    updatedAt: '2023-08-14 10:07:36',
    mainCategoryKey: 'TRIP',
    detail: {
      content:
        '<blockquote class=\"se2_quote1\">\n    <p>빼어난 풍경으로 사랑받는 충주시 당일치기 추천 관광지\n    </p>\n</blockquote>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"수주팔봉 야경 전경  \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/dd156aa4912f46eca836f2c438ccd952.jpg\">\n                <p class=\"img_cap\">수주팔봉 야경 전경 / 사진=한국관광공사 윤진호&nbsp;&nbsp;</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>국내에서 유일하게 바다와 닿지 않은 충청북도에는 바다만큼 멋진 ‘충주호’가 있습니다. 충주호와 더불어 많은 곳이 캠퍼들에게 사랑을 받으며 차박의 성지, 캠핑의 성지로 이름 붙여졌습니다.</p>\n<p><br></p>\n<p>그리고 충주 하면 가장 먼저 떠오르는 김선태 주무관이 생각나는 곳이기도 한데요. 동심이 가득한 라바랜드부터 악어봉까지 충주는 국내 인기 관광지로 급부상하고 있습니다.</p>\n<p><br></p>\n<p>충주 무학시장의 순대 골목 등도 놓쳐서는 안 되는 충주의 명소인데요. 충주를 당일치기로 여행한다면 꼭 들려야 할 곳을 소개하고자 합니다.</p>\n<blockquote class=\"se2_quote6\">\n    <p style=\"text-align: center;\" align=\"center\"><strong>&lt;충주 당일치기 핵심 여행코스&gt;</strong></p>\n    <p style=\"text-align: center;\" align=\"center\">1. 월악산 악어봉</p>\n    <p style=\"text-align: center;\" align=\"center\">2. 카페 게으른악어</p>\n    <p style=\"text-align: center;\" align=\"center\">3. 탄금대</p>\n    <p style=\"text-align: center;\" align=\"center\">4. 수주팔봉</p>\n    <p style=\"text-align: center;\" align=\"center\">5. 활옥동굴</p>\n    <p style=\"text-align: center;\" align=\"center\">6. 무학시장</p>\n    <p style=\"text-align: center;\" align=\"center\">7. 중앙탑 사적공원</p>\n</blockquote>\n<h3 class=\"sub_title\">1. 월악산 악어봉</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"악어봉 충주호 \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/6e81ce3dfe93472fad03f36b7851cf2c.jpg\">\n                <p class=\"img_cap\">악어봉 충주호 / 사진=한국관광공사 송재근</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>\n</p>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충청북도 충주시 살미면 신당리</p>\n    <p>◆ 운영시간: 24시간 운영, 연중무휴</p>\n    <p>◆ 입장료 무료</p>\n    <p>◆ 043-842-0531</p>\n    <p>◆ 기타: 주차 가능(게으른악어 카페 주차장)</p>\n</blockquote>\n<p>경사는 높으나 단시간에 오를 수 있는 월악산 악어봉은 이례적으로 비법정 탐방로가 정식 탐방로로 바뀐 곳입니다. 악어봉 정상에서 충주호를 내려다보며 악어 떼처럼 보이는 전경을 감상할 수 있는데요.</p>\n<p><br></p>\n<p>참고로 <strong>월악산 자락을 악어 섬이라 부르며 전망대를 악어봉</strong>이라 부릅니다. 악어봉은 작은 악어봉(448m)과 큰 악어봉(559m)으로 나누어지고 이곳에서 내려다보는 충주호의 경관은 장관을 이룹니다.</p>\n<h3 class=\"sub_title\">2. 카페 게으른악어</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"게으른악어 일몰 \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/673c1e496ccb4dcfa1ae764db522cf20.jpg\">\n                <p class=\"img_cap\">게으른악어 일몰 / 사진=온라인커뮤니티</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충청북도 충주시 살미면 월악로 927</p>\n    <p>◆ 운영시간: 평일 10:00 - 18:00 / 주말 09:00 - 19:00</p>\n    <p>◆ 043-724-9009</p>\n    <p>◆ 기타: 주차 가능</p>\n</blockquote>\n<p><strong>충주호와 월악산을 담은 황홀한 뷰를 조망하며 캠핑 라면</strong>을 맛볼 수 있는 장소입니다. 마치 소풍 온 듯한 기분이 드는 &lt;카페 게으른악어&gt;는 악어봉 입구에 위치해 악어봉을 들르면 반드시 거쳐야 하는 장소입니다.</p>\n<h3 class=\"sub_title\">3. 탄금대</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"탄금대 남한강 \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/b56f1501f0d246c788ad37bdf03948a5.jpg\">\n                <p class=\"img_cap\">탄금대 남한강 / 사진=게티이미지뱅크</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충청북도 충주시 탄금대안길 105</p>\n    <p>◆ 24시간 운영, 연중무휴</p>\n    <p>◆ 입장료 무료</p>\n    <p>◆ 043-848-2246</p>\n    <p>◆ 기타: 주차 가능</p>\n</blockquote>\n<p>역사적 의미가 깃든 탄금대는 산책코스로도 추천해 드리는데요. <strong>남한강과 송림으로 가득 채운 경치가 아름다운 곳</strong>입니다. 탄금대공원에서 조각작품과 소나무 군락, 꽃들을 볼 수 있는데요. 소나무 그늘 아래 피크닉 하기도 좋습니다.</p>\n<p><br></p>\n<p>일몰 명소로 소문난 곳이라 해 질 녘에 방문하면 또 다른 운치 있는 풍경도 담을 수 있겠습니다. ‘우륵’이 절벽 바위를 주거지로 가야금을 연주하며 지낸 곳으로 남한강에는 가야금 소리가 흐르는 것 같습니다.</p>\n<h3 class=\"sub_title\">4. 수주팔봉</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"수주팔봉 흔들다리 \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/d48d2ed7cc7e41b4b7eae3594ec118bd.jpg\">\n                <p class=\"img_cap\">수주팔봉 흔들다리 / 사진=게티이미지뱅크</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충청북도 충주시 살미면 토계리</p>\n    <p>◆ 24시간 운영, 연중무휴</p>\n    <p>◆ 입장료 무료</p>\n    <p>◆ 043-850-2313</p>\n    <p>◆ 기타: 주차 가능</p>\n</blockquote>\n<p>흔들다리부터 멋진 조망까지 30분이면 오를 수 있는 &lt;수주팔봉&gt;입니다. <strong>높이 493미터이며, 정상에서 강기슭과 날카로운 바위</strong>를 감상해 보세요. 멋진 산세와 송곳 바위, 중바위, 칼바위 등 날카로운 바위들과 어울리는 모습은 눈으로 보는 동양화입니다.</p>\n<p><br></p>\n<p>그리고 차박지와 차크닉 장소로 입소문 난 곳입니다. 참고로 수주팔봉 근처에는 수주팔봉야영지도 있습니다.</p>\n<h3 class=\"sub_title\">5. 활옥동굴</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"활옥동굴 카약체험 \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/5abefa99b4a04268bddc0608857b49d6.jpg\">\n                <p class=\"img_cap\">활옥동굴 카약체험 / 사진=온라인커뮤니티</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충청북도 충주시 목벌안길 26</p>\n    <p>◆ 운영시간: 09:00 - 18:00</p>\n    <p>◆ 대인 10,000원 / 학생 9,000원 / 소인 8,000원 / 보트 체험 5,000원</p>\n    <p>◆ 043-848-0503</p>\n    <p>◆ 기타: 주차 가능</p>\n</blockquote>\n<p><strong>아시아 최대 규모의 지하수직고가 있는 국내 유일 활석 광산</strong>입니다. 이 중 2.5km를 관광지로 개발해 조형물과 공연장 등으로 채웠으며, LED 조명과 신비로운 자연을 볼 수 있어 큰 인기를 끌고 있습니다.</p>\n<p><br></p>\n<p>연중 11도-15도 사이 온도를 유지하고 있어 여름철에 방문하면 더위를 잊을 수 있어 인기가 많습니다. 활옥동굴 내 <strong>암반수가 고여 호수를 이루어, 카약 체험을 할 수</strong> 있는데요.</p>\n<p><br></p>\n<p>일제강점기 때 개발한 광산의 내부는 물론 보트 체험을 할 수 있어 충주 당일치기 여행코스로 추천해 드립니다.</p>\n<h3 class=\"sub_title\">6. 무학시장</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"무학시장 거리 \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/b0a8b48aa5c544f1ba8dcb47f1fa8bd0.jpg\">\n                <p class=\"img_cap\">무학시장 거리 / 사진=cheon_rose 인스타그램</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충북 충주시 봉방동 4-58</p>\n    <p>◆ 043-848-2292</p>\n    <p>◆ 기타: 주차 가능</p>\n</blockquote>\n<p><strong>충주를 대표하는 재래시장으로 다양한 먹거리</strong>를 맛볼 수 있는 곳입니다. 순대 골목과 만두 골목에서 찐만두와 순대국밥으로 끼니를 때우기 좋습니다.</p>\n<p><br></p>\n<p>생생정보통 등 방송에 보도된 ‘대성 야채만두’집과 ‘현아네 만두’집이 유명합니다. 순대 골목에서는 ‘중원순대’집의 순대국밥과 모듬순대가 가장 유명합니다.</p>\n<h3 class=\"sub_title\">7. 중앙탑 사적공원</h3>\n<table class=\"img_block\" data-width=\"780\">\n    <tbody>\n        <tr>\n            <td><img alt=\"중앙탑 사적공원 잔디광장  \" src=\"http://static.hubzum.zumst.com/hubzum/2024/06/05/13/38c7a01aa0cd427ca37dc70bc9bb2d0a.jpg\">\n                <p class=\"img_cap\">중앙탑 사적공원 잔디광장 / 사진=한국관광공사 심현우</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<blockquote class=\"se2_quote6\">\n    <p>◆ 충청북도 충주시 탑정안길 6</p>\n    <p>◆ 상시개방 &lt;매달 2, 4번째 월요일 휴무&gt;</p>\n    <p>◆ 입장료 무료</p>\n    <p>◆ 043-842-0532</p>\n    <p>◆ 기타: 주차 가능</p>\n</blockquote>\n<p>야경이 멋진 중앙탑 사적공원은 한국관광공사에서 ‘한국관광 100선’에 선정되었습니다. 별빛 가득한 야간 관광지와 2024년 여행가는 달 발 도장 여행지로 뽑혔는데요.</p>\n<p><br></p>\n<p>국보 7층 석탑과<strong> 남한강을 감상할 수 있으며, 통일신라 시대 때 가장 큰 석탑</strong>으로 유명합니다. 넓은 잔디밭에서 야외 조각작품을 만날 수 있으며 음악분수와 야외음악당, 야외박물관 등 볼거리 즐길 거리가 가득한 곳입니다.</p>\n<p>\n</p>\n<p><br></p>\n<p>이경희 기자</p>',
      associatedLinks: [],
    },
    media: {
      idx: 35,
      name: '테크홀릭',
      key: 'techholic',
      url: 'http://techholic.co.kr/',
      socialUrl: '',
      profile: '모든 기사를 기술이라는 관점에서 바라보는 전문 미디어(Vertical Media)를 지향합니다.',
      image:
        'http://static.hubzum.zumst.com/hubzum/2015/12/28/12/c1dbda4553724d81a6896946ad263a3b.jpg',
      createdAt: '2015-06-10 16:01:40',
      updatedAt: '2023-08-14 10:09:15',
    },
    categories: [{ name: '테크', key: 'TRIP', main: true }],
    tags: ['윈도10', '이상우', '마이크로소프트', 'OS'],
  };
}

export const handlers = [
  /** @see {@link http://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_zum_provision_content_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/zum-provision\/content\b/,
    (req, res, ctx) => {
      const idxList = req.url.searchParams.get('idxList')?.split(',') ?? [];

      return res(
        ctx.json(
          idxList.reduce(
            (acc, idx) => {
              acc[idx] = createContent(Number(idx));
              return acc;
            },
            {} as Record<string, Content>,
          ),
        ),
      );
    },
  ),
];
