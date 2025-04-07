import { vi, test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { handlers } from '@repo/services/index.mock';
import { GET as getContents } from './contents';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const mock = vi.fn();

  server.events.on('request:start', (req) => {
    mock(req.url.searchParams.get('items'));
  });

  const result = await getContents({
    items: ['media', 'detail', 'tag', 'category'],
  });

  expect(result).toHaveProperty('contents');
});

test('GET error', () => {
  server.use(rest.get('*', sendServerError('C001')));

  expect(getContents({ items: ['media', 'detail', 'tag', 'category'] })).rejects.toThrowError(
    '503',
  );
});
