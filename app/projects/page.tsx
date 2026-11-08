import InnerPageHero from "../../components/InnerPageHero";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectsHeader, ProjectsFooter } from "../../components/ProjectsChrome";
import { archiveWorks } from "../../lib/archive-works";

export const metadata: Metadata = { title: "نمونه‌کارهای من | امید منصوری", description: "مجموعه نمونه‌کارهای طراحی هویت بصری، برندینگ و طراحی گرافیک امید منصوری" };
const works = archiveWorks;
export default function ProjectsPage() {
  return <main className="home-page portfolio-archive" id="main"><a href="#works" className="skip-link">رفتن به نمونه‌کارها</a><ProjectsHeader /><InnerPageHero title="نمونه کارهای من :" titleId="archive-title" description="اینجا مجموعه‌ای از پروژه‌های طراحی هویت بصری، برندینگ و کارهای گرافیکی من رو می‌بینی. هر پروژه داستان و هویت مخصوص خودش رو داره؛ برای دیدن جزئیات بیشتر روی تصویرش کلیک کن." imageSrc="/GALLERY/heros/WS-HERO.webp" imageAlt="بنر هنری صفحه نمونه‌کارها" /><section className="archive-gallery container" id="works" aria-label="گالری نمونه‌کارها"><div className="archive-grid">{works.map((work) => <Link key={work.slug} href={work.href} className="archive-card" aria-label={`مشاهده نمونه‌کار ${work.title}`}><Image src={work.image} alt={`نمونه‌کار ${work.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1200px) 46vw, 580px" quality={85} /></Link>)}</div></section><ProjectsFooter /></main>;
}
