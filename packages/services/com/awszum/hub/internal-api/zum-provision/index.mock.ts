import { handlers as contentHandlers } from './content/content.mock';
import { handlers as contentsHandlers } from './contents/contents.mock';

export const handlers = [...contentHandlers, ...contentsHandlers];
