"use client";

import Link from "next/link";
import DesktopHome from "@/components/DesktopHome";
import MobileHome from "@/components/MobileHome";

export default function Home() {
  return (
    <main>
      <div className="desktop-layout">
        <nav>
          <Link href="/">خانه</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </nav>

        <DesktopHome />
      </div>

      <div className="mobile-layout">
        <MobileHome />
      </div>
    </main>
  );
}