import Image from "next/image";
import type { ReactNode } from "react";

type InnerPageHeroProps = {
  title: string;
  titleId: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
};

/** Shared banner layout for interior landing pages. Image files have identical dimensions. */
export default function InnerPageHero({ title, titleId, description, imageSrc, imageAlt }: InnerPageHeroProps) {
  return (
    <section className="inner-page-hero container" aria-labelledby={titleId}>
      <div className="inner-page-hero-copy">
        <h1 id={titleId}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="inner-page-hero-banner">
        <Image src={imageSrc} alt={imageAlt} width={2456} height={1592} priority sizes="(max-width: 700px) 100vw, 50vw" />
      </div>
    </section>
  );
}
