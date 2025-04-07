import { rest } from 'msw';
import highlightMock from './contents.mock.json';

export const handlers = [
  /** @see {@link https://ci-portal.zuminternet.com/doc/zum-hub-internal-api/#_home_highlight_contents_v1} */
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/home\/highlight\/contents\b/,
    (_req, res, ctx) => {
      return res(ctx.json(highlightMock));
    },
  ),
];
