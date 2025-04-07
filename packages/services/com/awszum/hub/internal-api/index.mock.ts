import { handlers as zumProvisionHandlers } from './zum-provision/index.mock';
import { handlers as homeHandlers } from './home/index.mock';
import { handlers as recommendHandlers } from './recommend/index.mock';
import { handlers as innerSearchHandlers } from './inner-search/index.mock';
import { handlers as mediaHandlers } from './media/index.mock';
import { handlers as categoriesHandler } from './categories.handler';
import { handlers as shoppingBoxHandler } from '@repo/services/shopping/index.mock';

export const handlers = [
  ...zumProvisionHandlers,
  ...homeHandlers,
  ...recommendHandlers,
  ...innerSearchHandlers,
  ...mediaHandlers,
  ...categoriesHandler,
  ...shoppingBoxHandler,
];
