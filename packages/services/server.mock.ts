import { setupServer } from 'msw/node';
import { handlers } from './index.mock';

export const server = setupServer(...handlers);
