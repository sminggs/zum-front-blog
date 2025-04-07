import { rest } from 'msw';
import listMock from './list.mock.json';

export const handlers = [
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/media\/list\b/,
    (req, res, ctx) => {
      return res(ctx.json(listMock));
    },
  ),
];
