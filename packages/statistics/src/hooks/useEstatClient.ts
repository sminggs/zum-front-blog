'use client';

import { type ESTatPayload } from '@zuminternet/statistics';
import { applyFilter, generateEventProperties, logDevelopmentData } from '../helpers';
import { useMemo, useCallback, useEffect } from 'react';
import ESTatClientManager from '../helpers/ESTatClientManager';

export const useESTatClient = (): { sendStatistics: (payload: ESTatPayload) => void } => {
  const estatClient = useMemo(() => ESTatClientManager.getInstance(), []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ESTatClientManager.patchHistoryAPI();
    }
  }, []);

  const sendStatistics = useCallback(
    async (payload: ESTatPayload) => {
      const [eventName, eventProperties] = await generateEventProperties(payload);

      const combinedProperties = {
        ...eventProperties,
        url: window.location.href,
        referrer: ESTatClientManager.getLastReferrer(),
      };

      /** 개발 환경에서 로그 */
      if (process.env.NODE_ENV === 'development' && estatClient) {
        logDevelopmentData(estatClient, eventName, applyFilter(combinedProperties));
      }

      if (estatClient) {
        estatClient.push([eventName, applyFilter(combinedProperties)]);
      }
    },
    [estatClient],
  );

  return { sendStatistics };
};
