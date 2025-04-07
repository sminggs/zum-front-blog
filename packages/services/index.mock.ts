import { rest } from 'msw';
import { handlers as internalServerHandlers } from './com/awszum/hub/internal-api/index.mock';

export const handlers = [
  ...internalServerHandlers,
  rest.post('https://estat.zum.com/collect', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
