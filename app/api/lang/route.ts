import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** POST /api/lang { locale: "fr" | "ar" } — persist the language preference. */
export async function POST(req: Request) {
  let body: { locale?: unknown } | null = null;
  try {
    body = (await req.json()) as { locale?: unknown };
  } catch {
    body = null;
  }
  const locale = body?.locale === "ar" ? "ar" : "fr";
  const res = NextResponse.json({ ok: true, locale });
  res.cookies.set("fv-lang", locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
  return res;
}
