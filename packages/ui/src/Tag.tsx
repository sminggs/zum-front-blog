import type { PropsWithChildren } from 'react';

type RankSize = 12 | 14;
type Variants = 'category' | 'hash' | 'rank';

interface TagProps {
  variant: Variants;
  size?: RankSize;
}

export default function Tag({
  variant,
  size = 12,
  children,
  ...restProps
}: PropsWithChildren<TagProps>) {
  const baseClasses = 'inline-flex justify-center items-center rounded';

  const variantClasses = {
    category: 'bg-bg-1 rounded-lg font-semibold text-sm py-1 px-2',
    hash: 'bg-bg-2 text-point-1 rounded font-normal font-sm px-[6px] py-[2px] leading-label text-sm',
    rank: `bg-highlight text-font-7 font-bold ${size === 12 ? 'text-xs py-1 px-2' : 'text-sm py-1.5 px-3'}`,
  }[variant];

  return (
    <div className={`${baseClasses} ${variantClasses}`} {...restProps}>
      {variant === 'hash' ? <span>#</span> : null}
      {children}
    </div>
  );
}
