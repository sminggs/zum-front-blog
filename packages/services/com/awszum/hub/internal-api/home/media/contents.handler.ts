import { rest } from 'msw';
import mediaMock from './contents.mock.json';

export const handlers = [
  /** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_home_media_contents_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/home\/media\/contents\b/,
    (_req, res, ctx) => {
      return res(ctx.json(mediaMock));
    },
  ),
];
