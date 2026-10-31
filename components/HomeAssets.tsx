import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties, ReactNode } from "react";
export function background(src: string): CSSProperties {
  return existsSync(path.join(process.cwd(), "public", src)) ? { backgroundImage: `url("${encodeURI(src)}")` } : {};
}
type AssetProps = {
  src: string;
  label: string;
  className?: string;
  fit?: "cover" | "contain";
  position?: string;
  sizes?: string;
  preload?: boolean;
};
export function Asset({ src, label, className = "", fit = "cover", position = "50% 50%", sizes = "(max-width: 700px) 90vw, 50vw", preload = false }: AssetProps) {
  const available = existsSync(path.join(process.cwd(), "public", src));
  return <div className={`asset ${className} ${available ? "has-image" : "is-empty"}`}>
    {available ? <Image src={src} alt={label} fill sizes={sizes} preload={preload} quality={90} style={{ objectFit: fit, objectPosition: position }} /> : <span>{label}</span>}
  </div>;
}
export function Destination({ href, children, className = "", label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return href ? <a href={href} className={className} aria-label={label}>{children}</a> : <button type="button" className={className} disabled title="این صفحه به‌زودی اضافه می‌شود" aria-label={label ? `${label}؛ به‌زودی` : undefined}>{children}<span className="sr-only"> — به‌زودی</span></button>;
}
