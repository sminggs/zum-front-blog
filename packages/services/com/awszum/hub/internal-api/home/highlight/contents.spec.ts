import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/com/awszum/hub/internal-api/home/highlight/content.handler';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getHomeHighlightContents } from './contents';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getHomeHighlightContents({ datetime: '20190320165959' });
  expect(result).toHaveProperty('publish');
  expect(result).toHaveProperty('contents');
});

test('GET error', () => {
  server.use(rest.get('*', sendServerError('C001')));

  expect(getHomeHighlightContents({ datetime: '20190320165959' })).rejects.toThrowError('503');
});
