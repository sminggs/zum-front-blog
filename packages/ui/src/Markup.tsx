import { Fragment } from 'react';

export default function Markup({ children }: { children: string }) {
  return children.split(/<br\s*\/?>/g).map((line, index) => (
    <Fragment key={line}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
