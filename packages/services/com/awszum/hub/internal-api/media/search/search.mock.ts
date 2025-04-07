import { rest } from 'msw';

export const handlers = [
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/media\/search\b/,
    (req, res, ctx) => {
      return res(
        ctx.json({
          mediaList: [
            {
              mediaIdx: 57,
              name: 'TOPA',
              hubUrl: 'topa',
              urlLabel: '',
              url: 'http://topa.co.kr',
              socialUrl: '',
              type: '토파 에디터 그룹',
              profile: '전·현직 교육, 문화, IT 업계 전문가의 지식 공유 그룹&nbsp;',
              image:
                'http://static.hubzum.zumst.com/hubzum/2015/12/28/11/da794b5c85784837ab09e69bf41914b4.jpg',
              supportedPlatform: 'ALL',
              providerType: 'ASSENT',
              isOpenHubzum: false,
              isOpenSearch: true,
              isOpenMediaList: true,
              isDirectLink: true,
              isStartPage: false,
              isAssociatedLinkExpose: false,
              state: 'ACTIVE',
              createdAt: '2015-06-12T13:42:36',
              updatedAt: '2015-12-28T11:58:53',
              updater: '공손이',
              providerTypeQuality: 6,
              mediaNameQuality: 2,
              contentCount: 0,
            },
            {
              mediaIdx: 548,
              name: 'JUTOPIA ',
              hubUrl: 'invest_13',
              url: 'https://blog.naver.com/gfyuna ',
              profile:
                "現) '자산배분 이야기' 재테크 칼럼니스트\n\n現) '자산배분' 투자 강연자\n\n現) 'JUTOPIA' 금융투자 블로그·유튜브 운영자\n\n\n인문학을 사랑하고 독서와 투자를 좋아하는 치과의사입니다.\n\n주업에 충실하면서 부업으로 투자하는 패시브 자산배분 투자와 경제적 자유를 주제로 다룹니다.",
              image: 'http://finance.zumst.com/writing/d0245b3e_최명진.jpg ',
              supportedPlatform: 'ALL',
              providerType: 'WRITER',
              isOpenHubzum: false,
              isOpenSearch: true,
              isOpenMediaList: true,
              isDirectLink: false,
              isStartPage: false,
              isAssociatedLinkExpose: false,
              associatedLinksJson: '',
              state: 'INACTIVE',
              createdAt: '2023-12-29T10:00:00',
              updatedAt: '2023-12-29T10:00:00',
              updater: 'Migration',
              providerTypeQuality: 4,
              mediaNameQuality: 2,
              contentCount: 0,
            },
            {
              mediaIdx: 570,
              name: '팟캐김(김유성) ',
              hubUrl: 'invest_43',
              url: 'https://brunch.co.kr/@kys401 ',
              profile:
                "現) 이데일리 기자 (국제경제/IT/금융 출입)\n\n現) 『금리는 답을 알고 있다』, 『세상에서 가장 쉬운 챗GPT』, 『금융초보자가 가장알고싶은 질문 TOP80'』 도서 저자\n\n現) 팟캐스트·포스트 '경제유캐스트' 운영자\n\n\n경제매체에서 10년 넘게 경제기자 생활을 하고 있습니다.\n\n주요 출입처로는 국제경제, IT, 금융 등이 있습니다.\n\n팟캐스트와 네이버포스트 등을 운영하고 있습니다. 경제를 보는 인사이트를 전달하고 싶습니다.\n\nhttps://www.facebook.com/kys401",
              image: 'https://finance.zumst.com/writing/a8e9b456_김유성_프로필.jpg ',
              supportedPlatform: 'ALL',
              providerType: 'WRITER',
              isOpenHubzum: false,
              isOpenSearch: true,
              isOpenMediaList: true,
              isDirectLink: false,
              isStartPage: false,
              isAssociatedLinkExpose: false,
              associatedLinksJson: '',
              state: 'INACTIVE',
              createdAt: '2023-12-29T10:00:00',
              updatedAt: '2023-12-29T10:00:00',
              updater: 'Migration',
              providerTypeQuality: 4,
              mediaNameQuality: 1,
              contentCount: 0,
            },
          ],
        }),
      );
    },
  ),
];
