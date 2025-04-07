import { rest } from 'msw';

export const handlers = [
  /** @see {@see https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_inner_search_contents_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/inner-search\/contents\b/,
    (req, res, ctx) => {
      if (!req.url.searchParams.get('keyword')) {
        return res(
          ctx.json({
            next: false,
            totalCount: 0,
            contents: [],
            media: {
              search: [],
              recommend: [],
            },
            tag: {
              type: 'RELATED',
              tags: [],
            },
          }),
        );
      }

      return res(
        ctx.json({
          next: true,
          totalCount: 954,
          contents: [
            {
              hubContentIdx: 79910,
              title: '아이<strong>허브</strong>, 매스틱검 신제품 출시',
              content:
                '[리얼푸드=육성연 기자]세계 최대 웰니스 이커머스 기업 ‘아이<strong>허브</strong>’가 위 건강 보충제 매스틱검을 출시했다. 아이<strong>허브</strong>(iHerb)는 5일 자사 PB브랜드 ‘캘리포니아 골드 뉴트리션(CGN)’이 위 건강 보충제 매스틱검을 런칭한다고 밝혔다. [아이<strong>허브</strong> 제공] CGN 메스틱검은 최근 건강기능업계에서 주목받고 있는 ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/08/05/19/8982e618f10f47e6acbaebd8d99ab9a5.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/08/05/19/956a96d3b61b4a0bb7518557fff68c68_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-08-05 19:00:03',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 5545,
              title: '소프트웨어 개발문화 Git-<strong>Hub</strong>의 Social Coding',
              content:
                '깃<strong>허브</strong>와 게릿의 가치 소프트웨어 오픈소스 공개가 가장 활발하게 이루어지는 곳은 깃<strong>허브</strong>이다. 이를 중심으로 거대한 소프트웨어 개발자 커뮤니티가 형성되었다. 애플, 구글, 삼성전자 등 글로벌 ICT 기업들은 소스코드 공개장소로 깃<strong>허브</strong>를 선택한다. 가장 최근에는 중국 검색엔진 업체 바이두가 딥러닝 ...',
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2016/09/13/14/7a161be5101d4ab1821bc514191f6727.jpg',
              category: 'IT',
              createdAt: '2016-09-13 13:54:00',
              mediaIdx: 75,
              mediaHubUrl: 'verticalplatform',
              mediaName: '버티컬플랫폼',
            },
            {
              hubContentIdx: 1557,
              title: '봉평 <strong>허브</strong>나라 농원',
              subTitle: '알록달록 허브의 향기',
              content:
                '갖추고 있어 여름 휴가지로 인기있는 평창. 피서를 위해 강원도 평창 흥정계곡을 찾았다면 근처에 위치한 <strong>허브</strong>나라 농원을 놓치지 말자. 강원도 봉평 흥정계곡에 자리한 <strong>허브</strong>나라는 1993년 개장한 관광농원으로, <strong>허브</strong>를 테마로 한 최초의 관광농원이자 대표적인 자연생태관광지다. 온실 안에서는 <strong>허브</strong>를 직...',
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2015/07/21/12/1b0bb5bf855143a3aa007bd96551f15f.jpg',
              category: 'TRIP',
              createdAt: '2015-07-22 07:45:37',
              mediaIdx: 102,
              mediaHubUrl: 'chaey',
              mediaName: '채이',
            },
            {
              hubContentIdx: 86804,
              title: '일본, 재택근무 장기화로 <strong>허브</strong>차 주목',
              content:
                '인기를 얻고 있다. 구마모토현 미나마타에서 무농약·무화학 비료로 재배한 호지차로, 호지차 밭 옆에서 자라나는 맨드라미 잎과 산초를 더한 것이 특징이다. 현지 매체들은 면역력 향상에 도움이 되는 일본식 <strong>허브</strong>티라고 소개하고 있다. 블렌드 <strong>허브</strong>티 회사인 리엔 (Lien)에서는 자연재배한 <strong>허브</strong>를 판매중이...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2022/02/27/09/b17ebd197aac462ab23b5f92bd4f65b8.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2022/02/27/09/8fdb60cd4b78443fad37a45eb97ba6be_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2022-02-27 09:15:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 81716,
              title: '아이<strong>허브</strong> 친환경 광고 리그램 이벤트 진행',
              content:
                '[리얼푸드=육성연 기자]세계 최대 웰니스 이커머스 기업 아이<strong>허브</strong>(iHerb)가 ‘러브 라이프(LOVE LIFE)’ 캠페인의 일환으로 인스타그램 리그램 이벤트를 9월 27일부터 10월 10일까지 2주간 진행한다. 이벤트 당첨자들에게는 아이<strong>허브</strong>가 러브라이프 캠페인 론칭을 기념해 특별 제작한 친환경 굿즈를 증정한다....',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/09/28/16/dc45c2fe7bbd4db6abb959126a123e34.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/09/28/16/b96af4225b1e4c7e9b9837dbb1b77e30_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-09-28 16:15:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 77098,
              title: '‘코리언 <strong>허브</strong>’ 봄나물, 서양요리 활용법',
              content:
                '셰프들이 양식에 봄나물을 접목한 메뉴를 선보이기 바쁘다. 제철을 맞은 봄나물은 각종 영양소가 풍부하면서도 싱그러운 그린빛과 향신료처럼 독특한 향을 가졌기 때문이다. 봄철 입맛 돋우기에도 좋으며, 어석어석 씹을 때마다 식감도 재밌다. 서양 요리에 <strong>허브</strong>가 있다면 ‘코리언 <strong>허브</strong>’는 봄나물이다. 봄나...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/05/11/09/4e2561f870df472fae15a67d9dca61b8.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/05/11/09/6dc5473a2ecd4279bd38db5bb2f917f2_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2021-05-11 09:00:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 74495,
              title: '아이<strong>허브</strong>, 베스트셀링 웰니스 제품 TOP5 공개',
              content:
                '[리얼푸드=육성연 기자]아이<strong>허브</strong>가 자사몰에서 가장 많이 판매된 웰니스 제품 순위를 공개했다. 세계 최대 웰니스 제품 전문 유통 기업 ‘아이<strong>허브</strong>(iHerb)’는 2020년 해외 직구족이 가장 많이 구매한 ‘아이<strong>허브</strong> 베스트셀링 웰니스 제품 TOP5’를 집계했다. 아이<strong>허브</strong>에서 판매되는 웰니스 제품은 총 3만종에 달...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/02/28/15/53c782ecfc9e4192a261cf9e73ccd9d1.jpg',
                'http://static.hubzum.zumst.com/hubzum/2021/02/28/15/5ddcec106f584af690c68436af33d220.jpg',
                'http://static.hubzum.zumst.com/hubzum/2021/02/28/15/74b2513a5241470f8b07a8c76dab2ba3.jpg',
                'http://static.hubzum.zumst.com/hubzum/2021/02/28/15/dba07fd3739040089de19374792339ae.jpg',
                'http://static.hubzum.zumst.com/hubzum/2021/02/28/15/eb66ad156cd74934a054d7996144c2c5.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/02/28/15/6cbfc81306e54898a567bc66d4bff6be_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-02-28 15:30:05',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 70423,
              title: '아이<strong>허브</strong>, 항공기까지 전세낸 이유',
              content:
                '[리얼푸드=육성연 기자]세계 최대 웰니스 전문 유통 플랫폼 ‘아이<strong>허브</strong>’가 공식 인스타그램 계정을 통해 블랙프라이데이 직구 배송 대란 현황을 공개해 눈길을 끌고 있다. 아이<strong>허브</strong> 공식 인스타그램 피드로 실시간 공개된 해당 사진은 화물칸뿐 아니라 항공기 좌석, 짐칸(오버헤드빈)까지 빌려 제품 발송을 ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2020/12/07/17/4b463eff95734335aa2a5fded2ce25e1.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2020/12/07/17/cf03dc61a5274fcebd050778da357ead_640x480c.jpg',
              category: 'LIFE',
              createdAt: '2020-12-07 17:30:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 69644,
              title: '<strong>허브</strong>향이 감미된 베트남 청양고추의 유행',
              content:
                '내에서 지속적으로 이슈화될 정도이다. 한국농수산식품유통공사(aT)에 따르면 최근 베트남에서 매운 맛이 인기를 끌면서 <strong>허브</strong>향 청양고추도 유행하고 있다. 베트남 중부 하강성에서 생산되는 이 고추는 매년 6월초~8월말까지 총 4개월간 정도만 수확할 수 있다. 수확량이 많지 않아 가격대가 높은 편이다. ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2020/11/22/16/252f7a5f3fc24ac6afa998aef1a06643.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2020/11/22/16/5f602da1e51a4c3a9458d980c12fd55e_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2020-11-22 16:00:06',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 67341,
              title: '간장에 <strong>허브</strong> 넣었더니 ‘항산화 ↑·염도 ↓’',
              content:
                '끌고 있다. 이런 가운데 ‘<strong>허브</strong> 간장’이 항산화 효과를 높이는 동시에 염도를 낮춰준다는 연구가 나왔다. 시판 간장에 레몬밤이나 로즈마리 등의 <strong>허브</strong>를 첨가해 만드는 간장이다. 한국식품영양학회지에 실린 김천대 식품영양학과 이재우 교수팀에 따르면 간장에 첨가되는 <strong>허브</strong>의 양이 증가할수록 항산화 효과...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2020/10/09/08/183999d274454e2d98f16bfaa1bdba14.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/10/09/08/cfd73d4d0f044a7bb33f9e40f1896908.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2020/10/09/08/04d5a077a74c423da3c97edcd857e25c.jpg',
              category: 'FOOD',
              createdAt: '2020-10-09 08:30:03',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 102612,
              title:
                "'메밀꽃 필 무렵' 봉평에 가면… 가을 향기 <strong>허브</strong>정원과 신비한 박쥐동굴",
              content:
                "<216> 평창 봉평면 <strong>허브</strong>나라농원과 광천선굴 평창 봉평면 효석달빛언덕 '푸른집' 주변에 해바라기가 곱게 펴 있다. 푸른집은 이효석이 평양에 살던 시절 집을 재현했다. 다음 달 8일부터 일대에서 '효석문화제'가 열린다. 지난 25일 집 앞의 메밀꽃은 아직 피지 않았다. 9월이면 강원 평창군 산골 봉평이 ...",
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/002d91c7345d4e95978902d37a29867b.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/169c26ff829d495dafd7644938e201d5.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/1b8e8e4097e1434eafdd0dab4134a80c.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/2a2695896f564d0db24e9d84cf6dec77.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/32304f8a621d4edeaacd9da4eaba8fa3.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/32314ce806ac498ea5a3072a3c47d6e6.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/34da16c1556b4dc19dbc484916b085a6.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/42ce43d181d84e6c8e33c86528f6ad3b.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/432d8ae24b094d3ca51183d1001b7d32.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/4525d672ec5d4fb392d9e2b05e66082e.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/4ada9f66a4ad414080c6889f82524a72.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/5b827a02f6484fc082bf710de30aac2e.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/6c276706cb6744dfbc305dc8cf0be719.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/75a8198af42c490fa44a84722530a875.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/80513b3a30d44b689afcee8c712f9c4c.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/8ce46e42f5fb40c9ae66152b37dadc39.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/8f59bac5fdb84ae6b4023133bd2f0602.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/9bd1d85ad5b64d939b1786421eea8318.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/9ec0d25b30ec4fffbdabe3497234fd80.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/bae6b691d7274d30805341bc4d8b3c24.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/c34dbaed6735426493043fad5568d3bb.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/d6649179771a498cb89fb37d649637bb.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/d785e70a54644048b0649e218f75ab7c.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/da98c723f26245ad831a545d70d283f5.jpg',
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/f74f8ef37e9142598c21815ea30085e2.jpg',
              ],
              card: false,
              hasMovie: true,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2023/08/31/08/d9223eb289fc4e80916b174509281bd2.jpg',
              category: 'TRIP',
              createdAt: '2023-09-03 00:00:00',
              mediaIdx: 67,
              mediaHubUrl: 'hankookilbo',
              mediaName: '한국일보',
            },
            {
              hubContentIdx: 104842,
              title:
                'AI 스타트업 전성시대 (옴니어스, 에이블리, 디자이노블, 강남언니, 로우코드, 깃<strong>허브</strong>코파일럿)',
              content:
                '마찬가지로 데이터 구조와 알고리즘 상태를 세부적으로 살펴보고, 디버깅을 진행해야하지만 각 블록이 블랙박스라면 상황을 파악하기 힘든 것이다. ｜ 마이크로소프트의 솔루션 깃<strong>허브</strong> 코파일럿. 마이크로소프트는 계획이 있었구나. 마이크로소프트도 이 분야의 가능성을 보고 서비스를 출시했다. 마이크로...',
              contentImages: [
                'https://finance.zumst.com/content/01775c82_14.png',
                'https://finance.zumst.com/content/0905cfd8_20.png',
                'https://finance.zumst.com/content/38cc9f91_23.png',
                'https://finance.zumst.com/content/45602e9a_16.png',
                'https://finance.zumst.com/content/690a65bb_15.png',
                'https://finance.zumst.com/content/738178d4_22.png',
                'https://finance.zumst.com/content/9cd28c80_24.png',
                'https://finance.zumst.com/content/a51d79f4_19.png',
                'https://finance.zumst.com/content/d4c7cb93_17.png',
                'https://finance.zumst.com/content/d519c281_18.png',
                'https://finance.zumst.com/content/ea2665c1_21.png',
              ],
              card: false,
              hasMovie: false,
              thumbUrl: 'https://finance.zumst.com/content/1be28b62_14.jpg',
              category: 'INVEST',
              createdAt: '2023-12-29 10:00:00',
              mediaIdx: 626,
              mediaHubUrl: 'invest_12',
              mediaName: '부로마블',
            },
            {
              hubContentIdx: 24001,
              title: '마실수록 건강에 좋은 <strong>허브</strong>티 5가지',
              content:
                '[리얼푸드=육성연 기자]최근 커피전문점에서는 커피 대신 <strong>허브</strong>티를 주문하는 소비자들이 많아졌습니다. 카페인 부담없이 가볍게 마시기 좋으며, 종류에 따라 다양한 향과 맛을 즐길수 있기 때문인데요. 특히 <strong>허브</strong>티의 향은 설탕이 많이 들어간 음료의 유혹을 이겨내고 <strong>허브</strong>티만의 매력에 빠지도록 만듭니다....',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2018/04/18/17/10e7dedcfd024f6681327832bc8cd858.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/04/18/17/336e318ade7b4f7a95d5570bfd944fc4.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/04/18/17/415868e43f0c491bb7a1a102d49ccf08.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/04/18/17/5e6e0b8bc492454dae056738e44ab78b.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/04/18/17/9d22a55fff9c4b9ab693380557f594a4.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2018/04/18/17/00d62941455045c98daad6a569d29902.jpg',
              category: 'FOOD',
              createdAt: '2018-04-18 17:00:11',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 84026,
              title: '‘<strong>허브</strong> 소금 · 레몬 소금’ 요즘 유행인 밑간 소금 만들기',
              content:
                '[리얼푸드=육성연 기자] 신종 코로나 바이러스 감염증(코로나 19)확산 이후 가정내 요리 횟수가 늘어나면서 건강에 좋은 향신료 사용도 늘어났습니다. 요리에 필요한 밑간 소금을 직접 만드는 경우도 많아졌는데요. <strong>허브</strong>소금이나 레몬 소금이 대표적입니다. 특히 밑간 소금을 만들 때 정제 소금 대신 천일염...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/12/03/09/b393a0bb8621412a86a6007dd8899766.jpg',
                'http://static.hubzum.zumst.com/hubzum/2021/12/03/09/cb8ce8c9885a4003a8a0d0f53b8a57f2.jpg',
                'http://static.hubzum.zumst.com/hubzum/2021/12/03/09/ebd85f9cc57d479cae1355efc1340604.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/12/03/09/3d9ba6b9f42e41f8b8cf9e52cd059b39_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2021-12-03 09:15:03',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 4555,
              title: '깃<strong>허브</strong>(GitHub), 디자이너로 살아가기',
              subTitle: '여행인지 출장인지',
              content:
                '앞서 발행한 “깃<strong>허브</strong>(GitHub), 세계 각국에서 리모트로 근무하는 회사”에 이어서 깃<strong>허브</strong> 두 번째 이야기이다. 미진: 오! 여긴 정말 디자이너가 있는 층 같아요. 드디어 제임스님이 일하는 걸 볼 수 있는 곳이군요!! 제임스: 우리 회사는 디자이너를 좋아하는 회사예요. 오피스에 art를 많이 녹여내려고 해요...',
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2016/06/17/13/92162f049e0d48b4b4901b525f0993cf.jpg',
              category: 'IT',
              createdAt: '2016-06-20 00:47:00',
              mediaIdx: 216,
              mediaHubUrl: 'banglab',
              mediaName: '백미진',
            },
            {
              hubContentIdx: 80568,
              title: '아이<strong>허브</strong>, 직구 플랫폼 중 ‘제품 신뢰도’ 1위',
              content:
                '기자]세계 최대 웰니스 이커머스 기업 아이<strong>허브</strong>(iHerb)가 직구 플랫폼 중 ‘제품 신뢰도’ 부문에서 1위를 차지했다. 아이<strong>허브</strong>와 모바일 리서치사 오픈서베이는 지난 2월 최근 6개월간 직구경험이 있는 500명을 대상으로 공동 설문조사를 진행했다. 조사 결과, 아이<strong>허브</strong> 소비자들은 ‘아이<strong>허브</strong> 이용 이유’로 ▶...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/08/25/20/36245945c0eb4a76b8daba3a343bd0fe.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/08/25/20/c4e6c4ad27804bfea20160f87518877c_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2021-08-25 20:00:08',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 80318,
              title: "아이<strong>허브</strong>, 친환경 제로 웨이스트 광고 7편 '눈길'",
              content:
                "[리얼푸드=육성연 기자]세계 최대 웰니스 이커머스 기업 아이<strong>허브</strong>(iHerb)가 제로 웨이스트 광고, ‘러브 라이프(LOVE LIFE)’ 캠페인을 선보였다. '제로 웨이스트'란 쓰레기 배출량을 최소화하는 전세계적 캠페인이다. 이달 초 아이<strong>허브</strong>가 공개한 러브 라이프 광고 영상 7편은 최근 모든 세대들이 주목하는 삶...",
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/08/18/18/3cb6af745c284223a684b1c96989b83e.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/08/18/18/0733f5314f934830b920d0acb467f615_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-08-18 18:00:08',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 95891,
              title:
                '“마그네슘·단백질·항산화순” 아이<strong>허브</strong>, ‘2022년 영양제 성장률’ 순위 공개',
              content:
                '2022년 아이<strong>허브</strong> 한국 시장 매출 성장률 TOP 3는 마그네슘, 프로틴, 항산화제 순 [리얼푸드=육성연 기자] 세계 최대 건강라이프 쇼핑몰 아이<strong>허브</strong>가 2022년 한국 시장 매출을 분석한 결과, 마그네슘, 단백질 보충제, 항산화 영양제가 매출 성장률 TOP 3 순위에 올랐다고 전했다. 3일 아이<strong>허브</strong>에 따르면, 2022...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2023/02/03/09/66dc3f6c688247948caea78ba814f053.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2023/02/03/09/d60776725d804ff39cb593b2d3159586_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2023-02-03 09:45:03',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 77534,
              title: '아이<strong>허브</strong>, 라이브 커머스 첫 진출…최대 50% 특가',
              content:
                '[리얼푸드=육성연 기자]아이<strong>허브</strong>가 11번가와 손잡고 업계 최초로 비타민 해외 직구 라이브 커머스 방송에 도전한다. 글로벌 웰니스 제품 전문 유통 기업 ‘아이<strong>허브</strong>’는 오는 27일 오전 11시부터 11번가의 라이브 커머스 플랫폼 ‘라이브11(LIVE11)’에서 비타민 해외 직구 라이브 방송을 첫 진행한다고 밝혔다....',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/05/26/18/e9cf22d273ec43b48c0bd6be4ce73633.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/05/26/18/8ba91564a66d4bf1a8288b2c933c7f36_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-05-26 18:00:04',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 75183,
              title: '아이<strong>허브</strong>, 옥션 입점 기념 인기 웰니스 제품 최대 25% 할인',
              content:
                '- 아이<strong>허브</strong>, G마켓과 G9에 이어 ‘옥션’에도 입점… 이베이코리아와 전략적 제휴 확대 - 빠른 배송, 합리적인 가격, 우수한 품질… 옥션에서도 아이<strong>허브</strong> 직구 혜택 누릴 수 있어 - 오는 15일부터 21일까지 최대 25% 할인 쿠폰 지급 프로모션 실시 [리얼푸드=육성연 기자]아이<strong>허브</strong>가 오는 15일, 옥션에 공식 입...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/03/15/18/1cee18a270a149e9901645ef0170cb06.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/03/15/18/a4ecab87628b42899dcfbd180e5c2061_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-03-15 18:30:03',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 74760,
              title:
                '뉴메드, 옴니<strong>허브</strong>와 천연물 및 한약재 교류 및 협력 위한 MOU 체결',
              content:
                '[리얼푸드=육성연 기자]천연물 연구개발기업 뉴메드는 최근 의약품용 한약재를 전문적으로 유통하는 옴니<strong>허브</strong>와 MOU를 체결했다고 밝혔다. 천연물 연구개발에서 가장 중요한 재료 수급이 용이해짐에 따라 뉴메드의 강점인 원료 개발이 더욱 탄력을 받을 전망이다. 뉴메드는 옴니<strong>허브</strong>와 MOU를 체결하며 원료...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/03/05/18/264c9419432a4d5fad9ea1a01ddf1cd0.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/03/05/18/0bb4b304480248679b10e06674412891_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-03-05 18:30:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 74043,
              title: '아이<strong>허브</strong>(iHerb), G마켓에 첫 입점',
              content:
                '- 아이<strong>허브</strong>, 국내 직구족 쇼핑 편의 위해 이베이코리아 ‘G마켓’과 전략적 제휴 - 1200여개 이상의 우수한 웰니스 제품들 선보여 - 오는 21일까지 최대 25% 할인 쿠폰 지급 프로모션 실시 [리얼푸드=육성연 기자]세계 최대 웰니스 제품 유통 기업 ‘아이<strong>허브</strong>(iHerb)’가 이베이코리아의 ‘G마켓’에 입점한다고 1...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2021/02/18/19/27f53bbe566c4460afb6063969fa341b.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2021/02/18/19/e62ad1a8fc454419b9a240982a99a17b_640x480c.jpg',
              category: 'BIZ',
              createdAt: '2021-02-18 19:30:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 67423,
              title: '[더오래]입냄새 잡아줘 치약 재료로도 쓰이는 <strong>허브</strong>',
              content:
                '세계의 특별한 식탁(35) 향기로운 <strong>허브</strong>잎을 이용한 음식은 우리 식탁에서도 낯설지 않다. 바질잎을 얹은 피자, 로즈마리를 곁들인 스테이크 등 해외에서는 <strong>허브</strong>를 이용한 다양한 음식을 즐기고 있다. <strong>허브</strong>는 독특한 향과 향미를 지닌 식물이다. 유럽, 지중해 연안, 서남아시아 지역은 라벤더, 로즈마리, 세이...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2022/08/07/03/00e52593404645fe83c15e59784904db.jpg',
                'http://static.hubzum.zumst.com/hubzum/2022/08/07/03/15e3af7c54e54678bb58b245a853ad03.jpg',
                'http://static.hubzum.zumst.com/hubzum/2022/08/07/03/7ccb99baae2441de8c2fcba817626814.jpg',
                'http://static.hubzum.zumst.com/hubzum/2022/08/07/03/bba718c24e0a4344b00539761c6058dc.jpg',
                'http://static.hubzum.zumst.com/hubzum/2022/08/07/03/e274e8a3e5a7449dbdae8fdc52335a8f.jpg',
                'http://static.hubzum.zumst.com/hubzum/2022/08/07/03/f4e8645730ad428da9ae7c415fde6f45.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2020/10/12/14/adeea8b0294a410f858c0203d23d378b.jpg',
              category: 'FOOD',
              createdAt: '2020-10-13 00:00:00',
              mediaIdx: 281,
              mediaHubUrl: 'joongang',
              mediaName: '중앙일보',
            },
            {
              hubContentIdx: 58893,
              title: '어느새 맞이한 늦봄… 생<strong>허브</strong> 몇 장으로 음식에 생기를',
              subTitle: '이용재의 세삼한 맛',
              content:
                '로즈마리, 라임 등 생<strong>허브</strong>는 늦봄, 초여름에 맞는 음식의 맛을 돋워준다. 게티이미지뱅크 지난 월요일, 올해의 첫 아이스커피를 내렸다. 그날의 낮 최고 기온은 17도, 안 마실 수 없었다. 사회적 거리 두기를 실천해 최대한 외출을 자제하는 사이에 여름이 봄을 한껏 밀어내고 있는지도 모른다. 자료를 찾아...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/02fbd1d35cc44398837f3e636d27ffa6.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/052e256fe3ef4ee39236ee8318cf66c9.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/1f8ee9faf5db457081ea48843222c5b9.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/4ca39cac66ca4e09a55a64088a996423.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/7430cf33d8f24b209aeaa9cc5c8cd272.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/98dd5a07f2a14866a395894f5a3b4504.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/d5ee3827478d4b7e860e8e046463a4c1.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/f22c3ecfbdfb4032a55e8e9f1ef8e3ce.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2020/03/30/13/3b895e7c989041c7b5564cffa30da827.jpg',
              category: 'FOOD',
              createdAt: '2020-04-01 00:00:00',
              mediaIdx: 67,
              mediaHubUrl: 'hankookilbo',
              mediaName: '한국일보',
            },
            {
              hubContentIdx: 58014,
              title: '<strong>허브</strong>와 와인 먹은 통삼겹살 구이… 육즙 ‘팡팡’',
              subTitle: '김셰프의 낭만식탁',
              content:
                '올림픽과 월드컵처럼 큰 요리대회 때에만 찾는 독일이지만 갈 때마다 현지에서 반드시 먹는 음식이 하나 있다. 바로 통삼겹 요리. 돼지고기를 사랑하는 우리 민족에게는 아주 익숙한 요리다. 독일에서는 작은 소시지나 옥수수 가루로 만든 폴렌타를 곁들여 먹는데, 다양한 <strong>허브</strong>가 뿌려진 통삼겹을 한입만 베...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2020/03/10/08/0961391882c64716b38234b7844d292d.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/10/08/2d26bb95f1694bfdb7d53e3911a03b32.jpg',
                'http://static.hubzum.zumst.com/hubzum/2020/03/10/08/36c5eb01b6984997a1c6111dbcfdc592.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2020/03/10/08/34f73009d0e540eda74e8b0fb620201a.jpg',
              category: 'FOOD',
              createdAt: '2020-03-11 00:00:00',
              mediaIdx: 457,
              mediaHubUrl: 'segyenews',
              mediaName: '세계일보',
            },
            {
              hubContentIdx: 46506,
              title: '건강 지키고 음식의 품격까지↑, <strong>허브</strong>로 만드는 천연 조미료',
              content:
                '음식의 품격을 높여주는 <strong>허브</strong> 조미료 살짝 스치기만 해도 <strong>허브</strong> 향이 손끝에 잠시 머물 정도로 <strong>허브</strong>가 주는 향의 매력은 대단하다. 단순히 향만 좋은 것이 아니라 각 <strong>허브</strong>마다 가진 고유의 영양학적 성분, 효과 등으로 음식에 사용한다면 식탁을 더욱 건강하게 만들어줄 수 있다. 눈과 코, 입까지 싱그럽게 ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/1145ee2362154e6f83646af0117debcb.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/14d767dffcc445d6a137de83d0682f16.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/2fd09254258e4bcca3f367118b7c4a38.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/38a85930e2d04714aefdcb35b3b89cbb.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/619d95849dc14d169f2fef7d2472a1c8.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/6267bd8591f547119e495fa511ff62b9.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/a8e35bbf2d97423cb626a488bfb2ecad.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/f0d30c9c23d04f0ebe008c0888070316.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/f4946dfb1ed044458221c5732a611400.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/f55ec85ba9c34213b5289565951e5577.jpg',
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/f7263751f89d453c8868851daa9dc482.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2019/06/20/12/e0332f5840f3412486ecbcfe638153be.jpg',
              category: 'FOOD',
              createdAt: '2019-06-24 00:00:00',
              mediaIdx: 279,
              mediaHubUrl: 'daily',
              mediaName: '데일리',
            },
            {
              hubContentIdx: 85797,
              title: "코로나로 부활하는 러시아 차 시장, '<strong>허브</strong>차, 과일차에 주목'",
              content:
                '추세이다. 특히 홍차는 현지인들에게 독보적인 사랑을 받고 있다. 반면 녹차와 <strong>허브</strong>차는 선호도가 홍차에 비해 크게 낮은 편이다. 차 시장은 소비패턴의 변화와 새로운 음료의 등장으로 변화와 성장을 거듭하고 있다. 제조업체들은 젊은 층의 트렌드를 겨냥해 밝은색 또는 작은 사이즈의 포장, SNS 광고에 ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2022/01/31/11/58eff9dffed24e039ee0f9be886d0ebe.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2022/01/31/11/e2a2fb53ba144fbfb4e47b1c4c989ca6_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2022-01-31 11:15:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 38295,
              title: '2가지 재료로 간단하게 ‘<strong>허브</strong> 매쉬드 포테이토’',
              content:
                '구상중이라면 식재료에 감자를 넣어보세요. 이번에 소개해 드릴 레시피는 2가지 재료만으로 간단하게 만들 수 있는 요리입니다. 브런치카페에서 자주 보던 매쉬드 포테이토에 <strong>허브</strong>를 첨가한 ‘<strong>허브</strong> 매쉬드 포테이토’ 입니다. <strong>허브</strong>맛 크림치즈 대신 플레인 크림치즈를 사용하고, 원하는 <strong>허브</strong>를 뿌려 주셔도 ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2019/02/12/10/75812f60d5a7489bb011cee001b05c2a.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2019/02/12/10/151f385a5aed4181b1ba8e1925dc70a6.jpg',
              category: 'FOOD',
              createdAt: '2019-02-12 10:00:01',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 85031,
              title: "코로나로 부활하는 러시아 차 시장, '<strong>허브</strong>차, 과일차에 주목'",
              content:
                '추세이다. 특히 홍차는 현지인들에게 독보적인 사랑을 받고 있다. 반면 녹차와 <strong>허브</strong>차는 선호도가 홍차에 비해 크게 낮은 편이다. 차 시장은 소비패턴의 변화와 새로운 음료의 등장으로 변화와 성장을 거듭하고 있다. 제조업체들은 젊은 층의 트렌드를 겨냥해 밝은색 또는 작은 사이즈의 포장, SNS 광고에 ...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2022/01/02/11/20a592ce70624512ba9a6d0b481acf04.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2022/01/02/11/8233e62e671e41deb964688c7dcd1f88_640x480c.jpg',
              category: 'FOOD',
              createdAt: '2022-01-02 11:15:03',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
            {
              hubContentIdx: 34528,
              title: '컨테이너 농장서 <strong>허브</strong> 키우는 식당 “가장 놀라운 건 향”',
              content:
                '-컨테이너 1곳서 3000명분의 요리 토핑 <strong>허브</strong> 생산 -셰프들 “빨리 자라고, 향과 맛 뛰어나 매번 놀라” 연회장 허이스 반 본터헴의 셰프 데부 디어터가 수직농장 컨테이너 앞에서 본인이 재배한 <strong>허브</strong>를 들고 있다. 벨기에 소도시 바레험에 위치한 대형 연회장 허이스 반 본터헴(Huis van Wonterghem). 100여명...',
              contentImages: [
                'http://static.hubzum.zumst.com/hubzum/2018/11/16/16/0f4d9d12ae874e4d8f1ed4b5d189304e.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/11/16/16/33a93136ae894efe8ad7c7cb28d45aa1.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/11/16/16/386d951b2d5b4ca3aeadadf45bb27eef.jpg',
                'http://static.hubzum.zumst.com/hubzum/2018/11/16/16/fb7d9f5c446e43ef8efcdfcab894a378.jpg',
              ],
              card: false,
              hasMovie: false,
              thumbUrl:
                'http://static.hubzum.zumst.com/hubzum/2018/11/16/16/a4f5dc0f6e554900b4973a80fda0b86b.jpg',
              category: 'FOOD',
              createdAt: '2018-11-16 16:00:02',
              mediaIdx: 326,
              mediaHubUrl: 'realfoods',
              mediaName: '리얼푸드',
            },
          ],
          media: {
            search: [
              {
                type: 'SEARCH',
                contentCount: 1,
                mediaIdx: 71,
                hubUrl: 'hubzum',
                name: '<strong>허브</strong>줌',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2015/12/24/16/e85c91b2cbdf412182aa1a160130f741.png',
              },
              {
                type: 'SEARCH',
                contentCount: 0,
                mediaIdx: 486,
                hubUrl: 'pfproject',
                name: '선물공장 프로젝트',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2019/04/17/16/3d26b5b415fb4ebd82f1ed8b5fd54ca4.jpg',
              },
            ],
            recommend: [
              {
                type: 'RECOMMEND',
                contentCount: 499,
                mediaIdx: 492,
                hubUrl: 'entalktalk',
                name: '연예톡톡',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2019/06/11/15/96630b13039c4c5d8647ee5d56cdaf8e.jpg',
              },
              {
                type: 'RECOMMEND',
                contentCount: 3169,
                mediaIdx: 407,
                hubUrl: 'IHQ',
                name: '잇힝ㅋ',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2018/02/12/10/81fc7b0a8b3f4c4da7f4767fe77d672b.png',
              },
              {
                type: 'RECOMMEND',
                contentCount: 0,
                mediaIdx: 596,
                hubUrl: 'invest_70',
                name: '동상이몽회관 ',
                image: 'https://finance.zumst.com/writing/a1379346_ds2m logo.jpg ',
              },
            ],
          },
          tag: {
            type: 'RELATED',
            tags: [
              '상품',
              '트랜드',
              '푸드스토리',
              '레시피',
              '국내여행',
              '허브',
              '내추럴푸드',
              '깃허브',
              '리얼키친',
              '메밀꽃',
            ],
          },
        }),
      );
    },
  ),
];
