import { rest } from 'msw';
import categoryMock from './categories.mock.json';

export const handlers = [
  rest.get(
    /^https?:\/\/(dev-)?internal-api\.hub\.(aws)?zum\.com\/categories\b/,
    (_req, res, ctx) => {
      return res(ctx.json(categoryMock));
    },
  ),
];
