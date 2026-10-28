// مسیر تصاویر نسبت به public است. فایل‌ها را با همین نام‌ها قرار دهید.
export const portfolio = {
  name: "امید منصوری",
  intro: "من امیدم؛ با طراحی هویت بصری، تولید محتوا و طراحی وب، به برندها کمک می‌کنم داستان خودشون رو تعریف کنن و در ذهن مخاطب ماندگار بشن.",
  images: { hero: "/images/home/hero.webp", about: "/images/home/about.webp", process: "/images/home/process.webp", contact: "/images/home/contact.webp", form: "/images/home/form-background.webp", footer: "/images/home/footer.webp" },
  // بعد از ساخت صفحات، مسیرها را جایگزین رشتهٔ خالی کنید.
  pages: { about: "", projects: "", gallery: "" },
  socials: { instagram: "", telegram: "", linkedin: "", email: "" },
};
export const projects = [
  ["nouri", "نوری"], ["mitra", "میترا استودیو"], ["pouyan", "پویان"], ["radical", "رادیکال"],
  ["dena", "دنا"], ["barbad", "باربد"], ["kodiak", "کودیاک"], ["apilux", "آپیلوکس"],
].map(([slug, title]) => ({ slug, title, image: `/images/projects/${slug}.webp`, href: "" }));
export const services = [
  { slug: "visual-identity", title: "هویت بصری", href: "" },
  { slug: "web-design", title: "طراحی وب‌سایت", href: "" },
  { slug: "content", title: "تولید محتوا", href: "" },
  { slug: "brand-guideline", title: "برندبوک", href: "" },
];
export const brands = ["mayagasht", "bolourian", "diyanta", "mitra", "fardis", "radical", "steel", "ronak"];
export const steps = [
  { title: "گفت‌وگو و شناخت", text: "دربارهٔ ایده، نیازها و هدف‌هات صحبت می‌کنیم تا مسیر مناسب پروژه رو پیدا کنیم." },
  { title: "طراحی و همراهی", text: "ایده‌ها رو به طرح تبدیل می‌کنم و با بازخورد تو، جزئیات رو قدم‌به‌قدم پیش می‌بریم." },
  { title: "تحویل و شروع مسیر", text: "بعد از تأیید نهایی، فایل‌ها و راهنمای استفاده رو تحویل می‌گیری تا با خیال راحت شروع کنی." },
];
