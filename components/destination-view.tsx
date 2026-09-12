"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import type { Destination } from "@/lib/types";
import { useLang, usePick, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { DestinationCard } from "./destination-card";
import { Reveal } from "./reveal";
import { IconArrow, IconCalendar, IconCheck, IconPhone, IconWhatsApp } from "./icons";
import { AGENCY } from "@/data/config";

export function DestinationView({ destination }: { destination: Destination }) {
  const t = useT();
  const pick = usePick();
  const { locale } = useLang();

  const related = destinations
    .filter((d) => d.slug !== destination.slug)
    .sort((a, b) => Number(b.region === destination.region) - Number(a.region === destination.region))
    .slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <header className="relative isolate flex min-h-[380px] items-end overflow-hidden bg-ink-950 sm:min-h-[480px]">
        <Image
          src={destination.image}
          alt={pick(destination.imageAlt)}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-ink-950/20" />
        <div className="container-site relative pb-10 pt-28">
          <Reveal>
            <nav aria-label="fil d'ariane" className="text-xs text-cream-300">
              <Link href="/destinations" className="transition hover:text-cream-50">
                {t("destinations.breadcrumb")}
              </Link>
              <span aria-hidden className="mx-2 opacity-60">/</span>
              <span className="text-cream-100">{pick(destination.name)}</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
              {pick(destination.name)}
              <span className="ms-3 text-xl font-medium text-cream-300 sm:text-2xl">
                {pick(destination.country)}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-3 max-w-xl text-base text-cream-200 sm:text-lg">
              {pick(destination.tagline)}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="container-site grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
              {pick(destination.description)}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink-950">
              {t("destinations.whyTitle")}
            </h2>
            <div className="mt-5 space-y-4">
              {destination.whyVisit.map((w, i) => (
                <div key={i} className="card flex gap-4 p-5">
                  <span className="font-display text-2xl font-semibold text-brass-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-950">{pick(w.title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">{pick(w.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <p className="flex items-center gap-2.5 text-sm font-medium text-ink-800">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
                  <IconCalendar width={17} height={17} />
                </span>
                <span>
                  {t("destinations.periods")} : <span className="text-ink-950">{pick(destination.bestPeriods)}</span>
                </span>
              </p>
              <p className="text-sm font-medium text-ink-800">
                {t("destinations.idealFor")} : <span className="text-ink-950">{pick(destination.idealFor)}</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink-950">
              {t("destinations.discoverTitle")}
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {destination.toDiscover.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-ink-700">
                  <IconCheck width={15} height={15} className="shrink-0 text-brass-500" />
                  {pick(item)}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink-950">
              {t("destinations.stylesTitle")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {destination.styles.map((s) => (
                <span key={s} className="chip bg-ocean-500/10 text-ocean-600">
                  {t(`styles.${s}`)}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* CTA aside */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={100}>
            <div className="card p-6">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink-950">
                {t("common.requestOffer")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {pick(destination.name)} — {pick(destination.idealFor)}
              </p>
              <div className="mt-5 grid gap-3">
                <Link
                  href={`/demande?dest=${encodeURIComponent(pick(destination.name))}`}
                  className="btn-brass w-full"
                >
                  {t("common.requestOffer")}
                  <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
                </Link>
                <a
                  href={waHref(locale, "destination", { dest: pick(destination.name) })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa w-full"
                >
                  <IconWhatsApp width={17} height={17} />
                  {t("common.talk")}
                </a>
                <a href={AGENCY.phoneHref} className="btn-outline w-full">
                  <IconPhone width={16} height={16} />
                  <span dir="ltr">{AGENCY.phoneDisplay}</span>
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-500">{t("hero.note")}</p>
            </div>
          </Reveal>
        </aside>
      </div>

      {/* Related */}
      <div className="border-t border-ink-900/8 bg-cream-100/60">
        <div className="container-site py-12 sm:py-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
            {t("destinations.related")}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <DestinationCard destination={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
