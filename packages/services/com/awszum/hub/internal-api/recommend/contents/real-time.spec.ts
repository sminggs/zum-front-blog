import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './real-time.handler';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getRealTimeContents } from './real-time';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getRealTimeContents();
  expect(result).toHaveProperty('contents');
});

test('GET error', async () => {
  server.use(rest.get('*', sendServerError('C001')));
  expect(getRealTimeContents()).rejects.toThrowError('503');
});
