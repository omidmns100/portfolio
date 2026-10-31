// مسیر تصاویر نسبت به public است. فایل‌ها را با همین نام‌ها قرار دهید.
export const portfolio = {
  name: "امید منصوری",
  intro: "من امیدم؛ با طراحی هویت بصری، تولید محتوا و طراحی وب، به برندها کمک می‌کنم داستان خودشون رو تعریف کنن و در ذهن مخاطب ماندگار بشن.",
  images: { hero: "/images/HERO-BANNER.webp", about: "/images/home/about.webp", process: "/images/WORK FLOW copy.webp", contact: "/images/CONTACT ME.webp", form: "/images/CONTACT ME FORM.webp", footer: "/images/FOTTER.webp" },
  // بعد از ساخت صفحات، مسیرها را جایگزین رشتهٔ خالی کنید.
  pages: { about: "", projects: "", gallery: "" },
  socials: { instagram: "", telegram: "", linkedin: "", email: "" },
};
// Keep the original filenames, including spaces and uppercase letters.
export const projects = [
  ["nouri", "نوری", "NOURI.jpg"], ["mitra", "میترا استودیو", "MITRA.jpg"],
  ["pouyan", "پویان", "POUYAN.jpg"], ["radical", "رادیکال", "RADICAL.jpg"],
  ["dena", "دنا", "DENA.jpg"], ["barbad", "باربد", "BARBOD.jpg"],
  ["kodiak", "کودیاک", "KODIAK.jpg"], ["apilux", "آجیلوکس", "AJILUX.jpg"],
  ["rono", "رونو", "RONO.jpg"],
].map(([slug, title, file]) => ({ slug, title, image: `/images/${file}`, href: "" }));
export const services = [
  { slug: "visual-identity", title: "هویت بصری", image: "/images/IDENTITY.webp", href: "" },
  { slug: "web-design", title: "طراحی وب‌سایت", image: "/images/WEBDESIGN-BANNER.webp", href: "" },
  { slug: "content", title: "تولید محتوا", image: "/images/CC-BANNER.webp", href: "" },
  { slug: "brand-guideline", title: "مشاوره برندینگ", image: "/images/GUIDANCE-BANNER.webp", href: "" },
];
export const brands = [
  ["MAYA", "مایاگشت"], ["BOLLOURIAN", "بلوریان"], ["DIYANTA", "دیانتا"],
  ["MITRA", "میترا استودیو"], ["BIME", "بیمه پردیس"], ["RADICAL", "رادیکال کنترل"],
  ["FOLAD", "فولاد دشتستان"], ["POUYAN", "پویان"],
].map(([file, title]) => ({ image: `/images/${file}.webp`, title }));
// Visual order: left to right, matching the supplied gallery design.
export const gallery = [
  { file: "Advertisement_Wall_Mockup_1_4_11zon.webp", title: "موکاپ تبلیغات محیطی آجیلوکس", position: "50% 52%", span: 4 },
  { file: "m016t0058_mar1622_view_2_7_11zon.webp", title: "موکاپ کارت‌های باربد", position: "50% 60%", span: 2 },
  { file: "fvfv.webp", title: "موکاپ محتوای رادیکال", position: "50% 50%", span: 2 },
  { file: "indoor_billboard_mockup_6_11zon.webp", title: "موکاپ بیلبورد باربد", position: "50% 50%", span: 4 },
  { file: "11620000_5_11zon.webp", title: "موکاپ بسته‌بندی دنا", position: "50% 60%", span: 2 },
  { file: "10587233_8_11zon.webp", title: "موکاپ تابلوی باربد", position: "50% 50%", span: 2 },
  { file: "Stone_Business_Card_Mockup_1_3_11zon.webp", title: "موکاپ کارت ویزیت رادیکال", position: "50% 50%", span: 2 },
  { file: "MacBook_Mockup_2_2_11zon.webp", title: "نمایش طراحی سایت روی مک‌بوک", position: "50% 65%", span: 3 },
  { file: "Free_Stationery_Mockup_1_1_11zon.webp", title: "موکاپ ست اداری آجیلوکس", position: "50% 50%", span: 3 },
].map(({ file, ...item }) => ({ ...item, image: `/GALLERY/${file}` }));
export const steps = [
  { title: "گفت‌وگو و شناخت", text: "دربارهٔ ایده، نیازها و هدف‌هات صحبت می‌کنیم تا مسیر مناسب پروژه رو پیدا کنیم." },
  { title: "طراحی و همراهی", text: "ایده‌ها رو به طرح تبدیل می‌کنم و با بازخورد تو، جزئیات رو قدم‌به‌قدم پیش می‌بریم." },
  { title: "تحویل و شروع مسیر", text: "بعد از تأیید نهایی، فایل‌ها و راهنمای استفاده رو تحویل می‌گیری تا با خیال راحت شروع کنی." },
];
