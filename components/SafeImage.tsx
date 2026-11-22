"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: "lazy" | "eager";
};

export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackLabel = "",
  loading = "lazy",
}: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;

    if (
      img &&
      !src.endsWith(".svg") &&
      img.complete &&
      img.naturalWidth === 0
    ) {
      setFailed(true);
    }
  }, [src]);

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`${className} img-fallback`}>
        {fallbackLabel}
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
