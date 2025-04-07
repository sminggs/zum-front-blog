import React, { memo, PropsWithChildren, MouseEventHandler, MouseEvent } from 'react';
import { useESTatClient } from '../hooks/useEstatClient';

interface ClickProperties {
  cm: string;
  outurl?: string;
  pos: string;
}

const ClickStatistics = memo(
  ({ children, properties }: PropsWithChildren<{ properties: ClickProperties }>) => {
    const { sendStatistics } = useESTatClient();

    const sendClickStat: MouseEventHandler<HTMLDivElement> = (event) => {
      sendStatistics(['@Click', { ...properties }]);
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

export default ClickStatistics;
