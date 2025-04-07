import type { MockedRequest, DefaultBodyType, RestContext, ResponseResolver } from 'msw';

type RestResponseResolver = ResponseResolver<MockedRequest<DefaultBodyType>, RestContext>;

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_%EC%84%9C%EB%B2%84_%EC%97%90%EB%9F%AC_%EC%A0%84%EC%B2%B4_%EC%BD%94%EB%93%9C%ED%91%9C} */
export const errorMessages = {
  C001: '허브 뉴스매체를 찾을 수 없습니다.',
  C002: '허브 컨텐츠 생성일로 검색기간은 최대 2일 입니다.',
  M001: '매체를 찾을 수 없습니다.',
  M002: '뉴스 매체를 찾을 수 없습니다.',
  P001: '판 스케쥴러가 없습니다.',
  P002: '판 스케쥴러 타입이 일치하지 않습니다.',
  Z001: '파싱 에러.',
  Z002: '본문 파싱 에러.',
  Z003: '파싱 url 에러.',
};
export type ErrorCode = keyof typeof errorMessages;

interface FieldError {
  field: string;
  code: string;
  rejectedValue?: string[];
}

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_%ED%95%84%EB%93%9C_%EC%97%90%EB%9F%AC} */
export function sendFieldError(fieldErrors: FieldError[]): RestResponseResolver {
  return (_req, res, ctx) => {
    return res(
      ctx.status(422),
      ctx.json({
        fieldErrors,
        globalError: {
          code: '998',
          message: '부적합한 요청 파라미터 입니다.',
        },
      }),
    );
  };
}

/** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_%EC%84%9C%EB%B2%84_%EC%97%90%EB%9F%AC} */
export function sendServerError(errorCode: ErrorCode): RestResponseResolver {
  return (_req, res, ctx) => {
    return res(
      ctx.status(503),
      ctx.json({
        fieldErrors: [],
        globalError: {
          code: errorCode,
          message: errorMessages[errorCode],
        },
      }),
    );
  };
}
