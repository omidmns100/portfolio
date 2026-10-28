
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "پورتفولیو | امید منصوری",
  description: "نمونه‌کارها و خدمات هویت بصری، برندینگ، تولید محتوا و طراحی وب امید منصوری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
