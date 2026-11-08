// Banner order follows the numbered files in public/WS-B.
// Each item has a stable detail-page URL for future project content.
export const archiveWorks = Array.from({ length: 10 }, (_, index) => {
  const number = index + 1;
  const slug = `ws-b-${number}`;
  return {
    slug,
    title: `نمونه‌کار ${number}`,
    image: `/WS-B/WS-B-${number}.webp`,
    href: `/projects/${slug}`,
  };
});
