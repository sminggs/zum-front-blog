import { test, expect, afterAll, afterEach, beforeAll, vi } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/index.mock';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getCategories } from './categories';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const categories = await getCategories();
  expect(categories[0]).toHaveProperty('categoryIdx');
});

test('GET error', async () => {
  server.use(rest.get('*', sendServerError('C001')));
  expect(getCategories()).rejects.toThrowError('503');
});
