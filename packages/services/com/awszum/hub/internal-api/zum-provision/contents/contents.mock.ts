import { rest } from 'msw';

export const handlers = [
  /** @see {@link http://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_zum_provision_contents_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/zum-provision\/contents\b/,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          contents: [
            {
              idx: 102644,
              mediaName: '쉐어하우스',
              title: '긴급출동 소방차 길 터주는 방법',
              summaryContent:
                '화재상황에서의 골든타임은 5분 심정지 등의 응급환자의 골든타임은 4분 입니다 Q. ‘모세의 기적’을 경험하신적이 있나요? 양애경 소방관: 도봉구에서 노원구 출동을 나갈때 상계교라는',
              originUrl: 'https://sharehows.com/86176/',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/31/15/eb2e59512e1a4b9585b79b871397c487_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/sharehows/102644',
              mobileUrl: 'https://m.hub.zum.com/sharehows/102644',
              createdAt: '2023-08-31 15:56:40',
              updatedAt: '2023-08-31 16:00:01',
              mainCategoryKey: 'IT',
              detail: {
                content:
                  '<p>화재상황에서의 골든타임은 5분</p>\n<p> 심정지 등의 응급환자의 골든타임은 4분 입니다</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/7b6f8ac2f3f04807b8a0bfcbc19eb905.png" alt=""></td>\n        </tr>\n    </tbody>\n</table> <h3 class="sub_title">Q. ‘모세의 기적’을 경험하신적이 있나요?</h3>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/a2ff23cadbb94d80b4107bbc583c3fce.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>양애경 소방관: 도봉구에서 노원구 출동을 나갈때 상계교라는 다리를 건너게 되는데 항상 차량 정체가 심합니다.</p><p><br></p>\n<p>그 날도 심정지 출동이었기 때문에 조마조마한 마음으로 사이렌을 켜고 출동 중 이었는데 그 날 따라 여러분들께서 길 터주기를 잘 해주신 덕분에 환자에게 빠르게 도착 할 수 있었고, 그 환자는 응급실에 도착 해서 본인의 핸드폰 패턴을 풀 정도로 회복이 빠르게 된 경험이 있었습니다.</p> <h3 class="sub_title">길 터주는 방법 #1 일방통행 도로</h3>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/4e2e6cb04674490990f0d68e49ae4d5c.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/96bf70205c024dcf95c884892d733372.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>일반통행로에서 소방차가 뒤에 있을 경우에는 오른쪽으로 붙어서 정지해 주시면 됩니다</p> <h3 class="sub_title">길 터주는 방법 #2 교차로</h3>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/55c23aaa4d6e455493cf72c3220f2189.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/a86e1f594f694f7f9485569819957b1e.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>교차로에서 소방차량이 보이는 경우에는 교차로를 지나고 난 후, 오른쪽 가장자리로 붙여서 길을 터주시면 됩니다.</p>\n<table class="img_block" data-width="572">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/2e4e37498d814eeb908f7c32691b24d9.jpg" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>특히나 교차로에서 가장 큰 사고가 납니다. 소방차량이 보이지 않아도 사이렌소리가 들린다면 서행하시고, 주변을 살피면서 꼭! 정지해 주세요!</p> <h3 class="sub_title">길 터주는 방법 #3 일반도로</h3>\n<table class="img_block" data-width="601">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/0633f3157e8941d88ea7d052b80e9d44.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/0b246197cfec42aab65516c03236cb64.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>2차선도로일 경우에는 무조건 오른쪽 가장자리로 붙여주시면 되시구요</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/c7e8090efc864e419fcaa233d724b5e7.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/f27f1077a95842c19996a7e9272bd894.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/3086ba48883b430db6a6fe03eaba2d40.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>3차선 이상일 경우에는 소방출동차로 기준으로 같은 차로와 오른쪽 차로에 있는 차량은 오른쪽으로 비켜주시고, 왼쪽에 있는 차량은 왼쪽으로 비켜주시면 되겠습니다</p> <h3 class="sub_title">길 터주는 방법 #4 보행자 규칙</h3>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/b12422b0563b4b24b4656cd3a612abfc.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/b5707a9a691c414ea2f8606a642f3659.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>보행자 여러분도 출동차량을 발견했을 때는 신호가 켜지더라도 건너지 마시고, 잠시 멈추시고, 기다려 주세요</p> 길 터주는 방법 #5 방해행위\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/7f5be3e5288446d3b4ac324f69141a7e.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/ca975647dfe6488fb9f27bef125d43d8.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/8f2fa2e474d2454e8c9365cd3f985fef.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>소방차 출동에 방해되는 행위로는 양보를 해주지 않거나, 고의적인 끼어들기, 가로막기 등을 들수가 있습니다</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/fb2802138a3743f0af026d966769c03e.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/89ad4d8a9f7a42d8a2526e69bd155f05.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>2018년 6월&nbsp; 27일부터는 이러한 행위들에 대해서 과태료 100만원이 부과될 수 있다는 점! 꼭! 명심해 주세요!</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/0056dc29a5614ea5ad6820e9b3e9b550.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<p>예전보다 소방차 길 터주기가 잘 되고 있다고 생각은 합니다. 하지만 아직 방법을 모르거나 사고의 우려로 섣불리 비켜주지 못하는 차량을 볼 때는 안타까운 마음이 큽니다</p>\n<p>영상을 통해서 차량 길 터주기 방법을 꼭! 숙지 하시고 실천 해 주시기 바라겠습니다</p> <h3 class="sub_title">#긴급출동 소방차에게 길 터주는 방법!</h3>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/1ef819cfbbeb41ffb5b2eed0152e0224.png" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/31/15/98c4415d9cf6481688c725362106f8cf.png" alt=""></td>\n        </tr>\n    </tbody>\n</table><p> 앞으로 서울시 소방관들은 쉐어하우스와 함께 여러분들의 생활안전에 대한 다양한 노하우를 계속 전해 드리려 합니다! </p><p><br></p><p>지금까지 안전마스터 소방관 양애경이었습니다!</p><p><br></p><p>by. 마스터즈</p>',
                associatedLinks: [],
              },
              media: {
                idx: 219,
                name: '쉐어하우스',
                key: 'sharehows',
                url: 'http://sharehows.com/',
                socialUrl: 'https://www.facebook.com/ShareHows.KR',
                profile: '세상 모든 노하우(How-to)를 만들고 소개하는 쉐어하우스',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2016/06/15/13/3d0b3eb4255c47b1a894fb3b6121ee50.jpg',
                createdAt: '2016-06-15 13:35:00',
                updatedAt: '2020-11-26 14:08:02',
              },
              categories: [{ name: '테크', key: 'IT', main: true }],
              tags: ['소방관', '소방차', '긴급출동', '소방차 길 터주는 법', '상식'],
            },
            {
              idx: 102637,
              mediaName: '뉴스클립',
              title:
                '"나영석PD 연봉 40억 기사뜨자 날 부르더니.." 김태호 PD가 과거 MBC 부사장 호출받고 들었던 말',
              summaryContent:
                "김태호PD가 과거 MBC 부사장으로부터 들었던 말을 고백했다. 유튜브 '요정재형' 김태호 PD가 과거 MBC에 재직할 당시 부사장으로부터 들었던 말을 밝혀 눈길을 끌고 있다. 지난",
              originUrl: 'https://www.newskrw.com/news/articleView.html?idxno=21528',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/31/14/034295232fb142babe9efc11981fc2d7_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/newskrw/102637',
              mobileUrl: 'https://m.hub.zum.com/newskrw/102637',
              createdAt: '2023-08-31 14:20:22',
              updatedAt: '2023-08-31 14:25:00',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1" style="">\n    <p> 김태호PD가 과거 MBC 부사장으로부터 들었던 말을 고백했다.\n    </p>\n</blockquote>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="유튜브 \'요정재형\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/31/14/30d14993362e4f06ba308540d47ab6d6.jpg">\n                <p class="img_cap">유튜브 \'요정재형\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>김태호 PD가 과거 MBC에 재직할 당시 부사장으로부터 들었던 말을 밝혀 눈길을 끌고 있다.</p>\n<p>지난 27일 정재형의 유튜브 채널 \'요정재형\'에는 \'요정 캐릭터 만들어준 태호랑 간만에 떠드는 무도 이야기\'라는 제목의 영상이 게재되었다.</p>\n<table class="img_block" data-width="500">\n    <tbody>\n        <tr>\n            <td><img alt="유튜브 \'요정재형\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/31/14/c08167b881e14a35b3eb50547912a361.jpg">\n                <p class="img_cap">유튜브 \'요정재형\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>지난해 1월, 21년간 재직하던 MBC를 퇴사한 김태호는 "미리 그전 해 8월에 \'올해까지만 하고 나가겠다\'라고 이야기를 했다. 퇴사하기 5개월 전에 이야기를 한 상황이었다"라고 이야기했다.</p>\n<table class="img_block" data-width="500">\n    <tbody>\n        <tr>\n            <td><img alt="유튜브 \'요정재형\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/31/14/3e198da9539c45339d597fca73b23ac5.jpg">\n                <p class="img_cap">유튜브 \'요정재형\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>이어 "사실 뭐 나쁜 감정으로 나온 회사도 아니고 제가 지금도 제일 좋아하는 회사다"라며 "반대로 제가 MBC라는 인프라가 있으니까 \'무한도전\'도 하고, \'놀면 뭐하니?\'도 했던 거라 정리를 잘 하고 나오고 싶었다. 20년 다닌 회사인데 갑자기 하루아침에 나올 순 없지 않냐"라고 고백했다.</p>\n<table class="img_block" data-width="500">\n    <tbody>\n        <tr>\n            <td><img alt="유튜브 \'요정재형\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/31/14/05b49c56ef3f416397e967202b3e399c.jpg">\n                <p class="img_cap">유튜브 \'요정재형\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>이어 정재형은 "제의들이 많지 않았냐. 그래서 MBC를 퇴사한거냐"라고 물었다. 이에 김태호는 "2013년부터 (제의가) 들어왔다. 뭐 어떤 데는 선배님이 같이 가자해서 \'저는 못 가겠습니다. \'무한도전\'이 제일 재밌어서 이거 하겠습니다\'했다. 그랬더니 \'돈이 부족해서 그러냐\', \'1억 더 줄까\' 이러셨다"라고 고백해 놀라움을 안겼다.</p>\n<table class="img_block" data-width="500">\n    <tbody>\n        <tr>\n            <td><img alt="유튜브 \'요정재형\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/31/14/e971266142b348f4bb71cf3b5efeb423.jpg">\n                <p class="img_cap">유튜브 \'요정재형\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>\n</p>\n<p><strong></strong></p>\n<h3 class="sub_title"><strong>김태호PD "호출하더니 나PD 연봉 기사에 흔들리지 말라더라.."</strong></h3><strong></strong>\n<p><strong>\'연봉 협상 기대했는데..\'</strong></p>\n<p>그러면서 김태호는 "한번은 나영석 PD가 연봉 얼마 받았는지 기사가 난 날이었다"라며 "그날 기사를 딱 봤는데 출근하니까 갑자기 부사장실에서 전화가 오더라. \'너 이따 회사오면 잠깐 들러라\' 해서 그런 상황이면 되게 (연봉 협상 같은 걸) 상상하게 되지 않냐"라고 이야기했다.</p>\n<table class="img_block" data-width="500">\n    <tbody>\n        <tr>\n            <td><img alt="유튜브 \'요정재형\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/31/14/2112b34638dc46599b18ac93a6fe93b3.jpg">\n                <p class="img_cap">유튜브 \'요정재형\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>이어 "상암동 가는 택시가 너무 길더라. 그래서 딱 갔는데 아이스브레이킹을 하시려고 이런저런 얘기를 막 하시다가 \'기사 봤니\' 이러셔서 \'네, 봤습니다\' 하고 답을 기다리고 있었다"라며 "한참 정적이 흐르다가 \'흔들리지 마\' 딱 한 마디 하시더라. 제가 불만을 제기한 적도 없었는데"라고 멋쩍었던 상황을 털어놔 웃음을 안겼다.</p>\n<p><br></p> 키워드\n<a>#김태호PD</a>\n<a>#MBC 부사장</a>\n<a>#나영석 PD 연봉 공개</a>\n<a>#정재형</a>\n<a>#요정재형</a>\n\n최다정 기자',
                associatedLinks: [],
              },
              media: {
                idx: 597,
                name: '뉴스클립',
                key: 'newskrw',
                url: 'https://www.newskrw.com/',
                socialUrl: 'https://www.facebook.com/profile.php?id=100086610354615',
                profile:
                  '뉴스클립은 실시간으로 뉴스, 연예뉴스, 이슈 등을 빠르게 전하는 인터넷 언론사입니다. 뉴스클립으로 빠르게 소식을 받아보세요.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/03/30/11/ef989d433d38420c911b71d6f3945c91.jpg',
                createdAt: '2023-03-30 00:00:00',
                updatedAt: '2023-04-03 09:17:17',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['나영석', '요정재형', '김태호 PD', '김태호'],
            },
            {
              idx: 102607,
              mediaName: '한국경제',
              title: '"힘들면 그만두자"했는데…50대에 월 100만원 부수입 얻죠',
              summaryContent:
                '\'청소연구소\' 허영숙 매니저 한달에 15일 일하는 직장 이직 비는 시간에 청소 매니저 활동 "애들 손 안벌리고 여행도 다니죠" 저는 동화구연가로 30여년을 일했어요. 항상 일이 주',
              originUrl: 'https://www.hankyung.com/life/article/202308096460i',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/64c134f7c1a34e76aa069355ecc6cf56.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/hankyung/102607',
              mobileUrl: 'https://m.hub.zum.com/hankyung/102607',
              createdAt: '2023-09-02 00:00:00',
              updatedAt: '2023-09-02 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1"><p>\'청소연구소\' 허영숙 매니저</p> \n<p>한달에 15일 일하는 직장 이직</p> \n<p>비는 시간에 청소 매니저 활동</p> \n<p>"애들 손 안벌리고 여행도 다니죠"</p></blockquote> \n<blockquote class="se2_quote6"><p>저는 동화구연가로 30여년을 일했어요. 항상 일이 주기적으로 있는 것이 아닌데다, 남는 시간이 생겼죠. 아이들은 다 컸고, 뭔가 할 수 없을까 싶어 고민하다 청소일을 시작했어요. 사실 저는 집에서 별로 청소를 하지 않았어요.(웃음) 평생을 입으로만 먹고살아서 몸을 쓰는 일이 두렵기도 했죠. \'전업이 아니라 부업이고, 힘들면 바로 그만두자\'라는 생각으로 도전했어요. 처음에는 노하우도 없고 집마다 구조도 달라서 제시간에 청소를 못 끝내기도 일쑤였어요. 하다 보니 일이 손에 붙었죠. 내 생활하고 여행도 다니면서 월 100만원씩 추가로 벌고 있습니다. (웃음) </p></blockquote>청소일을 한다고 말하면 대부분 \'궂은일 험한 일\'을 한다고 생각한다. 과거에는 용역업체에서 담당하던 일이 최근 플랫폼들이 등장하면서 업의 변화가 이뤄졌다. 체계적인 사전 교육과 피드백을 통해 전문성을 높였고, 앱을 통해 예약이 이뤄지면서 대면 스트레스가 확 줄었다. 한 중년 여성이 청소 매니저에 도전했다. 한 달에 절반은 청소일을 통해 부업으로 추가 수익을 올린다. 시간과 금전적 여유가 생겨 다니고 싶은 여행도 마음껏 다닌다. \'청소연구소\'에서 매니저로 활동하고 있는 \'맑은햇살\'(닉네임·허영숙·55) 씨의 이야기다. \n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="779"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/2c736671290040e1b5e59a77aba7898b.jpg" alt="한국경제"><p class="img_cap">\'청소연구소\'에서 매니저로 활동하고 있는 \'맑은햇살\'(닉네임·허영숙·55) 씨</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> <strong>Q. 자기 소개 먼저 부탁드립니다.</strong> </p>\n<p>"청소연구소에서 청소 매니저로 활동하고 있는 \'맑은햇살\'(닉네임·허영숙·55)입니다. 저는 어린이 동화책 구연과 인형극 무용극 내레이션 일을 30여년간 했어요. 동화구연가 일은 주기적으로 꾸준히 일이 있는 것이 아니었어요. 한 달에 15일 정도 보통 했죠. 주간에는 교대근무가 가능한 곳에서 일하면서 남는 시간에 뭔가라도 하고 싶었어요. 편하게 일정 관리도 할 수 있고, 부수입도 얻을 수 있는 일을 찾다가 청소 매니저 일을 하게 됐습니다." </p>\n<br>\n<p> <strong>Q. 어떻게 처음 부업을 하시게 됐나요.</strong> </p>\n<p>"맞벌이 부부를 대상으로 집안일을 해주는 사람을 구하기가 힘들다는 기사를 봤어요. 집안일이라면 저도 쉽게 할 수 있을까 싶어 여러 회사를 찾았죠. 그런데 회사 이름이 인 곳이 있어 독특하다고 생각했죠. (웃음)" </p>\n<br>\n<p> <strong>Q. 평소에 청소일을 잘하시나요.</strong> </p>\n<p>"전혀요. (웃음) 집에서 사실 청소 별로 하지도 않아요. 저는 동화구연처럼 입으로 활동하는 사람이었지 몸을 쓰거나 하질 않거든요. 내 집도 청소를 못 하는데, 남의 집 청소를 잘할 수 있을까 망설였는데, 매니저를 신청하니 5시간 교육을 해주더군요. 일단 교육을 받아보자 결심했어요. \'힘들면 그만두지 뭐\'. 그렇게 가볍게 도전했죠." </p>\n<br>\n<p> <strong>Q. 교육에서는 어떤 과정을 배우나요.</strong> </p>\n<p>"저는 작년 6월 교육을 받았어요. 맨 앞자리에 앉았죠. 교육이 재밌어서 사실 시간 가는 줄 모르고 들었어요. △창틀 닦는 법 △수건 개는 법 △서비스인의 역할까지 청소가 참 재밌는 일이구나 처음 알았죠. 아무나 매니저 일을 할 수 있는 것도 아니더군요. 담당자들이 신원을 확인 후에야 일을 할 수 있어 신뢰가 더 생겼어요. 신원이 확인된 70세 이하 여성만 가능합니다. 이후 매니저 수락을 하면 도구를 보내줘요. 가방에 앞치마나 다목적 세재 등이 들어있었죠. 제가 따로 준비한 것은 고무장갑 같은 기본적인 아이템뿐이었어요. 보통은 현장에 구비되어 있는 세제나 도구를 사용하는 것이 원칙이라 초기에 장비를 살 필요는 없었습니다." </p>\n<br>\n<p> <strong>Q. 청소 매니저 일과를 소개해주세요.</strong> </p>\n<p>"보통 한 달 전에 근무 일정에 맞춰 스케줄을 짭니다. 2주 뒤의 청소일이 요청이 오면 제가 수락하는 구조입니다. 집안 평수마다 업무 시간이 달라요. 일반적으로 오전 9시부터 4시간, 오후는 2시부터 4시간 이렇게 돌아가요. 전업을 하시는 분은 하루에 2개 타임을 하시기도 하죠. 고객 대면을 하지 않아도 앱으로 요구 사항을 미리 확인 후에 청소하고 있습니다." </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/e7e97e473aa24a3fb6527ad35c7e4fbb.jpg" alt="한국경제"><p class="img_cap">청소연구소 제공</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> <strong>Q. 초기에 애로 사항이 있었나요.</strong> </p>\n<p>"4시간짜리 업무인데 업무 종료 알람이 너무 일찍 울리는 거예요. 초기 두 달은 일이 손에 익지 않아서 업무 시간이 초과했었죠. 집마다 구조도 제각각이고, 묵은 때나 청소기 등도 제각각이라서 시간을 맞추기가 어려웠어요. 교육 때 들은 것처럼 청소 동선들을 확인하되, 묵은 때(찌든 때)가 있는 곳은 미리 불려놓거나, 세탁물이 많은 경우 먼저 세탁하면서 시간을 맞춰 나가면서 노하우가 생겼어요. 빼먹은 것은 없는지 몇분 정도 해야 하는지 집마다 요청사항도 달라서 현장에서 수정하기도 했죠. 하다 보니 노하우가 생겼어요." </p>\n<br>\n<p> <strong>Q. 월 매출은 어느 정도 발생하시나요.</strong> </p>\n<p>"제 기준으로 한 달에 평균 50~70시간 일하고 있어요. 급여는 4시간 평균 5만원~5.5만원을 받고 있고, 동네마다 시급이 달라요. 집에서 좀 멀더라도, 시급이 높으면 가기도 해요. 많이 한 달에는 월 130만원까지 번 적도 있습니다. (웃음)" </p>\n<br>\n<p> <strong>Q. 초기 비용은 어느 정도 들었나요.</strong> </p>\n<p>"거의 없어요. 고객 집에 있는 세제와 도구를 쓰지만, 혹시나 현장에 없을 것을 염려해서 제가 집에서 필요했던 도구들이나 있으면 좋을 것들을 챙겨갔어요. 전월 기준 일정 시간 일하면 플랫폼에서 무료로 세제 리필용을 보내주기도 해요. 저는 교대근무를 하면서 스케줄을 잡고 있어서, 보통 집과 회사 출퇴근길에 가까운 일을 하고 있어서 유류비도 생각보다 많이 나오지 않고 부담되지 않습니다." </p>\n<br>\n<p> <strong>Q. 기억에 남는 게스트나 에피소드가 있나요.</strong> </p>\n<p>"아이를 둔 엄마셨어요. 아이들 장난감이 많아 청소해주시는 분들이 꺼린다고 했죠. 저는 동화구연 일을 하기도 하고 원체 아이들도 좋아해요. 청소일을 하면서 아이들 장난감도 전부 닦아드렸죠. 저도 아이를 3명 키웠어요. 아이를 키우면서 청소하는 게 얼마나 힘든지 잘 알죠. 그분이 참 위로를 많이 받았다고 할 때 참 내가 따뜻한 일을 한다는 생각이 들었죠." </p>\n<br>\n<p> <strong>Q. 플랫폼을 쓰시면서 이점이 무엇인가요.</strong> </p>\n<p>"앱으로 자주 알림 메시지가 떠요. △청소 팁 △깨질 위험이 있는 제품 △파손 위험 있으니 닦는 법 등 노하우와 아이디어를 알려주죠. 매니저들이 회사에 직접 채팅으로 피드백을 요구할 수도 있어요. 청소 팁을 공유도 가능하죠. 현장에서 실수했던 부분이나 △세제 사용법 △청소기 모델마다 사용법 △도어락 여는 법까지 영상 콘텐츠로도 볼 수 있어 도움이 많이 됩니다." </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="634"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/60b9b64107784bbca8d8014dcf342e64.jpg" alt="한국경제"><p class="img_cap">동화구연을 하고 있는 모습.</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> <strong>Q. 청소 매니저 하시면서 본업에 영향 있나요</strong> </p>\n<p>"몸을 쓰는 일을 하니 본업이 더욱 즐거워요. 단순 반복 일을 하다 보면 생각이 없어져요. 청소만 집중하면 되거든요. 스트레스가 풀리기도 하죠. 서로 좋은 시너지를 내고 있습니다." </p>\n<br>\n<p> <strong>Q. 퇴직자나 제2 인생을 꿈꾸는 이들에게 어떤 점을 추천하시나요.</strong> </p>\n<p>"50대가 되니 여행도 하러 가고 싶고, 뭔가를 하고 싶은데 회사에 다니면서 할 수 없는 게 많더라고요. 월에 100만~150만원을 더 벌면서 내 생활도 즐길 수 있는 일 같아요. 하다 보니 노하우도 점점 생기고, 저만 찾는 고정 고객도 생기기도 합니다." </p>\n<br>\n<p> <strong>Q. 주변인들의 반응은 어땠나요.</strong> </p>\n<p>"부업으로 청소일을 한다고 하니 아들들이 엄마 힘들지 않겠냐며 걱정을 많이 했어요. 첫 청소를 하고 나니 재밌다고 말해줬어요. 지금은 저를 많이 응원해주고 있죠. 집에서 뒹굴 거리는 것보다 훨씬 보람되고 건강해졌거든요. 제 언니와 동생도 추천으로 교육받았어요. 주위에 걸어갈 수 있는 거리만 일하고 있죠. (웃음)" </p>\n<br>\n<p> <strong>Q. 개인의 삶에 영향을 끼친 것도 있을까요.</strong> </p>\n<p>"청소일을 한다고 하면 \'궂은일 험한 일\'이라고 생각하잖아요. 젊은 친구들의 집을 가보면 꼭 내 아이 집이라는 생각이 들어요. 어지러운 집을 치워주면 퇴근 후에 얼마나 기뻐할까. 생각을 해보면 절로 힘이 나기도 해요. 청소를 통해 누군가에게 위로를 줄 수 있다는 것을 알게 돼서 기쁩니다." </p>\n<br>\n<p> <strong>Q. 마지막으로 한 말씀 부탁드립니다.</strong> </p>\n<p>"저처럼 예술 쪽에서 일을 하는 분들은 일이 없을 때 시간이 남는 경우가 많아요. 그런 시간을 어떻게 활용하나 고민이 크죠. 제 나이에 한 회사에서 전업으로 일을 하게 되면 마음껏 휴가나 여행도 갈 수 가 없죠. 플랫폼 일자리를 통해 내가 원하는 시간에 일을 할 수 있고, 바짝 벌어서 쉴 수 있으니 장점이 많습니다.(웃음)" </p>\n<br>\n<p> 평생 직 장이 사라진 시대, 여 러 직업을 가지는 \'N잡\'은 선택이 아닌 필수가 됐습니다. N잡 뿐만 아니라 NEW잡을 만들어가는 이들의 이야기를 다룬 는 매주 일요일 연재됩니다. <strong>기자페이지를 구독하면 기사를 놓치지 않고 받아볼 수 있습니다. 좋아요는 큰 힘이 됩니다.</strong> </p>\n<br>\n<p>방준식 기자 silv0000@hankyung.com</p>',
                associatedLinks: [],
              },
              media: {
                idx: 74,
                name: '한국경제',
                key: 'hankyung',
                url: 'http://www.hankyung.com/',
                socialUrl: '',
                profile: '지혜로운 사람들이 선택하는 지혜로운 신문',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2015/12/28/11/393228f0f2854cd59e5f4c2a1f1a17ed.jpg',
                createdAt: '2015-07-01 01:48:00',
                updatedAt: '2022-07-04 11:41:04',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['청소', '청소연구소', '직업', '직장', '부업', 'N잡'],
            },
            {
              idx: 102606,
              mediaName: '쉐어하우스',
              title: '미국서 화제가 된 ‘뭘 해도 잘 풀리는 사람들’ 유형',
              summaryContent:
                '위대한 성공을 거둔 이들을 직접 만나고 인터뷰하며 그들의 조언으로 자신의 마음을 단련해온 ‘루이스 하우즈’의 에 소개된 이야기를 전합니다. by. 이찌라',
              originUrl: 'https://sharehows.com/130812/',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/0fda4b2d3ad6488bbd300aa9cfe012a8.webp',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/sharehows/102606',
              mobileUrl: 'https://m.hub.zum.com/sharehows/102606',
              createdAt: '2023-09-01 00:00:00',
              updatedAt: '2023-09-01 00:00:43',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<p class="wp-block-post-excerpt__excerpt">위대한 성공을 거둔 이들을 직접 만나고 인터뷰하며 그들의 조언으로 자신의 마음을 단련해온 ‘루이스 하우즈’의 에 소개된 이야기를 전합니다. </p>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/541b3811f0184808911dba576b49f533.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/e1832b22cc554439a7c35e72671b03d2.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/79b2b55b4a19440a8d08450a67b2dcb5.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/6cabc14a9b1a4136bdd5ef1bf84a9ba6.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/5f703e5765fa4822b68184e450b2db8a.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/db3558e20615498fbf4cb14969e82f5f.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/e7606de0b3d94c958625f4c1dc162b70.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/8b467374e8b24bf7a6a53168e818755e.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/0a77a9fd99404f828885ce0aae3fde7b.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/05c0ff770fdd406ba08dc3a4258bfe9a.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/0494afe8244e44c7a37b46b1af034220.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/827b62dc0d154336a20a4ec0739970c1.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/d0a3a072fa2641f7a164509d69ef5f04.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/3b79499bb03f48ca805d96bbdde9179f.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/2ff2e3fea9124f2283a7dcf3d5f4d054.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/2865f6ce6a2e434c83427b72d0ae2982.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/2c4809e42bd245a7ba85b08b81dbe880.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/f031acb2687642239829e8a798812512.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/064bf4bcac2d424d8ba05ef548d4ffc4.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/a1b1a30bf1ae4998abd6919c36b5f3de.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/8be47cd4cd4f42c7a984386b226c1466.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/0b695df90dc846c29ac4c10e1ef286c8.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/bffc966f860c4d388ff43c196a5911d4.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/9973f1a8289e41e9bb6a4937a203ccf1.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/2ec3857837df49eea719e530a6b8986b.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/c570856838ec453c84f7e94282fa3e8f.webp" alt=""></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block img_left" data-width="0">\n    <tbody>\n        <tr>\n            <td>\n                <p><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/978dbc8b084c416c847c3714ec819ddf.webp" alt=""></p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n \n<p><br></p>\n \n<p>by. 이찌라</p>',
                associatedLinks: [],
              },
              media: {
                idx: 219,
                name: '쉐어하우스',
                key: 'sharehows',
                url: 'http://sharehows.com/',
                socialUrl: 'https://www.facebook.com/ShareHows.KR',
                profile: '세상 모든 노하우(How-to)를 만들고 소개하는 쉐어하우스',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2016/06/15/13/3d0b3eb4255c47b1a894fb3b6121ee50.jpg',
                createdAt: '2016-06-15 13:35:00',
                updatedAt: '2020-11-26 14:08:02',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['상식'],
            },
            {
              idx: 102605,
              mediaName: '책썰미',
              title: '신사임당이 OO이기 때문에 5만원권에 선정됐다고?',
              summaryContent: '더 보러 가기',
              originUrl: 'https://v.daum.net/v/YLYvtiNFtH',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/cb6ac8fe619f4d0aaa0a54fcc6cd1011_640x480c.png',
              hasMovie: false,
              card: true,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/chaegssulmi/102605',
              mobileUrl: 'https://m.hub.zum.com/chaegssulmi/102605',
              createdAt: '2023-09-01 00:00:00',
              updatedAt: '2023-09-01 00:00:43',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/d79dca2c966748f1a35929b863b0f050.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/f338989326974dff840ee385061e8f89.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/7a37be5627e648bd8131c2874e1c7769.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/40284b0f2265459fa3684d7f203acb64.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/c2b463deeb2b43c8a0b992b360f31826.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/6d6e0fd647e643b3b1859a4dd9dedb96.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/b09f5d62f7c445f19e2911a059e06325.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/8477f504f99b45bf83ae61ebbf460965.png"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/9f860f7ee01749e2a45dbb4ca50c4376.png"></td>\n        </tr>\n    </tbody>\n</table>\n<span><a href="https://bit.ly/45luP7s" target="_blank">더 보러 가기</a></span><a href="https://bit.ly/45luP7s"><span></span></a>\n<table class="img_block" data-width="560">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/dbece49eb91f423a9c72ae5a8526ee69.png"></td>\n        </tr>\n    </tbody>\n</table>',
                associatedLinks: [],
              },
              media: {
                idx: 500,
                name: '책썰미',
                key: 'chaegssulmi',
                url: 'https://content.v.kakao.com/3369/home',
                socialUrl: 'https://www.facebook.com/chaegssulmi/',
                profile: '당신에게 필요한 세상 온갖 책을 눈썰미 있게 큐레이팅합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2019/10/08/13/b8fb7aee358a47de8427110100bd8a5c.jpg',
                createdAt: '2019-10-08 00:00:00',
                updatedAt: '2022-08-30 13:32:11',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['유관순', '5만원 권', '신사임당', '상식'],
            },
            {
              idx: 102604,
              mediaName: '전원속의 내집',
              title: '때로는 주택으로, 때로는 글램핑장으로 누리는 초간편 조립형 주택',
              summaryContent:
                '옴니돔 글램핑 간편한 운반과 조립, 손쉬운 관리, 뛰어난 열효율과 내구성을 갖춰 대안형 주택으로 각광받는 무골조 구조물 옴니돔 하우스. 이런 옴니돔 하우스가 알록달록한 글램핑장으로',
              originUrl:
                'https://post.naver.com/viewer/postView.naver?volumeNo=36317110&memberNo=954004',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/fae6eb8bcc6e45caa08d9819c4cf6981.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/greenhouse4u/102604',
              mobileUrl: 'https://m.hub.zum.com/greenhouse4u/102604',
              createdAt: '2023-09-01 00:00:00',
              updatedAt: '2023-09-01 00:00:43',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class=se2_quote1>\n    <p> 옴니돔 글램핑</p>\n</blockquote>\n<div><b>간편한 운반과 조립, 손쉬운 관리, 뛰어난 열효율과 내구성을 갖춰 대안형 주택으로 각광받는 무골조 구조물 옴니돔 하우스. 이런 옴니돔 하우스가 알록달록한 글램핑장으로 탄생했다.</b></div>\n\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/fdf3b397fb0448f0acb1f47a58a5f9a6_780x519.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<h3 class="sub_title">무골조 돔형 주택으로 꿈꾸는 전원 생활과 캠핑 여행</h3>\n\n<div>경기도 양평군 서종면의 한 마을, 북한강으로 흐르는 계곡가에 ‘옴니돔 하우스’를 활용한 글램핑장이 들어섰다. 옴니돔 글램핑은 옴니돔에 텐트가 연결된 구조로 설치돼 밖으로 나가지 않고도 캠핑 사이트와 침대, TV 등이 설치된 옴니돔을 마음껏 드나들 수 있다. 또한, 여러 취사도구가 준비돼 있어 별다른 캠핑 물품을 챙기지 않아도 돼 편리하다.</div>\n<div><br></div>\n<div>글램핑장에는 연못, 정원, 수영장 등도 마련돼 다채로운 액티비티를 즐길 수도 있다. 옴니돔을 개발하고 납품하는 휴먼앤스페이스 서성진 대표는 “일반 캠핑장의 경우 시간이 흐르면 주기적으로 텐트를 교체해 줘야 하지만, 옴니돔은 반영구적인 구조물이라 유지와 관리가 간편하다”라며 “장기적으로 보면 비용을 절약할 수 있고 텐트를 폐기할 때 발생하는 쓰레기도 적게 나와 정부에서도 권장하는 분위기다”라고 전했다.</div>\n\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/43275e28b9a649478e62ddc6df11f18c_780x598.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/ccb2ef6f018b47e1b79d6e61f26cdb6c_780x1170.jpg"></div>\n                <div></div>\n                <p class="img_cap">(위, 아래)작지만 아늑하고 따스한 분위기로 꾸며진 옴니돔 내부. 돔의 둥그런 천장이 고스란히 드러난다.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/4d6ed262f3934bb192aae78c1a060745_780x1170.jpg"></div>\n                <div></div>\n                <p class="img_cap">옴니돔 글램핑장에는 투숙객들이 자유롭게 이용할 수 있는 옴니돔 찜질방이 마련돼 있다.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="multi_img_block">\n    <tbody>\n        <tr>\n            <td>\n                <table>\n                    <tbody>\n                        <tr>\n\n                            <td>\n                                <table>\n                                    <tbody>\n                                        <tr>\n                                            <td><img class="partition-image-no-height" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/0590bde9b0944a2c92b18abe0f0f6779_386x257.jpg"></td>\n                                            <td><img class="partition-image-no-height" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/bc4955dbac404d9caf05cd6198574758_387x257.jpg"></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <p class="img_cap">옴니돔 1동당 1개의 텐트와 연결돼 있어 프라이빗한 캠핑과 바비큐 시간을 즐길 수 있다. 텐트 안에는 주방과 화장실이 마련돼 있다. 옴니돔 조립 시 주방과 화장실의 배치를 원하는 대로 선택할 수 있다.</p>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/861a270725d64a5e8f16c45a101592d7_780x520.jpg">\n                <p class="img_cap">동마다 조금씩 다른 인테리어로 꾸며진 옴니돔 내부. 옴니돔과 텐트가 연결 통로로 통한다.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div>한편 옴니돔은 안전이 입증된 무골조 구조물로써 저렴한 비용, 간편한 조립 및 해체, 뛰어난 열효율 등의 장점을 갖추고 있다. 특히 일반 주택은 물론이고 리조트, 펜션, 낚시터 등 휴양 및 숙박시설과 카페 등으로 활용할 수 있어 주목받고 있다. 이에 더해 상황에 따라서는 이재민 피난처, 특수 목적의 군사시설 등으로도 쓰인다. 실제로 주말주택이나 별장으로 쓰이는 사례에 더불어 놀이방, 공부방, 해상 펜션, 박물관 전시실, 옥상 사무실, 야외공연장, 직원숙소, 심지어는 한라산 관측소 및 대피소, 남극 세종과학기지 대피소 등 다용도로 설치 및 사용되고 있다. 특히 옴니돔은 지난 2022년 정부로부터 규제 샌드박스 승인을 받아 캠핑장(야영장)에 텐트로도 사용이 가능하게 되었다.</div>\n\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/cf2e63089e1e415188511f27a3202cc5_780x520.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/5bb4892c21c14f4fb365254940786907_780x554.jpg"></div>\n                <div></div>\n                <p class="img_cap">(위, 아래) 옴니돔 9평형 모델하우스 내부. 침대를 배치하고 싱크대와 화장실, 현관을 모두 갖춰 모자람이 없다.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="multi_img_block">\n    <tbody>\n        <tr>\n            <td>\n                <table>\n                    <tbody>\n                        <tr>\n\n                            <td>\n                                <table>\n                                    <tbody>\n                                        <tr>\n                                            <td><img class="partition-image-no-height" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/a20bcec0d308410dadc8785c64a3cd99_387x581.jpg"></td>\n                                            <td><img class="partition-image-no-height" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/4393d4e94e2d446394c3230c511f6a64_387x581.jpg"></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <p class="img_cap">옴니돔 현관과 화장실에서도 돔의 구조가 그래도 드러나 개성 있는 주택이 완성됐다.</p>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<div>옴니돔은 조립식의 단단한 구조와 강도 높은 품질을 바탕으로 사용 후 재사용이 가능토록 설계되어 있어, 반영구적으로 활용이 가능하다. 생태학적 재활용 물질을 포함해 몰딩 처리된 화이버글라스, 렉산, 그 외 현대적 플라스틱들로 건조되어 외부로부터의 자체 보호력이 뛰어나다. 더불어 옴니돔의 화이버 글라스 구조물은 1급(CLASS 1) 또는 A등급(CLASS A RATING)의 강연성 판정을 받은 바 있다. 변화무쌍한 날씨와 바람에 효율적인 저항 능력을 갖춰 사계절 사용할 수 있다. 뿐만 아니라 정비 시에는 세제와 물로 간단하게 세척할 수 있어 관리도 손쉽다.</div>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/850e332fe0484a918d6c68ac5ebab367_780x492.jpg"></div>\n                <div></div>\n                <p class="img_cap">강원도 속초 해수욕장 앞에 설치된 옴니돔빌리지. 총 23동으로 9평형과 7평형 모델이 적절히 배치된 펜션 타운이다. 현관 앞에는 데크 옵션이 추가됐다. Ⓒ휴먼앤스페이스</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/1f07b8c2f6a248c8832ea2426874671a_780x488.jpg"></div>\n                <div></div>\n                <p class="img_cap">한라산 백록담에 옴니돔을 헬기로 이동하여 설치 중인 모습. 옴니돔은 알래스카, 히말라야, 한라산 등 고난도의 작업환경에서도 설치가 가능하다. Ⓒ휴먼앤스페이스</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/5c2c8848672742bfb12b76694478cffc_780x585.jpg"></div>\n                <div></div>\n                <p class="img_cap">제주도 서귀포시에 라임오렌지빌에 설치된 옴니돔. 기존 펜션 건물 옥상 위에 옴니돔을 설치하였다. Ⓒ휴먼앤스페이스</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div>기본 모델은 5평형, 6평형, 9평형으로 나뉘어져 있다. 이보다 더 큰 모델을 원할 시에는 원하는 사양대로 무한 확장 연결이 가능하다. 내부 인테리어는 화장실부터 복층공사까지 건축주의 취향대로 선택할 수 있다. 화장실과 주방을 내부에 시공하거나 외부에 부착할 수 있고, 2~3동을 연결해 확장할 때는 연결 통로 외부에 시공할 수도 있다. 옴니돔의 외관도 페인트나 스티커로 다양한 디자인 연출이 가능하다. 가격은 내부 인테리어와 운반, 조립 비용을 제외하고 옴니동 1동당 1,090만원부터 1,690만원 사이에 형성돼 있다. 간단한 조립과 관리, 게다가 특별한 전원 생활을 계획 중인 건축주라면 차세대 구조물 옴니돔 하우스에 주목해보자.</div>\n\n<h3 class="sub_title">FIT TOGETHER &amp; EXPAND</h3>\n\n\n<div>옴니돔 조립과정</div>\n<div>※ 옴니돔은 주택과 텐트, 쉘터 등 다양한 용도로 사용 가능하다.</div>\n<div>올해 3바닥, 즉 조립식 바닥(일체형) 모델이 출시되었다.</div>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/6370c3de96154443b1395f8681e12a71_780x353.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/2cbbb6f02203414f866d0560ccba131c_780x502.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div>옴니돔은 21개의 패널로 이뤄져 있다. 가벼운 무게로 인해 접근이 쉽지 않은 도서 산간 지역으로도 운반 및 조립이 용이하다. 화물 선적 시 40ft 컨테이너에 20동의 옴니돔을 적재할 수 있다. 공장으로부터 출하되는 옴니돔의 모든 패널은 드릴 작업 등을 통하여 조립 준비가 완전히 끝난 제품이다. 모든 조립에는 2~3명의 인원으로 3~4시간이 소요되며 사다리, 렌치, 스크류드라이버와 같은 간단한 장비만 있으면 된다.</div>\n<div>다만 옴니돔은 완벽한 수평 상태여야 조립이 가능하다. 사전에 목재 데크나 콘크리트 슬래브 등을 사용하여 바닥공사를 시행하지 않았을 때에는 잔존물 등의 불필요한 적치물을 제거하고 지면의 경사도가 완만한 곳을 선택해야 한다. 또한 옴니돔을 장기간 사용해야 할 경우에 연질의 방수 비닐 바닥재 시공을 권장한다. 해체는 역순으로 가장 상부에 위치한 원형 패널부터 철거한다.</div>\n<blockquote class=se2_quote1>\n    옴니돔이 보유한 각종 특허\n</blockquote>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/4f804b1a181d4ad6b218ce42d8777706_780x347.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<blockquote class=se2_quote1>\n    <div>PLAN &amp; CASES</div>\n</blockquote>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/148b97c3372e4126970182cd526f4cb8_780x1262.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div>글램핑장 : 옴니돔 글램핑</div>\n<div>경기 양평군 서종면 수대울길 148 https://naver.me/F7Im1G2a</div>\n<div>취재협조 : 휴먼앤스페이스</div>\n<div>www.omnidome.co.kr 02-537-4209</div>취재_오수현 | 사진_변종석, 브랜드 제공​',
                associatedLinks: [],
              },
              media: {
                idx: 526,
                name: '전원속의 내집',
                key: 'greenhouse4u',
                url: 'https://post.naver.com/greenhouse4u',
                socialUrl: '',
                profile: '기다려지고 읽고 싶은 실용 건축 매거진',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2021/05/20/09/c17a74ce998a4669ae047025282adc33.jpg',
                createdAt: '2021-05-17 00:00:00',
                updatedAt: '2022-04-05 11:48:19',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['글램핑장', '초간편 조립형 주택', '주택', '조립형 주택'],
            },
            {
              idx: 102603,
              mediaName: '덴 매거진',
              title: '넷플릭스 다큐 그후!',
              subTitle: '국내 반려견 복제 사업 8월부터 재개',
              summaryContent:
                '대한민국 과학계에서 황우석이라는 이름은 영욕의 상징이 됐다. 타의 추종을 불허하는 체세포 복제 기술을 개발해 전 세계의 주목을 받았으나 논문 조작, 난자 매매 등 학자로서 비도덕적',
              originUrl: 'http://www.theden.co.kr/news/articleView.html?idxno=1674',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/4ea8c86a5db24f4fb8bac5113e7c5a2b.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/denmagazine/102603',
              mobileUrl: 'https://m.hub.zum.com/denmagazine/102603',
              createdAt: '2023-09-01 00:00:00',
              updatedAt: '2023-09-01 00:00:43',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/a3d29d016978443db55afb78f3fd75f9.jpg"></td>\n        </tr>\n    </tbody>\n</table><p> 대한민국 과학계에서 황우석이라는 이름은 영욕의 상징이 됐다. 타의 추종을 불허하는 체세포 복제 기술을 개발해 전 세계의 주목을 받았으나 논문 조작, 난자 매매 등 학자로서 비도덕적인 일에 얽히면서 몰락의 길을 걸었다. 그래서 그의 이름 뒤에는 항상 ‘황우석 사태’라는 단어가 따라 붙는다. &nbsp; </p><p><br></p><p>1년여 전 황우석 박사 관련 사업을 취재하면서 그가 한국을 떠나 아랍에미리트(UAE)에 머물며 동물 복제 사업을 한다는 사실을 알고 단독 기사를 썼다. 이후 1년이 지난 올해 7월 넷플릭스가 그중 일부 내용을 다룬 다큐멘터리 &lt;킹 오브 클론: 황우석 박사의 몰락&gt;을 방영해 황우석이라는 이름이 다시 한번 사람들 사이에 오르내렸다. 그만큼 그는 시간이 많이 흘렀지만 아직도 많은 사람들의 뇌리에 강하게 남아 있다. 다큐멘터리에 나오지 않은 내용을 포함해 황우석 사태 이후 알려지지 않았던 그의 이야기를 짚어본다. &nbsp;\n</p><table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/d79ac98987e6413db433f533c9438585.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 class="sub_title">황우석의 영광</h3><p>1953년생인 황 박사는 서울대에서 수의학 박사 학위를 받고 수의학 교수로 일했다. 그가 주목을 받은 것은 세포를 똑같이 만들어내는 체세포 복제 기술이었다. 세포를 복제한다는 얘기는 극단적으로 표현하면 홍길동이라는 사람을 또 하나 만들어 낼 수 있다는 얘기다. 심지어 죽은 동물마저도 체세포 복제를 통해 똑같이 만들어 낼 수 있다. 그는 체세포 복제기술 분야에서 타의 추종을 불허할 정도로 뛰어났다. 전세계에서 단연 톱이었다.</p><p><br></p>\n<p>그는 1999년 체세포 복제 방식을 이용해 영롱이라는 이름의 복제 젖소를 탄생시켜 주목을 받았고 2005년 세계 최초로 개 복제에 성공해 세상을 놀라게 했다. 당시 그가 복제한 아프간하운드종 개는 ‘스너피’라는 이름으로 알려졌다. 그때까지 개의 체세포 복제는 다른 동물에 비해 어렵다고 알려졌기 때문에 그의 성과는 전 세계 과학계를 놀라게 하기에 충분했다.</p><p><br></p>\n<p>이후 그는 세계 최초로 인간의 체세포를 복제한 배아줄기세포 배양에 성공했다며 관련 논문을 세계적 학술지 ‘사이언스’에 발표해 다시 한 번 전세계를 깜짝 놀라게 만들었다. 사람의 체세포 복제는 그때까지 불가능의 영역으로 꼽혔기에 그의 성과는 더더욱 주목을 받았다.</p><p><br></p>\n<p>당시 황 박사가 발표한 줄기세포 배양은 여러가지 의미를 갖고 있다. 무엇보다 불가능하다고 알려진 사람의 세포 복제가 가능해지면서 줄기세포를 배양해 각종 장기 등을 복제할 수 있을 것으로 기대했다. 즉 손상된 간이나 위 등 신체 기관을 건강하게 복제해 이식하는 것이 가능할 수 있게 됐다는 뜻이다. 따라서 불치병을 앓고 있던 사람들과 장애인들에게 황 박사의 발표는 새로운 생명을 얻는 것이나 다름없는 복음이었다. 그 바람에 많은 사람들이 삶의 희망을 갖게 됐다.</p><p><br></p>\n<p>덕분에 황 박사는 훈장 및 각종 포상과 함께 정부에서 지정한 대한민국 최초의 ‘최고과학자’가 됐다. 당연히 각지에서 후원이 쏟아졌고 그가 추진한 복제 사업 또한 탄력을 받게 됐다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/f39c17e488f54a6fb0be054566d62662.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 class="sub_title">황우석의 몰락</h3><p>하지만 그의 영광은 거기까지였다. 두 가지 커다란 사건들이 터지면서 그는 나락으로 떨어졌다.</p>\n<p>먼저 불거진 것은 2005년 과학전문지 네이처에서 제기한 난자 확보를 둘러싼 의혹 보도였다. 세포를 복제하려면 난자에서 핵을 제거한 뒤 여기에 복제하려는 체세포의 핵을 넣어 난자를 활성화해야 한다. 이 작업에 필요한 난자를 당시 황 박사 밑에서 일하던 여성 연구원들에게서 기증 받았다는 문제제기였다. 자발적 기증 형식을 취했지만 황 박사 밑에서 일하는 여성 연구원들이 거절하기 힘든 입장이라는 점을 감안하면 논란이 될 만한 일이었다.</p><p><br></p>\n<p>여성의 난자 채취는 생각처럼 간단한 일이 아니다. 난자를 채취하는 과정이 워낙 힘들어 여성의 몸에 부작용을 유발할 수 있다. 가임기 여성은 한 달에 한 개씩 난소에서 난자를 배출한다. 이를 채취하려면 난소가 난자를 잘 배출하도록 열흘 이상 매일 과배란 유도제를 맞아 난소를 자극해야 한다. 이후 난자 채취용 바늘이 달린 기계 장치를 질을 거쳐 난소에 집어 넣어 강제로 난자를 끄집어 낸다.</p><p><br></p>\n<p>그만큼 난자 채취는 고통스럽고 위험한 작업이다. 이 과정에서 배에 물이 차고 호흡 곤란이 오는 등 각종 부작용을 일으킬 수 있다. 따라서 세계 각국은 여성의 몸에 심각한 부작용을 일으킬 수 있는 점을 우려해 난자를 채취해 사고 파는 행위를 법으로 금지하고 있다.</p><p><br></p>\n<p>그런데 세포 복제는 숱한 실험을 반복해야 하기 때문에 많은 분량의 난자가 필요하다. 세계 각국의 세포 복제 연구가 빠르게 진척되지 못한 것도 난자 수급과 관련 있다. 대량의 난자를 확보하는 일이 워낙 어렵기 때문이다.</p><p><br></p>\n<p>네이처 보도가 나가고 나서 그해 11월 MBC ‘PD 수첩’이 황 박사 연구팀의 내부 고발자 제보를 받아 황 박사 연구팀이 600여개의 난자를 활용한 점에 의문을 제기했다. 황 박사 연구팀은 한 개를 기증 받기도 힘든 난자를 수백 개 활용한 것이다. 그래서 난자를 돈 주고 샀다는 의혹이 제기됐다.</p>\n<p>난자 매매 의혹은 나중에 사실로 드러났다. 조사를 맡은 국가생명윤리심의위원회는 황 박사가 미즈메디 병원, 한나 산부인과, 한양대병원, 삼성제일병원 등 4개 의료기관에서 119명의 여성으로부터 총 2,200여개의 난자를 제공받았으며 이 가운데 일부는 60여명의 여성에게 금전적 대가를 주고 사들인 것이라고 밝혔다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/e6f1f9b43901487c91067afcf9adcdca.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/95b8c9813fd7445bab65566b0056a19f.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 class="sub_title">황우석이 일으킨 논란</h3><p>두 번째로 문제가 된 것은 학자로서는 절대 하면 안되는 논문 조작이다. 그는 2005년 사이언스지에 발표한 체세포를 복제해 배아 줄기세포 배양에 성공했다는 논문의 일부 실험 결과를 조작한 것이다. 사실상 성공하지 못한 것을 마치 성공한 것처럼 속인 것이다. 과학자들의 논문 검증을 거쳐 거짓이 드러나자 황 박사도 결국 논문 조작을 시인했다.</p><p><br></p>\n<p>그의 논문 조작 인정 이후 더 큰 논란이 벌어졌다. 황 박사는 논문을 조작하기는 했지만 세포 복제에 대한 독보적인 원천 기술을 갖고 있다고 주장했다. 그 바람에 사람들은 원천 기술이 확보된 만큼 줄기세포 연구를 계속해야 한다는 황우석 지지파와 부정 행위로 이뤄진 연구인 만큼 기술도 없다고 본 반대파들로 갈려서 격렬하게 대립했다. 황 박사를 후원했거나 투자한 사람들과 줄기세포 복제에 한 가닥 희망을 걸었던 난치병 환자의 가족들이 주로 그를 지지했다. 마지막 희망의 끈을 놓을 수 없었기 때문이다.</p><p><br></p>\n<p>그 바람에 황 박사의 세포 복제 기술에 대한 진위 여부로 논란이 번지며 사태가 걷잡을 수 없이 커졌다. 그러나 2006년 1월 서울대 조사위원회는 황 박사가 연구한 세포 기술의 독자성을 인정하기 어렵다며 원천 기술을 인정하지 않았다.</p><p><br></p>\n<p>이후 황 박사는 급격하게 무너졌다. &lt;사이언스&gt;는 그가 발표한 논문들을 모두 취소했고, 서울대는 그를 파면했다. 뿐만 아니라 정부는 그에게 부여한 최고과학자 지위를 박탈했다. 검찰은 사기, 횡령, 난자 불법매매에 따른 생명윤리법 위반 등의 혐의로 그를 재판에 넘겼다. 사기 혐의는 무죄 선고를 받았지만 생명윤리법 위반 등은 유죄로 인정됐다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/25e5e749394c4b5c8805607daab241cd.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/d2ca56dc36244542a4ed76e2cca3efae.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 class="sub_title">황우석의 반전</h3><p>모든 자리에서 물러난 황 박사는 사태가 가라앉기를 기다려 수암생명공학연구원과 에이치바이온을 설립해 동물 복제 사업에 나섰다. 황 박사와 두 회사는 죽은 반려견을 복제해 주는 사업으로 큰 돈을 벌었다.</p><p><br></p>\n<p>그렇게 그는 국내에서 잊혀진 이름이 됐지만 해외에서는 그렇지 않았다. 관계자들에 따르면 지금은 고인이 된 리비아의 독재자 카다피 전 국가원수가 2011년 황 박사에게 투자를 제의했다. 카다피의 아들 무아타심은 생명공학을 국가 산업으로 육성하기 위해 5,000억 원을 단계적으로 투자하겠다는 제의를 했다. 리비아는 황 박사를 데려가서 연구소를 세울 계획이었다. 그러나 독재에 항거하는 국민들의 시위로 정부가 무너지고 카다피가 죽으면서 리비아의 투자는 일부만 이뤄진 상태에서 끝까지 진행되지 못하고 무산됐다.</p><p><br></p>\n<p>해외에서는 황 박사의 세포 복제 기술을 그만큼 눈 여겨 봤다. 아닌 게 아니라 황 박사는 직접 개발한 배아줄기세포 제조법이 캐나다, 미국, 유럽 등에서 특허를 받아 인정받은 기술이라며 캐나다 특허청의 특허등록증 등을 제시하기도 했다.</p><p><br></p>\n<p>반전이 일어난 것은 2016년이었다. 당시 UAE 공주 겸 푸자이라 지역의 왕세자빈 라티파 알 막툼이 죽은 반려견의 복제를 황 박사에게 의뢰한 것이다. 황 박사가 반려견 복제에 성공하면서 중동 부호들을 비롯해 해외에서 입소문이 나기 시작했다.</p><p><br></p>\n<p>동물 복제 분야에서 독보적 실력을 인정받은 황 박사는 2018년까지 1,000마리가 넘는 반려견을 복제했다. 생명공학 기술이 앞선 미국도 2016년까지 개 복제에 성공하지 못했다.</p><p><br></p>\n<p>해외에서는 동물 복제와 관련된 그의 신화 같은 이야기들이 이어졌다. 관계자들에 따르면 황 박사는 미국이 파키스탄에서 진행한 테러단체 알카에다의 지도자 오사마 빈 라덴을 급습해 사살한 작전에서 활약한 미국 군견을 사후 복제하면서 러시아와 중국 등의 주목을 받게 됐다. 이후 911 테러 당시 생존자 구출에 나섰던 구조견과 2018년 미국 유명 가수 바브라 스트라이샌드의 반려견 등도 황 박사가 복제한 것으로 알려졌다.</p><p><br></p>\n<p>급기야 황 박사는 한때 쥬라기 공원에 대한 꿈도 꿨다. 러시아가 시베리아에서 얼어붙은 채 발견된 매머드의 복제를 황 박사에게 의뢰한 것이다. 지인들에 따르면 당시 황 박사는 영화 &lt;쥬라기공원&gt;처럼 매머드의 체세포를 복제해 암컷 코끼리에 수정하는 방법으로 매머드를 되살리려고 했다. 특히 그의 지인들은 “그가 복제한 매머드를 서울대공원에 기증해 국내에서 명예를 회복하고 싶어했다”고 전했다. 그러나 매머드의 세포 조직이 손상돼 현실화하지 못했다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/ea3bc5f78cbe47f99a24de6c37d0fed9.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 class="sub_title">낙타 뿐 아니라 종마까지 복제</h3><p>이런 과정을 눈 여겨 본 UAE가 본격적으로 황 박사에게 손을 내밀었다. 동물 복제를 국가 전략사업으로 육성할 계획을 갖고 있는 UAE는 지난해 10월 황 박사를 전격적으로 영입해 아부다비에 동물 복제를 전문으로 하는 아부다비 생명공학연구원을 열었다. 이 곳에서 황 박사는 전 세계를 상대로 반려견 복제를 비롯해 낙타와 종마 복제에 나섰다. 지인들에 따르면 연구원의 대표는 서류상 라티파 알 막툼 공주로 돼 있다.</p><p><br></p>\n<p>그렇게 황 박사는 이 땅을 떠나 터전을 중동으로 완전히 옮겼다. 사실 그는 중동 이전을 2, 3년 전부터 준비했다. 한국과 중동을 오가며 반려견 복제를 하다가 지난해 10월 정식으로 아부다비 생명공학연권의 문을 열면서 완전히 이전했다. 그가 반려견 복제와 줄기세포 연구를 위해 서울 오류동에서 운영하던 수암생명공학연구원과 에이치바이온은 모두 문을 닫았다. 두 업체에서 일하던 연구 인력의 일부도 황 박사를 따라 중동으로 떠나갔다. 현재 수암생명공학연구원 부지는 SK디앤디에서 매입해 역세권 청년 임대주택을 짓기 위해 공사 중이다.</p><p><br></p>\n<p>UAE에서 동물 복제를 국가 전략 사업으로 추진하는 이유는 반려견 복제 비용이 마리당 10만 달러를 웃돌 만큼 고가이기 때문이다. 낙타와 종마는 복제 가격이 반려견과 비교할 수 없을 만큼 비싸다.</p><p><br></p>\n<p>낙타는 중동 지역에서 군용 및 스포츠용으로도 쓰이며 가격이 수억 원대를 호가하는 귀한 재산이다. 특히 경마처럼 낙타 경주가 중요 스포츠인 중동에서는 경주용 낙타가 종마 못지 않게 비싸다. 그래서 중동 부자들은 우수한 낙타 사육과 번식에 공을 들이고 있다. 황 박사는 넷플릭스 다큐멘터리에 출연해 260억 원을 받고 경주용 낙타인 마브루칸 11마리를 복제하는 등 UAE에서 150마리 이상의 낙타를 복제했다고 밝혔다.</p><p><br></p>\n<p>주로 경주마 번식에 쓰이는 종마는 우수 품종이 수백 억원을 호가한다. 따라서 낙타와 종마 소유주들에게 복제는 또 다른 사업 기회가 될 수 있다.</p>\n<h3 class="sub_title">\n국내 반려견 복제 사업도 8월부터 재개</h3>\n<p>여기 그치지 않고 황 박사는 8월부터 국내 스타트업과 손잡고 국내에서 중단한 반려견 복제사업을 재개했다. 이를 위해 UAE의 아부다비 생명공학 연구원은 한형태 대표가 설립한 국내 스타트업 크리오와 제휴를 맺었다.</p><p><br></p>\n<p>이에 따라 크리오에서 반려견 복제를 원하는 신청자를 받아 반려견 체세포를 확보해 수십 년 보관할 수 있도록 냉동 처리한 뒤 아부다비로 보내면 황 박사가 반려견을 복제한다. 크리오는 여기 필요한 체세포 냉동 보관 시설 등을 갖추고 있다.</p><p><br></p>\n<p>크리오에 따르면 국내에서도 반려견 복제를 원하는 사람들이 많다. 특히 황 박사 쪽에 반려견 복제를 의뢰하는 사람이 많아서 지금 복제를 맡기면 1년 이상 기다려야 한다. 한 대표는 "국내에서만 강아지 200마리의 체세포를 냉동 보관하고 있다"며 "매달 10마리 이상 복제 의뢰가 들어올 정도로 대기 수요가 많다"고 말했다.</p><p><br></p>\n<p>따라서 반려견 복제는 꽤 오랜 시간이 걸린다. 복제에 착수하면 반려견을 전달받을 때까지 성장 기간이 필요해 보통 7개월 가량 걸린다. 그런데 황 박사의 경우 대기 수요가 많아서 순서를 기다리는 기간을 포함하면 실제 복제 반려견을 인도받기까지 1년 반 이상 걸릴 수 있다. 한 대표에 따르면 황 박사에게 반려견 복제를 의뢰하는 사람이 워낙 많아서 지금 맡겨도 연말에나 체세포 복제에 착수할 수 있다. 이런 수요를 감안하면 지금 복제를 맡길 경우 대기 수요를 포함해 내년 하반기 이후에나 반려견을 받을 수 있을 전망이다.</p><p><br></p>\n<p>관건은 비용이다. 반려견 복제 비용이 1마리당 1억 원을 훌쩍 넘을 것으로 보인다. 한 대표에 따르면 황 박사는 2019년 국내에서 직접 운영한 수암생명공학연구소를 통해 반려견 복제 사업을 했을 때 1마리당 부가세 별도로 8,800만 원을 받았다. 그런데 지금은 UAE로 체세포를 냉동 처리해 보내는 비용 등을 감안하면 1마리당 1억 원이 넘을 것으로 예상된다. 크리오는 아부다비 생명공학 연구원과 조율해 최종 가격을 결정할 계획이다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/b6a25da7481d4c3e9db9f67bf48964d2.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 class="sub_title">황우석 돌아오나</h3><p>황 박사가 국내에서 반려견 복제 사업을 재개한다고 해서 한국에 다시 돌아올 가능성은 없다. 지인들에 따르면 그는 UAE 생활에 만족을 표하며 귀국할 뜻이 없다는 점을 여러 번 피력했다. UAE 정부의 전폭적 지원 등을 받아 확고히 자리를 잡은 영향도 있지만 아직까지 그의 마음 속에 앙금이 남아있기 때문으로 보인다.</p><p><br></p>\n<p>그럼에도 국내의 반려견 복제 사업을 재개하는 이유는 시장 상황이 예전 같지 않기 때문이다. 한동안 황 박사는 워낙 기술력이 뛰어나 전세계에서 반려견 복제를 독점하다시피 했다.</p><p><br></p>\n<p>그런데 2021년부터 이런 상황이 조금씩 바뀌기 시작했다. 미국과 중국에서 반려견 복제 사업을 목적으로 한 기업들이 등장했다. 이 가운데 일부 업체들에 한때 황 박사의 제자였던 연구원들이 일하는 것으로 알려졌다. 특히 중국의 반려견 복제업체들은 다른 산업 분야의 중국업체들처럼 가격 경쟁력을 무기로 내세우고 있다. 사실상 황 박사의 반려견 복제 독점 시대가 끝났다는 뜻이다. 국내에서 반려견 복제 사업을 재개하는 것이나 넷플릭스에서 우호적인 내용만 다룬 것이 아닌데도 황 박사가 다큐멘터리에 출연한 것은 이런 상황과 무관치 않아 보인다.</p>\n<br>\n<p>사진 넷플릭스 &lt;킹 오브 클론 : 황우석 박사의 몰락&gt; 화면 갈무리</p>\n<blockquote class="se2_quote6">\n    <p><b>추천기사</b></p>\n    \n    <ol class="list_d_1">\n        <li><a href="https://www.theden.co.kr/news/articleView.html?idxno=1647" target="_blank">미래로 한 발 더 나아간 로봇청소기\n            </a>​</li>\n        <li><a href="https://www.theden.co.kr/news/articleView.html?idxno=1547" target="_blank">의사, 변호사··· 고소득 전문직 위협, 챗GPT가 바꾸는 세상\n            </a></li>\n        <li><a href="https://www.theden.co.kr/news/articleView.html?idxno=1706" target="_blank">싱글라이프를 위한 커뮤니티 서비스\n            </a></li>\n        \n    </ol>\n</blockquote>',
                associatedLinks: [],
              },
              media: {
                idx: 605,
                name: '덴 매거진',
                key: 'denmagazine',
                url: 'http://www.theden.co.kr/',
                socialUrl: 'https://post.naver.com/denmagazine',
                profile: '멋진 남성을 위한 라이프스타일 매거진 "Find Joy in Your Life"',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/06/16/17/12eb5d85105b4e6ab23cc7c99ae226e9.jpg',
                createdAt: '2023-07-01 00:00:00',
                updatedAt: '2023-06-30 10:22:46',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['인물', '황우석'],
            },
            {
              idx: 102602,
              mediaName: '마음건강 길',
              title: '‘피지컬 괴물’ 윤성빈이 먹는 영양제',
              subTitle: "이거 먹고 '강한 남자' 돼봐?",
              summaryContent:
                "MBC 예능프로그램 '나 혼자 산다'에서 스켈레톤 선수 윤성빈이 평소 먹는 영양제를 공개했다./ MBC 나 혼자 산다 아시아 최초 올림픽 스켈레톤 금메달리스트 윤성빈은 NETFLI",
              originUrl: 'https://www.mindgil.com/news/articleView.html?idxno=77287',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/a04695d720504d34bea59795340d2041.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/mindgil/102602',
              mobileUrl: 'https://m.hub.zum.com/mindgil/102602',
              createdAt: '2023-08-31 00:00:00',
              updatedAt: '2023-08-31 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<table class="img_block" data-width="600"> \n <tbody> \n  <tr> \n   <td><img alt="MBC 예능프로그램 \'나 혼자 산다\'에서 스켈레톤 선수 윤성빈이 평소 먹는 영양제를 공개했다./ MBC 나 혼자 산다&nbsp;" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/e919529859da4a9cbe03125ff53dbcad.jpg"><p class="img_cap">MBC 예능프로그램 \'나 혼자 산다\'에서 스켈레톤 선수 윤성빈이 평소 먹는 영양제를 공개했다./ MBC 나 혼자 산다&nbsp;</p></td></tr></tbody></table> \n<p>아시아 최초 올림픽 스켈레톤 금메달리스트 윤성빈은 NETFLIX 예능 ‘피지컬: 100’에 출연하며 글로벌 피지컬 스타로 등극했다.</p><p><br></p> \n<p>최근 윤성빈은 MBC \'나 혼자 산다\'에 출연해 아침 식사 후 각종 영양제를 챙겨먹는 모습을 공개했다. 괴물 피지컬로 알려진 윤성빈은 평소 어떤 영양제를 챙겨먹을까? 윤성빈이 복용하는 영양제의 종류와 각 효능을 다음에서 소개한다.</p> \n \n<h3 class="sub_title">◆ 멀티비타민</h3><p>세계에서 가장 일반적으로 사용되는 보충제인 멀티비타민은 여러가지 비타민과 미네랄을 포함하고 있다. 멀티비타민의 경우 성별과 연령에 따라 종류가 다양하다.</p><p><br></p> \n<p>남성의 경우 에너지 대사 원활화와 심장 건강을 위해 복용하는 경우가 많아 남성용 멀티비타민에는 비타민 B와 엽산이 풍부하다.</p><p><br></p> \n<p>여성용 멀티비타민의 경우 생리 혈액의 손실로 인해 신체에 철분을 필요로 하기에 철분이 풍부하다. 50대 이상 전용 비타민의 경우 근감소와 대사증후군 예방을 위해 비타민 B6, B12가 풍부하다.</p> \n \n<h3 class="sub_title">◆ 오메가3</h3><p>오메가3는 인체에서 스스로 합성되지 않아 반드시 외부 보충이 이루어져야 하는 필수지방산의 일종이다.</p><p><br></p> \n<p>오메가3은 DHA와 EPA로 구성되는데, DHA는 뇌에서 직접 유입되는 극소수의 영양소 중 하나로 치매 예방, 기억력 등에 긍정적인 영향을 미친다. EPA의 경우에는 혈중 콜레스테롤, 중성지방 수치 저하에 도움을 줄 수 있다.&nbsp;</p><p><br></p> \n<p>오메가3를 고를 때는 DHA와 EPA가 균형있게 함유되어 있는지 꼼꼼히 살피는 것이 좋다.</p> \n \n<h3 class="sub_title">◆ HMB</h3><p>HMB는 필수 아미노산 중 하나인 류신에서 추출된 자연 발생 화합물로 류신 대사 과정 시 체내에서 소량 생산된다. HMB의 대표적인 효능은 근육 성장을 촉진시키는 것이다.</p><p><br></p> \n<p>근육 단백질 합성에 도움을 주고 근육 섬유 성장을 촉진하여 근육을 증가하는데 도움을 준다. 그밖에도 근력 및 지구력 향상에도 도움을 주기에 고강도 운동을 주로 하는 이들에게 추천되는 영양제이다.</p> \n \n<h3 class="sub_title">◆ 마카</h3><table class="img_block" data-width="500"> \n <tbody> \n  <tr> \n   <td><img alt="사포닌이 풍부한 마카는 정력 개선에 탁월한 식물이다. / 셔터스톡" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/3510f20ca4004a6786983e9c436b7929.jpg"><p class="img_cap">사포닌이 풍부한 마카는 정력 개선에 탁월한 식물이다. / 셔터스톡</p></td></tr></tbody></table> \n<p>페루가 원산지인 마카는 해발 2500m 이상의 고산지에서 재배되는 약용식물이다. 고산지의 강한 햇볕과 산성의 토양의 혹독한 환경에서 자라나며 토양과 공기 중의 영양분을 빨아들여 자란다.</p><p><br></p> \n<p>마카에는 인삼의 주요 성분인 사포닌이 풍부하고 아미노산과 미네랄, 각종 비타민 등이 풍부하다.</p> \n<p>마카는 부추의 11배에 달하는 아연을 담고 있고, 굴의 1.5배에 달하는 아르기닌과 마늘의 26배 되는 칼슘을 함유하고 있어 실제로 식품의약안전처로부터 정자 운동성 개선에 도움을 줄 수 있다고 기능성을 인정받은 바 있을 정도로 정력 개선에 탁월하다.</p> \n \n<h3 class="sub_title">◆ 아연</h3><p>아연은 우리 몸의 세포가 정상적으로 기능하는 데 있어 필수적인 무기질이다. 남성 호르몬 합성에도 효능이 있어 중년 남성 갱년기 영양제에도 아연이 주요 성분으로 포함된다.</p><p><br></p> \n<p>다만 아연을 과다 섭취하게 될 경우 체내 면역 세포인 림프구 자극 반응이 감소해 면역 기능이 억제될 수 있다. 식품의약품안전처에서는 아연 일일 섭취량을 7~10mg으로 권고한다는 점을 유의하여야 한다. </p>\n<table class="img_block img_left" data-width="35"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/e22dfc099a5b47d9b3be9dffe2502839.gif"></td> \n  </tr> \n </tbody> \n</table>',
                associatedLinks: [],
              },
              media: {
                idx: 518,
                name: '마음건강 길',
                key: 'mindgil',
                url: 'http://www.mindgil.com',
                socialUrl: '',
                profile: '건강한 마음, 행복한 인생, 성숙한 삶의 길로 안내합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2021/02/09/16/e4e8c069a0854c33a79551525b88be4d.jpg',
                createdAt: '2021-02-09 00:00:00',
                updatedAt: '2021-10-27 10:47:27',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['스포츠선수', '윤성빈', '영양제', '선수'],
            },
            {
              idx: 102601,
              mediaName: '마음건강 길',
              title: '주방에서 ‘종이호일’ 활용법 6',
              subTitle: '[생활 소확행] "계란말이할 때 이거 써보세요"',
              summaryContent:
                '알루미늄 호일보다 몸과 환경에 더 이롭고, 전자레인지 사용도 가능한 종이호일이 주목받고 있다. 단순히 알루미늄 호일의 대용품으로 취급받기에는 종이호일의 가능성이 훨씬 더 무궁무진하',
              originUrl: 'https://www.mindgil.com/news/articleView.html?idxno=77391',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/16/9baddfca68d149348c82845b4e793c66_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/mindgil/102601',
              mobileUrl: 'https://m.hub.zum.com/mindgil/102601',
              createdAt: '2023-08-31 00:00:00',
              updatedAt: '2023-08-31 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<p>알루미늄 호일보다 몸과 환경에 더 이롭고, 전자레인지 사용도 가능한 종이호일이 주목받고 있다. 단순히 알루미늄 호일의 대용품으로 취급받기에는 종이호일의 가능성이 훨씬 더 무궁무진하다.&nbsp;</p> \n \n<h3 class="sub_title">1. 구이 요리</h3><table class="img_block" data-width="600"> \n <tbody> \n  <tr> \n   <td><img alt="생선이나 고기를 구울 때 팬에 종이호일을 깔고 구우면 훨씬 깔끔하고, 맛있게 조리할 수 있다. /셔터스톡" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/c7532a1433f64d5bb2fd8425b33b8c99.jpg"><p class="img_cap">생선이나 고기를 구울 때 팬에 종이호일을 깔고 구우면 훨씬 깔끔하고, 맛있게 조리할 수 있다. /셔터스톡</p></td></tr></tbody></table> \n<p>기름기가 많은 생선이나 고기를 굽고난 후에는 힘든 설거지와 뒷정리가 따른다. 하지만 팬에 종이호일을 깔고 구울 경우 뒷정리가 훨씬 쉬워진다. 팬에 기름기가 거의 남지 않고, 굽는 내내 기름도 사방으로 덜 튀기 때문이다.&nbsp;</p><p><br></p> \n<p>종이호일이 기름을 흡수하는 역할을 해주는 덕이다. 이로 인해 생선과 고기의 기름기까지 흡수하여 훨씬 담백한 구이 요리를 만들어준다는 장점도 있다.&nbsp;</p><p><br></p> \n<p>생선을 구울 때에는 종이호일 위에 생선을 놓고, 기름을 살짝 표면에 발라준 다음 종이호일을 접어 생선을 감싸서 굽는 방법도 있다. 이렇게 생선구이를 하면 훨씬 더 촉촉하고 담백한 맛을 즐길 수 있다.&nbsp;</p> \n<p>팬이 아니라 에어프라이어에 구울 때에도 마찬가지로 종이호일을 깔고 구우면 비슷한 효과를 기대할 수 있다.&nbsp;</p> \n \n<h3 class="sub_title">2. 도마 사용</h3><table class="img_block" data-width="500"> \n <tbody> \n  <tr> \n   <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/eac88f5aba48489b9841a5bbaef36a99.jpg"><p class="img_cap">셔터스톡</p></td></tr></tbody></table> \n<p>도마를 사용할 때, 종이호일을 깔고 사용하면 훨씬 깔끔하고 뒷정리가 편리하다. 특히 생선이나 김치처럼 냄새가 남을 수 있는 식재료를 도마 위에서 손질할 때 이 방법을 사용하면 도마를 더 오랜 시간 위생적으로 사용할 수 있게 된다.</p><p><br></p> \n<p>기름기 많은 식재료를 자를 때에도 마찬가지의 방법을 사용하면 훨씬 더 깔끔하다.&nbsp;</p> \n \n<h3 class="sub_title">3. 계란말이</h3><p>계란말이는 흔한 반찬이지만, 만들기는 꽤 까다로운 음식이다. 계란말이를 말 때, 모양이 흐트러져 고민이라면 종이호일을 깔고 조리해보는 것을 추천한다.&nbsp;</p><p><br></p> \n<p>팬 위에 종이호일을 깔고 그 위에 기름을 두르고, 계란물을 부어가면서 계란말이를 만드는 방법은 초보자들 사이에서 유용하다.&nbsp;</p><p><br></p> \n<p>말 때마다 종이호일 위쪽을 살짝 들어주면서 말면 훨씬 더 쉽고 예쁘게 모양을 만들 수 있기 때문이다.&nbsp;</p> \n \n<h3 class="sub_title">4. 누룽지</h3><p>종이호일만 있으면 집에서 누룽지도 아주 간단하게 만들 수 있다. 종이호일 위에 찬밥을 얇게 펴고, 전자레인지에 5분을 돌려주고, 상태를 확인해가면서 앞뒤로 조금씩 더 바삭하게 익혀주면 완성이다.&nbsp;</p> \n \n<h3 class="sub_title">5. 찜 요리</h3><p>찜기 위에 종이호일을 깔고 그 위에 식재료를 놓고 찌면, 꺼낼 때 종이호일 자체를 들어내면 되니까 훨씬 편리하다.&nbsp;</p><p><br></p> \n<p>또한, 음식이 찜기에 붙을 걱정도 없다. 조리 후에 찜기에 잘 붙어 꺼내다가 터지기 쉬운 만두는 종이호일을 이용해서 찌는 것이 특히 좋다.&nbsp;</p> \n \n<h3 class="sub_title">6. 냉동보관</h3><p>버터나 빵, 생선, 고기 등 한 번씩 꺼내 먹을 양으로 소분하여 그 사이사이에 종이호일을 껴 넣으면 냉동 보관을 해도 서로 붙지 않아 꺼내먹기 쉬워진다.&nbsp; </p>\n<table class="img_block img_left" data-width="35"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/30/16/ed92acd50ce340d29b0adbf56e4e18ce.gif"></td> \n  </tr> \n </tbody> \n</table><br><ul> \n</ul>',
                associatedLinks: [],
              },
              media: {
                idx: 518,
                name: '마음건강 길',
                key: 'mindgil',
                url: 'http://www.mindgil.com',
                socialUrl: '',
                profile: '건강한 마음, 행복한 인생, 성숙한 삶의 길로 안내합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2021/02/09/16/e4e8c069a0854c33a79551525b88be4d.jpg',
                createdAt: '2021-02-09 00:00:00',
                updatedAt: '2021-10-27 10:47:27',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['부엌', '생활정보', '종이호일', '종이호일 활용법'],
            },
            {
              idx: 102595,
              mediaName: '뉴스클립',
              title:
                '"압구정 빵집에서 너무 잘생긴 사람이.. " \'하트시그널4\' PD가 밝힌 신민규 캐스팅 과정',
              summaryContent:
                "'하트시그널4' 박철환 PD 인터뷰 공개 신민규 인스타그램/채널A '하트시그널 시즌4' 채널A '하트시그널 시즌4'가 뜨거운 성황리 속에서 종영됐다. 지난 28일 서울 마포구 상암",
              originUrl: 'https://www.newskrw.com/news/articleView.html?idxno=21427',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/30/15/4d044975dcbe444db7c9d24093bdf765_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/newskrw/102595',
              mobileUrl: 'https://m.hub.zum.com/newskrw/102595',
              createdAt: '2023-08-31 00:00:00',
              updatedAt: '2023-08-31 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1" style="">\n    <p>\'하트시그널4\' 박철환 PD 인터뷰 공개\n    </p>\n</blockquote>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="신민규 인스타그램/채널A \'하트시그널 시즌4\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/15/2437cd54966c4dc4942ff3f883565e3f.jpg">\n                <p class="img_cap">신민규 인스타그램/채널A \'하트시그널 시즌4\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>채널A \'하트시그널 시즌4\'가 뜨거운 성황리 속에서 종영됐다.</p>\n<p>지난 28일 서울 마포구 상암동 디지털미디어센터에서 \'하트시그널 시즌4\'의 박철환 PD의 인터뷰가 진행됐다. 이날 박철환 PD는 \'하트시그널 시즌4\'의 최고 인기남이었던 신민규를 캐스팅한 과정을 밝혀 이목을 집중받았다.</p>\n<h3 class="sub_title">박철환 PD "강남 압구정 빵집에서 신민규 캐스팅했다"</h3>\n<table class="img_block" data-width="597">\n    <tbody>\n        <tr>\n            <td><img alt="채널A \'하트시그널 시즌4\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/15/0933e7df43da4531a819fe4bc721ead5.jpg">\n                <p class="img_cap">채널A \'하트시그널 시즌4\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>박 PD는 "민규 씨는 강남 압구정에 저희가 가서 멋진 분들을 찾다가 한 빵집을 지나가다가 봤다. 창문 밖에서 봤는데 너무 잘생긴 거다"라고 회상했다. 이어 "딱 봐도 소속사가 있을 거라고 생각했다. 연예인 하고 있을 거 같은데 하고 일단 발길을 돌렸다"라며 "돌려서 이제 가다가 PD님들이랑 너무 괜찮은데 어떡할까 하다가 가서 말이라도 걸어보자고 했다"라고 밝혔다.</p>\n<p><br></p>\n<p>박철환 PD는 "말이라도 걸어보자고 했던 이유가 뭐냐면 그 앞에 앉아계시는 친구분이 있었다. 친구분 두 사람이랑 앉아서 얘기를 하고 있었는데 그 얘기를 듣는 표정이 너무 좋았다"라며 "제가 생각할 때 이 친구들의 얘기를 그렇게 재밌게 느끼는 거 같지 않는데 되게 성의 있게 듣는 느낌? 이게 정말 배려하고 있는 거다. 그 느낌이 너무 좋아서, 잘생기기도 했고"라고 설명했다.</p>\n<table class="img_block" data-width="580">\n    <tbody>\n        <tr>\n            <td><img alt="신민규 인스타그램" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/15/ecd24a6fe4e4495ca49d49b6e10465c8.jpg">\n                <p class="img_cap">신민규 인스타그램</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>그러면서 "그래서 갔는데 딱 나가기 직전인 거다. 그래서 붙잡았다"라며 "놀랍게도 그냥 직장 생활하시는 거다. 같이 있는 친구분들에게 폐가 될 수 있으니까 \'명함만 드리고 갈게요\'라고 해서 명함을 받아가지고 제가 연락을 해서 모시게 된 케이스다"라고 전했다.</p>\n<p><br></p>\n<p>박철환 PD는 신민규의 매력에 대해서도 말했다. 그는 "매력이라는 건 일단은 배려심이다. 딱 있을 때 상대가 뭘 원할지 어떻게 하면 편할지에 대한 생각을 먼저 한다"라며 "그래서 여자 출연자 분들이 같이 있으면 되게 부드럽고 편안한&nbsp;공기가 생긴다는 얘기를 많이 하셨다"라고 했다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="채널A \'하트시그널 시즌4\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/15/6e1ac7d3b2e04b5395a1609d2f675cf8.jpg">\n                <p class="img_cap">채널A \'하트시그널 시즌4\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>또한 "그리고 은근히 웃기다. 이게 막 (이)후신 씨는 조준형 유머를 한다면, 민규 씨는 약간 리시버 같은? 리액션 같이 툭 던지는 건데 그 말이 웃기다"라며 "그래서 진중한 듯하면서 한 번씩 그렇게 분위기를 풀어주고 하는 게 여자 출연자부들이 데이트할 때 되게 의외의 재미를 느끼고 같이 있을 때 무드가 되게 좋다고 하더라"라고 말했다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="채널A \'하트시그널 시즌4\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/15/68e2c7fef85d42549a5d99185d83fe7c.jpg">\n                <p class="img_cap">채널A \'하트시그널 시즌4\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>박철환 PD는 다른 출연자들의 섭외 과정도 전했다. 그는 인턴 의사인 유지원을 섭외한 것에 대해 "마라톤 사진 한 장이 너무 잘생겨서 추적을 했다"라며 "의사 인턴 분이셨고 인터뷰를 했는데 서로 고민이 많았다. 본인은 매번 연애할 때마다 감정에 대한 고민이 많았는데 진짜 감정을 한번 되게 진하게 경험해보고 싶다, 내가 한번 감당을 해보겠다 그래서 끝까지 고민하다가 막판에 서로 결심해서 출연이 성사됐다"라고 밝혔다.</p>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img alt="채널A \'하트시그널 시즌4\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/30/15/ddbbc94adbf445309fac946e53165f4d.jpg">\n                <p class="img_cap">채널A \'하트시그널 시즌4\'</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p> </p>\n<h3 class="sub_title">\'하트시그널 시즌4\', 25일 종영</h3>\n<p>한편 채널A \'하트시그널 시즌4\'는 지난 25일 종영했다. 한겨레와 김지영, 신민규와 유이수가 서로를 뽑으며 최종 커플로 매칭됐다.</p>\n<p><br></p>김지선 기자',
                associatedLinks: [],
              },
              media: {
                idx: 597,
                name: '뉴스클립',
                key: 'newskrw',
                url: 'https://www.newskrw.com/',
                socialUrl: 'https://www.facebook.com/profile.php?id=100086610354615',
                profile:
                  '뉴스클립은 실시간으로 뉴스, 연예뉴스, 이슈 등을 빠르게 전하는 인터넷 언론사입니다. 뉴스클립으로 빠르게 소식을 받아보세요.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/03/30/11/ef989d433d38420c911b71d6f3945c91.jpg',
                createdAt: '2023-03-30 00:00:00',
                updatedAt: '2023-04-03 09:17:17',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: [
                '핫시4',
                '인물',
                '하트시그널 시즌4',
                '신민규',
                '출연자',
                '신민규 섭외 비하인드',
              ],
            },
            {
              idx: 102574,
              mediaName: 'PHM ZINE',
              title: '좁은 집을 더 넓게 쓴 50m2 (약15평) 타이완 아파트의 공간 활용법',
              summaryContent:
                '타이완의 수도 타이페이에 위치한 50m2 (약15평) 아파트는 내 지인의 집과 많이 닮아있다. 자신만의 첫 보금자리를 찾아 헤매던 선배는 첫 시작부터 넓게 시작하는 경우는 거의 없',
              originUrl: 'https://phmkorea.com/20025/',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/29/16/1254b941d54a4d1db0569a11a866e0b3_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/phmzine/102574',
              mobileUrl: 'https://m.hub.zum.com/phmzine/102574',
              createdAt: '2023-08-30 00:00:00',
              updatedAt: '2023-08-30 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<ul></ul> \n<p>타이완의 수도 타이페이에 위치한 50m<sup>2</sup>&nbsp; (약15평) 아파트는 내 지인의 집과 많이 닮아있다.&nbsp;자신만의 첫 보금자리를 찾아 헤매던 선배는 첫 시작부터 넓게 시작하는 경우는 거의 없다는 현실을 마주하며 힘들어했다.</p><p><br></p> \n<p>그러던 중 마침내 자신의 마음에 꼭 드는 위치의 소형 아파트를 찾던 그 날, 어떻게 하면 작은 집을 깔끔하고 넓게 활용할 수 있을지 연구하기 시작했다. 바로 여기 타이페이 아파트처럼 말이다.</p> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/5ab6b98619c64127b59908d284a48919.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/6ea32d7802644d529f2bba0dba4bbf70.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<h3 class="sub_title">언제 어디서나 빛을 발하는 정갈한 수납의 힘</h3> \n<p>선배가 처음 이사하던 당시, 제일 먼저 설치한 것은 사진과 비슷한 <strong>‘맞춤 제작 수납장’</strong>이었다. 시중에서는 원하는 사이즈를 찾기 어려웠고, 숨은 틈새까지 알뜰히 활용해야 하는 좁은 공간에선 <strong>‘맞춤 가구’</strong>보다 좋은 선택은 없었기 때문이다.&nbsp;맞춤형 주문제작 가구(Custom Built-in)의 제일 큰 장점은 넉넉한 저장공간과 공간활용이다.</p> \n<span></span> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/a7ee936aaaf3459789fc1c82b32a7e9e.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<p>특히 이 집을 담당한 디자이너의 경우, 의뢰인의 기존 식탁과 비슷한 질감의 목재를 활용하여 수납장을 제작했다.</p> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/0ae18f4d5e8047ca951240023546167f.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<p>덕분에 집안의 모든 공간이 동일한 곳에서 맞춘 것 같은 통일감을 가질 수 있게 되었다. 또한 기존 가전제품 역시 깔끔하게 정리되는 것은 물론, 풍부한 수납공간 여유로 인해 집안 정돈의 부담이 줄였다.</p> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/8f8f62bbbc474e5ba07c670edca233e4.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<h3 class="sub_title">깨끗함이 한층 돋보이는 클린 실링</h3> \n<p>마이너스 몰딩은 사진에서처럼 천장과 벽 사이 이음매를 없앤 뒤, 기존의 바깥 노출 중심의 (ㄱ 형태) 몰딩을 역으로 뒤집어(ㄴ형태) 시공하는 것이 특징이다.이 때 안으로 들어간 몰딩 틈새에 조명을 끼우는 것이 실링라이트(Ceiling light)이다.</p> \n<table class="img_block" data-width="436"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/ca0c0c53e1f84d83a390128914e7dc3e.jpg" alt=""><p class="img_cap">(마이너스 시스템 몰딩 예)</p></td></tr></tbody></table> \n<table class="img_block" data-width="580"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/01abee7d81d24261be9909b028e78f95.jpg" alt=""><p class="img_cap">(마이너스 시스템 몰딩 예)</p></td></tr></tbody></table> \n<p><em>출처: crefshop (<a href="http://crefshop.com/product/%EB%A7%88%EC%9D%B4%EB%84%88%EC%8A%A4%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%B2%9C%EC%9E%A5%EB%A7%88%EA%B0%90-%EB%AA%B0%EB%94%A9-%EA%B0%84%EC%A0%91%EB%93%B1-%EC%8B%9C%EA%B3%B5/2062/" target="_blank">crefshop 마이너스 몰딩_마이너스 시스템</a>)</em></p><p><em><br></em></p> \n<span></span> \n<p>평소에 모던함과 깔끔함을 중시한 선배는 이 공법을 활용해 집을 꾸몄다. 덕분에 중앙에서 사이드로 옮겨간 조명은 은은한 불빛을 비추며 공간 분위기를 한층 부드럽게 바꾸었다. 또한 경계가 사라진 벽과 천장을 통해 시각적으로도 집이 넓어 보이는 느낌을 전했다.</p> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/9664eb3e1f5b45c9b16951202b6b46e4.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<h3 class="sub_title">방음과 깔끔함을 동시에 잡은 포켓도어</h3> \n<p>처음 침대를 구매했을 당시 문의 위치를 신경 쓰지 못한 선배는 침실의 문짝을 뜯었고, 그로 인해 역할 구분이 모호해진 집안은 전체적으로 어수선해졌다. 그때 찾은 해결책이 포켓도어(Pocket door)이다.</p> \n<table class="img_block" data-width="728"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/f869c662b8c3446a823bf0bbea96c8be.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<p>기존의 레일 도어가 슬라이드를 노출하여 상업적 느낌을 준다면, 포켓도어는 벽의 틈새에 문을 숨기는 모던한 스타일이다. 그래서 열려있을 땐 벽처럼, 닫혀있을 땐 벽의 연장선 같은 깔끔한 연출이 가능하다.&nbsp;또한 레일 틈새까지 메우는 시공법 덕분에 레일도어보다 방음이 잘 된다는 강점은 덤이었다.</p> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/1debcd3b9489442bbf0acac1e5544d85.jpg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<p>자신이 ‘얼마나 신경을 쓰느냐’에 따라 내 집은 얼마든지 깔끔하면서도 넓어질 수 있다. 선배를 보며 아무리 좁은 집이라도 집주인의 관심과 애정에 따라 공간의 활용도가 바뀔 수 있다는 걸 경험했다. 동시에 나만의 공간을 꾸미는 재미가 얼마나 큰지 알게되었다.</p><p><br></p> \n<p>이 타이완 아파트를 통해 비슷한 인테리어 고민을 하는 사람들이 좋은 아이디어를 찾아가기를 바란다.</p> \n<table class="img_block" data-width="718"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/d8ed3b41bc08489fbb05032d55523065.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/c1fb3bf5ef9341ff93af27b4c95122b9.jpeg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/29/16/d378c67f319b4726aee98a3394b3ca01.jpg" alt=""></td> \n  </tr> \n </tbody> \n</table> \n<p><strong><span>A</span>rchitect</strong>&nbsp;</p>\n<p>: <a href="http://www.thenovdesign.com/" target="_blank">The Novdesign</a></p>',
                associatedLinks: [],
              },
              media: {
                idx: 525,
                name: 'PHM ZINE',
                key: 'phmzine',
                url: 'https://phmkorea.com/',
                socialUrl: 'https://www.youtube.com/c/phmkorea?app=desktop',
                profile: '전세계 주거 문화와 주택을 전하는 주거 문화 미디어',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2021/05/10/09/da91433e854b452d9b76de8a92b01741.jpg',
                createdAt: '2021-05-01 00:00:00',
                updatedAt: '2021-05-10 09:37:05',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: [
                '해외아파트',
                '아파트',
                '소형 아파트',
                '공간 활용 인테리어',
                '작은집',
                '작은 주거 공간',
                '좁은 집 인테리어',
              ],
            },
            {
              idx: 102565,
              mediaName: '파이낸셜뉴스',
              title: '땅끄부부 근황 공개됐다.. 300만 유튜버가 2년간 잠적한 이유는?',
              summaryContent:
                '땅끄부부가 유튜브 채널 커뮤니티에 올린 최근 사진. 땅끄부부 유튜브 채널 캡처 구독자 300만명이 넘는 운동 유튜버 ‘땅끄부부’가 2년 넘게 활동을 하지 않아 많은 사람들의 궁금증',
              originUrl: 'http://www.fnnews.com/news/202308272146353647',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/28/17/74f29b0f8e944ae2a9ea44c18b5cb3f8.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/fnnews/102565',
              mobileUrl: 'https://m.hub.zum.com/fnnews/102565',
              createdAt: '2023-08-29 00:00:00',
              updatedAt: '2023-08-29 00:00:19',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/28/17/aa82fb7c3829403c866ad440ef68a382.jpg" alt="파이낸셜뉴스"><p class="img_cap">땅끄부부가 유튜브 채널 커뮤니티에 올린 최근 사진. 땅끄부부 유튜브 채널 캡처</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> 구독자 300만명이 넘는 운동 유튜버 ‘땅끄부부’가 2년 넘게 활동을 하지 않아 많은 사람들의 궁금증을 자아내던 가운데 최근 근황을 공개했다. </p>\n<br>\n<p> 28일 유튜브 업계에 따르면 땅끄부부는 전날 유튜브 채널을 통해 “안녕하세요, 땅끄부부(Thankyou BUBU)이다. 정말 오랜만”이라며 그간의 침묵을 깨고 대중 앞에 나섰다. </p>\n<br>\n<p> 땅끄부부는 남편 땅끄와 아내 오드리가 집에서도 쉽게 할 수 있는 운동, 이른바 홈트레이닝 영상을 유튜브에 올리면서 큰 사랑을 받았다. 일부 부위 맞춤 운동 콘텐츠를 놓고 논란이 일기도 했으나 많은 사람들에게 긍정적인 이미지와 운동에 대한 친근함을 심어주면서 큰 인기를 누렸다. 그러던 땅끄부부가 2021년 6월 영상을 끝으로 단 한 건의 콘텐츠도 올리지 않았다. 일각에서는 이혼 루머가 돌기도 했지만 이는 사실이 아닌 것으로 밝혀졌다. </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="700"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/28/17/d38ab4251b144dc7ac65d098d6db0a15.jpg" alt="파이낸셜뉴스"><p class="img_cap">땅끄부부 유튜브 캡처</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> 땅끄는 “영상에서 모든 분들께 밝은 모습만 보여드리고 싶어 긍정을 외치고 있었지만 몇 년 전인가부터 마음과 몸에 지친 신호가 오기 시작했다. 코로나 시절 이전부터도 저희는 집 밖을 자주 나가지 않았고 코로나 때는 많은 분들의 건강을 책임져야 한다는 핑계로 일주일 동안 내내 집 밖에 나가지 않기도 했다”며 “그런 저희에게 서서히 마음과 몸에 병이 찾아왔고 저희를 찾아주시는 분들께 누가 될까봐 저희의 아픈 면을 숨기고 영상 작업에만 몰두했다. 부모님이 걱정하실까봐 말씀드리지조차 못했다”고 털어놨다. </p>\n<br>\n<p> 그는 “약 2년 전부터는 사람조차 피하게 됐고 강박증과 공황장애까지 심해졌다”며 “‘칼소폭 찐 핵핵 매운맛’을 찍기 며칠 전 오드리는 선반에서 넘어져 왼쪽 엄지발가락이 부러져 어리석게도 진통제에 의존해 촬영을 끝냈지만, 현재까지도 후유증으로 발가락이 접어지지 않는다. 촬영부터 편집, 댓글 모든 과정을 스스로 하면서 생긴 오른쪽 등이 이유없는 통증도 심해져 마우스를 잡지 못하는 지경까지 갔다”고 말했다. </p>\n<br>\n<p> 또한 “그 누구에게도 말하지 못하며 유튜브에서도 멀어져 갔고 매일 확인하던 저희 영상과 댓글도 보면 당장이라도 영상을 올리고 싶은 마음이 들까봐 들어가지도 못했다”면서 “그 가운데 2세 준비도 실패하고 여러 가지 안 좋은 일들이 겹겹이 생겨 좋지 못한 생각까지 들었지만, 낳아주신 부모님과 저희를 따라주신 많은 분들이 생각나 둘이 부둥켜 안고 눈물로 많은 날들을 보냈다”고 고백했다. </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="590"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/28/17/de10ce174a66472ba42d015d9ea27931.jpg" alt="파이낸셜뉴스"><p class="img_cap">땅끄부부 유튜브 캡처</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> 이어 “이렇게 있다가는 둘 다 완전 무너질 것 같아 몇 달 전부터 단지 살기 위한 이유만으로 저희가 진정 좋아하는 걸 찾아보기로 했다. 그렇게 우연히 몇몇 팬 분을 만났다”며 “오드리는 낯가림이 심해 부끄러움이 많고 저 또한 영상을 올리지 못하는 이유조차 설명드리지 못하고 피하려고만 했음에도 오히려 저희를 이해해주시며 여전히 기다리고 있다고 하시는 모습에 눈물이 울컥했다. 엊그제 동네 산책로에서도 우연히 팬 한 분을 만나고 따님과 함께 하고 계시는데 소식이 안 올라온다며, 그렇지만 괜찮다고 해주시는 모습에 가슴이 미어왔다”고 전했다. </p>\n<br>\n<p> 아울러 “많은 분들이 저희에게 건강을 의지하고 믿고 계시는 걸 알고 있기에 이런 글을 올리기조차 조심스러웠다. 마음과 몸이 회복되지 않는다면 저희 부부도 없다고 생각했다”며 “이제서야 키보드 앞에서 이렇게 글을 써서 올려본다. 너무나 오래 기다리게 해드려 죄송하고 보시는 모든 분들도 항상 웃으시고 건강하셨으면 좋겠다”고 덧붙였다. </p>',
                associatedLinks: [],
              },
              media: {
                idx: 98,
                name: '파이낸셜뉴스',
                key: 'fnnews',
                url: 'http://www.fnnews.com',
                socialUrl: '',
                profile: 'First-Class 경제신문 파이낸셜뉴스',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2015/12/28/11/67e967b209bb4e0095f0b3553f752eec.jpg',
                createdAt: '2015-07-06 20:12:40',
                updatedAt: '2015-12-28 11:55:13',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['땅끄부부 근황', '유튜버', '인물', '땅끄부부'],
            },
            {
              idx: 102544,
              mediaName: '책식주의',
              title: '"아무리 친해도 이런 고민은 말하지 마세요" 30년 정신과 의사',
              summaryContent: '책 보러가기',
              originUrl: 'https://v.daum.net/v/KCcdEwC2EK',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/25/16/58f8b82e5fc344659a2ef544c613762f_640x480c.jpg',
              hasMovie: false,
              card: true,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/papervore/102544',
              mobileUrl: 'https://m.hub.zum.com/papervore/102544',
              createdAt: '2023-08-28 00:00:00',
              updatedAt: '2023-08-28 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<table class="img_block" data-width="720">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/2474bf8a0f734d1196bb61dea6316a04.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/56fa8e94864e498891490faf2dbe3642.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/2fec01cd4b1a4ba298573e9d52490b67.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/71d62028cb7f42a882f5739e2e83840b.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/e473be8ae38c49749dd4e49201448abe.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/cae27e25a3de4c56985e144dc5c05630.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/aded7e65a618496f95cbcee17cb6aaa1.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/618a7e05f1a2444f86b6d81bb1534cf6.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/6a664430a496435cbac50697e5d92025.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/946d1ce0b631461a846bc0598d1a2925.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/d3c17f21feef48a4a8076cba3f405b8f.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/7a2d6aebe94a4a49a473f2b620445c41.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/854b8495fe4143559d72003e58f7cea1.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/0f85de948c564ea3be46cf8f8cbf5a47.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/9d9d86d374154777bed3f1425251bea1.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/ff1553cbb5b246e3894c17219653c414.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/eee2103394a447e59d2ce690119551ed.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/e444699ef8014c5d9f245cc006841fb0.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/ff2fc24c89c1472290ff5b9c327c3071.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/ced70e7645604a88a0809c8635cf1437.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/f6bba0ca6c594a6b80beacd05e35decf.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/20cbcf818d0b4c5d94d3d942afa8ef90.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/b1dc941703784bbea92b0e9f74ed8540.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/ffaf7dcddea345b18771798f0535cb0c.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/73cb5c7d0cc44834931a7bb98632a995.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/fb09766a97214dbc9ce1b0344e993b11.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/0ebf443993d24d708abc69d3298647c2.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/06e8f2b52d2b4c0899a2bd0aece84f3b.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/2647654303534911a6a3957e70a76431.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/30aa4e40845c4c7a8e387bf55026ca8e.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/f784cd4a18e14c1e9673763ed9ac0468.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/f4ce9c518c2f446c8df1853d28b36ed9.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/dd874cf3db514d5f9fa38f08419fd5dc.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/1c58b800281c47298047b6cf64e636ec.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="600">\n    <tbody>\n        <tr>\n            <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/fbfa0bac61f14066a6c4df7ac3517f98.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<span><a href="https://bit.ly/3Q7AUjp" target="_blank">책 보러가기</a></span><a href="https://bit.ly/3Q7AUjp"><span></span></a>',
                associatedLinks: [],
              },
              media: {
                idx: 287,
                name: '책식주의',
                key: 'papervore',
                url: 'http://blog.naver.com/papervore',
                socialUrl: 'https://www.facebook.com/thepapervore',
                profile: '영화보다 재미있는 책 이야기를 전합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2017/07/20/09/d03d2d5f8ec340cb93b8a0c6028865f9.jpg',
                createdAt: '2017-07-20 09:02:00',
                updatedAt: '2022-10-12 09:59:05',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['고민', '심리'],
            },
            {
              idx: 102543,
              mediaName: '오마이뉴스',
              title: '런웨이 휩쓴 백발의 남자... "저 사실, 공무원이었어요"',
              summaryContent:
                '공직생활 은퇴 후 시니어모델 활동 시작한 김형문씨... 고향 함양 홍보에도 적극 나서 ▲ 지리산농부모델 김형문씨 ⓒ 주간함양 40여 년의 공무원 생활을 마무리하고 고향으로 내려와 ',
              originUrl:
                'https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002954352&CMPT_CD=P0012&utm_source=zum&utm_medium=newsearch&utm_campaign=zum_news',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/25/16/4ab972ee669a4787bfa227e7effd8196.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/ohmynews/102543',
              mobileUrl: 'https://m.hub.zum.com/ohmynews/102543',
              createdAt: '2023-08-28 00:00:00',
              updatedAt: '2023-08-28 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1">\n    <p>공직생활 은퇴 후 시니어모델 활동 시작한 김형문씨... 고향 함양 홍보에도 적극 나서</p>\n</blockquote>\n\n    <table class="img_block" data-width="600">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/8731b7794d2b4d8bbf5d9a704dd77cd1.jpg" alt="오마이뉴스">\n                    <p class="img_cap">▲ 지리산농부모델 김형문씨 ⓒ 주간함양</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<p> 40여 년의 공무원 생활을 마무리하고 고향으로 내려와 "저 푸른 초원 위에 그림같은 집을 짓고" 사랑하는 아내와 함께 살고 있던 김형문씨. 넥타이 매고 출근하는 멋진 남편의 모습이 사라졌다며 실망하는 아내의 말에 자극을 받은 그는 새로운 도전을 하게 되면서 스스로도 예상치 못한 길을 걷게 됐다. 키 183cm, 몸무게 75kg인 김형문씨는 현재 시니어 모델로 활동 중이다. </p>\n<br>\n<p> "어릴 때는 큰 키 때문에 놀림도 받았는데 오히려 이걸 이용해서 내가 잘할 수 있는 게 뭘까 찾다보니 모델을 하게 됐죠." </p>\n<br>\n<p>백화점문화센터에 등록해 모델입문과정을 거친 김형문씨는 시니어모델 전문 엔터테인먼트에 소속된 후 두각을 나타낸다. 신체조건이 뛰어난 김형문씨는 자세교정, 워킹, 포즈 등의 훈련을 통해 원석이 다듬어지듯 모델로서 빛을 발하게 된다. </p>\n<br>\n<p>2021년부터 본격적으로 무대에 서게 된 김형문씨는 슈퍼탤런트오브더월드 패션위크 참가(2021), 캐나다 밴쿠브SS패션위크 참가(2021), 월드스타 시니어 슈퍼모델패션쇼 대상·드라마감독상 1위(2022), 제1회 황제·황후선발대회 공작위수상(2022), 한국남자모델선발대회 최우수상(2022), 한국시니어모델선발대회 금상(2022) 등 화려한 수상경력을 쌓으며 이름을 알렸다. </p>\n<br>\n<p>대회 수상은 물론 모델 자격으로 유명 디자이너의 옷을 입고 해외 패션위크에 참여하는 것도 그에게는 즐거운 일이다. </p>\n<br>\n<p> "모델이 그런 거잖아요. 내 몸보다 내가 입은 디자이너의 의상을 더 빛나게 하는 사람. 디자이너가 자신의 옷에 꼭 맞는 모델로 나를 선택해 준다는 건 정말 영광이거든요." </p>\n<br>\n<p>모델로 살아가는 김형문씨는 체격과 체력을 갖춰야 좋은 모델이 된다는 걸 알고 있다. 헬스, 등산, 축구, 수영 등 운동은 물론 자세교정, 워킹도 꾸준히 연습한다. </p>\n<br>\n<p> "내 몸이 옷에 맞도록 최대한 관리를 해야죠. 예전엔 키만 컸지 이런 몸이 아니었죠. 식단관리도 하고 운동도 하면서 다이어트를 했어요. 매일 몸 관리를 하지 않으면 힘이 확 풀려요." </p>\n<h3 class="sub_title">\n    "이 악물고 살아온 지난 날... 이젠 잘할 수 있는 거 하면서 살아요"</h3>\n<p> </p>\n<br>\n<div class="article-photo">\n    <table class="img_block" data-width="600">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/25/16/be7bd1479f334127b547f691acf1e528.jpg" alt="오마이뉴스">\n                    <p class="img_cap">▲ 시니어모델로 활동 중인 김형문씨 (출처 @kimhhhmm) ⓒ 김형문씨 인스타그램</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<p> 모델의 삶에 열정을 쏟는 그는 공무원 현역시절도 후회없이 보냈다. 경남 함양에서 태어나 함양 초·중·고등학교를 졸업하고 총무처특별채용시험에 수석으로 합격했던 김형문씨는 농수산부 농산국 식물방역과(현 농림축산식품부) 9급으로 공무원 생활을 시작해 40여 년 근무 후 부이사관(3급)으로 퇴직했다. </p>\n<br>\n<p>수석 합격으로 주목을 받은 그는 공무원 시절 이력도 화려하다. 무역자유화로 외국 농산물이 개방되던 때 바나나, 칠레포도 검역을 책임졌다. </p>\n<br>\n<p> "함양 촌놈이 사돈에 팔촌 아는 사람 없는 데서 일하려니 쉽지 않더라구요. 이 악물고 했죠. 그러니 퇴직한 후엔 하고 싶은 거, 잘할 수 있는 거 다 하면서 살잖아요." </p>\n<br>\n<p>퇴직 후 모든 자리를 물리치고 고향행을 선택하기까지 한 치의 고민도 없었다. "나는 함양을 너무 사랑해요." </p>\n<br>\n<p>현재 지곡면 행복마을에 거주하고 있는 김형문씨는 지곡면주민자치회 회장직을 맡고 있다. </p>\n<br>\n<p> "지곡면은 개평한옥마을이 있어서 대외적으로 많이 알려져 있고 그 외에도 백암, 행복마을... 괜찮은 마을이 많아요. 지곡면을 위해 다양한 사업도 하면서 주민들에게 꼭 필요한 일을 찾아 마을을 발전시키고 싶다는 바람을 갖고 있어요." </p>\n<br>\n<p>함양이 너무 좋다는 그는 모델 활동을 하면서 함양을 홍보하고 싶다고 했다. 해시태그 \'함양\', \'지리산\'을 사용하는 지리산농부모델 김형문씨. 그에게 시니어라는 수식어는 필요없다. 모델 김형문씨는 지금 \'인생2막 김형문 런웨이\'에 당당하게 서 있다. </p>\n<br>\n<p>주간함양 하회영 기자</p>',
                associatedLinks: [],
              },
              media: {
                idx: 495,
                name: '오마이뉴스',
                key: 'ohmynews',
                url: 'http://www.ohmynews.com/',
                profile: '모든 시민은 기자다',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2019/06/28/16/7bf12c8acd8b481cb966c3162b889256.jpg',
                createdAt: '2019-06-28 00:00:00',
                updatedAt: '2019-07-01 10:40:57',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['은퇴 후 모델', '은퇴 후 직업', '은퇴', '라이프스타일', '모델', '공무원'],
            },
            {
              idx: 102536,
              mediaName: '핸드메이커',
              title: '백투더 피처폰...당신을 거쳐 간 피처폰은 몇 개인가요',
              summaryContent:
                "한껏 꾸며진 피처폰 /flickr 최근 사람들을 사로잡고 있는 감성이라 하면 단연 '레트로'와 '복고'다. Y2K(2000년대 세기말 감성) 트렌드로 인해 그때를 겪었던 사람들과 ",
              originUrl: 'http://www.handmk.com/news/articleView.html?idxno=17342',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/16/f1259713bc214f3998ce7cb516ed8c4d_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/handmk/102536',
              mobileUrl: 'https://m.hub.zum.com/handmk/102536',
              createdAt: '2023-08-25 00:00:00',
              updatedAt: '2023-08-25 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/d9d86bfe7bfe4643bb30c3c5ad112f4b.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">한껏 꾸며진 피처폰 /flickr</p></td></tr></tbody></table> \n<p style="user-select: auto;">최근 사람들을 사로잡고 있는 감성이라&nbsp;하면 단연 \'레트로\'와 \'복고\'다. Y2K(2000년대 세기말 감성) 트렌드로 인해 그때를 겪었던 사람들과 그렇지 않았던 사람들을 포함한 전 세대를 통합시켰다. 기성세대에게는 옛날의 추억을 불러일으키고, MZ세대들에게는 겪어보지 못했던 새로운 경험과 재미를 주고 있다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 인테리어나 소품에서도 본격적인 \'그 시절\' 레트로가 유행하고 있는 와중에 최근 젊은 세대들이 관심을 갖고 있는 건 다름 아닌 \'피처폰\'이다. 요즘처럼 모두가 디자인이 하나로 통일된 스마트폰을 갖고 다니며 편하게 음악과 영상, 게임과 인터넷을 즐기지만 그 당시 피처폰은 게임과 인터넷은커녕 통화와 문자가 주된 기능이 다였던 기기였다.&nbsp;</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 지금도 갤럭시 플립이나 폴드처럼 접을 수 있는 핸드폰은 있지만 피처폰은 지금의 접는 스마트폰과는 다르게, 버튼을 일일이 눌러 통화와 문자함을 확인하는 핸드폰이었다. 그때의 불편했던 핸드폰을 경험하지 못했던 세대들은&nbsp;지금 새로이 폴더폰을 쓰거나, 그때의 게임을 즐기거나, 핸드폰을 꾸미거나 하는 등 새로운 취미에 빠지고 있다.</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/ef338282637e4a418883c3b6490b3ff1.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">Z컬러링 체험존 /KT</p></td></tr></tbody></table> \n<p style="user-select: auto;">2023년 5월, SK텔레콤, KT 등 이동통신사들은 색다른 이벤트를 열었다. 각각 \'T팩토리\'와 \'KT애드샵플러스\'에 8090세대들의 추억을 자극할 만한 V컬러링 체험존을 연 것. 지금도 컬러링 기능은 가능하지만 일반적인 통화음 대신 내가 직접 음악을 설정할 수 있는 컬러링은 벌써 탄생한 지도 21년째. 통신 3사는 컬러링이 첫 출시되던 2002년의 콘셉트를 가지고 체험존을 열어 과거 세대에게는 추억을, 현재 세대에게는 재미를 주는 이벤트를 열었다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 이들은 고객이 미리 설정한 영상을 자신에게 전화한 발신자의 휴대폰에 통화가 연결될 때까지 보여주는 영상통화연결음 서비스인 V컬러링을 선보였다. 또 체험존에서는 피처폰으로 찍는 셀카, 그 시절 MP3 음악감상 등 과거로 돌아간 듯한 신선한 체험을 제공했다. 당시 SK텔레콤 관계자는 "이번 체험존은 피처폰이 스마트폰으로 진화한 것처럼 2002년에 출시한 컬러링이 보이는 V컬러링으로 진화했음을 알리는 상징적인 의미를 담았다"고 밝혔다.</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/fc253e806fb6494e9167a777cbcc1a2f.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">팬택&amp;큐리텔에서 출시한 피처폰인 캔유폰 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">피처폰은 스마트폰이 대중화되기 전 제한된 성능을 가진 휴대폰이다. 1990년대 후반부터 2000년대 대표적인 통신 수단으로 지금의 Y2K 트렌드에는 빠질 수 없었던 휴대기기였다. 1999년부터 삼성전자, 팬택&amp;큐리텔, 스카이 등 여러 통신사에서 폴더형으로 된 피처폰을 출시했고 특히 2004년 삼성전자는 폴더형 핸드폰을 가로로 돌리는 \'애니콜 가로본능\'을 출시해 인기를 끌었다. 기존의 폴더형과 함께 위로 올리고 내리는 슬라이드형 피처폰도 출시되기도 했다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 그러나 인터넷이나 게임을 사용하려 해도 살인적인 요금제 때문에 게임이나 인터넷을 쓰는 사람은 거의 없었고, 2010년대 스마트폰이 대중화되기 전까지 피처폰은 사실상 통화와 문자만 가능한 기본적인 핸드폰에 불과했다. 지금에야 TV와 인터넷을 쉽게 이용할 수 있지만 당시에는 MP3폰, 디카폰 등 기능이 각각 다른 핸드폰이 출시되었고 2000년대 중반 DMB의 대중화와 함께 DMB폰이 출시되어 그때에서 사람들은 핸드폰으로 TV 시청을 할 수 있었다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 현재는 모두가 \'010\'으로 시작하는 번호를 쓰고 있지만 그때만 해도 이동통신업계별로 식별 번호가 달랐다. SK텔레콤은 011, KTF는 016, 신세기통신은 017, KT엠닷컴은 018, LG텔레콤는 019를 사용해 자신들의 고유 식별번호를 광고나 홍보에 쓰기도 했다. 대표적인 예가 SK텔레콤이 1997년 내세운 브랜드 \'SPEED 011\'이다. 그러나 스마트폰이 2010년에 보급화되면서 피처폰을 가진 사람들은 급격히 줄어든다. 자연히&nbsp;판매량도&nbsp;줄어들면서 이전까지만 해도 공부를 해야 하는 수험생들이나 복잡한 기능이 필요 없는 노인층 위주에게 판매되었다. &nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/9b2b4cbf97824342b4cad7556c82066c.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">피처폰을 들고 있는 배우 한소희 /한소희 공식 SNS</p></td></tr></tbody></table> \n<p style="user-select: auto;">현재의 MZ세대들은 옛날의 피처폰을 잘 모른다. 1990년대 후반부터 2000년대 초반까지의 Y2K 시절을 향유했던 사람들이 아니라면 자연히 그때의 감성이 궁금해질 것이다. 그때에만 겪을 수 있었던 문화나 경험을&nbsp;그때와 똑같이 경험해 볼 수는 없으니, 이들에게는 2000년대 초반의 Y2K 문화가 그저 신선하게 다가올 수밖에 없다. 유치원에 다닐 때부터 네모난 모양의 스마트폰을 보고 자란 아이들, 핸드폰과 포토카드를 꾸미던 MZ세대들이 게임은커녕 영상이나 음악 또한 듣기도 어렵고 화면도 지금의 스마트폰에서 1/4로 줄어든 피처폰에 새로움을 느끼는 건 당연한 일인지도 모른다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 아이돌그룹 뉴진스는 \'Ditto\' 뮤직비디오나 시즌 굿즈에서도 옛날의 피처폰을 쓰는 모습을 보여 주었고, 배우 한소희는 얼마 전 SNS 라이브 방송에서 피처폰을 소개하기도 했다. 그는 영상에서 피처폰을 너무 사용하고 싶었다면서, 버튼을 누르는 게 좋아 샀다는 감상을 남겼다. 가수 전소미도 최근 자신의 SNS에 피처폰을 들고 있는 자신의 모습을 사진으로 올리기도 했다. 이들은 2000년대를 겪지&nbsp;않은 젊은 세대로, 현재의 스마트폰보다 제한된 기능이 많음에도 불구하고 불편하지만 매력적인 이 기계에 관심을 가진다.&nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/d76118ba22244a53927527d24eb30b26.png" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">미니게임천국 /게임 어플 캡쳐</p></td></tr></tbody></table> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/955ac1cc388b40b19c2aa982cff235d1.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">중간의 \'n\'버튼은 누르면 큰일나는 버튼이었다 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">피처폰을 이용한 경험이 있었던 사람들이라면 잘 알 것이다. 핸드폰 중앙에 위치한 작은 버튼은 절대 누르면 안 된다는 것을 말이다. 그 버튼을 눌러 인터넷이나 게임에 연결이 되기 전에&nbsp;황급히 종료 버튼을 연달아 눌렀던 적이 한번은 있었을 것이다. 그럼에도 게임을 이용했던 이용자들이라면 피처폰에 깔려 있던 여러 게임들을 기억한다. 최근 컴투스는 신작 ‘미니게임천국’을 출시, 글로벌 누적 다운로드 100만 회를 돌파했다고 밝혔다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 미니게임천국은 컴투스가 2005년 만든 아케이드 모바일 게임으로 &nbsp;13종의 미니 게임의 반복적인 플레이를 통해 높은 점수를 얻고 일정 조건을 충족하면 아이템과 캐릭터를 모을 수 있다. 그러나 스마트폰이 대중화되면서 피처폰에 깔려 있었던 이 게임 또한 사라졌는데, 13년 만에 다시 런칭한 것. 해당 게임은 런칭 직후 한국 애플 앱 스토어와 한국 구글플레이스토어에서도 1위에 올랐다. 그 시절 피처폰의 버튼을 눌러 가며 힘겹게 게임을 즐겼던 사람들은 더 편리해지고, 더 커진 화면에서 요금제 걱정 없이 게임을 즐길 수 있게 되었다.</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/25a4f32450484f3aae8ea5fc71a62525.png" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">데코덴으로 검색하면 나오는 폰꾸 /인스타그램 캡쳐</p></td></tr></tbody></table> \n<p style="user-select: auto;">옛 피처폰에는 지금처럼 커다란 화면이 전면에 나오는 것이 아닌, 덮는 형식의 폴더폰이었기 때문에 사람들은 핸드폰을 꾸미는 일도 흔했다. 일본에서는 \'데코덴\'이라 해, 핸드폰의 외관을 큐빅이나 생크림 등을 이용해 꾸미는 문화가 있었다. 한국에서도 피처폰이 널리 퍼지면서 2010년 데코덴 문화가 잠시나마 유행하기도 했다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 큐빅이나 스티커를 핸드폰에 붙이는 단순한 것에서부터, 지금은 폴꾸(폴라로이드 꾸미기)나 탑꾸(탑로더 꾸미기)등 여러 소품으로 범위가 넓어졌다. SNS만 훑어봐도 핸드폰, 또는 핸드폰 케이스에 저마다의 개성 넘치는 \'폰꾸\'가 보인다. 실제로 사람들의 관심은 통계로 이어졌으며, 카카오스타일이 운영하는 패션 플랫폼 \'지그재그\'에서는 핸드폰 액세서리 거래액이 전년 동기 대비 최대 17배 이상 급증했다고 한다.&nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/a99aee0f4c1e4dbfa2d05945b9d4edf3.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">캔유폰의 문자 화면 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">Y2K세대라면 그동안 썼던 피처폰을 팔아버렸을 수도 있고, 옷장 어딘가에 고이 보관해둘 수도 있다. 필자는 후자의 경우로, 그동안 거쳐 간 피처폰들을 버리기는 아까워 보관해 둔 경우다. 중고 사이트나 거래 장터에서도 볼 수 있는 핸드폰들이긴 하지만, 어쨌든 보관해 둔 피처폰들을 꺼냈을 때 커다란 감흥이 있었던 건 아니다. 다만 많이 희석된 기억들이 드문드문 기억이 났을 뿐이다.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> LG텔레콤 팬택앤큐리텔의 카시오 HBT-3242M은 일명 \'캔유폰\'이라 불렸던 폴더폰으로 당시에는 핸드폰을 열고 접을 때 나는 특유의 \'딱\' 소리로 사람들의 흥미를 이끌었던 제품이다. 카시오, 히타치 등 일본 회사에서 개발한 단말기를 국내 환경에 맞게 현지화한 제품으로 팬택앤큐리텔을 통하여 조립하고 단말기의 애프터 서비스 역시 팬택앤큐리텔에서 맡았다. 팬택앤큐리텔은 2012년 큐리텔 지원 서비스를 종료하며 사라졌다.&nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/b1eff887022e461da1306761b52dda42.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">핸드폰을 켰을 때 나오는 화면 /김서진 기자</p></td></tr></tbody></table> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/2f632ea73f244761a15a792969282196.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">지금은 볼 수 없는 분리되는 배터리와 TV를 볼 수 있는 안테나가 눈에 띈다 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">사진이 특히 잘 나오기로 유명했던 \'캔유폰\'은 지금도 중고 장터에서 인기 있는 피처폰 중 하나다. 분리가 되는 배터리를 확인해 보면 제조 연월이 2004년으로 되어 있다. 약 20년 전의 핸드폰인 셈.</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/10dfd67beea24f1aaee884cb2ae38e7c.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">프리지아폰 /김서진 기자</p></td></tr></tbody></table> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/82f98a387b3e44db90567cf2a02e5631.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">생각보다 더 작은 크기로, 화면은 더 작다 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">삼성전자 삼성 애니콜 SPH-S4700, 일명 \'프리지아폰\'은 2007년에 출시된 피처폰으로, 폴더폰이라고는 하지만 장난감의 느낌이 더 강하다. 그 정도로 작고 슬림함을 자랑한다. 카메라도 나름 130만 화소로, STN방식 액정으로 전면 액정에서 시계를 볼 수 있었다. 당시 조악한 센스로 핸드폰을 나름 꾸며둔 것이 보인다. 다만 이 피처폰은 너무 작아 통화할 때 애로사항이 꽤 있었던 것으로 기억한다.&nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/9b81a8ca7eae4d59be63cd42f78b8554.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">노리폰 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">삼성전자 애니콜 노리 F2 SHW-A280K, 일명 노리폰은 2011년 3월 출시된 폴더폰으로 스노우화이트, 챠콜 그레이, 스위트 핑크 등 총 세 가지 컬러로 출시되었다. 옛 폴더폰에 비해 화면이 큰 편이며, 지상파 DMB방송도 가능했다. 이 폰의&nbsp;특이한 점은&nbsp;전화가 오거나, 문자가 올 때마다 각기 다른 7가지 색으로 핸드폰이 빛난다는 점이다. 안타깝게도 현재 이 핸드폰은 배터리 충전기를 구할 수 없어 전원을 켤 수 없는 상태다.&nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/1dea8051bea54a2c91b8346066bab587.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">가운데의 \'OK\'버튼은 공포의 버튼이었던 /김서진 기자</p></td></tr></tbody></table> \n<p style="user-select: auto;">당시 핸드폰&nbsp;카메라는 300만 화소에 불과했지만&nbsp;촬영 기능은 꽤&nbsp;다양했다. 일반, 연속, 분할, 파노라마 등 소위 사진 기능으로의 있을 건 다 있다. 그때의 피처폰은 중앙에 게임이나 멀티미디어를 즐길 수 있는 버튼이 있는 것이 흔했다. &nbsp;또 피처폰에는 종료 버튼이 있는데, 이 버튼은 전원 버튼과 기능이 같았다. 배터리는 놀라지 마시라,&nbsp;당시 1000mAh에 불과했고&nbsp;벨소리는 무려 64화음의 성능을 자랑한다.&nbsp;</p> \n<table class="img_block" data-width="600" style="user-select: auto;"> \n <tbody style="user-select: auto;"> \n  <tr style="user-select: auto;"> \n   <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/4e7c9f177f644b89856a3b6d291aad61.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">피처폰을 든 모습 /전소미 공식 SNS</p></td></tr></tbody></table> \n<p style="user-select: auto;">번개장터에 따르면 올해 상반기(1~6월) 피처폰 검색량은 전년 동기 대비 177% 증가, 폴더폰에 대한 검색은 같은 기간 39% 늘었다. 이제 통신사들이 피처폰을 판매하지 않아 소비자들은 중고 장터에서 피처폰을 사야 하지만 7월 한 달간 피처폰 거래량은 전년 동월 대비 97% 증가했다고 한다. 이쯤 되면 어떤 이유로든 그 시절 폴더폰과 피처폰에 대한 사람들의 관심이 늘어났다는 것을 확인할 수 있는 부분.</p>\n<br style="user-select: auto;">\n<p style="user-select: auto;"> 지금의 MZ세대나 8090세대들이 피처폰을 찾는 건 현재의 스마트폰에 있는 모든 기능을 필요로 하지 않는 사람들이라 해도 무방하다. 레트로나 복고 등 옛날 감성을 찾는 사람들은 굳이 피처폰으로 영상을 보고, 게임을 하거나, 음악을 들으려고 하진 않을 테다. 요즘의 스마트폰은 거의 통일된 디자인이라는 점을 감안하면,&nbsp;특별한 걸 찾고 싶은 사람들에게&nbsp;피처폰은 재미있는 소품이나 흥미로운 기기로 작용하고 있다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>[핸드메이커 김서진 기자] ',
                associatedLinks: [],
              },
              media: {
                idx: 549,
                name: '핸드메이커',
                key: 'handmk',
                url: 'http://www.handmk.com',
                socialUrl:
                  'https://www.facebook.com/%ED%95%B8%EB%93%9C%EB%A9%94%EC%9D%B4%EC%BB%A4-1669288533112568/',
                profile:
                  '공예 및 문화·예술 전문 미디어 문화 예술이 누군가에게는 따뜻함으로, 또 다른 누군가 에게는 기회의 순간이 되기를 희망합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2022/01/27/08/298ed84090394d7f81f0cd53b0f6ffc1.jpg',
                createdAt: '2022-01-26 00:00:00',
                updatedAt: '2022-01-27 09:26:25',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['패션', '피처폰'],
            },
            {
              idx: 102533,
              mediaName: '이데일리',
              title: '이다영, 김연경과 나눈 카톡 공개…법적 문제 없을까?',
              summaryContent:
                '이다영, SNS 통해 폭로…“술집여자 취급” 정보통신망법상 명예훼손 성립 가능성 내용 진실이고 공공이익 부합해야 ‘무죄’ 법조계 “처벌 가능성 有…수인한도 넘어” 이데일리는 독자들',
              originUrl: 'http://www.edaily.co.kr/news/newspath.asp?newsid=02555126635709616',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/16/2b9d4aa9af1c4b91b3f83ae3e9180b88.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/edaily/102533',
              mobileUrl: 'https://m.hub.zum.com/edaily/102533',
              createdAt: '2023-08-25 00:00:00',
              updatedAt: '2023-08-25 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1"><p>이다영, SNS 통해 폭로…“술집여자 취급”</p> \n<p>정보통신망법상 명예훼손 성립 가능성</p> \n<p>내용 진실이고 공공이익 부합해야 ‘무죄’</p> \n<p>법조계 “처벌 가능성 有…수인한도 넘어”</p></blockquote> \n<p><b>이데일리는 독자들이 궁금해하는 정치·경제·사회·문화 등 여러 분야의 질문을 담당 기자들이 상세하게 답변드리는 ‘궁금하세요? 즉시 답해드립니다(궁즉답)’ 코너를 연재합니다. </b> </p>\n<br>\n<p> Q. 여자 배구계가 시끄럽습니다. 학교폭력 논란으로 국내 배구계에서 퇴출당한 이다영 선수가 김연경 선수에게 과거 괴롭힘을 당했다며 불화설을 폭로했는데요. 과거 김 선수와 주고받은 메시지까지 공개했는데 사적으로 나눈 메시지를 무단으로 공개해도 되는지, 법적으로 문제가 없는지 궁금합니다. </p>\n<br>\n<p>학교폭력 가해자로 한국 V리그에서 퇴출된 이후 프랑스 볼레로 르 카네에서 선수생활을 이어가고 있는 배구선수 이다영이 지난 18일 자신의 사회관계망서비스(SNS)를 통해 배구여제 흥국생명 김연경과 나눈 카카오톡 대화를 공개했습니다. 지난 19일에는 김연경의 팬으로 추정되는 누리꾼과 나눈 대화를 공개했습니다. 주요 내용은 ‘김연경이 자신(이다영)을 술집 여자 취급했다’, ‘연습할 때 공 한 번도 때린 적 없고 말 걸면 사람 취급도 하지 않았고 욕도 했다’는 등의 내용이었습니다. </p>\n<br>\n<br> \n<div class="article-photo"> \n <table class="img_block" data-width="670"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/16/b49c2b883f674ef19a78564fd96c414d.jpg" alt="이데일리"><p class="img_cap">(사진=한국배구연맹 제공)</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> 이같은 논란이 이어지자 김연경 소속사 라이언앳은 지난 16일 “김연경 선수에 대해 악의적으로 작성돼 배포된 보도자료 및 유튜버에 대해 강경 대응할 예정”이라며 법적 대응을 시사했습니다. 아직 이다영에 대한 법적 대응은 발표하지 않았지만 이어지는 논란에 법적대응은 불가피해 보입니다. 이다영의 계속되는 SNS를 통한 폭로, 아무런 법적 문제가 없을까요? </p>\n<br>\n<p> 법조계는 김연경이 이다영에 대한 정보통신망법상 명예훼손 혐의로 고소할 가능성이 크다고 보고 있습니다. 이른바 사이버명예훼손은 사람을 비방할 목적으로 정보통신망을 통해 공공연하게 사실이나 거짓을 통해 타인의 명예를 훼손하는 것을 의미합니다. 즉 ①사람을 비방할 목적 ②공공연하게(공연성) ③타인의 명예를 훼손(특정성)이 인정돼야 합니다. 이번 이다영의 폭로는 누구나 볼 수 있는 공개된 SNS를 통해 게시물을 올린 점, 카카오톡의 상대방이 ‘킴’으로 명시돼 있고 대중들이 쉽게 ‘김연경’이라고 알 수 있는 점 등을 볼 때 공연성과 특정성은 성립될 것으로 보입니다. </p>\n<br>\n<p> 이번 사태의 핵심은 결국 ‘사람을 비방할 목적이 있는가’입니다. 이다영의 폭로가 공공의 이익에 부합하는가 여부를 살펴봐야 합니다. 즉, 이다영의 폭로가 김연경의 명예를 훼손할 부분이 있더라도 공공의 이익에 부합한다면 명예훼손죄가 성립될 수 없다는 것입니다. </p>\n<br>\n<p> 우선 판례를 몇가지 살펴보겠습니다. 사이버명예훼손이 성립되지 않은 사례입니다. 봉사회 임원이던 A씨는 2021년 6월 회원들이 참여한 단체 카카오톡방에 “회장 B씨는 혼자인 여성들에게 추악한 행동을 했다”, “스토커 혐의로 회장직에서 물러나야 한다”는 글을 올렸습니다. 이에 B씨는 A씨를 정보통신망법상 명예훼손 혐의로 고소했습니다. 실제로 B씨는 A씨가 계속 거부 의사를 밝혔음에도 A씨가 운영하는 가게로 찾아가기도 했으며 ‘저녁을 같이 먹자’, ‘영화 보러 가자’, ‘보고 싶다’는 등의 메시지를 보내기도 했습니다. 재판부는 무죄를 판결했습니다. ‘B씨의 명예를 훼손했지만 다른 회원들에게 주의를 당부하고 회장직을 수행하는데 문제가 있다’는 A씨의 주장을 받아들인 것입니다. 즉, 내용이 진실이면서 공공의 이익과 부합했기 때문에 비방의 목적이 없다고 본 것입니다. </p>\n<br>\n<p> 다음 판례는 사이버명예훼손이 성립된 사례입니다. 프로스포츠 선수 C씨는 자신의 여자친구 D씨에게 ‘치어리더 E씨의 사생활이 문란하다’는 내용의 카카오톡 메시지를 보냈습니다. 이에 D씨는 이를 캡처에 자신의 SNS에 올렸고 E씨는 이를 이유로 C씨와 D씨를 고소했습니다. 이에 재판부는 C씨에게 벌금 700만원을, D씨에게 징역 4개월에 집행유예 1년을 선고했습니다. 재판부는 “메신저 내용은 인터넷을 통해 공표될 가능성이 충분히 있었고 상대방을 비방할 목적도 있었다”고 판시했습니다. </p>\n<br>\n<p> 법조계 일각에서는 처벌이 가능하다는 목소리도 나오고 있습니다. 김정중 변호사(법무법인 하신)는 “이다영이 첫 번째 공개했던 카카오톡 메시지는 김연경의 평가를 저하할 수준이 됐는지는 판단하기 어렵지만 두 번째 공개했던 내용은 명예훼손이 성립될 가능성이 크다”며 “만약 이다영이 공개했던 메시지 내용이 거짓이면 크게 처벌될 것으로 보이고 진실이어도 공인으로서의 수인 한도(견딜 수 있는 범위)를 넘는 수준의 비방이라고 판단돼 처벌받을 수 있다”고 말했습니다. </p>\n<br>\n[이데일리 김형환 기자]&nbsp;<br>',
                associatedLinks: [],
              },
              media: {
                idx: 109,
                name: '이데일리',
                key: 'edaily',
                url: 'http://www.edaily.co.kr/',
                socialUrl: '',
                profile: '세상을 올바르게, 세상을 따뜻하게',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2015/12/28/11/7db01778786d4788acb5a1514ea39246.jpg',
                createdAt: '2015-06-03 10:01:08',
                updatedAt: '2015-12-28 11:53:54',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['배구선수', '카톡 공개', '법률상식', '김연경', '상식', '이다영'],
            },
            {
              idx: 102532,
              mediaName: '동아일보',
              title: '“동네 지키는 평범한 소방관이 꿈”… 넷플릭스 ‘사이렌’의 정민선',
              summaryContent:
                '넷플릭스 <사이렌> 에 출연한 정민선 소방사의 모습. 넷플릭스 제공 “‘여자 치고 잘한다’는 이야기를 듣고 싶지 않았습니다. 출연자들은 여성경찰, 여성군인, 여성소방관이 아니라 직',
              originUrl: 'https://www.donga.com/news/Culture/article/all/20230818/120762004/1',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/15/76e5498afd1749e9844469bd05bf03ba.jpg',
              hasMovie: true,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/donga/102532',
              mobileUrl: 'https://m.hub.zum.com/donga/102532',
              createdAt: '2023-08-30 00:00:00',
              updatedAt: '2023-08-30 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/15/779e06558b504609860a6980866f9c5e.jpg" alt="동아일보"><p class="img_cap">넷플릭스 \n      &lt;사이렌&gt;\n        에 출연한 정민선 소방사의 모습. 넷플릭스 제공 \n      <!--사이렌--></p></td> \n   </tr> \n  </tbody> \n </table> \n </div><blockquote class="se2_quote1" style=""><p>“‘여자 치고 잘한다’는 이야기를 듣고 싶지 않았습니다. 출연자들은 여성경찰, 여성군인, 여성소방관이 아니라 직업군을 대표해서 나온 겁니다.” </p></blockquote>\n<p>올 상반기 공개된 넷플릭스 오리지널 예능 &lt;사이렌: 불의 섬&gt;을 연출한 이은경PD는 제작발표회에서 이렇게 말했습니다. 이 프로그램에선 경찰, 소방관, 군인, 스턴트맨, 운동선수, 경호원 등 6개 직업군의 여성들이 각자 직업의 명예를 걸고 치열한 생존 경쟁을 벌입니다. 진흙을 뒤집어쓰고 땀범벅 되고 부상을 입어도 멈추는 법이 없습니다. ‘편견을 먹고 사는 직업’에 종사하는 여성들이 지독한 승부를 벌이는 모습에 대리 쾌감을 느꼈다는 시청자의 응원이 끊이지 않았습니다. </p>\n<br>\n<p>&lt;사이렌: 불의 섬&gt; 속 시청자의 눈길을 사로잡은 ‘강한 여성’이 있었습니다. <b>“센 놈이랑 붙자, 그게 멋있지” “나보다 센 놈 얼마나 있는지 궁금해서 왔다”</b>고 <b> </b>선전포고한 용감한 소방관입니다. 짧은 시간에 혼자 장작 30개를 패서 팀을 승리로 이끌고, 불 끄는 경기에선 전문성을 발휘해 활활 타오르는 불을 신속하게 제압했습니다. 경북 상주소방서 소속 정민선 소방사(30)가 그 주인공입니다. 최근 &lt;복수자들&gt;이 만난 그는 지난해 제1호 여성 소방차량 운전요원으로 임명된 소방관이기도 합니다. 소방차 운전은 오랫동안 금녀의 영역으로 여겨졌던 분야입니다. 정민선 소방사 인터뷰는 동아일보 유튜브 ‘복수자들’( <a href="https://youtu.be/QVFKC264Jxw">https://youtu.be/QVFKC264Jxw</a>)에서 보실 수 있습니다. </p>\n<br>\n<br>\n<div> \n <table class="mov_block" data-width="560"> \n  <tbody> \n   <tr> \n    <td><iframe src="https://www.youtube.com/embed/QVFKC264Jxw" frameborder="0" allowfullscreen="" width="560" height="315"></iframe></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/15/1f809ba9e1e3438e991ee017d8683e56.jpg" alt="동아일보"><p class="img_cap">대한민국 역사상 처음으로 여성 소방차량 운전요원으로 임명된 정민선 소방사. 복수자들 캡처</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> <b>―기개</b> <b> 넘치는 선전포고가 매력적이었습니다. </b> </p>\n<p> “&lt;사이렌&gt; 1화 나오는 날, 소방학교 훈련 중이었어요. 텔레비전 큰 화면으로 보고 싶었는데 훈련 중이라 그럴 수 없었어요. 너무 궁금해서 휴식시간에 근처 카페로 가서 휴대전화로 봤는데 첫 화에서 제가 그런 말을 하는 거예요.(웃음) ‘내가 저런 말을 했었나’ 하면서 봤던 기억이 납니다.” </p>\n<br>\n<p> <b>―말만 그런 게 아니라 경기에서 ‘센 놈’ 역할을 톡톡히 하셨습니다. 특히 장작 패기의 달인이 되셨어요. 다른 팀은 나눠서 했는데 정 소방사님 혼자 장작 30개를 팼어요.</b> </p>\n<p> “그때 소방팀 리더였던 김현아 언니가 부상을 입으면서 저희팀 분위기가 안 좋았어요. 누구 하나 살짝만 건드려도 눈물이 툭 흐를 정도로 암울했어요. 팀별 아레나전을 하러 현장에 도착했는데 운동장에 장작이 수북이 쌓여 있는 거예요. 진행자가 ‘의리 게임입니다. 순서를 정하십시오’라고 했을 때 떠오른 생각이 ‘최대한 혼자 해봐야 겠다’는 거였어요. 그래서 순서를 정하는 게 저한테는 의미가 없었던 것 같아요. 제가 책임지고 다 해야 하는 거라고 생각했으니까요.” </p>\n<br>\n<p> <b>―다른 팀원들도 있는데 왜 혼자 장작 30개를 다 패야 한다고 생각했나요?</b> </p>\n<p> “암울해진 팀 분위기를 다시 띄우고 싶었어요. 저도 언니들도 다시 힘을 내려면 상황을 반전시켜야 하잖아요. 소방관들이 매일 겪는 화재, 재난 현장이랑 똑같아요. 팀원이 부상을 입고 뒤처지고 있으면 자발적으로 나서서 도와주는 것이 팀워크라고 생각해요. 아마 장작이 2배 더 많았어도 할 수 있었을 거예요. 체력보다 정신력으로 해내는 거니까요.” </p>\n<br>\n<p>부상 입은 동료를 대신해 한계에 도전하고, 긴박한 상황에서도 타인을 해치지 않고 정정당당하게 경쟁하려는 모습을 보여준 소방팀. 자기를 희생하고 타인을 구하는 ‘소방관’이라는 직업적 특성이 잘 드러났다는 반응이 많았습니다. </p>\n<br>\n<p> <b>―&lt;사이렌&gt;을 통해 소방관이라는 직업에 대한 호감도가 높아졌습니다.</b> </p>\n<p> “저희 4명이 소방관을 대표해서 출연했을 뿐입니다. 현장에 있는 모든 소방관의 평소 모습이에요. 아주 오래 전부터 대한민국 소방관들이 땀으로, 피로 일궈온 결과라고 생각합니다.” </p>\n<br>\n<p> <b>―&lt;사이렌&gt; 출연은 어떻게 하게 된 건가요?</b> </p>\n<p> “근무 중에 소방청에서 연락이 왔어요. 넷플릭스 예능 프로그램에 출연해보겠냐고요. 처음엔 방송 출연 엄두가 나지 않아 거절했어요. 근데 일주일 뒤에 또 연락이 와서 죄송한 마음에 제작진 미팅을 하게 됐어요. 대화를 한참 나눈 후에 프로그램 취지에 대해 여쭤봤죠. PD, 작가님들이 정말 오랫동안 &lt;사이렌&gt;의 기획의도를 설명해주셨어요. 하나도 빼놓지 않고 귀담아 들었어요. 제작진 말씀이 끝나자마자 ‘출연하겠다’고 말씀드렸죠.” </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/15/53e62e39c93d4e4c988f18cdefd32dab.jpg" alt="동아일보"><p class="img_cap">넷플릭스 \n      &lt;사이렌&gt;\n        에 출연한 소방팀 4인의 모습. 복수자들 캡처 \n      <!--사이렌--></p></td> \n   </tr> \n  </tbody> \n </table> \n </div><p>&lt;사이렌&gt; 연출을 맡은 이은경PD는 프로그램 기획 의도에 대해 이렇게 설명한 적 있습니다. </p>\n<br>\n<p> <b>‘개인적으로 좋아하는 스포츠 만화의 세 가지 키워드는 우정, 노력, 승리다. 이 키워드들은 가슴을 뛰게 한다. 자기 분야에 진심이고, 조금 모자라도 뛰어들고, 무언가를 욕망하고, 그것을 쟁취하는 데에 거리낌 없는 이야기 속에서 늘 가슴이 웅장해졌다. 그런데 여성이 주인공인 스포츠 만화가 많이 없다는 것을 알게 됐다. 우정, 노력, 승리가 담긴 진한 여성 서사물을 만들어 보고 싶었다.’ </b> </p>\n<br>\n<p>우정과 노력, 승리. 소방팀이 등장하는 장면에서 세 가지 키워드는 유독 빛이 났습니다. 소방팀은 반칙보다 정공법으로 경기에 임하며, 피 튀는 싸움보단 땀 흘리는 경쟁을 택했습니다. 생사를 함께 한 소방팀뿐 아니라 결승전에 오르기까지 ‘원팀’으로 협력했던 운동팀과도 끈끈한 우정을 과시했습니다. </p>\n<br>\n<p> <b>―&lt;사이렌&gt;촬영이 끝난 후에도 출연자들과 우정을 나누고 계시다고요.</b> </p>\n<p> “소방팀 언니들과는 단체카톡방에서 하루 종일 떠들고요. 사이렌에 대한 좋은 기사, 댓글 나오면 꼭 공유해요. 결승전에서 맞붙은 운동팀과는 촬영 끝나고 회식도 했어요. 운동팀 김성연 선수와는 여행도 다녀오기로 했고요.” </p>\n<br>\n<p> <b>―소방팀 리더 김현아 소방장에 대해 ‘세상에서 가장 존경하는 사람’이라고 하셨어요.</b> </p>\n<p> “현아 언니의 말이 소방팀의 방향이었어요. 현아 언니는 힘도 세고 성격도 불같아요. 누구보다 의리 있고 리더로서 희생 정신도 강해요. 언니는 자기가 독재자처럼 굴었다고 하지만 저는 이렇게 말해왔어요. ‘행복한 독재’ ‘멋있는 독재’였다고요. </p>\n<p> 그래서 결승전 때 소방팀 리더인 현아 언니가 ‘우리답게 공격하고 멋지게 전사하자’고 이야기했잖아요. 저희 모두 질 거라 예감했지만 마지막이니까 우리다운 것을 하자는 언니 말에 다들 설득됐던 것 같아요. 너무 허망하게 운동팀에 패배하긴 했지만요.(웃음)” </p>\n<br>\n<p> <b>―‘사이렌’을 통해 잘 알려지지 않았던 </b> <b>여성 소방관이란 존재를 더욱 실감할 수 있었습니다.</b> </p>\n<p> “화재, 재난 현장은 남녀 소방관을 가리지 않아요. 똑같은 압력의 호스를 들고 똑같은 무게의 장비를 차고 요구조자(구조가 필요한 사람)를 구해야 해요. 저희가 성별을 떠나 해야 하는 일을 할 뿐이에요. 현아 언니 인터뷰를 봤는데 이런 말이 나오더라고요. ‘우리는 항상 증명하고 입증해야 하는 사람들이다.’ (여자 소방관이라는 이유로) 누군가의 시선 끝에 무시, 짜증으로 시작하는 경우가 많아요. 저희가 누군지도 모르면서 선입견을 갖고 보시는 거예요.” </p>\n<br>\n<p> <b>―그럴 땐 어떻게 대처하시나요?</b> </p>\n<p> “저는 그런 시선에 신경을 쓰지 않는 편이긴 해요. 머리가 짧고 덩치가 크니까 제가 여잔지 남잔지 모르시는 것 같기도 하고요. 인생 모토 중 하나가 ‘진짜는 모두가 알아본다’는 거예요. 나 자신과의 싸움에서 성장하고 배우려는 거죠. 그런 이야기를 들을 때 저는 그냥 웃고 말아요. 날마다 출동해야 하는 사고, 재난 현장이 있는데, 그런 편견들에 속상해할 시간이 없는 거죠.” </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/15/e928360e97d6425e9d5db434911a4018.jpg" alt="동아일보"><p class="img_cap"> \n      &lt;복수자들&gt;\n        에 출연한 정민선 소방사. 복수자들 캡처 \n      <!--복수자들--></p></td> \n   </tr> \n  </tbody> \n </table> \n </div><p><b>―재난이나 사고가 발생하면 보통 사람들은 대피하지만</b> <b> 소</b><b>방관은 안전한 데 있다가도 </b> <b>위험한 곳으로 가야 합니다.</b> </p>\n<p> “일단 출동벨이 울리고 나서부터는 위험하지 않은 순간이 단 한 순간도 없어요. 뉴스에는 큰 사고, 큰 사건만 나오잖아요. 소방관 고립, 사망 이런 큰 뉴스만 나오죠. 근데 현장에서는 작은 사건, 사고도 정말 많이 일어나요. 예를 들면 저희가 타는 소방차는 되게 높거든요. 착용 장비가 굉장히 무겁기 때문에 차에서 내리다가 넘어지기도 해요. 공기호흡기 착용하면 시야가 좁아지기 때문에 옆에 장애물을 보지 못하고 넘어지는 바람에 방화복이 찢어질 때도 있어요. 화재 현장에서는 불덩이들이 제 머리 위에서 굴러다니고요. 개방된 창문 틈으로 화염이 용암처럼 분출되는 경우도 많고요.” </p>\n<br>\n<p> <b>―화재 현장에서 방화복을 입어도 열기가 고스란히 느껴지나요?</b> </p>\n<p> “저희가 입는 방화복은 만능이 아닙니다. 순간의 열기를 막아주는 역할을 하고요. 방화복의 소재가 밖에서 오는 열기, 수분을 막아주는 역할도 하지만 제 몸에서 나오는 열을 밖으로 나가는 걸 막기도 합니다. 그렇기 때문에 방화복 안에 있는 열기를 고스란히 다 견뎌야 해요. 그렇기 때문에 열기를 식히기 위해 소방관들이 교대로 현장에 진입하는 거예요.” </p>\n<br>\n<p> <b>―화재 현장에서 가장 두려운 순간이 있다면요?</b> </p>\n<p> “화재 현장은 농연(濃煙·짙은 연기) 때문에 시야 확보가 안 되거든요. ‘중성대’라고 해서 시야 확보가 되는 공간으로 진입, 대피해야 해요. 여기에 놓인 물이 가득 찬 수건을 잡고 이동하는데 그 수건이 소방관들에겐 목숨 줄 같은 거거든요. 이걸 놓치면 정말 무서워요. 소방관도 사람이지 않습니까? 소방관들이 강도 높은 훈련을 받는 건 두려움과 무서움에 익숙해지기 위해서인 것 같아요. 원래부터 소방관인 사람은 없는 것처럼, 익숙해지기 위해 훈련을 많이 받아야 해요.” </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="780"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/15/50961cee08d84bdfa743b467642b2c25.jpg" alt="동아일보"><p class="img_cap"> \n      &lt;사이렌&gt;\n        에 출연해 불끄기 미션으로 활약하는 정민선 소방사의 모습. 복수자들 캡처 \n      <!--사이렌--></p></td> \n   </tr> \n  </tbody> \n </table> \n </div><p><b>―모든 소방관들은 트라우마를 겪는다고 하더라고요. 트라우마가 심했던 사고가 있었나요?</b> </p>\n<p> “몇 년 전 고속도로에서 교통사고가 난 적이 있어요. 산사태, 낙석 방지 구조물에 들이받았는데 차량 정면, 오른쪽 유리가 다 깨져서 파편이 얼굴로 튀었어요. 잠깐 정신을 차리고 보니 뒷목 부분이 되게 뜨거운 거예요. 머리에서 피가 콸콸 나오고 있더라고요. 그때의 뜨거운 느낌이 아직도 완전 선명해요. 찢어진 부위에 아홉 바늘 정도 꿰매고 후유증으로 이석증도 생겼어요. 정말 큰 사고였어요.” </p>\n<br>\n<p> <b>―부모님이 걱정을 많이 하실 것 같아요.</b> </p>\n<p> “사고 났을 때 응급실에서 급한 조치를 받고 붕대를 감고 집에 돌아오니 오후 11시 정도 됐더라고요. 타지에서 근무를 하고 있으니까 고향에 계신 엄마한테 전화를 드렸죠. 사고 났다고 말씀드리니 엄마가 덤덤하게 ‘내일 갈게’ 하시고는 바로 오셨어요. 생각보다 엄마 목소리가 차분해서 괜찮으신 줄 알았거든요. 그런데 며칠 전에 엄마가 보고 싶어서 저녁 늦게 전화를 했는데 엄마가 엄청 긴장하는 목소리로 받으시는 거예요. 늦은 시간 딸에게 전화가 오니까 저번 사고 때처럼 또 다친 게 아닐까 염려하신 거죠. 그때 마음이 정말 아팠어요.” </p>\n<br>\n<p>그럼에도 불구하고 정민선 소방사는 소방관이 된 것을 결코 후회하지 않는다고 합니다. 방송 출연으로 유명세를 얻었지만 그가 스스로에게 붙인 별칭은 ‘동네를 지키는 평범한 소방관’입니다. </p>\n<br>\n<p> <b>―‘동네를 지키는 평범한 소방관’이 되고 싶었던 이유가 궁금합니다.</b> </p>\n<p> “구조가 간절한 누군가에게 필요한 사람이 되고 싶었어요. 어렸을 때부터 특이하게도, 제가 직접 119 신고하는 일이 많았어요. 제 눈앞에서 누가 다치거나 교통사고가 난다거나, 산불이 난다거나…. 한 번은 아파트 베란다에서 날씨가 어떤가 보고 있는데 공사장에서 불이 나는 거예요. 다른 누가 먼저 신고를 할 법도 한데, 어쩐 일인지 제가 최초 신고자였어요. 아무도 손대지 않았고, 아무도 손 댈 수 없는 날것의 현장에 소방관들이 사람들을 구하고 조치하는 모습을 봤어요. 그걸 보면서 막연하게 ‘타인을 구하는 사람’이 되고 싶다고 생각했던 것 같아요. 근데 정말 신기한 게 뭔지 아세요? 제가 소방관이 된 후부터는 사건, 사고를 목격한 적이 없어요. 이젠 제가 현장에 가장 먼저 출동하는 사람이 됐기 때문인 것 같아요.(웃음)” </p>\n<br>\n<p> 이지훈 기자 easyhoon@donga.com </p>\n<p>김재희 기자 jetti@donga.com</p>',
                associatedLinks: [],
              },
              media: {
                idx: 220,
                name: '동아일보',
                key: 'donga',
                url: 'http://www.donga.com/',
                socialUrl: '',
                profile: '세상을 보는 맑은 창',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2016/07/05/14/660af1d5fb7e48babf5db9400d982a8e.jpg',
                createdAt: '2016-07-05 14:34:00',
                updatedAt: '2016-08-30 16:16:45',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['정민선', '사이렌', '소방사', '인물', '사이렌 불의섬'],
            },
            {
              idx: 102527,
              mediaName: '나남뉴스',
              title: '"10살인데 IQ 204" 영재발굴단 백강현, 서울과학고 결국 자퇴 무슨 일?',
              summaryContent:
                '"10살인데 IQ 204" 영재발굴단 백강현, 서울과학고 결국 자퇴 무슨 일? 고작 10살의 나이에 아이큐 204라는 어마어마한 천재로 알려진 백강현 군이 결국 서울과학고를 자퇴했',
              originUrl: 'https://www.nanamcom.co.kr/news/articleView.html?idxno=3864',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/14/753558cbde52488a8a64d9799958c151_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/nanamnews/102527',
              mobileUrl: 'https://m.hub.zum.com/nanamnews/102527',
              createdAt: '2023-08-24 14:45:06',
              updatedAt: '2023-08-24 14:50:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1" style="user-select: auto;"><p style="user-select: auto;">"10살인데 IQ 204" 영재발굴단 백강현, 서울과학고 결국 자퇴 무슨 일?\n        </p></blockquote><table class="img_block" data-width="780" style="user-select: auto;">\n            <tbody style="user-select: auto;">\n                <tr style="user-select: auto;">\n                    <td style="user-select: auto;"><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/bb30496f641545579f4e77c9871a055a.jpg" style="user-select: auto;"></td>\n                </tr>\n            </tbody>\n        </table>\n    \n\n<p style="user-select: auto;">고작<strong style="user-select: auto;"> 10살의 나이에 아이큐 204</strong>라는 어마어마한 천재로 알려진 백강현 군이 결국 서울과학고를 자퇴했다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">이날 19일 백강현 군의 인스타그램에는 "2023년 8월 18일 <strong style="user-select: auto;">백강현 군은 서울과학고등학교를 자퇴했습니다</strong>"라는 글이 올라왔다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">자세한 사정은 유튜브를 통해 공개한다고 밝힌 백강현 군은 영상으로 서울과고 자퇴 경위를 설명했다. 그는 "엊그제 방학이 끝나고 학교에 가면서 일어나자마자 허둥지둥 수학 공식을 암기했다. <strong style="user-select: auto;">그러다 문뜩 거울 속에서 문제 푸는 기계가 된 저를 보게 되었다</strong>"라며 말문을 열었다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">백 군은 "갑자기 손을 놓은 작곡도 하고 싶고, 보드게임도 만들고 싶어졌다. <strong style="user-select: auto;">창의적인 활동이 하고 싶었다</strong>"라며 답답했던 심정을 토로했다. 그길로 곧장 아버지에게 찾아간 백 군은 자퇴 의사를 밝혔다고 한다. 백강현은 <strong style="user-select: auto;">"아빠! 저 학교 그만두고 싶어요"</strong>라고 직설적으로 말했고, 이에 아버지는 아들을 가만히 보더니 안아주었다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">백 군의 아버지는 "아빠는 남들 시선 때문에 나의 인생을 살지 못했지만, 너는 네 인생을 살아라"라고 답했다. 이어<strong style="user-select: auto;"> "니 마음이 움직이는 대로 해라. 그래야 누군가의 인생이 아닌 네 인생을 살게 되는 거야"</strong>라고 진심 어린 조언을 남겼다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">진정으로 아들의 인생을 걱정하는 아버지의 허락을 받아낸 백강현 군은 그 후로 초고속 자퇴 절차를 밟았다고 한다. 다만 여름방학 기간 내내 2학기 기말고사까지 준비하여 2학기에는 더 좋은 성적을 낼 수 있었다는 아쉬움이 남는다고 토로하였다. 끝으로 서울과학고를 다니며 무거운 가방을 매일 들어준 같은 학급의 형들에게 감사 인사를 전했다.</p>\n<p style="user-select: auto;"><span style="user-select: auto;"></span></p><h3 class="sub_title" style="user-select: auto;">이과 천재들만 모인다는 서울과고에서 부회장까지\n앞으로가 더 기대되는 10살 찐천재</h3><p style="user-select: auto;"><span style="user-select: auto;"></span></p>\n<table class="img_block" data-width="780" style="user-select: auto;">\n    <tbody style="user-select: auto;">\n        <tr style="user-select: auto;">\n            <td style="user-select: auto;"><img alt="사진=백강현 군 인스타그램" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/7271a4dd78b54c7aa99d65218118fae0.jpg" style="user-select: auto;"><p class="img_cap" style="user-select: auto;">사진=백강현 군 인스타그램</p></td></tr></tbody></table>\n<p style="user-select: auto;">백 군은 이제 좋아하는 작곡도 하고, 보드게임과 멘사 문제도 만들고, 태권도 학원도 다니고 싶다고 앞으로의 계획을 밝혔다. 그러면서 수능 준비는 손에 놓지 않겠다고 말하며 공부 역시 계속할 것임을 전하였다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">SBS \'영재 발굴단\'으로 이름을 알린 백강현 군은 3살 때 구구단을 19단까지 외웠으며 4살 때 일차방정식을 풀어 대한민국을 충격에 빠뜨린 바 있다. 영재성이 매우 뛰어난 것이 여러 차례 검증되면서 만 7세에 초등학교 5학년으로 월반하였고 만 9세에 중학교에 입학했다. 결국 <strong style="user-select: auto;">만 10세인 올해 서울과학고등학교 입학</strong> 전형을 통과하며 고등학생이 되었다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">대한민국의 온갖 천재들은 다 몰린다는 서울과고에서도 그의 영민함은 특별했다. 입학하자마자 부회장이 되어 고등학생 형, 누나들과 어울렸던 백 군은 학급 생활에도 잘 적응하며 공부를 이어간 것으로 전해졌다. 하지만 이번 자퇴로 미루어보아 그동안 자신이 하고 싶었던 작곡, 보드게임 등 다른 분야를 더 경험하고 싶었던 것으로 보인다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p>\n<p style="user-select: auto;">이와 같은 사실이 알려지자, 네티즌들은 \'큰 박수와 응원을 보낸다\', \'강현 군이 직접 작곡한 민들레 홀씨 노래 참 따뜻하다\'며 지지를 보내고 있다.</p><p style="user-select: auto;"><br style="user-select: auto;"></p><p style="user-select: auto;">정지윤 기자</p>',
                associatedLinks: [],
              },
              media: {
                idx: 603,
                name: '나남뉴스',
                key: 'nanamnews',
                url: 'https://www.nanamcom.co.kr',
                socialUrl: 'https://www.facebook.com/nanamnewsenter',
                profile:
                  '연예, 이슈, 스포츠, 라이프, 경제 등 인터넷 신문사이트로, “재미있고 스토리가 있는 뉴스”를 지양합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/05/24/11/a8b2ee87b7144b7e899254f062855ac1.jpg',
                createdAt: '2023-05-24 00:00:00',
                updatedAt: '2023-05-25 10:56:11',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['영재 근황', '영재'],
            },
            {
              idx: 102526,
              mediaName: '마음 치유 플랫폼 playlife',
              title: '삶이 최악일 때, 나는 가장 성장했다',
              summaryContent:
                '살다 보면 천재지변이 일어나듯, 아무리 노력해도 피할 수 없는 위기가 있지요. 축구선수로 활약해 온 전종혁 님은 반복되는 부상으로 오랜 시간 재활의 시간을 가졌고, 결국 은퇴를 결',
              originUrl: 'https://playlife.kr/people/8050',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/14/6601672c569f48128c940e8400eb006a.jpg',
              hasMovie: true,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/playlife/102526',
              mobileUrl: 'https://m.hub.zum.com/playlife/102526',
              createdAt: '2023-08-31 00:00:00',
              updatedAt: '2023-08-31 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<div style="user-select: auto;">살다 보면 천재지변이 일어나듯, 아무리 노력해도 피할 수 없는 위기가 있지요. 축구선수로 활약해 온 전종혁 님은 반복되는 부상으로 오랜 시간 재활의 시간을 가졌고, 결국 은퇴를 결정했습니다. 하지만 전종혁 님은 그 시기가 괴롭기만 한 기억이 아닌, 제2의 인생을 살게끔 해준 소중한 시간이라고 말합니다.</div>\n\n\n<h3 class="sub_title">전종혁 님이 찾은\n    마음 치유의 세 가지 단서</h3>\n\n\n<blockquote class="se2_quote6">\n    <div style="user-select: auto;">• 냉정한 자기객관화</div>\n    <div style="user-select: auto;">축구 은퇴와 ‘불타는 트롯맨’ 출연을 고민할 때, 냉정하게 자기객관화를 해 봤어요. ‘사람들이 나한테 어떤 매력을 느낄까.’ 주변에도 물어보고, 고민도 적어보고요. 내가 어떤 사람이라는 정리가 되니, 용기를 얻었어요.</div>\n    <div style="user-select: auto;"><br></div>\n    <div style="user-select: auto;">• 깨끗한 승복</div>\n    <div style="user-select: auto;">은퇴하고도 마음 정리가 안 됐어요. 부상 관리를 못 한 자신을 자꾸 자책했죠. 어느 순간 자꾸 뒤돌아보는 게 의미 없다는 걸 알았어요. ‘나는 축구랑 안 맞는 사람이었다.’ 깔끔하게 인정하고 나니 앞으로 나아갈 수 있었어요.</div>\n    <div style="user-select: auto;"><br style="user-select: auto;"></div>\n    <div style="user-select: auto;">• 최악의 시기가 성장의 시기</div>\n    <div style="user-select: auto;">&nbsp;선수 생활을 못 할 수도 있겠다는 생각이 들었을 때는 정말 힘들었어요. 선수로서는 가장 최악의 시기였지만, 인생에서는 가장 소중한 시간이었던 것 같아요. 평생 스스로를 안 돌아보고 살 수도 있는데, 덕분에 나를 돌아보게 되었으니까요.</div>\n</blockquote>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/43825b91260b45daa8fd6457a2cdc0ea_780x519.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <div style="user-select: auto;"><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/3f234ddd9ccd4fbc9bfd02b691d8e8e0_780x974.jpg"></div>\n                <div style="user-select: auto;"></div>\n                <p class="img_cap">l 어린 시절 모습</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<blockquote class="se2_quote1">\n    <div style="user-select: auto;">“뭐 때문에 두려운지 생각해 보니</div>\n    <div style="user-select: auto;">가장 큰 게 돈이더라고요.</div>\n    <div style="user-select: auto;">돈 걱정 때문에 도전을 포기한다면</div>\n    <div style="user-select: auto;">후회할 것 같았어요.”</div>\n</blockquote>\n<b>반복되는 부상이 발목을 붙잡았어요</b>\n<div style="user-select: auto;">축구 선수를 하다가 그만두고 이제 가수의 길을 걷고 있습니다. 최근 ‘불타는 트롯맨’이라는 경연 프로그램에 도전해서 준결승에 진출했고, 전국 투어를 하고 있어요. 아버지가 워낙 스포츠를 좋아하셔서 어릴 때부터 축구를 접했어요. 성남 FC의 유소년팀을 거쳐서 성남 FC 소속으로 프로 데뷔를 했고요. 첫 시즌, 저희 팀의 승격을 확정 지었던 경기가 가장 기뻤던 것 같아요.</div>\n<div style="user-select: auto;">여러 해 동안 같은 부위에 부상이 재발했어요. 은퇴 당시에는 1년 동안 두 번 수술을 받았고요. 재활하고 복귀하기 한 달 전, 수술 부위에 다시 통증이 몰려왔어요. 처음으로 축구를 못 할 수도 있겠다는 생각이 들었죠. 엄청나게 스트레스를 받았고, 축구를 그만둔 뒤의 삶에 대해 조금씩 생각하기 시작했어요.</div><div style="user-select: auto;"><br></div>\n\n<b>돈과 안정보다는, 행복한 쪽을 선택했어요</b>\n<div style="user-select: auto;">다시 재활을 준비하던 중 ‘불타는 트롯맨’이라는 프로그램에서 출연 제안이 왔어요. 두 번을 거절했고요. 계속된 제안에 ‘나를 왜 이렇게 찾아주시는 거지?’ ‘내가 노래를 부른다면 다른 사람들에게 매력이 있을까?’를 고민하기 시작했어요. ‘불타는 트롯맨’에 도전하기 위해서는 축구를 그만둬야 했어요. 도전한다면 비교적 안정적인 삶과 받던 연봉을 포기하고 처음부터 시작해야 했죠. 물론 두려웠지만, 뭐 때문에 두려운지 생각해 보니 가장 큰 게 돈이더라고요. 돈 걱정 때문에 도전을 포기한다면 후회할 것 같았어요. 끝이 보이지 않는, 기약 없는 재활을 했었기에 축구를 그만두면 지금보다 행복하지 않을까 생각하기도 했고요. 고민 끝에 은퇴를 결심했어요</div>\n\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/1289f70b4f364ea3b9432d3992024e57_780x519.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="665">\n    <tbody>\n        <tr>\n            <td>\n                <div style="user-select: auto;"><img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/00a27f41a0924fef99fab252c293062c.jpg"></div>\n                <div style="user-select: auto;"></div>\n                <p class="img_cap">l \'불타는 트롯맨\' 출연 당시</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<blockquote class="se2_quote1">\n    <div style="user-select: auto;">“친구에게 제가 어떤 사람인지 물어보고,</div>\n    <div style="user-select: auto;">고민을 정리해 보기도 했어요.</div>\n    <div style="user-select: auto;">내 장점과 단점이 무엇인지 알려고 노력했죠.”</div>\n</blockquote>\n<b>냉정한 자기 객관화로 고민을 이겨냈어요</b>\n축구를 그만두고 경연에 출연하기까지 3주를 고민했어요. 냉정하게 자기객관화를 하려 했죠. 사람들이 어떤 매력을 보고 저를 좋아해 주실지를 고민했어요. 가까운 친구에게 제가 어떤 사람인지 많이 물어보고, 고민을 일기장에 정리하기도 했어요. 마인드맵을 그려보기도 했고요. 내 장점이 무엇이고 단점이 무엇인지 고민했죠. 그렇게 고민하는 과정에서 저 스스로를 설득했던 것 같아요. ‘주위에 듣기로는 내가 이런 사람이야. 그러니까 할 수 있어.’ 이런 긍정적인 생각을 스스로 계속 주입해서 용기를 만들어 냈죠.<div><br>&nbsp;\n\n<div style="user-select: auto;"><b>당연하게 여겼던 축구에서 배운 것, 저만의 장점이 되었어요</b></div>\n어렸을 때부터 항상 축구를 해왔기 때문에 축구를 당연한 제 삶의 일부라고 생각했어요. 축구를 시작했을 때부터 유소년팀에 소속되어 있었기에 성남 FC에서 선수생활을 하는 게 당연한 목표였어요. 주어진 환경에서 최선을 다해 활동해서 결과를 냈었고, 초등학교 시절부터 프로팀에 올라가기까지의 과정이 너무 자연스러웠어요.\n<div style="user-select: auto;">은퇴하고 보니 제가 당연했다고 생각했던 축구의 모든 것이 당연하지 않은 것이었다는 걸 깨달았어요. 축구를 통해서 강한 정신력, 건강한 마음가짐, 도전하려는 성향 등 여러 가지를 배우고 다듬어 왔다는 걸 깨달았죠. 경연 프로그램을 할 때 주변에서 ‘너처럼 열심히 하는 사람은 처음 본다.’라는 말을 해주더라고요. 축구 덕분에 긍정적이고 파이팅 넘치는 성격이 만들어졌고, 지금도 많은 도움을 받고 있어요.</div>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/1292666a355f4fedb36baabeb2bf8003_780x520.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/7429b88e3a864bc1a6cc8d2b2e1b1577_780x520.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<blockquote class="se2_quote1">\n    <div style="user-select: auto;">“앞으로 나아가는 데에 있어서</div>\n    <div style="user-select: auto;">과거를 자책했던 것과,</div>\n    <div style="user-select: auto;">깔끔하게 ‘그래, 나는 그 일과 안 맞았던 거야.’</div>\n    <div style="user-select: auto;">생각하는 것의 차이가 크더라고요.”</div>\n</blockquote>\n<b>자존심을 버리고, 경쟁 대신 배우는 자세로 임했어요</b>\n<div style="user-select: auto;">‘불타는 트롯맨’에 나갈 당시에는 잃을 게 없었어요. 무대 경험도 없었으니까요. ‘난 노래를 잘하는 사람이 아니다.’라는 사실을 인정했어요. 같이 경연에 참여하는 모두가 저보다 위에 있는 사람이고, 배울 점이 정말 많은 사람이라고 생각했죠. 그렇게 부족함을 인정하고 시작했기에 한 라운드를 올라갈 때마다 정말 감사한 마음이 들더라고요. 정말 많은 분의 도움을 받았어요. 다른 분들에게 찾아가서 노래를 부른 다음 어떤지를 계속 물어봤죠. 자존심을 버리는 게 가장 중요해요. 자신을 내려놓는다는 것이 쉽지 않지만, 자존심을 버리는 순간 엄청나게 편해져요. 보이는 것도 더 많아지고, 너무 많은 도움을 받을 수 있더라고요.</div><div style="user-select: auto;"><br></div>\n\n<div style="user-select: auto;"><b>내 현재를 인정하고 나니, 앞으로 나아갈 수 있었어요</b></div>\n<div style="user-select: auto;">제가 은퇴하자마자 월드컵이 시작됐어요. 경기를 못 보겠더라고요. 선수의 행동을 관찰하고 연구하던 게 습관이 되어서 선수들의 움직임을 관찰하게 되고, 제가 경기를 뛰던 기억이 자꾸만 떠올랐어요. ‘나중에 후회하면 어쩌지?’라는 생각을 많이 했던 것 같아요. 나름대로 경쟁력 있는 선수라고 생각했었거든요. 마음 정리가 안 되었던 거죠. 고민 끝에 ‘나는 축구랑 안 맞는 사람이었다.’라는 것을 인정했어요. 아쉬워해봤자 지난 어떻게 할 수 없잖아요. 처음에는 스스로를 자책했었어요. 똑같은 부상이 반복된 것에 대해 ‘내가 몸 관리를 못 했구나.’ 생각했고 스트레스를 받았어요. 어느 순간 ‘이미 지난 일인데 왜 자꾸 뒤돌아보고 있는 거지?’ 생각이 들더라고요. 앞으로 나아가는 데에 있어서 과거를 자책했던 것과, 깔끔하게 ‘그래, 나는 그 일과 안 맞았던 거야.’ 생각하는 것의 차이가 크더라고요.</div>\n\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/3cf9ab4a205e49b995de97fe3535bc73_780x519.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<blockquote class="se2_quote1">\n    <div style="user-select: auto;">“은퇴를 고민하던 그때가</div>\n    <div style="user-select: auto;">인생 중 가장 소중했던 시간이라고 생각해요.</div>\n    <div style="user-select: auto;">평생 스스로를 안 돌아보고 살 수도 있는데,</div>\n    <div style="user-select: auto;">덕분에 나를 돌아보게 되었으니까요.”</div>\n</blockquote>\n<div style="user-select: auto;"><b>나에게 집중하는 고독의 시간을 가지며 성장했어요</b></div>\n<div style="user-select: auto;">사람들이랑 어울리는 걸 좋아해요. 운동 외적인 시간엔 맨날 친구들, 사람들과 어울리면서 시간을 보냈죠. 그러다 보니 스스로에 대해서 생각할 수 있는 시간이 좀 없었어요. 이적을 계기로 일부러 스스로와 보내는 혼자만의 시간을 늘렸어요. 책을 읽고 일기를 쓰면서 나에게 집중하는 시간을 가졌죠. 내면의 빈 수레를 채워 넣는 과정이었던 것 같아요. ‘고독이 나를 만든다’는 말이 있잖아요. 고독함으로써 성장했던 시기라고 생각해요.</div>\n<div style="user-select: auto;"><b><br style="user-select: auto;"></b></div>\n<div style="user-select: auto;"><b>선수로서는 최악의 시기가, 인생에서는 가장 소중한 시기였어요</b></div>\n<div style="user-select: auto;">축구선수로 활동하지 못할 수 있겠다는 생각이 들었을 때 정말 살면서 처음 느껴보는 좌절감을 겪었어요. 축구선수로서는 지하를 뚫고 내려가는 시기였죠. 하지만 지금 돌아보면 저에게 너무 소중한 시간이기도 했던 것 같아요. 평생 스스로를 안 돌아보고 살 수도 있는데, 덕분에 나를 돌아보게 되었으니까요. 나를 강하게 만들어줬던 전환점, 제2의 인생을 살게끔 해 준 시기였던 것 같아요. 정말 힘든 시간이었고 결국 은퇴로 이어졌지만, 그 시간이 인생 중 가장 소중했던 시간이라고 생각해요.</div>\n<div style="user-select: auto;">그리고, 솔직하게 말하면 시간이 약이에요. 엄청나게 힘들더라도 어떻게 하다 보면 이겨낼 수 있더라고요. 얼마나 걸리든 ‘이 슬픔은 잠깐이다.’ ‘난 어차피 잘될 거다.’라고 많이 되새겼던 것 같아요. 말과 생각의 힘을 믿거든요.</div>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/ac93ca8e781b4d9488dbe988af6feeb3_780x520.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/d61fd2b6402e4712be8aeb068b11dd31_780x520.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<blockquote class="se2_quote1">\n    <div style="user-select: auto;">“‘고생하는 사람이 아름답다.’라는 말이 있잖아요.</div>\n    <div style="user-select: auto;">저는 항상 고생하고, 도전하는 길을</div>\n    <div style="user-select: auto;">선택할 것 같아요.”</div>\n</blockquote>\n<div style="user-select: auto;"><b>실패는 없더라고요, 다 과정일 뿐이죠</b></div>\n<div style="user-select: auto;">직업을 바꾸면서 ‘실패의 정의는 누가 정한 거지?’ 생각했어요. 생각해 보면 실패는 없더라고요. 다 과정일 뿐이죠. 저는 축구선수로서 실패했다고 생각하지 않아요. 내가 사랑했던 직업, 하나의 과정이었던 거죠. 후회는 전혀 없어요.</div>\n<div style="user-select: auto;">지금 하는 가수라는 직업이 종착지가 아닐 수도 있어요. 하고 싶은 게 생기면 도전할 테니까요. 도전하지 않은 사람과 도전한 사람의 차이가 크다고 생각해요. 무엇을 하든 그 경험을 통해 스스로가 단단해지고, 경험치가 쌓이니까요. ‘고생하는 사람이 아름답다.’라는 말이 있잖아요. 저는 항상 고생하고, 도전하는 길을 선택할 것 같아요.</div>\n\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/acbd953495794ae5bf7aed3b7f7acbd9_780x520.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<h3 class="sub_title">전종혁 님의 ‘내 마음을 회복시켜 준 것들’</h3>\n\n<table class="img_block" data-width="300">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/d7e3237f784f4b8f80ccac8d69d6eb11.png">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div style="user-select: auto;"><b>• 책과 일기</b></div>\n<div style="user-select: auto;">예전에는 정말 책을 열자마자 잠들었는데, 계속 읽다 보니까 재미가 느껴지더라고요. 책을 통해 많은 성장을 했어요. 생각이 깊어졌고, 은퇴 같은 중요한 고민을 할 때 선택의 폭을 넓힐 수 있었어요. 그리고 힘들 때 일기를 쓰면서 하루에 느낀 점을 정리하고 마음을 다스렸어요.</div>\n\n<table class="img_block" data-width="300">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/bc050dcd9d10421d91122f797140c499.jpg">\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div style="user-select: auto;"><b>• 일상의 루틴 지키기</b></div>\n‘아주 작은 습관의 책’을 읽고 나서 하루에 작은 루틴을 만들었어요. 자기 전에 내일 아침에 무엇을 할지 미리 다 적어두는데, 그런 작은 습관을 만들고 성취하면서 모인 성취감을 통해 스스로를 단단하게 만들 수 있었어요.\n<table class="img_block" data-width="300">\n    <tbody>\n        <tr>\n            <td>\n                <img src="http://static.hubzum.zumst.com/hubzum/2023/08/24/14/d1689bafa9704c988a0fa470d275ab84.png">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div style="user-select: auto;"><b>• 운동</b></div>\n<div style="user-select: auto;">한 가지에 몰입할 때는 스트레스를 받지 않아요. 게임, 노래 같은 것도 좋지만, 그중에서도 운동이 가장 좋아요. 정신이 맑아지는 게 느껴지거든요.</div>\n\n<table class="mov_block" data-width="560">\n    <tbody>\n        <tr>\n            <td><iframe src="https://www.youtube.com/embed/hYK40IQmKfM?wmode=opaque&amp;enablejsapi=1" frameborder="0" allowfullscreen="" width="560" height="315"></iframe></td>\n        </tr>\n    </tbody>\n</table>\n\n<div style="user-select: auto;">어떤 환경에서 어떤 인생을 살아가든, 예상치 못한 위기를 완벽히 피할 방법은 없습니다. 인생의 굴곡과 비탈길을 피해 가는 방법보다 중요한 것은, 고난과 위기를 정면으로 마주하고 극복할 수 있는 태도 아닐까요.</div>\n<blockquote class="se2_quote6">\n    <p style="user-select: auto;"><a href="https://playlife.kr/newsletterarchive/?mode=&amp;pg=1" target="_blank">소중한 가치를 찾아주는 마음 치유 콘텐츠가 궁금하다면?</a></p>\n</blockquote></div>',
                associatedLinks: [],
              },
              media: {
                idx: 610,
                name: '마음 치유 플랫폼 playlife',
                key: 'playlife',
                url: 'https://playlife.kr/',
                socialUrl: 'https://www.instagram.com/playlife.kr/',
                profile:
                  '마음 치유 플랫폼 ‘playlife’는 19개 생명보험사가 출연하는 생명보험사회공헌재단에서 만들어 갑니다. 마음 치유와 성장의 길을 찾아가도록 돕겠습니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/08/21/13/e04ccd55a9de468784c8eff64485938d.jpg',
                createdAt: '2023-08-14 00:00:00',
                updatedAt: '2023-08-28 08:43:08',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['불타는 트롯맨', '가수', '인물', '축구선수', '전종혁'],
            },
            {
              idx: 102519,
              mediaName: '뉴스클립',
              title:
                '"코 수술 후 냄새를 못 맡는다..." 이연복, "내가 숨겨서 사람들은 몰라..." 깜짝 발언 화제 \'충격\'',
              summaryContent:
                "이연복, “50살 가까이 되도록 사람들은 내가 냄새를 못 맡는 걸 몰랐다..\" 사진=IHQ '미친원정대',JTBC'냉장고를 부탁해'제공 이연복 세프가 코 수술 후 후각을 잃었다고 ",
              originUrl: 'https://www.newskrw.com/news/articleView.html?idxno=21044',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/13/1d09918e581746b68cc9c8d4036a10a2.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/newskrw/102519',
              mobileUrl: 'https://m.hub.zum.com/newskrw/102519',
              createdAt: '2023-08-26 00:00:00',
              updatedAt: '2023-08-26 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1"><p> 이연복, “50살 가까이 되도록 사람들은 내가 냄새를 못 맡는 걸 몰랐다.."\n\n</p></blockquote><ul>\n</ul>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="사진=IHQ \'미친원정대\',JTBC\'냉장고를 부탁해\'제공" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/1b69e4077f584a9b9515c5c1f91b8b53.jpg"><p class="img_cap">사진=IHQ \'미친원정대\',JTBC\'냉장고를 부탁해\'제공</p></td></tr></tbody></table>\n<p>이연복 세프가 코 수술 후 후각을 잃었다고 밝혔다.&nbsp;</p>\n<p>최근 방송된 케이블채널 IHQ \'미친원정대\'에서 이연복 셰프는 코 수술 후 냄새를 맡지 못하는 불편함에 대해 토로했다.&nbsp;</p>\n<h3 class="sub_title">이연복 셰프, "50살 가까이 되도록 숨겼다.."</h3>\n<p>이날 셰프들은 각자 자신 있는 메뉴를 선보인 가운데, 퓨전 요리에 대해 이야기를 나누다 원영호 셰프는 "이연복 셰프도 화교 출신으로 많이 힘드셨을 거 같다"라고 말했다.</p><p><br></p>\n<p>이에 이연복 셰프는&nbsp;“부모님이 중국을 떠나 한국에 와서 내가 태어났다."라며 "그때는 중국과 수교가 없어서 대만 국적을 취득해야 했다."라고 말했다.</p><p><br></p>\n<p>이어 그는 “한국에서 태어나서 국적은 대만이었다."라며<strong> "한국에서는 한국 사람으로 인정 못 받고 대만에 가면 한국 사람이라고 했다</strong>”라고 털어놨다.</p><p><br></p>\n<p>이연복 셰프는 화교 학교에 다니며 국적 비하 놀림도 받았다고 토로하며 "강하지 않으면 죽는다는 생각을 했었다”라며<strong> "후에 국적도 한국으로 바꾸고 이제는 안정된 생활을 하고 있다"</strong>라고 설명했다</p>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="사진=IHQ \'미친원정대\'" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/9c3f386d0ecd4d0e951eadcda372bc37.jpg"><p class="img_cap">사진=IHQ \'미친원정대\'</p></td></tr></tbody></table>\n<p>또 과거 요리사로서 힘들었던 순간에&nbsp;대해 <strong>"코 수술 후 냄새를 맡지 못했다."</strong>라며 <strong>"회복되면 괜찮을 줄 알았는데 시간이 지나도 후각이 안 돌아왔다."</strong>라고 말해 놀라움을 안겼다.</p><p><br></p>\n<p>후각을 잃어 다른 직업도 찾아볼까 고민했었다고 말하며<strong> “50살 가까이 되도록 사람들은 내가 향을 못 맡는 걸 몰랐다"</strong>라며 "내가 숨겼다"라고 털어놨다.&nbsp;</p><p><br></p>\n<p>이를 들은 창민은<strong> “다른 셰프님들이 향을 맡을 때 이연복 셰프는 맛부터 보더라”</strong>라며 이해했고, 이연복 셰프는 "요리할 때 아내의 도움을 많이 받는다"라고 말했다.</p>\n<h3 class="sub_title">이연복 셰프, "인생에서 제일 힘들었던 시절은..."</h3>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="사진= TV조선 ‘인생다큐 마이웨이’" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/008adf19ccc04849969e70f3da121627.jpg"><p class="img_cap">사진= TV조선 ‘인생다큐 마이웨이’</p></td></tr></tbody></table>\n<p>과거 방송된 TV조선 ‘인생다큐 마이웨이’에서는 이연복 셰프가 형제들의 학비를 위해 13살 때부터 중국집에서 배달 일을 했다고 밝혔다.</p><p><br></p>\n<p>이날 이연복 셰프는 "<strong>인생에서 제일 힘든 시절은 열일곱 살 때 사보이 호텔의 중식당 호화대반점을 그만뒀을 때"</strong>라고 밝혀 궁금증을 안겼다.&nbsp;</p><p><br></p>\n<p>그 이유에 대해 이연복 셰프는 “주방에서 친구들과 선배들이 말다툼을 하다 싸움으로 번졌다"라며 <strong>"격해진 내가 조리대 위에 올라가 사람들을 향해 깡통을 휘둘렀다."</strong>라고 말했다.</p><p><br></p>\n<p>이연복 셰프의 깡통에 맞아 부상자도 생기고 엉망이 되어 주방에서 쫓겨나게 되었다며&nbsp;"<strong>이후 주변 사람들이 다른 식당을 소개해 주지 않아 힘든 생활을 했다"</strong>라고 토로했다.</p><p><br></p> 키워드\n<a>#이연복</a>\n<a>#창민</a>\n<a>#이원일</a>\n<a>#셰프</a>\n<a>#원영호</a>\n<em></em>\n<a href="mailto:skthdyd77@naver.com">소용 기자</a>',
                associatedLinks: [],
              },
              media: {
                idx: 597,
                name: '뉴스클립',
                key: 'newskrw',
                url: 'https://www.newskrw.com/',
                socialUrl: 'https://www.facebook.com/profile.php?id=100086610354615',
                profile:
                  '뉴스클립은 실시간으로 뉴스, 연예뉴스, 이슈 등을 빠르게 전하는 인터넷 언론사입니다. 뉴스클립으로 빠르게 소식을 받아보세요.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/03/30/11/ef989d433d38420c911b71d6f3945c91.jpg',
                createdAt: '2023-03-30 00:00:00',
                updatedAt: '2023-04-03 09:17:17',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['이연복', '인물', '셰프'],
            },
            {
              idx: 102514,
              mediaName: '나남뉴스',
              title: "내 아이에겐 추천하고 싶지 않다'... 손연재, 리듬체조와 임신에 대한 감정 공유",
              summaryContent:
                "내 아이에겐 추천하고 싶지 않다'... 손연재, 리듬체조와 임신에 대한 감정 공유 사진=나남뉴스 전 리듬체조의 국가대표로 한국을 빛낸 손연재가 결혼한 지 1년 만에 기쁜 임신 소식",
              originUrl: 'https://www.nanamcom.co.kr/news/articleView.html?idxno=3886',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/13/0e0548fae8d64cbcb96899ce7533478b.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/nanamnews/102514',
              mobileUrl: 'https://m.hub.zum.com/nanamnews/102514',
              createdAt: '2023-08-25 00:00:00',
              updatedAt: '2023-08-25 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<ul> \n <li></li></ul><blockquote class="se2_quote1">내 아이에겐 추천하고 싶지 않다\'... 손연재, 리듬체조와 임신에 대한 감정 공유</blockquote><table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img alt="사진=나남뉴스" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/049eff4ce21d4fa9b0141ae0a9f5c6f5.jpg"><p class="img_cap">사진=나남뉴스</p></td></tr></tbody></table> \n<p><strong>전 리듬체조의 국가대표로 한국을 빛낸 손연재가 결혼한 지 1년 만에 기쁜 임신 소식을 밝혔다. 손연재는 그간 국제 대회에서 수창한 메달을 통해 우리나라 리듬체조의 위상을 한 단계 끌어올렸다. 그녀의 아름다운 연기와 뛰어난 기술로 많은 팬들의 사랑을 받았던 그녀가 지금은 새로운 도전을 시작했다.</strong></p><p><strong><br></strong></p> \n<p>JTBC \'뉴스룸\'에 출연한 손연재는 은퇴 후 CEO로 전환, 리듬체조의 미래 세대를 위해 헌신하고 있다고 밝혔다. 그녀는 "리듬체조가 대중화돼야 어릴 때부터 재능을 발견할 수 있다"라는 진심 어린 말로 지도자로서의 새로운 삶을 공유했다.</p><p><br></p> \n<p><strong>또한, 그녀는 결혼 후에도 사회적 책임을 다하는 모습을 보여줬다. 결혼식에서 받은 축의금 5000만 원과 7000만 원을 소아환우를 돕기 위한 어린이 병원에 기부했다. 그녀는 "가르치는 과정에서 아이들에게 더 큰 관심을 느끼게 됐다. 그 관심이 이어져 제 아이를 가질 수 있게 됐다. 앞으로도 이런 의미 있는 일을 꾸준히 지속하려고 한다"라고 밝혔다.</strong></p><p><strong><br></strong></p> \n<p>손연재는 자신의 딸이 리듬체조를 배우는 것에 대해 "개인적으로는 시키고 싶지 않다"며, "정상까지 오는 과정이 매우 힘들다. 그 힘든 과정을 내 아이가 겪는 모습을 상상하는 것이 힘들다"라고 말했다.</p><p><br></p> \n<p>손연재는 지난해 8월 9세 연상의 금융업계 종사자와 결혼했고, 그녀는 "2022년 내 인생에서 제일 잘한 결정"이라며 결혼의 기쁨을 전했다. 최근 그녀의 SNS에는 남편에게 받은 선물과 그녀의 달콤한 부부 생활의 모습이 공개되며 많은 이들에게 부러움을 자아냈다.</p> \n<h3 class="sub_title"> \n \n소아 환자 \'가족 중심 돌봄\', 의료 현장서 활성화되려면?</h3> \n<table class="img_block" data-width="780"> \n <tbody> \n  <tr> \n   <td><img alt="사진=켄바" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/80bdc2f970644ff7a8ff13798bc79b78.jpg"><p class="img_cap">사진=켄바</p></td></tr></tbody></table> \n<p>가족 중심 돌봄 활성화를 위해 필요한 간호 인력과 교육 프로그램 강화에 대한 필요성을 주장하였다.</p><p><br></p> \n<p><strong>서울대 간호대학의 최근 연구 결과에 따르면, 가족 중심 돌봄은 아이들에 대한 전문 지식을 가진 가족과 의료 전문가 간의 협력을 포함한다. 이 연구는 어린이 병원에서 근무하는 162명의 간호사를 대상으로 설문 조사를 진행했다.</strong></p><p><strong><br></strong></p> \n<p>이 개념은 우리나라에서 아직 새롭지만, 입원 중인 아동의 가족이 병원에서 함께 지내면서 돌봄에 참여하는 것은 흔하다. 병동의 간호사와 가족 간의 교류는 가족 중심 돌봄이 얼마나 잘 실행되는지를 판단하는 중요한 요소라는 것이 연구팀의 주장이다.</p><p><br></p> \n<p>참여한 간호사 중 69.8%는 가족 중심 돌봄에 대해 알고 있었지만, 실제로 해당 교육을 받은 사람은 29.0%에 불과했다. 더욱이, 간호사들이 가족 중심 돌봄을 얼마나 잘 실천하고 있는지에 대한 평가는 그 인식도보다 낮게 나타났다.</p><p><br></p> \n<p><strong>실제로 간호사들에게 가족 중심 돌봄이 어떻게 실시되고 있는지 물었을 때, 평균 3.01점(5점 만점)의 점수를 받았다. 가장 큰 어려움으로 지적된 것은 간호 인력과 시간의 부족이었다.</strong></p><p><strong><br></strong></p> \n<p>연구팀은 간호 인력의 부족 문제를 해결하지 않으면 가족 중심 돌봄이 제대로 이루어지지 않을 것이라고 경고하였다. 그들은 또한 가족 중심 돌봄의 체계적인 교육 및 인프라 지원이 필요하다고 강조하며, 가족들이 의학적 용어나 치료 과정을 더 잘 이해할 수 있도록 도와주는 교육의 필요성을 지적하였다.</p><p><br></p><p>황미애 기자</p>',
                associatedLinks: [],
              },
              media: {
                idx: 603,
                name: '나남뉴스',
                key: 'nanamnews',
                url: 'https://www.nanamcom.co.kr',
                socialUrl: 'https://www.facebook.com/nanamnewsenter',
                profile:
                  '연예, 이슈, 스포츠, 라이프, 경제 등 인터넷 신문사이트로, “재미있고 스토리가 있는 뉴스”를 지양합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/05/24/11/a8b2ee87b7144b7e899254f062855ac1.jpg',
                createdAt: '2023-05-24 00:00:00',
                updatedAt: '2023-05-25 10:56:11',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['스포츠일반', '손연재 선수', '인물', '손연재', '손연재 임신', '손연재 근황'],
            },
            {
              idx: 102513,
              mediaName: '나남뉴스',
              title: '“이혼했습니다” 남현희, 이혼 소식과 동시에 열애 중',
              summaryContent:
                '“이혼했습니다” 남현희, 이혼 소식과 동시에 열애 중 펜싱 국가대표 출신 남현희 펜싱 국가대표 출신 남현희(42)가 이혼 소식과 동시에 열애 소식을 전하면서 그 배경에 관심이 집중',
              originUrl: 'https://www.nanamcom.co.kr/news/articleView.html?idxno=3924',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/24/13/f980bf98d79346eda0631605fd2c1883_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/nanamnews/102513',
              mobileUrl: 'https://m.hub.zum.com/nanamnews/102513',
              createdAt: '2023-08-25 00:00:00',
              updatedAt: '2023-08-25 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1"><p>“이혼했습니다” 남현희, 이혼 소식과 동시에 열애 중\n\n</p></blockquote><table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="펜싱 국가대표 출신 남현희" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/30a0eb2c1494464a8f5c08ddef9ca6e4.jpg"><p class="img_cap">펜싱 국가대표 출신 남현희</p></td></tr></tbody></table>\n<p>펜싱 국가대표 출신 남현희(42)가 이혼 소식과 동시에 열애 소식을 전하면서 그 배경에 관심이 집중되고 있다.</p><p><br></p>\n<p>남현희는 최근 자신의 인스타그램 계정을 통해 \'여러분들께 전하고 싶은 이야기가 있습니다\'라는 제목의 글을 게시했다.</p><p><br></p>\n<p>그녀는<strong> “어제 저에게 많은 분들께서 ‘이혼을 했느냐’라고 질문을 했습니다. 그 질문에 답을 하기 위해 많은 고민 끝에 글을 적습니다. 맞아요. 이혼했습니다”</strong>라고 밝혔다.</p><p><br></p>\n<p>남현희는 그동안 이혼 사실을 밝히지 못한 점에 대해 나름의 속사정이 있었다고 털어놨다.</p><p><br></p>\n<p>남현희는 <strong>“이러한 선택을 하기까지 말 못할 어려움들이 있었습니다. 저에게는 아주 소중한 아이가 있는데요. 그 아이에게 상처가 되는 것은 아닐까하는 조심스러운 마음에&nbsp;마음에 올바르지 않은 가정이라는 판단 속에서도 노력을 해 왔던 것 같습니다”</strong>라고 피력했다.</p><p><br></p>\n<p>그녀는 아내라는 위치에서 늘 최선을 다 해왔고&nbsp;아내로서, 엄마로서&nbsp;가정에 누가되거나 부끄러운 행동을 단 한 번도 하지 않았다고 전했다.&nbsp;</p><p><br></p>\n<p>특히 그녀는 이혼 사유에 대해 구체적으로 언급하지는 않았으나 배우자의 외도를 의심케 하는&nbsp;글을 남기기도 했다.</p><p><br></p>\n<p>남현희는 <strong>“평생을 함께 나아가기로 했던 상대방의 실수 또한 ‘서툴렀기에 실수였겠지’라는 마음으로 용서하고 품어왔었습니다. 그렇게 시간이 지나 ‘실수’라고 용서했던 문제의 요인이 다시금 반복됐습니다”</strong>라고 주장했다.</p><p><br></p>\n<p>이어 <strong>“상대방(배우자로 추정)이 가정이 아닌 다른 곳의 시선 돌림이 크나큰 상처를 안겨주었습니다. 이혼이란 것이 좋지 않은 일이기에 선뜻 많은 분들께 사실을 알리지 못하였지만 늦게 나마 이렇게 소식을 전하게 된 계기가 있습니다”</strong>라고 털어놨다.</p>\n<p><span></span></p><h3 class="sub_title">남현희 "평생 함께 할 사람 생겨"</h3>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="사진 출처: 남현희 인스타그램" src="http://static.hubzum.zumst.com/hubzum/2023/08/24/13/2d98e7e8c89541909d783da95d8ffad1.jpg"><p class="img_cap">사진 출처: 남현희 인스타그램</p></td></tr></tbody></table>\n<p>남현희는 이날 이혼 소식과 동시에 열애 소식을 전했는데 본인을 포함한 자녀에게 진실되고 맹목적인 사랑을 주는 사람이 생겼다고 고백했다. 그녀는 전 남편과 사이에 딸 하나를 두고 있다.</p><p><br></p>\n<p>그녀는<strong> “진실된 맹목적인 사랑을 주는 사람이 생겼습니다. 남은 제 삶에 있어 평생을 함께 할 사람이요. 그 사람으로 하여금 앞으로 더욱 더 단단한 남현희가 되어 여러분들께 변함없이 좋은 모습으로 지금 있는 그대로의 남현희가 되겠습니다”</strong>라고 밝혔다.</p><p><br></p>\n<p>한편&nbsp;1981년 경기도 성남시에서 태어난 남현희는 금빛초등학교, 성남여중, 성남여고를 졸업한 뒤 한국체육대학교, 경기대학교 대학원(석사)을 졸업했다.</p><p><br></p>\n<p>그녀는 지난 2008년 베이징 올림픽에서 대한민국 국가대표 펜싱선수로 출전해 은메달을 획득했으며 이후 2012년 런던올림픽에서 동메달을 획득했다.&nbsp;</p><p><br></p>\n<p>그녀는 아시안게임에서 6개의&nbsp;금메달과&nbsp;2개의 동메달을 획득하는 등 각종 대회에서 총 23개의 금메달과 6개의 은메달, 9개의 동메달을 따는 등 큰 성과를 남겼다.&nbsp;</p><p><br></p>\n<p>남현희는 예능 프로그램 &lt;노는 언니&gt;, &lt;골 때리는 그녀들&gt;에 출연하면서 얼굴이 알려졌다.</p><p><br></p><p><strong>박길홍 기자</strong></p>',
                associatedLinks: [],
              },
              media: {
                idx: 603,
                name: '나남뉴스',
                key: 'nanamnews',
                url: 'https://www.nanamcom.co.kr',
                socialUrl: 'https://www.facebook.com/nanamnewsenter',
                profile:
                  '연예, 이슈, 스포츠, 라이프, 경제 등 인터넷 신문사이트로, “재미있고 스토리가 있는 뉴스”를 지양합니다.',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2023/05/24/11/a8b2ee87b7144b7e899254f062855ac1.jpg',
                createdAt: '2023-05-24 00:00:00',
                updatedAt: '2023-05-25 10:56:11',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: [
                '스포스선수',
                '박현희',
                '펜싱 선수',
                '한국 펜싱 선수',
                '인물',
                '이혼',
                '국가대표',
              ],
            },
            {
              idx: 102505,
              mediaName: '한국경제',
              title: '\'40살 주부가 무슨 모델이냐\' 했는데…"연매출 20억씩 벌죠"',
              summaryContent:
                '15년차 주부에서 패션일 도전한 김은영 씨 \'히로인스\'서 운동 일지 올리며 자신감 얻어 중년 모델로 인기...한-중 오가면서 일해 "쇼핑몰도 창업 ... 연매출 20억원 올려요" ',
              originUrl: 'https://www.hankyung.com/life/article/202306163815i',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/23/16/e80332b130244bf487ba4a8301bdaafa.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/hankyung/102505',
              mobileUrl: 'https://m.hub.zum.com/hankyung/102505',
              createdAt: '2023-08-24 00:00:00',
              updatedAt: '2023-08-24 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1"><p>15년차 주부에서 패션일 도전한 김은영 씨</p> \n<p>\'히로인스\'서 운동 일지 올리며 자신감 얻어</p> \n<p>중년 모델로 인기...한-중 오가면서 일해</p> \n<p>"쇼핑몰도 창업 ... 연매출 20억원 올려요"</p></blockquote> \n<p>15년 동안 전업주부로 살았어요. 39살에 뒤늦은 사춘기가 왔죠. 이렇게 살다가는 우리네 엄마처럼 인생이 끝날 것 같다는 생각이 들었습니다. 떨어진 자존감을 되살린 것은 운동이었어요. 매일 운동을 마치고 커뮤니티에 기록을 올렸어요. 하기 싫었던 운동이 루틴이 되고, 체력이 붙고 건강해지자 무엇이든 할 수 있겠다는 자신감이 생겼죠. 그렇게 40대에 광고 모델에 도전을 했습니다. 주위에선 \'40대에 무슨 모델이냐\'며 비웃더군요. 광고모델과 피팅모델을 하면서 한국과 중국을 오가며 정신없이 일을 했죠. 그러다 코로나로 모델 일이 뚝 끊기자 이번엔 쇼핑몰에 도전했습니다. 이제는 연간 매출 20억원씩 올리는 \'운동하는 CEO\'로 제2의 인생을 살고 있죠. </p>\n<br> \n<div class="article-photo"> \n <table class="img_block" data-width="630"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/66db560752494a9a8101c4384204f860.jpg" alt="한국경제"><p class="img_cap">김은영 김여사몰 대표</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> 누군가의 엄마로 살던 한 중년 여성은 생각했다. \'이렇게 살다 죽을 순 없다\' 그렇게 맨땅에 헤딩하듯 모델을 시작했다. 10년간 광고모델과 피팅모델로 자리를 잡아가던 와중 코로나 위기가 닥쳤다. 한순간에 모델 일이 끊기자 이번에는 직접 쇼핑몰 창업에 도전했다. 대표이자 모델까지 도맡으면서 일주일에 6시간씩 촬영한다. 체력을 기르기 위해 새벽 5시에 일어나 러닝과 헬스도 한다. 어느새 4050 중년 여성 패션몰로 입소문이 났다. 운동맘 커뮤니티 히로인스에서 활동 중인 김은영(50) 씨의 이야기다. </p>\n<br>\n<p> <strong>Q. 자기소개 먼저 부탁드립니다.</strong> </p>\n<p>"40대에 쇼핑몰 대표에 도전한 김은영(50) 입니다. 24살에 결혼해서 15년간 전업주부로 살았어요. 39살에 뒤늦은 사춘기가 왔죠. 무료한 일상에 \'나는 누구인가\'라는 고민이 들더군요. 남은 인생은 누구 엄마, 아내가 아닌 제 이름으로 살고 싶었어요. 현관을 박차고 광고모델에 도전했죠. 한국과 중국에서 피팅모델을 했어요. 그러다 코로나가 터져 일자리가 사라졌죠. \'내가 한 번 차려볼까\' 생각에 쇼핑몰을 차렸죠." </p>\n<br>\n<p> <strong>Q. 몸이 매우 바쁘겠습니다.</strong> </p>\n<p>"쇼핑몰 대표이자 모델까지 겸하니 체력이 떨어지더군요. 일주일에 한 번은 6시간씩 촬영하고, 동대문 시장에서 샘플을 찾고, 코디를 짜고, 직접 기획도 하죠. 매일 5시에 일어나 1시간 30분 동안 운동장을 달리고 웨이트를 하죠. 출근은 9시에 하지만 퇴근 시간은 따로 없습니다. (웃음)" </p>\n<br>\n<p> <strong>Q. 운동하는 CEO로도 알려졌습니다.</strong> </p>\n<p>"운동하는 엄마들이 모인 커뮤니티 \'히로인스\'에서 활동 중입니다. 출산하고 나이가 들면서 엄마들은 자존감이 조금씩 떨어지거든요. 운동하면서 건강을 되찾으면서 다시 자신감이 붙더군요. 하루하루 서로 운동일지를 공유하면서 응원도 하고 위로를 얻었죠. 올해는 마라톤에도 도전했습니다. 처음에는 100m, 200m를 달리다 어느새 3㎞까지 늘렸죠. 올 3월 동아마라톤대회에서는 10㎞ 구간을 58분대에 통과했습니다. 커뮤니티 동료들이 없었다면 불가능했을 겁니다. 젊은 엄마들에게 자극도 받으면서, 50대에도 저처럼 건강한 몸을 만드는 사람이 있다고 알리고 있죠. (웃음)" </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="630"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/d64e596718a84429941ca70c03225a5a.jpg" alt="한국경제"><p class="img_cap">마라톤에 참가한 김은영 씨.</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> <strong>Q. 초기에 애로 사항이 있었나요.</strong> </p>\n<p>"피팅 모델만 했지, 쇼핑몰에 운영에 관해서는 하나도 몰랐습니다. 어디서 옷을 가져와야 하는지, 자사몰은 어떻게 만들고, 어디서 팔아야 하는지 전혀 몰랐죠. 1년간은 매일 울면서 일했습니다." </p>\n<br>\n<p> <strong>Q. 월 매출은 어느 정도 발생하시나요.</strong> </p>\n<p>"현재는 월평균 매출이 1억6000만원 정도 나옵니다. 2020년 7월에 오픈후 매년 늘고 있죠." </p>\n<br>\n<p> <strong>Q. 초기 비용은 어느 정도 들었나요.</strong> </p>\n<p>"초기 자본은 1억원을 가지고 시작했죠. 사무실을 얻고, 쇼핑몰을 만들고, 직원 채용, 스튜디오, 프리랜서 포토 비용 등이 들어갔어요. 아직은 자체 제작 없이 동대문 사입 형태로 운영하고 있습니다. 잘 팔리는 물건을 미리 사놓아야 하죠. 안 팔리면 재고를 고스란히 떠안아야 합니다." </p>\n<br>\n<p> <strong>Q. 순수익을 벌기까지 어느 정도의 시간이 걸렸나요.</strong> </p>\n<p>"2년 정도 걸렸습니다. 그동안 사무실을 2번 이사했고, 직원도 저 포함 2명에서 9명으로 늘어났거든요. 재투자하는 시간이었죠. 회사가 계속 성장하고 발전해야 하니 지금도 계속 투자 중입니다." </p>\n<br>\n<p> <strong>Q. 쇼핑몰 노하우가 있나요.</strong> </p>\n<p>"아직도 배우는 중이지만, 피팅 모델로 7~8년을 일하면서 중년 패션몰에서 얼굴이 알려져 있었습니다. 중년 여성들은 모델 얼굴이나 분위기를 보시고 본인과 맞으면 계속 찾거든요. 초반 2년 정도는 모든 후기에 답글을 달아 드렸었죠. 고객들이 원하는 것을 알게 되고 피드백을 받았죠. 사무실 위치는 동대문 매입처와 가까운 곳에 자리를 잡았습니다. 그래야 시장을 자주 나가서 새로운 상품을 볼 수 있죠." </p>\n<br>\n<br>\n<div class="article-photo"> \n <table class="img_block" data-width="630"> \n  <tbody> \n   <tr> \n    <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/212495c398614cdb91811837fe8598af.jpg" alt="한국경제"><p class="img_cap">매일 운동 루틴을 커뮤니티 \'히로인스\'에 기록 중인 김은영 씨.</p></td> \n   </tr> \n  </tbody> \n </table> \n</div> \n<p> <strong>Q.재고를 쌓지 않는 비결이 있나요.</strong> </p>\n<p>"중년 여성들이 점점 젊어지고 있어요. 운동하면서 자기관리 하는 분들도 많고, 자신만의 전문적인 일을 하는 분도 많아졌죠. 20·30대 트렌드를 잘 지켜보면서 중년 패션에도 조금씩 맞춰가고 있죠. 시장을 자주 나가고 브랜드들이 최근 어떤 제품들을 출시하고 있는지도 살펴보죠. 백화점 중년 코너도 자주 간답니다. 편하면서도, 세련되고 사이즈가 넉넉해서 활동에 불편함이 없는 옷들을 구하죠. 촬영 전에는 일일이 입어 보고 원단을 확인한 뒤에 촬영합니다. 동대문 사입기반이라 재고는 많지 않지만, 그래도 쌓이기는 해요. 1년에 두 번 정도는 반값 이벤트를 통해 소진하고 있죠. (웃음)" </p>\n<br>\n<p> <strong>Q. 퇴직자나 제2 인생을 꿈꾸는 이들에게 어떤 점을 추천하시나요.</strong> </p>\n<p>"피팅 모델을 10년간 했지만, 직접 쇼핑몰을 운영하는 것은 완전히 다른 분야입니다. 시간과 비용이 꽤 들어가죠. 트렌드 변화도 너무 빠릅니다. 굳이 쇼핑몰이 아니더라도 일은 꾸준히 하는 것을 추천해 드려요. 중년과 시니어의 시간이 길거든요. 체력도 필요하니 운동은 필수입니다." </p>\n<br>\n<p> <strong>Q. 주변인들의 반응은 어땠나요.</strong> </p>\n<p>"제가 처음 모델을 한다고 했더니 주위에서 \'40살이 무슨 모델이냐? 편하게 살 나이인데 뭐 하러 굳이 고생길 가느냐? 잘되나 두고 보자\'는 반응이었죠. 이제는 응원이 많아졌어요. 꿈에 늦은 나이는 없다는 것을 증명했으니까요. (웃음)" </p>\n<br>\n<p> <strong>Q. 개인의 삶에 영향을 끼친 것도 있을까요.</strong> </p>\n<p>"어린 시절 시골집 평상에 누워 하늘의 별을 보며 꿈을 꾸었던 때처럼, 지금도 꿈을 꾸고 도전하는 삶을 살고 있어요. 운동을 통해 나 자신을 사랑하는 법을 배웠죠. 사업을 통해 다양한 사람들을 만나고 소통하면서 훨씬 젊게 살아가고 있습니다." </p>\n<br>\n<p> <strong>Q. 마지막으로 한 말씀 부탁드립니다.</strong> </p>\n<p>"많은 중년 여성들이 아셨으면 좋겠어요. \'내 삶은 오롯이 내 것\'이라는 걸요. 늦은 나이라는 것은 없어요. 뭐라도 하나씩 시작해도 좋은 때입니다. 안락한 현관문을 여는 것은 쉽지 않아요. 하지만 그 문을 열지 않으면 우리는 우리의 엄마와 똑같은 삶을 살아가게 됩니다. 새로운 세상에서 우리 모두 함께 조금씩 성장합시다." </p><p><br></p>\n<p> 평생직장이 사라진 시대, 여러 직업을 가지는 \'N잡\'은 선택이 아닌 필수가 됐습니다. N잡 뿐만 아니라 NEW잡을 만들어가는 이들의 이야기를 다룬 는 매주 일요일 연재됩니다. 기자페이지를 구독하면 기사를 놓치지 않고 받아볼 수 있습니다. 좋아요는 큰 힘이 됩니다. </p>\n<br>방준식 기자 silv0000@hankyung.com<br>',
                associatedLinks: [],
              },
              media: {
                idx: 74,
                name: '한국경제',
                key: 'hankyung',
                url: 'http://www.hankyung.com/',
                socialUrl: '',
                profile: '지혜로운 사람들이 선택하는 지혜로운 신문',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2015/12/28/11/393228f0f2854cd59e5f4c2a1f1a17ed.jpg',
                createdAt: '2015-07-01 01:48:00',
                updatedAt: '2022-07-04 11:41:04',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: [
                '40대 모델',
                '중년 창업',
                '전업 주부 모델',
                '쇼핑몰 창업',
                '중년 모델',
                '라이프스타일',
                '전업 주부 창업',
              ],
            },
            {
              idx: 102504,
              mediaName: '조선일보',
              title: '이발만 60년 이남열 “아직도 통달을 못해 오늘도 배웁니다”',
              summaryContent:
                '[아무튼, 주말] 95년 된 서울 最古 이발소 성우이용원이 지켜온 것 ‘나’는 피대(皮帶)다. 요즘 사람들은 알는지. 면도날을 세울 때 바로 나, 말가죽만 한 것이 없다는 것을. ',
              originUrl:
                'https://www.chosun.com/national/weekend/2023/08/19/2P4AOP2O2ZC3JNRG3GWGQYVXFE/?utm_source=zum&utm_medium=original&utm_campaign=news',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/23/16/a6bf8f0b727b4491a3c34c75584fb1d6.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/chosun/102504',
              mobileUrl: 'https://m.hub.zum.com/chosun/102504',
              createdAt: '2023-08-25 00:00:00',
              updatedAt: '2023-08-25 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<blockquote class="se2_quote1" style=""><p>[아무튼, 주말]</p>\n<p>95년 된 서울 最古 이발소</p>\n<p>성우이용원이 지켜온 것</p></blockquote>\n<p>‘나’는 피대(皮帶)다. 요즘 사람들은 알는지. 면도날을 세울 때 바로 나, 말가죽만 한 것이 없다는 것을. </p>\n<br>\n<p>우리 집은 마포에서 서울역으로 넘어가는 만리재 골목에 있다. 서울에서 제일 오래된 이발소, 95년 된 성우이용원. 이곳의 두 번째 주인 고(故) 이성순이 1950년대 주한미군 PX에 걸려 있던 나를 들였다. 그의 아들 이남열(74)의 손에 대물려 이 집에서만 70년을 살았다. 그동안 복숭아 나무와 호박, 송이버섯이 지천이던 만리재 골목에는 아스팔트 길이 깔렸다. 고물이라고? 이곳에선 청춘이다. 90년 된 드라이기, 제조연도 ‘1934년’이 새겨진 면도칼도 현역이다. </p>\n<br>\n<p>요즘에는 오래된 이발소들도 일회용을 쓴다지만, 이곳 주인은 오늘도 독일제 ‘쌍둥이표’ 면도칼을 숫돌에 갈고 내 몸에 문질러 가지런히 고른다. 150살 먹은 면도칼의 상아 손잡이는 세월에 누렇게 바랬지만 칼날만큼은 새것처럼 날카롭다. </p>\n \n    <table class="img_block" data-width="780">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/0818e57240e94b1c927477a25433fc69.jpg" alt="조선일보">\n                    <p class="img_cap">서울 마포구 공덕동 \'성우이용원\'의 이남열 이발사가 40년 단골 손님의 머리를 깎고 있다. 이 이발사는 "가위 날을 제대로 갈면 머리카락이 사방으로 튀지 않고 밑으로 뚝뚝 떨어진다"며 "연장을 완벽하게 관리하는 것이 이발사의 기본 자세"라고 했다. /장은주 영상미디어 객원기자</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n<p> <b><b>◇3대(代)째 만리재 이발소</b></b> </p>\n<br>\n<p>“1928년 1월에 외할아버지가 여기 만리재에 들어왔어요. 일본인한테 이발을 배워서 조선인으로는 두 번째로 이용사 면허증을 땄대요. 함자가 서재덕이에요. 이 건물, 당시 초가집을 사서 이발소를 열었죠. 우리 아버지는 이발소 직원이었는데 성실하고 기술 좋으니까 외할아버지가 마음에 들어서 사위로 맞은 거예요. 그러고 이발소를 물려준 거예요. 아버지는 이름 이성순에서 ‘성’자를 따서 ‘성우이발관’이라고 이름을 지었어요.” </p>\n<br>\n<p>성우이용원 3대 주인인 이남열 이발사는 1949년 칠남매 중 다섯째로 태어났다. 초등학교 5학년이 되자 아버지는 면도칼과 가위 가는 법을 가르쳐주고는 매일 벼리도록 했다. 3년을 지루한 연장 갈이만 시키니, 두 형은 진작에 나가떨어졌다. 혼자 3년을 버티자 중학교 2학년부터는 손님 머리를 깎게 했다. 그때 이발 가격이 80원이었다. </p>\n<br>\n<p>이남열은 중학교를 졸업한 1965년부터 이발소를 맡았다. 형들을 제치고 가업을 물려받았지만 일할수록 기쁘기보다 “징글징글했다”고 했다. 가위가 아니라 총대를 쥔 것 같았다. 뼈 빠지게 일해서 형들 장가, 누이들 시집 보내고 두 동생 대학도 보냈다. 이러다간 아홉 식구와 처가까지 먹여 살린다고 평생 좁은 이발소에서 남들 머리만 깎은 아버지처럼 살게 될 것 같았다. “무지무지 싫었어요. 여기만 있으면 답답하고 낙이 없잖아. 평생 이것만 하다 죽겠더라니까.” </p>\n<br>\n<p>그길로 뛰쳐나가 닥치는 대로 일을 찾아서 했다. 트랜지스터 라디오, 양은솥, 자동차 엔진을 만들었다. 타일을 붙이고 재봉틀 돌리고 건축 현장에서 등짐도 지면서 “이발 빼고도 열다섯 가지 일을 해봤다”고 했다. 그런데 하나같이 위험하거나 고되어 평생 삼고 싶은 업이 없었다. </p>\n<br>\n<p>일주일에 닷새는 밖으로 나돌고 이틀은 돌아와 머리를 깎았다. 이윽고 이발소는 직원들에게 맡겨 놓고 아예 전국을 떠돌면서 세상 구경을 했다. 강원도부터 제주도까지 산골과 바닷마을을 다니며 어르신들 머리를 잘라주고 밥을 얻어먹었다. “전국 팔도 어디에도 나만큼 기술 좋은 이발사가 없더란 말이야. 사람들 머리 깎아주는 게 살길이구나 깨달았지 뭐.” </p>\n<br>\n<p>그맘때 꿈에 산신령이 나타나 호통을 쳤단다. 여기서 뭘 하고 있느냐고, 얼른 집으로 올라가라고. 묘한 기분이 들어 돌아왔더니 이발소에 손님이 없어 망하기 일보 직전이었다고 한다. 서른일곱, 직원 셋을 모두 정리하고 혼자 손님을 받기 시작했다. 이듬해 사촌동생 소개로 강화도 방직공장에서 일하던 아홉 살 연하의 아내를 만나 늦장가를 들고 외동아들을 낳았다. </p>\n<br>\n<p>이발은 비눗물을 머리에 바르는 일로 시작된다. 분무기로 칙칙 뿌리지 않고 부드러운 토끼털 붓으로 살살 둥글리며 바른다. 한 사람 머리를 자를 때 한 시간쯤 걸린다. 최소 3~4개의 가위와 빗을 대고, 감자 전분을 톡톡 칠해 튀어나온 머리를 한 올 한 올 다듬는다. 마지막에는 반드시 파란 물뿌리개와 식초물로 머리를 감긴다. 외할아버지부터 이어온 이발 방식을 고집스럽게 지킨다. </p>\n<br>\n<br>\n<div class="article-photo">\n    <table class="img_block" data-width="780">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/705f90141046488f85923c2a1746aba5.jpg" alt="조선일보">\n                    <p class="img_cap">성우이용원의 옛 모습을 담은 사진들. /장은주 영상미디어 객원기자</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<p> <b><b>◇위기의 이발소, 그래도 지조를 지켰다</b></b> </p>\n<br>\n<p>“고종의 단발령 이후 호황을 누리던 이발소가 울상이 된 것이다. 장발 풍조로 손님이 줄자 먹고 살기 위해 값을 올려야 했고, 그 방법으로 칸막이 서비스를 제공하는 변태를 벌이다, 사회 문제로 지탄을 받게 됐다. 설상가상으로 청소년들 머리 자유화로 손님은 더 줄고 남학생의 미장원 출입이 잦아졌다. 구태여 퇴폐라는 곳에, 비싼 곳에 갈 필요가 없다는 말이다.” </p>\n<br>\n<p>1983년 7월 20일 자 조선일보 만물상은 이발소에 대해 이렇게 썼다. 당시 보건사회부 조사 결과 이용업소 40%가 퇴폐 행위를 한다는 통계도 있다. </p>\n<br>\n<p>퇴폐 이발소 이야기를 꺼내자 이남열 이발사는 넌더리를 냈다. 교도소에서 이발 기술을 배우고 나온 출소자들이 면허를 따서 우후죽순처럼 이발소를 차렸다고 했다. 정도(正道)로는 장사가 안 되니 커튼이나 칸막이로 밀실을 설치해 놓고 여자 종업원을 고용해 성매매를 하는 곳들이 판쳤다. </p>\n<br>\n<p>“말도 마요. 내가 퇴폐 이발소 때문에 제때 장가를 못 들었다고. 삼색등을 달아놓고 그짓들을 하잖아. 이발사라고 하면 이미지가 아주 더러웠지. 나는 돌아오고부터 남자든 여자든 종업원을 한 명도 안 썼어요. 그렇다고 ‘모범 이발관’이라고 유세도 안 떨었어요.” </p>\n<br>\n<p>조용히 지조를 지켰더니 볕이 들었다. 1990년대 후반, 외환위기가 터지고 많은 이발소가 문을 닫았지만 성우이용원에는 손님이 줄을 이었다. 한 사람 한 사람 정성을 쏟아 보통 이발소보다 2~3배 시간이 걸리는 그의 손에 ‘돈깨나 벌던 양반’들이 머리를 맡겼다고 했다. </p>\n<br>\n<p>“그때 노났지. 저 청파초(이발소에서 300m쯤 떨어져 있다)까지 줄을 섰다고. 한 사람 깎아서 4000원 받을 때인데 한 달에 500만원씩 벌었어. 그렇게 2년 정도 버니까 연립주택이 떨어지더라고.” </p>\n<br>\n<br>\n<div class="article-photo">\n    <table class="img_block" data-width="700">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/4aa0001a8d94441e9db7ef106b3ec147.jpg" alt="조선일보">\n                    <p class="img_cap">이발소 내부. 이발 의자에 피대가 걸려 있다. /장은주 영상미디어 객원기자</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<p> <b><b>◇이발사의 기쁨과 슬픔</b></b> </p>\n<br>\n<p>좋은 이발이란 무얼까. “깎은 티가 나면 그건 나쁜 이발이에요. 가위나 기계(바리캉) 댄 흔적이 없이 길이만 짧게 하는 것. 머리가 난 방향대로, 원래 그런 것처럼 자연스러워야지. 석 달이 지나도 지저분하지 않고 그저 깎아내면서 그 형태를 유지하게끔 하는 게 기술이에요.” </p>\n<br>\n<p>손님의 콤플렉스를 포착해 슬쩍 보완해 주는 것이 ‘플러스 알파’다. 주걱턱, 넙데데한 광대, 납작한 뒤통수 같은 단점을 머리 스타일로 가려주면 100% 웃돈(팁)이 나온다고 했다. 이발사의 보람을 묻자 이남열 이발사는 이렇게 답했다. “내가 봐도 기가 막히게 깎아놨는데 손님이 팁까지 얹어 주면, 그게 최고로 만족했다는 거야. 손님 기분 좋게 만들어주는 것이 내 일이오. 오죽하면 옛말에 ‘하루를 행복하려면 이발을 하라’고 했겠어요.” </p>\n<br>\n<p>‘가위손 인생’을 후회한 적도 있을까. 연장 서랍 밑을 뒤적이더니 메모 뭉치를 꺼내 보여준다. 비오는 오후 손님을 기다리며, 혹은 ‘진상’ 고객이 다녀간 밤에 이따금 적어 내려간 일기다. </p>\n<br>\n<p>“이발사의 업. 성도 이름도 모른다. 단 얼굴만 기억할 뿐이다. 어디에서 왔는지도 모른다. 문을 열고 들어오면 ‘안녕하십니까? 어서 오십시오’로 시작이 된다. 사각사각 헤어스타일이 마무리된다. 아쉬움과 함께 ‘안녕히 가십시오’로 끝난다. 왜 이발일이란 통성명이 필요 없을까? 요구하면 거리가 멀어지며 끊어질 가능성이 높아진다. (…) 하루도 아닌 반세기 똑같이 반복하고 있다. 어떤 때는 서글프기만 하다. 서로가 믿음은 있되 친밀감이 없는 사이일 뿐이다. 왜 그럴까? 서비스업의 생태일까? 안쓰럽고 측은하며 아쉬움이 많이 남는 것이다. 나에게 아직 종교는 없다마는 이럴 때 ‘오~ 신이시여 굽어 살피소서’라는 말을 하고 싶다. 좋은 직업일까? 묻고 싶다.” </p>\n<br>\n<p>그림을 그려 이만큼 벌어 먹고 살 수 있었다면 그는 화가가 됐을 거라고 했다. 어디서 배운 적은 없지만 예순 넘어 크로키를 하기 시작했다. 이발소 곳곳에 고이즈미 전 일본 총리, ‘낭만논객’ 고 김동길 박사, 이건희 삼성그룹 선대 회장 초상화를 찾을 수 있다. 그가 그린 얼굴들은 입매와 눈빛에 힘이 있다. “내가 봤을 때 카리스마가 있는 사람, 비범한 사람을 주로 그린다”고 했다. </p>\n<br>\n<p>보람있고도 서글픈 이발사의 길을 아들에게 물려줄 생각이 있는지 물었다. 단골 손님 사이에서도 ‘성우이용원 4대 이발사’가 나올지는 초미의 관심사다. </p>\n<br>\n<p>“(아들이) 얼마 전엔 이발 배우려면 몇 년 걸리냐고 물어보더라고. 관심이 생긴 모양이야. 지금 유통 회사에서 팀장을 하고 있으니 사람 대하는 법은 얼추 배웠어요. 이발사 기술의 절반은 사람 다루는 일이야. 이발 기술은 지가 평생 배워가면 되는 거지.” 그러고선 소매를 걷어 올려 딴딴한 삼두 알통을 뽐내며 말했다. “일단 100년까지는 내가 거뜬히 할 거라고, 하하!” </p>\n<br>\n<br>\n<div class="article-photo">\n    <table class="img_block" data-width="780">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/43398e312d7149dea7be18ebf117bdb1.jpg" alt="조선일보">\n                    <p class="img_cap">성우이용원의 현재 외관. 오랫동안 옛 모습을 간직했던 성우이용원은 2019년 태풍으로 건물 일부가 무너지자 서울시의 지원을 받아 조립식 건물로 리모델링했다. /장은주 영상미디어 객원기자</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<p> <b><b>◇이건희 회장 머리도 깎았다</b></b> </p>\n<br>\n<p>이발쟁이라고 무시하는 이들은 있지만 이발은 전쟁통에도 외환위기 때도 꼭 필요했다. 그것은 곧 남자의 품위를 지키는 일이라고 이남열 이발사는 믿는다. “어떤 손님들은 나더러 이발사가 아니라 조각가라고 하더라고. 깎는 게 아니라 빚는다고.” </p>\n<br>\n<p>최고의 기술이 들어간다고 생각하는 머리는 이른바 ‘중령 머리’다. 소령도 대령도 아닌 중령 머리는 대관절 뭔가. 그에 따르면 ‘옆머리를 너무 바짝 깎아 피부색이 드러나면 안 되고, 발라 넘기면 깔끔하게 이마가 드러나면서도 적당한 볼륨감이 있어 점잖은 인상을 주는 머리’라고 했다. </p>\n<br>\n<p>중령 머리를 잘해선지 이발소에는 경찰이나 군인들이 많이 드나들었다. 기억에 남는 단골 손님은 박정희 전 대통령의 경호원. 1980년대부터 2012년 박근혜 전 대통령이 당선될 때까지 30년 넘게 다녔다고 했다. </p>\n<br>\n<p>“해병대 대령 출신이었어요. 그 경호원이 나더러 ‘각하 머리를 깎아드리게 해야 하는데 청와대 못 데리고 들어가서 미안하다’고 늘 그랬어요. 우리 외숙부가 납북됐거든. 거기서 살려니까 충성을 한 거예요. 북에서 국가보위부 차장까지 했으니까 연좌제로 내가 청와대는 못 들어가지.” </p>\n<br>\n<p>이건희 회장도 몇 차례 찾아왔다. 첫 방문은 2011년 2월 7일, 오후에 전화가 한 통 걸려와 ‘저녁에 이발을 할 수 있겠냐’고 했다. 해가 지고 새까만 고급 승용차가 가게 앞에 서더니 이 회장이 혼자 걸어 들어왔다고 한다. 이발사는 단박에 알아봤지만 놀란 체는 안 했다. 이 회장은 조용히 이발 의자에 앉아 머리를 맡기곤, 한마디만 남기고 갔다. “전통 이발 잘 하고 갑니다.” </p>\n<br>\n<p>그 후로 이 회장은 예닐곱 번 더 찾아왔다. 손님은 어떻게 해달라는 말도 없이 자리에 앉고, 이발사는 어떻게 해드리냐 묻지 않고 가위질을 했다. 2만5000원을 꼭 맞춰 준비해 와서 주고 갔다. </p>\n<br>\n<p>이건희 회장 얘기에 머리 깎는 손님도, 기다리던 손님도 한마디씩 하며 이발소가 술렁술렁해졌다. 머리숱은 많았느냐, 성격은 어땠느냐 질문에 “이발사와 손님 간의 신뢰”라며 말을 아꼈다. </p>\n<br>\n<p>순서를 기다리던 용산구 정씨가 대신 우스갯말을 한다. “그 양반, 하늘나라 가서 정주영 회장이랑 만났다면서요. 그런데 둘이 막걸리 한잔을 못 했다는 거 아녜요.” 왜냐고 묻자 답하기를, “둘 다 돈을 한 푼도 안 가져갔잖어!” </p>\n<br>\n<p>머리 깎던 김씨가 피식한다. “그렇긴 하네.” 95년 한자리를 지키는 이발소는 어떤 날은 동네 사랑방이 된다. </p>\n<br>\n<br>\n<div class="article-photo">\n    <table class="img_block" data-width="700">\n        <tbody>\n            <tr>\n                <td><img src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/1582286051534418b9f3124efd60fcd1.jpg" alt="조선일보">\n                    <p class="img_cap">이남열 이발사가 면도칼을 말가죽 피대에 긁어 날을 세우고 있다. 피대는 아버지가 1950년대 미군 PX에서 구입해서 쓰다가 물려준 것이다. /장은주 영상미디어 객원기자</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<p> <b><b>◇지켜온 것과 바꿔가는 것</b></b> </p>\n<br>\n<p>“아버지한테 배운 기술은 지금 다 없어졌어요. 내가 새로 익히고 바꾼 거예요. 이 터, 그리고 정신적인 것만 남았어요.” </p>\n<br>\n<p>대를 이은 정신은 첫째, 도구를 완벽하게 관리해야 한다는 것이다. “대팻날을 잘 가는 목수가 마름질도 잘하지. 이발도 연장 잘 가는 사람이 기술도 좋아요. 연장 갈 줄 모르는 사람한테 머리를 깎지 말라는 얘기야.” 빗 하나도 질긴 종이에 빗살을 다듬어 쓴다. </p>\n<br>\n<p>누가 시키지도 않지만 유니폼처럼 매일 흰 옷을 입고 출근하는 것도 같은 뜻이다. “원래 이발사는 흰 옷을 입어야 돼. 면도칼 하나도 피부에 닿는 거니 먼지 한 톨 없이 깨끗하게 관리해야지 않겠어요? 위생을 다루는 일이야. 그러니 이발사는 흰 옷이 가운이고 제복이지.” </p>\n<br>\n<p>그리고 하루의 맨 처음과 마지막 손님에게 정성을 들이는 것이다. 첫 손님은 마수걸이니 하루 장사가 잘 되려면 당연히 흡족하게 깎아야 한다. 더 어려운 것이 마지막 손님에게 최선을 다하는 일. ‘이것만 하고 들어가 쉬어야지’ 하는 마음을 접어두고 손님이 끝 순서인 것을 모르게 하는 것이 외할아버지부터 아버지를 건너 물려받은 원칙이다. </p>\n<br>\n<p>그는 “지킬 것과 바꿀 것이 각각 있는 것”이라고 했다. 면도칼과 가위는 제 손에 맞는 것으로 새로 사서 길들였다. 이곳에서 제일 나이가 많은 150살 난 면도칼은 1966년에 퇴직하는 일본인 이발사에게 1200원 주고 산 것. 날 가는 법은 일본 이발사에게 다시 배웠다. 아버지는 끝내 익히지 못했던 전동 바리캉도 아들은 혼자서 배워 능숙하게 다룬다. </p>\n<br>\n<p>“숱가위가 옛날에는 15발짜리밖에 없었어요. 그걸로는 숱밖에 못 쳤지. 그런데 시간이 흐르면서 25발, 27발, 30발짜리도 나오더라고. 내가 지금 제일 많이 쓰는 건 40발짜리예요. 저걸 갖고 어느 정도 깎아 놓고 민짜 가위로 다듬어 보니 멋있는 머리가 나오더라는 거야. 이렇게 기술은 한이 없어요. 몇 년 했다고 유세 떠는 건 순 가짜들이야. 스스로 개발하지 않으면 100년을 한대도 이름값을 못 하거든.” </p>\n<br>\n<p>일흔넷 이발사는 아직도 통달을 못해 오늘도 배운다고 했다. 95년 된 이발소에서 70년 된 피대로 면도날을 세우고 60년째 가위를 쥐고도. </p>\n<br>\n<p> [김은경 기자]</p>',
                associatedLinks: [],
              },
              media: {
                idx: 268,
                name: '조선일보',
                key: 'chosun',
                url: 'http://www.chosun.com/',
                socialUrl: '',
                profile: '대한민국 대표신문 조선일보',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2017/03/03/09/40461507f5604b1caacac09c365faebc.jpg',
                createdAt: '2017-03-03 09:49:00',
                updatedAt: '2023-02-02 16:03:00',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['성우이용원', '라이프스타일', '이발사', '이발소', '만리재 이발소'],
            },
            {
              idx: 102503,
              mediaName: '나무신문',
              title: '하늘과 땅, 목재가 만들어낸 그림 같은 집',
              summaryContent:
                '“하늘과 땅이 아름답게 어우러져 마치 자연 그 자체가 집 안으로 스며드는 듯한 아름다움을 담고 있는 집.” 인천 강화에 최근 중목구조 목조주택으로 지어진 이 집의 전체적인 디자인 ',
              originUrl: 'http://www.imwood.co.kr/news/articleView.html?idxno=30526',
              thumbUrl:
                'https://static.hubzum.zumst.com/hubzum/2023/08/23/16/6738d8607f924a539ba6d34ebdd16214_640x480c.jpg',
              hasMovie: false,
              card: false,
              associatedLinkExpose: false,
              state: 'ACTIVE',
              pcUrl: 'https://hub.zum.com/namushinmun/102503',
              mobileUrl: 'https://m.hub.zum.com/namushinmun/102503',
              createdAt: '2023-08-25 00:00:00',
              updatedAt: '2023-08-25 00:00:01',
              mainCategoryKey: 'LIFE',
              detail: {
                content:
                  '<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/ab3395ba6fc648e8874c18201d19e31a.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<p>“하늘과&nbsp;땅이&nbsp;아름답게&nbsp;어우러져&nbsp;마치&nbsp;자연&nbsp;그&nbsp;자체가&nbsp;집&nbsp;안으로&nbsp;스며드는&nbsp;듯한&nbsp;아름다움을&nbsp;담고&nbsp;있는&nbsp;집.”&nbsp;인천&nbsp;강화에&nbsp;최근&nbsp;중목구조&nbsp;목조주택으로&nbsp;지어진&nbsp;이&nbsp;집의&nbsp;전체적인&nbsp;디자인&nbsp;컨셉이다.&nbsp;</p>\n<p> 넓은&nbsp;창문으로&nbsp;햇살이&nbsp;들어와&nbsp;공간을&nbsp;밝고&nbsp;따뜻하게&nbsp;만들어주고&nbsp;그림&nbsp;같은&nbsp;풍경을&nbsp;눈앞에&nbsp;펼쳐놓는다.&nbsp;자연과&nbsp;조화로운&nbsp;감성이&nbsp;흐르는,&nbsp;모든&nbsp;계절&nbsp;안에서&nbsp;즐길&nbsp;수&nbsp;있는&nbsp;집이다.</p>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/55a88715e90143b98f32b748faf0094d.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/242370a8dbf94763a6791efdce903677.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<p><b>원목&nbsp;자체가&nbsp;주는&nbsp;자연스러운&nbsp;질감</b></p>\n<p> 무게감이&nbsp;느껴지는&nbsp;외장재로&nbsp;마감해&nbsp;고급스러움과&nbsp;안정감을&nbsp;동시에&nbsp;담았다.&nbsp;삼나무보다&nbsp;단단하고&nbsp;선명한&nbsp;목질과&nbsp;밝은&nbsp;색상,&nbsp;촘촘한&nbsp;나이테가&nbsp;인상적인&nbsp;레드파인&nbsp;집성목을&nbsp;써서&nbsp;계절의&nbsp;변화에도&nbsp;강하게&nbsp;대응하면서도,&nbsp;또&nbsp;시간의&nbsp;흐름에&nbsp;따라&nbsp;운치&nbsp;있는&nbsp;모습을&nbsp;갖추도록&nbsp;했다.&nbsp;</p>\n<p> 우드선&nbsp;관계자는&nbsp;“원목&nbsp;자체가&nbsp;주는&nbsp;자연스러운&nbsp;질감으로&nbsp;단조롭기&nbsp;쉬운&nbsp;공간에&nbsp;풍성한&nbsp;이야깃거리를&nbsp;만들어내는&nbsp;시간은&nbsp;어느&nbsp;과정보다&nbsp;감동스럽기만&nbsp;하다”며&nbsp;“황혼이&nbsp;내린&nbsp;노을의&nbsp;색깔로&nbsp;물든&nbsp;하늘과&nbsp;저녁&nbsp;태양이&nbsp;서서히&nbsp;지는&nbsp;땅이&nbsp;배경이&nbsp;되는&nbsp;아름다운&nbsp;풍경을&nbsp;그린&nbsp;그림과도&nbsp;같은&nbsp;집”이라고&nbsp;자평했다.</p>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="거실." src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/6a1b5b87760f47c491c4c4539578bde6.jpg">\n                <p class="img_cap">거실.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="거실." src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/15a81ca2bec542cc949c291bc388cb95.jpg">\n                <p class="img_cap">거실.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="거실." src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/63d5b3667b2648888e8db604c85b1b91.jpg">\n                <p class="img_cap">거실.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p>그는&nbsp;또&nbsp;“그&nbsp;눈부시게&nbsp;환하고&nbsp;따뜻한&nbsp;햇살이&nbsp;내리쬐는&nbsp;큰&nbsp;창문들은&nbsp;마치&nbsp;자연&nbsp;그&nbsp;자체를&nbsp;집&nbsp;안으로&nbsp;초대하며,&nbsp;집&nbsp;안에서는&nbsp;온기로&nbsp;가득한&nbsp;감성적인&nbsp;느낌이&nbsp;흐르는&nbsp;멋진&nbsp;자연&nbsp;풍경과&nbsp;공간이&nbsp;조화롭게&nbsp;어우러져&nbsp;마치&nbsp;어느&nbsp;작품&nbsp;속에&nbsp;들어온&nbsp;것&nbsp;같은&nbsp;착각을&nbsp;불러일으킨다”면서&nbsp;“집&nbsp;안의&nbsp;컬러&nbsp;팔레트는&nbsp;자연의&nbsp;다양한&nbsp;색상을&nbsp;반영해&nbsp;따뜻하고&nbsp;부드러운&nbsp;톤으로&nbsp;꾸며졌다”고&nbsp;덧붙였다.</p>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/4aa958b8802c43f893cf90629d665bd9.jpg">\n                <p class="img_cap">다용도실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/fec275766b99420bb4b5c7141f953304.jpg">\n                <p class="img_cap">다용도실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/6ad4b40e462241f0ada6792ee55f2302.jpg">\n                <p class="img_cap">식당</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/d3ed9f650ba243f89af70a9c499cb6ed.jpg">\n                <p class="img_cap">식당</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/9273329173194778b00183df5314a11c.jpg">\n                <p class="img_cap">주방</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="780">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/7c251b11e2f7478b9a70f1494ad7b9f9.jpg">\n                <p class="img_cap">식당 한실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p><b>실내&nbsp;정원은&nbsp;마치&nbsp;작은&nbsp;낙원&nbsp;같아서</b></p>\n<p> 실내&nbsp;장식과&nbsp;가구들도&nbsp;세련되게&nbsp;배치돼&nbsp;있어서&nbsp;집&nbsp;안에서도&nbsp;고요하면서도&nbsp;아름다운&nbsp;분위기가&nbsp;흐르도록&nbsp;했다.&nbsp;향기로운&nbsp;식물들과&nbsp;꽃들이&nbsp;자리한&nbsp;실내&nbsp;정원은&nbsp;마치&nbsp;작은&nbsp;낙원&nbsp;같아서,&nbsp;시간&nbsp;가는&nbsp;줄&nbsp;모르고&nbsp;쉬고&nbsp;싶은&nbsp;마음이&nbsp;드는&nbsp;공간이다.&nbsp;</p>\n<p><br></p>\n<p> 낭만적인&nbsp;산책로가&nbsp;집&nbsp;주변을&nbsp;감싸고&nbsp;있다.&nbsp;아침마다&nbsp;상쾌한&nbsp;공기를&nbsp;마시며&nbsp;자연과&nbsp;함께&nbsp;어울릴&nbsp;수&nbsp;있다.&nbsp;</p>\n<p><br></p>\n<p> “이곳은&nbsp;마치&nbsp;시간이&nbsp;멈춘&nbsp;듯한&nbsp;평온함과&nbsp;안정감을&nbsp;선사하는&nbsp;공간이다.&nbsp;하늘과&nbsp;땅이&nbsp;만나는&nbsp;이&nbsp;집은&nbsp;모든&nbsp;것이&nbsp;아름다운&nbsp;자연과&nbsp;하나로&nbsp;녹아있는&nbsp;것처럼,&nbsp;마음&nbsp;속까지&nbsp;평화로워지는&nbsp;특별한&nbsp;곳이다.”&nbsp; &nbsp; /나무신문</p>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/5486b108b29643c89b49091f6e31c562.jpg">\n                <p class="img_cap">욕실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/d82d65665a0f4531b62c32d55f335d21.jpg">\n                <p class="img_cap">욕실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/8a41d856a3d44249a320c8cb94a48914.jpg">\n                <p class="img_cap">욕실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/e11550cbd4e94eb09aa442a41a7aa204.jpg">\n                <p class="img_cap">욕실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/17c8d6008dc64d13a13af11541dd6b8f.jpg">\n                <p class="img_cap">1층 방.</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/bae18122e28743129ed238f951699dd0.jpg">\n                <p class="img_cap">방1</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/5fa985cf41bf42959bf6b6f708ed3b01.jpg">\n                <p class="img_cap">계단실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/9031799022ad4f63b21ec8ac3b2e529f.jpg">\n                <p class="img_cap">계단실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/808ca4c0a6e04bd9aa333c1d657535f0.jpg">\n                <p class="img_cap">계단실</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p><span><b>건축개요</b></span></p>\n<p> 지역지구▷인천시&nbsp;강화군&nbsp;</p>\n<p> 건축면적▷1F&nbsp;86.14㎡(26.05PY)</p>\n<p> 2F&nbsp;49.77㎡(15.05PY)</p>\n<p> 전체면적▷135.91&nbsp;㎡(41.11PY)</p>\n<p> 건축규모▷지상2층</p>\n<p> 건축구조▷중목구조(철물공법)</p>\n<p> 외장마감▷KMEW&nbsp;세라믹사이딩,&nbsp;KMEW&nbsp;컬러베스트&nbsp;지붕재,&nbsp;SANKYO(현관문/창호),&nbsp;실크벽지,&nbsp;지붕&nbsp;윔루프(삼익산업)&nbsp;</p>\n<p> 내장마감▷강마루,&nbsp;레드파인&nbsp;집성목,&nbsp;히노키&nbsp;무절&nbsp;루바,&nbsp;실크벽지,&nbsp;루나우드(삼익산업)</p>\n<p> 단열재▷아이씬폼(ICYNENE·LAPOLLA,&nbsp;헌츠만빌딩솔루션),&nbsp;외단열_스카이텍(윈코)</p>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/a368851380e149469b3deb5c601db2b4.jpg">\n                <p class="img_cap">1층 평면도</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/ed115d2f74fc47698f69837edd8625d0.jpg">\n                <p class="img_cap">2층 평면도</p>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table class="img_block" data-width="670">\n    <tbody>\n        <tr>\n            <td><img alt="" src="http://static.hubzum.zumst.com/hubzum/2023/08/23/16/e3360902e5824696b6d7ab1b84e11b32.jpg"></td>\n        </tr>\n    </tbody>\n</table>\n<p><span><b>우드선&nbsp;원유상&nbsp;대표</b></span></p>\n<p> 우드선은&nbsp;지난&nbsp;2003년&nbsp;설립&nbsp;후&nbsp;꾸준히&nbsp;국내&nbsp;목조주택&nbsp;시장&nbsp;활성화에&nbsp;노력해온&nbsp;회사다.&nbsp;현재&nbsp;친환경&nbsp;소재인&nbsp;목재를&nbsp;이용해&nbsp;고효율&nbsp;중목구조&nbsp;목조주택&nbsp;보급에&nbsp;힘쓰고&nbsp;있다.&nbsp;목조주택&nbsp;품질인증제도인&nbsp;5-STAR를&nbsp;받고&nbsp;있다.&nbsp;한국목조건축협회&nbsp;이사로&nbsp;활동&nbsp;중이며,&nbsp;유튜브&nbsp;채널&nbsp;‘지어줘&nbsp;홈즈’를&nbsp;운영&nbsp;중이다.&nbsp;</p>\n<p><br></p>\n<p>서범석 기자</p>\n<blockquote class=se2_quote6>\n    <p><b>추천기사</b></p>\n    <p></p>\n    <ol class="list_d_1">\n        <li><a href="http://www.imwood.co.kr/news/articleView.html?idxno=30413" target="_blank">용인 중목구조 목조주택, 간결하고 따듯한 집\n            </a>​</li>\n        <li><a href="http://www.imwood.co.kr/news/articleView.html?idxno=30344" target="_blank">테라스에서 아침을, 가락동 다세대주택 ‘담빛채’\n            </a></li>\n        <li><a href="http://www.imwood.co.kr/news/articleView.html?idxno=30317" target="_blank">공존의 기술, 복합문화공간 ‘모나무르’\n            </a></li>\n        <p></p>\n    </ol>\n</blockquote>',
                associatedLinks: [],
              },
              media: {
                idx: 522,
                name: '나무신문',
                key: 'namushinmun',
                url: 'http://www.imwood.co.kr/',
                socialUrl: 'https://post.naver.com/woodweek',
                profile: 'SPACE & WOOD MAGAZINE',
                image:
                  'http://static.hubzum.zumst.com/hubzum/2021/05/10/08/c014e8f5dbfa4dd4bc1a2ad3ee82af79.jpg',
                createdAt: '2021-04-22 00:00:00',
                updatedAt: '2021-05-10 08:51:39',
              },
              categories: [{ name: '라이프', key: 'LIFE', main: true }],
              tags: ['목조 주택', '인천 주택', '주택', '목재주택'],
            },
          ],
        }),
      );
    },
  ),
];
