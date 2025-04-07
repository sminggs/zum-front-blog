import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/com/awszum/hub/internal-api/inner-search/contents.mock';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getSearchResult } from './contents';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getSearchResult({
    keyword: 'test',
    start: 0,
    order: 'ACCURACY',
  });
  expect(result).toHaveProperty('contents');
});

test('GET error', () => {
  server.use(rest.get('*', sendServerError('C001')));

  expect(getSearchResult({ keyword: 'test', start: 0, order: 'ACCURACY' })).rejects.toThrowError(
    '503',
  );
});
