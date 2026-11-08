import Image from "next/image";
import Link from "next/link";
import { background } from "./HomeAssets";
import { portfolio, services } from "../lib/portfolio";

const nav = [["درباره من", "/#about"], ["نمونه کارها", "/projects"], ["تخصص های من", "/#services"], ["تماس با من", "/contact"]];
const logo = <Image src="/images/لوگو-01.svg" alt="لوگوی امید منصوری" width={44} height={44} />;
export function ProjectsHeader() {
  return <header className="site-header projects-header"><Link className="header-logo" href="/" aria-label="صفحه اصلی">{logo}</Link><nav className="glass-nav" aria-label="منوی اصلی">{nav.map(([title, href]) => <Link key={href} href={href}>{title}</Link>)}</nav><Link href="/contact" className="button header-cta">مشاوره رایگان</Link></header>;
}
export function ProjectsFooter() {
  return <footer className="site-footer container projects-footer" style={background(portfolio.images.footer)}><div className="footer-content"><Link href="/" className="footer-logo">{logo}</Link><p>{portfolio.intro}</p><hr /><nav aria-label="دسترسی سریع"><h3>دسترسی سریع</h3><div className="footer-links">{nav.map(([title, href]) => <Link key={href} href={href}>{title}</Link>)}<Link href="/">صفحه اصلی</Link></div></nav><nav aria-label="خدمات"><h3>خدمات</h3><div className="footer-links">{services.map(s => <Link key={s.slug} href="/#services">{s.title}</Link>)}</div></nav><div className="socials">{Object.entries(portfolio.socials).map(([name, href]) => href ? <a key={name} href={href} className="social-link" aria-label={name}><span aria-hidden="true">{({ instagram: "◎", telegram: "➤", linkedin: "in", email: "@" } as Record<string,string>)[name]}</span></a> : <span key={name} className="social-link" aria-label={`${name} به زودی`}><span aria-hidden="true">{({ instagram: "◎", telegram: "➤", linkedin: "in", email: "@" } as Record<string,string>)[name]}</span></span>)}</div><hr /><small>تمامی حقوق این وب‌سایت متعلق به {portfolio.name} است.</small></div></footer>;
}
