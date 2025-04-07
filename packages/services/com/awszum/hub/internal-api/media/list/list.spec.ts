import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/index.mock';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getChannels } from './list';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getChannels({
    start: 0,
    baseAt: '2023-09-04T17:38:25.060',
    length: 15,
    order: 'CONTENTS',
  });

  expect(result).toHaveLength(15);
  expect(result?.[0]).toHaveProperty('idx');
});

test('GET error', () => {
  server.use(rest.get('*', sendServerError('C001')));

  expect(
    getChannels({
      start: 0,
      baseAt: '2023-09-04T17:38:25.060',
      length: 15,
      order: 'CONTENTS',
    }),
  ).rejects.toThrowError('503');
});
