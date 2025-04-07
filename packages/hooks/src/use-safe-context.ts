import { type Context, useContext } from 'react';

export function useSafeContext<T>(context: Context<T>) {
  const _context = useContext(context);
  if (!_context) {
    throw new Error(`This Context must be wrapped with a Provider.`);
  }
  return _context;
}
