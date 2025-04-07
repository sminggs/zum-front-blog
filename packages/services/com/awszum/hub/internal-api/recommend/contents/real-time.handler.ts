import { rest } from 'msw';
import realTimeMock from './real-time.mock.json';

export const handlers = [
  /** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_recommend_contents_real_time_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/recommend\/contents\/real-time\b/,
    (_req, res, ctx) => {
      return res(ctx.json(realTimeMock));
    },
  ),
];
