import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties, ReactNode } from "react";
export function background(src: string): CSSProperties {
  return existsSync(path.join(process.cwd(), "public", src)) ? { backgroundImage: `url("${encodeURI(src)}")` } : {};
}
export function Asset({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  const style = background(src);
  return <div className={`asset ${className} ${style.backgroundImage ? "has-image" : "is-empty"}`} style={style} role="img" aria-label={label}>{!style.backgroundImage && <span>{label}</span>}</div>;
}
export function Destination({ href, children, className = "", label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return href ? <a href={href} className={className} aria-label={label}>{children}</a> : <button type="button" className={className} disabled title="این صفحه به‌زودی اضافه می‌شود" aria-label={label ? `${label}؛ به‌زودی` : undefined}>{children}<span className="sr-only"> — به‌زودی</span></button>;
}
