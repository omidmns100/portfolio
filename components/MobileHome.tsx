import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function MobileHome() {
  const [message, setMessage] = useState("");

  return (
    <section className="mobile-home">
      <div className="mobile-hero">
        <span className="mobile-eyebrow">
          Vibe Coding
        </span>

        <h1>
          سایت خودت را
          <br />
          بساز 🚀
        </h1>

        <p>
          با Next.js و کمک هوش مصنوعی،
          ایده‌هایت را سریع‌تر به یک سایت واقعی تبدیل کن.
        </p>

        <Button
          text="شروع کنیم"
          onClick={() => setMessage("آفرین! اولین قدم را برداشتی 🎉")}
        />

        {message && (
          <p className="mobile-message">
            {message}
          </p>
        )}
      </div>

      <div className="mobile-cards">
        <Card
          title="Next.js"
          description="ساخت سایت مدرن با Next.js"
        />

        <Card
          title="CSS"
          description="طراحی ظاهر و رابط کاربری"
        />

        <Card
          title="Vibe Coding"
          description="ساخت سریع‌تر با کمک AI"
        />
      </div>
    </section>
  );
}