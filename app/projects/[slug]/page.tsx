import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectsHeader, ProjectsFooter } from "../../../components/ProjectsChrome";
import { archiveWorks } from "../../../lib/archive-works";
const works = archiveWorks;
export function generateStaticParams() { return works.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const work = works.find(item => item.slug === slug); return { title: work ? `${work.title} | امید منصوری` : "نمونه‌کار پیدا نشد" }; }
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const work = works.find(item => item.slug === slug); if (!work) notFound();
  return <main className="home-page portfolio-archive"><ProjectsHeader /><article className="archive-detail container"><Link className="archive-back" href="/projects">← بازگشت به نمونه‌کارها</Link><h1>{work.title}</h1><div className="archive-detail-image"><Image src={work.image} alt={work.title} fill sizes="(max-width: 700px) 100vw, 900px" /></div><p>جزئیات و تصاویر بیشتر این پروژه به‌زودی اضافه می‌شود.</p></article><ProjectsFooter /></main>;
}
