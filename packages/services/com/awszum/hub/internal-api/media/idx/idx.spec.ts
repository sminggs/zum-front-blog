import { test, expect, afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from '@repo/services/index.mock';
import { sendServerError } from '@repo/services/com/awszum/hub/internal-api/_errors.mock';
import { GET as getMediaIdx } from './idx';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('GET', async () => {
  const result = await getMediaIdx({ hubUrl: 'realfoods' });
  expect(result).toHaveProperty('mediaIdx');
});

test('GET not found', () => {
  expect(getMediaIdx({ hubUrl: 'XXXXX' })).rejects.toThrow(/503/);
});

test('GET server error', () => {
  server.use(rest.get('*', sendServerError('C001')));

  expect(getMediaIdx({ hubUrl: 'realfoods' })).rejects.toThrowError('503');
});
