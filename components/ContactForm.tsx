"use client";
import { useRef, useState, type FormEvent } from "react";
import { services } from "@/lib/portfolio";
export default function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState({ ok: false, message: "" });
  const locked = useRef(false);
  const requestId = useRef<string | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    locked.current = true; setBusy(true); setResult({ ok: false, message: "" });
    const form = event.currentTarget;
    requestId.current ??= crypto.randomUUID();
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), requestId: requestId.current }) });
      const data = await response.json();
      setResult({ ok: response.ok, message: data.message || "ارسال ناموفق بود؛ دوباره تلاش کن." });
      if (response.ok) { form.reset(); requestId.current = null; }
    } catch { setResult({ ok: false, message: "ارتباط برقرار نشد؛ اطلاعاتت حفظ شده، دوباره تلاش کن." }); }
    finally { locked.current = false; setBusy(false); }
  }
  return <form onSubmit={submit} onChange={() => { if (!locked.current) requestId.current = null; }} className="contact-form" aria-busy={busy}>
    <h2 id="contact-title">بیا دربارهٔ پروژه‌ات حرف بزنیم</h2><p>اطلاعاتت رو بنویس تا برای شروع همکاری باهات تماس بگیرم.</p>
    <fieldset disabled={busy}><legend className="sr-only">اطلاعات درخواست مشاوره</legend><div className="form-fields">
      <label>نام و نام خانوادگی<input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="نام شما" /></label>
      <label>ایمیل<input name="email" type="email" autoComplete="email" maxLength={160} dir="ltr" placeholder="you@example.com (اختیاری)" /></label>
      <label>شماره تماس<input name="phone" type="tel" autoComplete="tel" required maxLength={24} dir="ltr" placeholder="0912 345 6789" /></label>
      <label>نوع خدمت<select name="service" required defaultValue=""><option value="" disabled>انتخاب خدمت</option>{services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}</select></label>
      <label className="full-field">توضیح کوتاه<textarea name="message" maxLength={1500} rows={2} placeholder="از ایده یا پروژه‌ات بگو (اختیاری)" /></label>
    </div><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <button className="button button-white submit" type="submit">{busy ? "در حال ثبت…" : "ثبت درخواست مشاوره"}</button></fieldset>
    <p className={`form-result ${result.ok ? "success" : ""}`} role="status" aria-live="polite">{result.message}</p>
  </form>;
}
