import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/index.mock';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getMediaSearch } from './search';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getMediaSearch({
    keyword: 'HUB',
  });
  expect(result).toHaveProperty('mediaList');
});

test('GET error', async () => {
  server.use(rest.get('*', sendServerError('C001')));
  expect(getMediaSearch({ keyword: 'HUB' })).rejects.toThrowError('503');
});
