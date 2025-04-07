'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useESTatClient } from '../hooks/useEstatClient';

interface PageViewProperties {
  contentsId?: string;
  category?: string;
  submenu?: string;
  menu: string;
}

export default function PageViewStatistics({
  properties,
}: PropsWithChildren<{ properties: PageViewProperties }>) {
  const { sendStatistics } = useESTatClient();
  const hasSent = useRef(false);

  useEffect(() => {
    if (!hasSent.current) {
      sendStatistics([
        '@PageView',
        {
          ...properties,
          submenu: properties.submenu ?? null,
          contentsId: properties.contentsId ?? null,
        },
      ]);
      hasSent.current = true;
    }
  }, [properties]);

  return <></>;
}
