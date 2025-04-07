'use client';

import React, { memo, PropsWithChildren, MouseEventHandler, MouseEvent } from 'react';
import { useESTatClient } from '../hooks/useEstatClient';

interface ClickProperties {
  cm: string;
  outurl?: string;
  pos: string;
  menu: string;
  submenu?: string;
  contentsId?: string;
  authorId?: string;
  r?: string;
  selectTab?: string;
  tab?: string;
}

const HubZumClickStatistics = memo(
  ({ children, properties }: PropsWithChildren<{ properties: ClickProperties }>) => {
    const { sendStatistics } = useESTatClient();

    const sendClickStat: MouseEventHandler<HTMLDivElement> = (event) => {
      sendStatistics([
        '@HubZumClick',
        {
          ...properties,
          contentsId: properties.contentsId ?? null,
          authorId: properties.authorId ?? null,
          r: properties.r ?? null,
          selectTab: properties.selectTab ?? null,
          tab: properties.tab ?? null,
          submenu: properties.submenu ?? null,
          outurl: properties.outurl ?? null,
          ...setCoords(event),
        },
      ]);
    };

    if (!React.isValidElement(children)) {
      throw new Error('ClickStatistics expects a single React element as a child.');
    }

    return React.cloneElement(children, {
      ...children.props,
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        children.props.onClick?.(e);
        sendClickStat(e);
      },
    });
  },
);

const setCoords = <T extends HTMLElement>(nativeEvent: MouseEvent<T, globalThis.MouseEvent>) => {
  return {
    px: String(nativeEvent.pageX),
    py: String(nativeEvent.pageY),
    sx: String(nativeEvent.screenX),
    sy: String(nativeEvent.screenY),
  };
};

export default HubZumClickStatistics;
