'use client';

import { forwardRef, type ForwardedRef, type ElementRef } from 'react';
import Link, { type LinkProps } from 'next/link';

type InternalLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

/**
 * @see {@link https://nextjs.org/docs/pages/api-reference/components/link#prefetch}
 * `prefetch` Prop의 기본값이 `true`로 채널 리스트 등에서 상세 페이지들의 불필요한 빌드를 방지하기 위해 사용
 **/
const NextLink = forwardRef((props: InternalLinkProps, ref: ForwardedRef<ElementRef<'a'>>) => {
  const { href = '', ...rest } = props;
  return <Link prefetch={false} href={href} {...rest} ref={ref} />;
});

NextLink.displayName = 'NextLink';

export default NextLink;
