import InnerPageHero from "../../components/InnerPageHero";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectsHeader, ProjectsFooter } from "../../components/ProjectsChrome";

export const metadata: Metadata = {
  title: "تولید محتوا | امید منصوری",
  description: "خدمات تولید محتوا و طراحی محتوای بصری برای برندها",
};


const topics = [
  { title: "تولید محتوا چیه؟", body: "تولید محتوا یعنی ساخت پیام‌های تصویری و نوشتاری هماهنگ با هویت برند برای ارتباط بهتر با مخاطبان." },
  { title: "چرا تولید محتوا مهمه؟", body: "محتوای منظم و هدفمند کمک می‌کند برند شما در ذهن مخاطب باقی بماند و در کانال‌های ارتباطی مختلف یکپارچه دیده شود." },
  { title: "من برای شما چه کاری انجام می‌دهم؟", body: "از شناخت برند و برنامه‌ریزی محتوا شروع می‌کنیم و بعد ایده‌پردازی، طراحی و آماده‌سازی خروجی‌ها را پیش می‌بریم." },
];

const stages = [
  { number: "مرحله ۱", title: "شناخت برند و\nمخاطبان", icon: "?" },
  { number: "مرحله ۲", title: "برنامه‌ریزی و\nاستراتژی محتوا", icon: "⌕" },
  { number: "مرحله ۳", title: "ایده‌پردازی و\nطراحی کانسپت", icon: "♧" },
  { number: "مرحله ۴", title: "تولید و تکمیل\nمحتوا", icon: "✒" },
  { number: "مرحله ۵", title: "بازبینی و\nتحویل نهایی", icon: "⚑" },
];

export default function ContentCreationPage() {
  return <main className="home-page portfolio-archive visual-identity-page" id="main">
    <a href="#content-details" className="skip-link">رفتن به توضیحات تولید محتوا</a>
    <ProjectsHeader />
    <InnerPageHero title="تولید محتوا" titleId="content-title" description="تولید محتوای بصری هماهنگ با هویت برند برای حضور مؤثرتر در رسانه‌ها و ارتباط با مخاطبان." imageSrc="/GALLERY/heros/CC-HERO.webp" imageAlt="بنر تولید محتوا" />
    <section className="visual-details container" id="content-details" aria-label="آشنایی با تولید محتوا">
      <div className="visual-detail-copy">{topics.map(topic => <article key={topic.title}><h2>{topic.title}</h2><p>{topic.body}</p></article>)}</div>
      <div className="visual-feature-art"><Image src="/GALLERY/CC-E-BANNER.png" alt="بنر توضیحات تولید محتوا" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
    </section>
    <section className="visual-process container" aria-labelledby="content-process-title"><h2 id="content-process-title">مراحل تولید محتوا</h2><ol className="visual-process-grid">{stages.map(stage => <li key={stage.number}><span className="visual-step-icon" aria-hidden="true">{stage.icon}</span><span className="visual-step-number">{stage.number}</span><h3>{stage.title}</h3></li>)}</ol></section>
    <section className="visual-consult container" aria-labelledby="content-consult-title"><h2 id="content-consult-title">برای محتوای برندتان آماده‌اید؟</h2><p>برای شروع همکاری و بررسی نیازهای محتوایی برندتان با هم صحبت کنیم.</p><Link href="/contact" className="visual-consult-button">ثبت درخواست مشاوره</Link></section>
    <ProjectsFooter />
  </main>;
}
