import InnerPageHero from "../../components/InnerPageHero";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectsHeader, ProjectsFooter } from "../../components/ProjectsChrome";

export const metadata: Metadata = { title: "طراحی وب‌سایت | امید منصوری", description: "خدمات طراحی وب‌سایت و مراحل طراحی تجربه دیجیتال" };
const topics = [
  { title: "طراحی وب‌سایت چیه؟", body: "طراحی وب‌سایت یعنی ساخت یک تجربه دیجیتال منظم، زیبا و کاربردی که کاربران بتوانند به‌راحتی با برند شما ارتباط برقرار کنند." },
  { title: "چرا طراحی وب‌سایت مهمه؟", body: "یک وب‌سایت حرفه‌ای به معرفی خدمات، افزایش اعتماد مخاطبان و دسترسی آسان‌تر به اطلاعات و راه‌های ارتباطی کمک می‌کند." },
  { title: "من برای شما چه کاری انجام می‌دهم؟", body: "از بررسی نیازها و ساختار صفحات شروع می‌کنیم؛ سپس طراحی رابط کاربری، نسخه واکنش‌گرا و جزئیات تجربه کاربری را پیش می‌بریم." },
];
const stages = [
  { number: "مرحله ۱", title: "شناخت نیازها و\nهدف وب‌سایت", icon: "?" },
  { number: "مرحله ۲", title: "تحقیق و تدوین\nساختار صفحات", icon: "⌕" },
  { number: "مرحله ۳", title: "ایده‌پردازی و\nطراحی رابط کاربری", icon: "♧" },
  { number: "مرحله ۴", title: "توسعه و تکمیل\nنسخه واکنش‌گرا", icon: "✒" },
  { number: "مرحله ۵", title: "بازبینی و تست\nتحویل نهایی", icon: "⚑" },
];
export default function WebDesignPage() {
  return <main className="home-page portfolio-archive visual-identity-page" id="main">
    <a href="#web-details" className="skip-link">رفتن به توضیحات طراحی وب‌سایت</a>
    <ProjectsHeader />
    <InnerPageHero title="طراحی وب‌سایت" titleId="web-title" description="وب‌سایت فقط مجموعه‌ای از صفحه‌ها نیست؛ فضایی برای معرفی حرفه‌ای برند و ایجاد ارتباط ساده و مؤثر با مخاطبان است." imageSrc="/GALLERY/heros/WB-HERO.webp" imageAlt="بنر طراحی وب‌سایت" />
    <section className="visual-details container" id="web-details" aria-label="آشنایی با طراحی وب‌سایت">
      <div className="visual-detail-copy">{topics.map(topic => <article key={topic.title}><h2>{topic.title}</h2><p>{topic.body}</p></article>)}</div>
      <div className="visual-feature-art"><Image src="/GALLERY/WB-E-BANNER.png" alt="بنر توضیحات طراحی وب‌سایت" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
    </section>
    <section className="visual-process container" aria-labelledby="web-process-title"><h2 id="web-process-title">مراحل طراحی وب‌سایت</h2><ol className="visual-process-grid">{stages.map(stage => <li key={stage.number}><span className="visual-step-icon" aria-hidden="true">{stage.icon}</span><span className="visual-step-number">{stage.number}</span><h3>{stage.title}</h3></li>)}</ol></section>
    <section className="visual-consult container" aria-labelledby="web-consult-title"><h2 id="web-consult-title">برای ساخت وب‌سایت آماده‌اید؟</h2><p>برای طراحی یک وب‌سایت هماهنگ با برندتان، درباره نیازها و ایده‌هایتان با هم صحبت کنیم.</p><Link href="/contact" className="visual-consult-button">ثبت درخواست مشاوره</Link></section>
    <ProjectsFooter />
  </main>;
}
