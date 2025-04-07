import { setupWorker } from 'msw';
import { handlers } from './index.mock';

export const worker = setupWorker(...handlers);
