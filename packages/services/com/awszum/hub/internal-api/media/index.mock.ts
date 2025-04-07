import { handlers as listHandlers } from './list/list.handler';
import { handlers as searchHandlers } from './search/search.mock';
import { handlers as recommendHandlers } from './recommend/recommend.mock';

export const handlers = [...listHandlers, ...searchHandlers, ...recommendHandlers];
