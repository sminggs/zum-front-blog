import { handlers as tagContentsHandlers } from './tag/contents.handler';
import { handlers as mediaContentsHandlers } from './media/contents.handler';
import { handlers as highlightContentsHandlers } from './highlight/content.handler';

export const handlers = [
  ...tagContentsHandlers,
  ...mediaContentsHandlers,
  ...highlightContentsHandlers,
];
