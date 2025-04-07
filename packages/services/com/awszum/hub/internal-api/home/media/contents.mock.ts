import { rest } from 'msw';

export const handlers = [
  /** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_home_media_contents_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/home\/media\/contents\b/,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          publish: false,
          contents: [
            {
              order: 1,
              homeContentType: 'MEDIA_BOX',
              hubContentIdx: 66191,
              mediaIdx: 485,
              categoryIdx: 8,
              categoryName: '자동차',
              title: '2년 만에 집값 10배 올린<br>부동산 투자자의 비결',
              contentUrl: 'https://hub.zum.com/redfriday/66191',
              contentImg:
                'http://static.hubzum.zumst.com/hubzum/2020/09/11/13/24c825444dd9469f9af06317f78f09df.jpg',
              summaryContent:
                '만약 2년 만에 집값이 10배 정도 올랐다면 어떤 기분일까요? 우리나라의 부동산 1번지 강남에서도 일어나지 않을 일일 것 같은데요. 실제로 이런 일을 겪은 한 남성의 사연이 화제가 되고 있습니다. 미국 텍사스주에 살',
              mediaName: '레드프라이데이',
              mediaProfile: '알아두면 쓸모있는 여행, 건축, 디자인, 예술 잡학사전',
              mediaUrl: 'https://hub.zum.com/redfriday',
              mediaImg:
                'http://static.hubzum.zumst.com/hubzum/2019/03/28/18/9bd8265c2e7d4c5b8f851f9ba498c8a6.jpg',
              useMobile: true,
              hrefTarget: 'SELF',
              hasMovie: false,
            },
            {
              order: 2,
              homeContentType: 'MEDIA_NORMAL',
              hubContentIdx: 65749,
              mediaIdx: 279,
              categoryIdx: 2,
              categoryName: '컬처',
              title: '없으면 섭섭할 정도라는<br>공포영화 속 절대 법칙',
              contentUrl: 'https://hub.zum.com/daily/65749',
              contentImg:
                'http://static.hubzum.zumst.com/hubzum/2020/09/02/11/8cee3c7a28c14cca949d061817341f48.jpg',
              summaryContent:
                '뜨거운 햇빛이 내리비치는 계절 여름이다. 덥고 습한 공기는 눈살을 찌푸리게 한다. 그래서 우리는 조금이라도 시원해질 방법을 찾곤 한다. 그것은 바로 공포영화다. 온몸에 소름이 쫙 돋고 “으아아아아아아악, 깜짝이야!”',
              mediaName: '데일리',
              mediaProfile:
                '푸드, 패션&뷰티, 연애, 건강, 경제 등 신규 소식과 꿀팁을 빠르게 전합니다',
              mediaUrl: 'https://hub.zum.com/daily',
              mediaImg:
                'http://static.hubzum.zumst.com/hubzum/2017/06/27/09/1cc4cda20ea34211baa4d483a3d55cdc.jpg',
              useMobile: true,
              hrefTarget: 'SELF',
              hasMovie: false,
            },
            {
              order: 3,
              homeContentType: 'MEDIA_NORMAL',
              hubContentIdx: 66003,
              mediaIdx: 240,
              categoryIdx: 7,
              categoryName: '푸드',
              title: '평양냉면 특유의 슴슴한 맛<br>자꾸 생각나더라…',
              contentUrl: 'https://hub.zum.com/siksin/66003',
              contentImg:
                'http://static.hubzum.zumst.com/hubzum/2020/09/08/10/ba2f7e4cb22c46a8bdd5f2464f9fa55a.jpg',
              summaryContent:
                "냉면 중에서도 슴슴한 육수와 구수한 메밀면이 어우러지며 맛을 더하는 '평양냉면'을 만나보자. 50년이 넘는 역사를 이어오고 있는 곳부터 이북 출신 대표가 문을 연 곳, 한 그릇에 넉넉한 인심이 담긴 곳까지! 생활의…",
              mediaName: '식신',
              mediaProfile: '우리동네 맛집 전문가가 추천하는 진짜 맛집 어플리케이션, 식신',
              mediaUrl: 'https://hub.zum.com/siksin',
              mediaImg:
                'http://static.hubzum.zumst.com/hubzum/2016/11/23/10/aa26d0c5eca845d9ad5e23ab4037033e.jpg',
              useMobile: true,
              hrefTarget: 'SELF',
              hasMovie: false,
            },
          ],
        }),
      );
    },
  ),
];
