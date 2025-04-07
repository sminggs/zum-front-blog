'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

const defaultImageSrc = '/default-thumbnail.svg';

export default function NextImage(props: Omit<ImageProps, 'alt'> & { alt?: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      unoptimized={hasError}
      onError={() => {
        setHasError(true);
      }}
      src={!props.src || hasError ? defaultImageSrc : props.src}
      alt={props.alt ?? ''}
    />
  );
}
