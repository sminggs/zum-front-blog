import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/index.mock';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getContent } from './content';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getContent({ idxList: [102644, 102637] as const });
  expect(result).toHaveProperty('102644');
  expect(result).toHaveProperty('102637');
  expect(result['102644']).toHaveProperty('idx', 102644);
  expect(result['102637']).toHaveProperty('idx', 102637);
});

test('GET error', () => {
  server.use(rest.get('*', sendServerError('C001')));

  expect(getContent({ idxList: [1030] })).rejects.toThrowError('503');
});
