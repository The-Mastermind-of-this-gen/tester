"use client";

export default function LogoImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={className}
      src={src}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        target.replaceWith(
          Object.assign(document.createElement("div"), {
            className: "img-fallback w-full h-full",
            textContent: "LOGO",
          })
        );
      }}
    />
  );
}
