import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectsHeader, ProjectsFooter } from "@/components/ProjectsChrome";
import { projects, gallery } from "@/lib/portfolio";

export const metadata: Metadata = { title: "نمونه‌کارهای من | امید منصوری", description: "مجموعه نمونه‌کارهای طراحی هویت بصری، برندینگ و طراحی گرافیک امید منصوری" };
const extra = gallery.slice(0, 2).map((item, i) => ({ slug: `gallery-${i + 1}`, title: item.title, image: item.image, href: `/projects/gallery-${i + 1}` }));
const works = [...projects, ...extra];
export default function ProjectsPage() {
  return <main className="home-page portfolio-archive" id="main"><a href="#works" className="skip-link">رفتن به نمونه‌کارها</a><ProjectsHeader /><section className="archive-intro container" aria-labelledby="archive-title"><div className="archive-copy"><h1 id="archive-title">نمونه کارهای من :</h1><p>اینجا مجموعه‌ای از پروژه‌های طراحی هویت بصری، برندینگ و کارهای گرافیکی من رو می‌بینی. هر پروژه داستان و هویت مخصوص خودش رو داره؛ برای دیدن جزئیات بیشتر روی تصویرش کلیک کن.</p></div><div className="archive-statue" aria-label="جایگاه بنر مجسمه؛ تصویر اصلی به زودی اضافه می‌شود"><span className="archive-statue-outline" aria-hidden="true">WORK<br />SAMPLES !!</span><span className="archive-statue-placeholder">تصویر مجسمه به‌زودی اینجا قرار می‌گیرد</span></div></section><section className="archive-gallery container" id="works" aria-label="گالری نمونه‌کارها"><div className="archive-grid">{works.map((work) => <Link key={work.slug} href={work.href} className="archive-card" aria-label={`مشاهده نمونه‌کار ${work.title}`}><Image src={work.image} alt={`نمونه‌کار ${work.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1200px) 46vw, 580px" quality={85} /></Link>)}</div></section><ProjectsFooter /></main>;
}
