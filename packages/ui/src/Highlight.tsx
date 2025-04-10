'use client';

import { useMemo, forwardRef, Fragment, type ReactNode, type HTMLAttributes } from 'react';

type HighlightProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export const Highlight = forwardRef<HTMLElement, HighlightProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <mark ref={ref} className="bg-transparent text-highlight" {...restProps}>
      {children}
    </mark>
  );
});
Highlight.displayName = 'Highlight';

interface HighlighterProps {
  children: string;
  keyword?: string;
  match?: RegExp;
}

export function Highlighter(props: HighlighterProps) {
  const { children, keyword, match } = props;

  const matcher = match ?? keyword;

  const matched = useMemo(() => {
    function matches(sentence: string, matchTarget: string | RegExp) {
      const result: string[] = [];
      const regex = typeof matchTarget === 'string' ? new RegExp(matchTarget, 'gi') : matchTarget;

      let matchResult: RegExpExecArray | null;
      let lastIndex = 0;

      const matchedIndexes: number[] = [];
      while ((matchResult = regex.exec(sentence)) !== null) {
        const matchIndex = matchResult.index;

        if (matchIndex > lastIndex) {
          result.push(sentence.substring(lastIndex, matchIndex));
        }
        matchedIndexes.push(result.length);

        result.push(matchResult[0]);
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < sentence.length) {
        result.push(sentence.substring(lastIndex));
      }

      return {
        tokens: result,
        indexes: matchedIndexes,
      };
    }

    if (!matcher) return { tokens: [children], indexes: [] };
    return matches(children, matcher);
  }, [children, matcher]);

  return (
    <>
      {matched.tokens.map((token, i) => {
        if (matched.indexes.includes(i)) {
          return <Highlight key={token}>{token}</Highlight>;
        }
        return <Fragment key={token}>{token}</Fragment>;
      })}
    </>
  );
}
