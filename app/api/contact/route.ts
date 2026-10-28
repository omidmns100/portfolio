import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { services } from "@/lib/portfolio";
export const runtime = "nodejs";
const attempts = new Map<string, { count: number; until: number }>();
const reply = (message: string, status = 200) => Response.json({ message }, { status });
const success = () => reply("درخواستت ثبت شد. به‌زودی باهات تماس می‌گیرم.");
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowedOrigin = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : new URL(request.url).origin;
  if (!origin || origin !== allowedOrigin) return reply("درخواست مجاز نیست.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return reply("فرمت درخواست نامعتبر است.", 415);
  // Local process limiter; configure a trusted reverse proxy before enabling forwarded IPs.
  const ip = process.env.TRUST_PROXY === "true" ? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown" : "shared";
  const now = Date.now();
  for (const [key, item] of attempts) if (item.until <= now) attempts.delete(key);
  const limit = attempts.get(ip) || { count: 0, until: now + 600000 };
  if (limit.count >= (ip === "shared" ? 30 : 5)) return reply("کمی صبر کن و دوباره تلاش کن.", 429);
  if (attempts.size >= 10000 && !attempts.has(ip)) return reply("لطفاً کمی بعد تلاش کن.", 429);
  limit.count++; attempts.set(ip, limit);
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("اطلاعات ارسال نشده است.", 400);
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 12000) { await reader.cancel(); return reply("حجم اطلاعات بیش از حد مجاز است.", 413); } chunks.push(value); }
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return reply("اطلاعات نامعتبر است.", 400);
    data = parsed;
  } catch { return reply("اطلاعات نامعتبر است.", 400); }
  const text = (key: string) => typeof data[key] === "string" ? (data[key] as string).trim() : "";
  if (text("website")) return success();
  const name = text("name"), email = text("email"), service = text("service"), message = text("message"), id = text("requestId");
  const phone = text("phone").replace(/[۰-۹]/g, c => String("۰۱۲۳۴۵۶۷۸۹".indexOf(c))).replace(/[٠-٩]/g, c => String("٠١٢٣٤٥٦٧٨٩".indexOf(c))).replace(/[\s()-]/g, "");
  if (name.length < 2 || name.length > 80 || !/^\+?\d{8,15}$/.test(phone) || email.length > 160 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) || !services.some(s => s.slug === service) || message.length > 1500 || !/^[0-9a-f-]{36}$/i.test(id)) return reply("لطفاً نام، شماره تماس و نوع خدمت را درست وارد کن.", 400);
  const token = process.env.TELEGRAM_BOT_TOKEN, chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return reply("فرم هنوز فعال نشده؛ لطفاً کمی بعد دوباره تلاش کن.", 503);
  const directory = process.env.CONTACT_DATA_DIR || (process.env.NODE_ENV !== "production" ? path.join(process.cwd(), ".data", "contacts") : "");
  if (!directory) return reply("فرم هنوز آمادهٔ دریافت درخواست نیست.", 503);
  const file = path.join(directory, `${createHash("sha256").update(id).digest("hex")}.json`);
  const record = { id, name, email, phone, service, message, createdAt: new Date().toISOString(), notification: "pending" };
  try { await mkdir(directory, { recursive: true, mode: 0o700 }); await writeFile(file, JSON.stringify(record), { flag: "wx", mode: 0o600 }); }
  catch (error) { if ((error as NodeJS.ErrnoException).code === "EEXIST") return success(); return reply("ثبت انجام نشد؛ لطفاً دوباره تلاش کن.", 503); }
  let notified = false;
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, text: `درخواست جدید سایت\nنام: ${name}\nتماس: ${phone}\nایمیل: ${email || "—"}\nخدمت: ${services.find(s => s.slug === service)?.title}\nتوضیحات: ${message || "—"}\nشناسه: ${id}` }), signal: AbortSignal.timeout(8000) });
    notified = response.ok && (await response.json()).ok === true;
  } catch { /* The durable request remains available even if Telegram is unreachable. */ }
  try { await writeFile(file, JSON.stringify({ ...record, notification: notified ? "sent" : "failed" }), { mode: 0o600 }); } catch { console.error("Could not update contact notification status"); }
  if (!notified) console.error("Contact saved; Telegram notification failed. Review CONTACT_DATA_DIR.");
  return success();
}
