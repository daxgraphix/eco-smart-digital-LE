import React, { type ReactNode } from 'react';

const TAG_REGEX = /(<strong>|<\/strong>|<br\s*\/?\?>)/gi;

export function renderRichText(text: string): ReactNode[] {
  const tokens = text.split(TAG_REGEX);
  const nodes: ReactNode[] = [];
  let isStrong = false;

  tokens.forEach((token, index) => {
    if (!token) return;

    if (/^<strong>$/i.test(token)) {
      isStrong = true;
      return;
    }

    if (/^<\/strong>$/i.test(token)) {
      isStrong = false;
      return;
    }

    if (/^<br\s*\/?\?>$/i.test(token)) {
      nodes.push(React.createElement('br', { key: `br-${index}` }));
      return;
    }

    nodes.push(
      isStrong
        ? React.createElement(
            'strong',
            {
              key: `strong-${index}`,
              className: 'font-semibold text-slate-900 dark:text-white',
            },
            token
          )
        : token
    );
  });

  return nodes;
}
