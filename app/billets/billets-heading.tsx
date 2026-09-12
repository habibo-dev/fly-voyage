"use client";

import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function BilletsHeading() {
  const t = useT();
  return (
    <>
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-300">
          {t("billets.overline")}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl">
          {t("billets.title")}
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-200">
          {t("billets.subtitle")}
        </p>
      </Reveal>
    </>
  );
}

export function BilletsNote() {
  const t = useT();
  return (
    <p className="mt-5 rounded-xl border border-ink-900/10 bg-cream-100 px-4 py-3.5 text-sm leading-relaxed text-ink-600">
      {t("billets.note")}
    </p>
  );
}
