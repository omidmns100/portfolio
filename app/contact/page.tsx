import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { ProjectsHeader, ProjectsFooter } from "@/components/ProjectsChrome";
import { background } from "@/components/HomeAssets";
import { portfolio } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "تماس با من | امید منصوری",
  description: "برای مشاوره و شروع همکاری با امید منصوری تماس بگیرید.",
};

const channels = [
  { label: "تماس با شماره اول", text: "0920-4521-543", href: "tel:09204521543", icon: "☎" },
  { label: "تماس با شماره دوم", text: "0990-4521-543", href: "tel:09904521543", icon: "☎" },
  { label: "اینستاگرام", text: "Omidpixelss", href: "https://www.instagram.com/Omidpixelss/", icon: "◎" },
  { label: "وب‌سایت", text: "Omidpixelss.ir", href: "https://Omidpixelss.ir", icon: "◉" },
];

export default function ContactPage() {
  return (
    <main className="home-page portfolio-archive contact-landing" id="main">
      <a className="skip-link" href="#contact-methods">رفتن به راه‌های تماس</a>
      <ProjectsHeader />
      <section className="archive-intro container contact-intro" aria-labelledby="contact-page-title">
        <div className="archive-copy">
          <h1 id="contact-page-title">تماس با من :</h1>
          <p>{portfolio.intro}</p>
        </div>
        <div className="archive-statue archive-statue-image contact-statue">
          <Image src="/CM-B/CM-B-HERO.webp" alt="مجسمه کلاسیک با تلفن آبی، بنر تماس با من" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
        </div>
      </section>
      <section className="contact-panels container" id="contact-methods" aria-label="فرم و راه‌های تماس">
        <div className="contact-request form-panel" style={background(portfolio.images.form)}>
          <ContactForm />
        </div>
        <aside className="contact-channels" aria-labelledby="contact-channels-title">
          <Image src="/CM-B/CM-B-LIST.webp" alt="" fill sizes="(max-width: 700px) 100vw, 42vw" className="contact-channels-bg" />
          <div className="contact-channels-content">
            <h2 id="contact-channels-title">راه های تماس با من</h2>
            <div className="contact-channel-list">
              {channels.map((channel) => (
                <a key={channel.href} className="contact-channel-glass" href={channel.href} aria-label={channel.label} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <span className="contact-channel-icon" aria-hidden="true">{channel.icon}</span>
                  <span dir="ltr">{channel.text}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
      <ProjectsFooter />
    </main>
  );
}
