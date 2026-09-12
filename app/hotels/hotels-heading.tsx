"use client";

import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function HotelsHeading() {
  const t = useT();
  return (
    <>
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-300">
          {t("hotels.overline")}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl">
          {t("hotels.title")}
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-200">
          {t("hotels.subtitle")}
        </p>
      </Reveal>
    </>
  );
}
