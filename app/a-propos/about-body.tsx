"use client";

import Link from "next/link";
import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/reveal";
import { IconArrow, IconCompass, IconWhatsApp } from "@/components/icons";

const STEPS = [
  { n: "01", title: "aPropos.s1t", text: "aPropos.s1d" },
  { n: "02", title: "aPropos.s2t", text: "aPropos.s2d" },
  { n: "03", title: "aPropos.s3t", text: "aPropos.s3d" },
  { n: "04", title: "aPropos.s4t", text: "aPropos.s4d" },
];

export function AboutHeading() {
  const t = useT();
  return (
    <>
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-300">
          {t("aPropos.overline")}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl">
          {t("aPropos.title")}
        </h1>
      </Reveal>
    </>
  );
}

export function AboutBody() {
  const t = useT();
  return (
    <>
      <section className="container-site py-12 sm:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-700 sm:text-xl">
              {t("aPropos.intro")}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card flex gap-4 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
                <IconCompass width={22} height={22} />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight text-ink-950">
                  {t("aPropos.roleTitle")}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {t("aPropos.roleText")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100/60 py-14 sm:py-20">
        <div className="container-site">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
              {t("aPropos.stepsTitle")}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
              {t("aPropos.stepsTitle")}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className="font-display text-3xl font-semibold text-brass-500">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-semibold text-ink-950">{t(s.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(s.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-xl border-s-4 border-brass-400 ps-4 text-sm leading-relaxed text-ink-500 italic">
              {t("aPropos.note")}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function AboutCta() {
  const t = useT();
  const { locale } = useLang();
  return (
    <section className="container-site py-14 sm:py-20">
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-ink-950 px-8 py-12 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-cream-50">
            {t("aPropos.contactTitle")}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-cream-300">
            {t("aPropos.contactText")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/demande" className="btn-brass">
              {t("hero.ctaPrimary")}
              <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
            </Link>
            <a
              href={waHref(locale, "general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              <IconWhatsApp width={17} height={17} />
              {t("common.whatsapp")}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
