import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectsHeader, ProjectsFooter } from "../../components/ProjectsChrome";

export const metadata: Metadata = { title: "طراحی هویت بصری | امید منصوری", description: "خدمات طراحی هویت بصری و مراحل خلق هویت برند" };
const topics = [
  { title: "هویت بصری چیه ؟", body: "هویت بصری زبان تصویری برند شماست؛ از لوگو و پالت رنگی گرفته تا فونت‌ها و عناصر گرافیکی. یک هویت منسجم کمک می‌کند برند در همه نقاط تماس قابل شناسایی باشد." },
  { title: "چرا باید هویت بصری داشته باشیم ؟", body: "هویت بصری حرفه‌ای اعتماد می‌سازد، برند را از رقبا متمایز می‌کند و تجربه‌ای یکپارچه در ذهن مخاطب به جا می‌گذارد؛ از شبکه‌های اجتماعی تا بسته‌بندی و تبلیغات." },
  { title: "من برای شما چه کاری انجام میدهم", body: "از شناخت برند و بررسی مخاطبان شروع می‌کنیم؛ سپس لوگو، رنگ‌ها، تایپوگرافی و اجزای هویت را طراحی می‌کنم و در نهایت راهنمای استفاده از آن‌ها را آماده می‌کنم." },
];
const stages = [
  { number: "مرحله ۱", title: "شناخت برند و\nکشف نیازها", icon: "?" },
  { number: "مرحله ۲", title: "تحقیق و تدوین\nاستراتژی بصری", icon: "⌕" },
  { number: "مرحله ۳", title: "ایده‌پردازی و\nطراحی کانسپت", icon: "♧" },
  { number: "مرحله ۴", title: "توسعه و تکمیل\nهویت بصری", icon: "✒" },
  { number: "مرحله ۵", title: "تدوین راهنمای\nبرند و تحویل نهایی", icon: "⚑" },
];
export default function VisualIdentityPage() {
  return <main className="home-page portfolio-archive visual-identity-page" id="main">
    <a href="#visual-details" className="skip-link">رفتن به توضیحات هویت بصری</a>
    <ProjectsHeader />
    <section className="archive-intro container visual-hero" aria-labelledby="visual-title">
      <div className="archive-copy"><h1 id="visual-title">طراحی هویت بصری</h1><p>هویت بصری فقط یک لوگو نیست؛ مجموعه‌ای هماهنگ از رنگ‌ها، تایپوگرافی، نشانه‌ها و عناصر گرافیکی است که شخصیت برند شما را شکل می‌دهد و باعث می‌شود مخاطب آن را به خاطر بسپارد.</p></div>
      <div className="visual-hero-art"><Image src="/GALLERY/VI-HERO.png" alt="مجسمه هنری با هدفون و عینک آبی در حال طراحی" fill priority sizes="(max-width: 700px) 100vw, 50vw" /></div>
    </section>
    <section className="visual-details container" id="visual-details" aria-label="آشنایی با طراحی هویت بصری">
      <div className="visual-detail-copy">{topics.map(topic => <article key={topic.title}><h2>{topic.title}</h2><p>{topic.body}</p></article>)}</div>
      <div className="visual-feature-art"><Image src="/GALLERY/VI-E-BANNER.webp" alt="پوستر آبی هویت بصری با مجسمه و نماد برندهای مختلف" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
    </section>
    <section className="visual-process container" aria-labelledby="visual-process-title"><h2 id="visual-process-title">مراحل خلق یک هویت بصری</h2><ol className="visual-process-grid">{stages.map(stage => <li key={stage.number}><span className="visual-step-icon" aria-hidden="true">{stage.icon}</span><span className="visual-step-number">{stage.number}</span><h3>{stage.title}</h3></li>)}</ol></section>
    <section className="visual-consult container" aria-labelledby="visual-consult-title"><h2 id="visual-consult-title">برند شما باید به چه شکلی دیده شود ؟</h2><p>برای ساخت یک هویت بصری ماندگار، از شناخت برند تا طراحی و اجرای جزئیات همراه شما هستم. درباره ایده‌تان با هم صحبت کنیم.</p><Link href="/contact" className="visual-consult-button">ثبت درخواست مشاوره</Link></section>
    <ProjectsFooter />
  </main>;
}
