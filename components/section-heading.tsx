"use client";

import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";

export function SectionHeading({
  overline,
  title,
  subtitle,
  light = false,
  align = "start",
}: {
  overline: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "start" | "center";
}) {
  const t = useT();
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          light ? "text-brass-300" : "text-brass-600"
        }`}
      >
        {t(overline)}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-cream-50" : "text-ink-950"
        }`}
      >
        {t(title)}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-cream-300" : "text-ink-600"}`}>
          {t(subtitle)}
        </p>
      ) : null}
    </Reveal>
  );
}
