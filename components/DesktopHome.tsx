import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function DesktopHome() {
  const [message, setMessage] = useState("");

  return (
    <section className="hero">
      <h1>سایت خودت را بساز 🚀</h1>

      <p>
        من دارم Next.js و Vibe Coding را یاد می‌گیرم
        و این اولین سایت من است.
      </p>

      <Button
        text="شروع کنیم"
        onClick={() => setMessage("آفرین! اولین قدم را برداشتی 🎉")}
      />

      {message && <p>{message}</p>}

      <div className="cards">
        <Card
          title="یادگیری Next.js"
          description="ساخت سایت با Next.js را یاد می‌گیرم."
        />

        <Card
          title="یادگیری CSS"
          description="یاد می‌گیرم چطور ظاهر سایت را زیباتر کنم."
        />

        <Card
          title="Vibe Coding"
          description="یاد می‌گیرم چطور با کمک AI سریع‌تر کدنویسی کنم."
        />
      </div>
    </section>
  );
}