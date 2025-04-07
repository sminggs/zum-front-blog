// useFadeEffect.ts
import { useState, useEffect, useCallback } from 'react';

export type FadeState = 'hidden' | 'visible' | 'fading';

interface UseFadeEffectOptions {
  visibleDuration?: number;
  fadingDuration?: number;
}

export function useFadeEffect({
  visibleDuration = 2000,
  fadingDuration = 500,
}: UseFadeEffectOptions = {}) {
  const [state, setState] = useState<FadeState>('hidden');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (state === 'visible') {
      timeoutId = setTimeout(() => {
        setState('fading');
      }, visibleDuration);
    } else if (state === 'fading') {
      timeoutId = setTimeout(() => {
        setState('hidden');
      }, fadingDuration);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [state, visibleDuration, fadingDuration]);

  const show = useCallback(() => {
    setState('visible');
  }, []);

  const hide = useCallback(() => {
    setState('fading');
  }, []);

  return { state, show, hide };
}
