"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  const t = useT();
  return (
    <section className="container-site flex flex-col items-center justify-center py-28 text-center sm:py-40">
      <p className="font-display text-7xl font-semibold tracking-tight text-ink-200 sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-950">
        {t("notFound.title")}
      </h1>
      <p className="mt-3 max-w-md text-ink-600">{t("notFound.text")}</p>
      <Link href="/" className="btn-primary mt-8">
        {t("notFound.cta")}
        <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
      </Link>
    </section>
  );
}
