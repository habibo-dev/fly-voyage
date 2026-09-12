"use client";

import Image from "next/image";
import Link from "next/link";
import { getDestination } from "@/data/destinations";
import type { Offer } from "@/lib/types";
import { useLang, usePick, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconArrow, IconCheck, IconWhatsApp } from "./icons";

export function OfferCard({ offer }: { offer: Offer }) {
  const t = useT();
  const pick = usePick();
  const { locale } = useLang();
  const destination = getDestination(offer.destinationSlug);
  const destName = destination ? pick(destination.name) : "";

  return (
    <article className="card group grid overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/10 md:grid-cols-[2fr_3fr]">
      <div className="relative h-52 overflow-hidden md:h-full md:min-h-[260px]">
        <Image
          src={offer.image}
          alt={destination ? pick(destination.imageAlt) : pick(offer.title)}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
        {offer.isDemo && (
          <span className="chip absolute start-3 top-3 bg-ink-950/65 font-medium uppercase tracking-wider text-cream-200 backdrop-blur-sm">
            {t("concept")}
          </span>
        )}
        <span className="chip absolute bottom-3 start-3 bg-cream-50/90 text-ink-800 backdrop-blur-sm">
          {pick(offer.duration)}
        </span>
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brass-600">
          {pick(offer.type)}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl">
          {pick(offer.title)}
        </h3>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="text-xs text-ink-500">{t("offers.duration")}</dt>
            <dd className="font-medium text-ink-800">{pick(offer.duration)}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-500">{t("offers.type")}</dt>
            <dd className="font-medium text-ink-800">{pick(offer.type)}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-500">{t("offers.hotel")}</dt>
            <dd className="font-medium text-ink-800">{pick(offer.hotel)}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-500">{t("offers.departure")}</dt>
            <dd className="font-medium text-ink-800">{pick(offer.departure)}</dd>
          </div>
        </dl>

        <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
          {offer.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <IconCheck width={14} height={14} className="mt-1 shrink-0 text-brass-500" />
              <span>{pick(h)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink-900/8 pt-4">
          <p className="font-display text-lg font-semibold text-ink-950">
            {t("offers.price")}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={waHref(locale, "offer", { offer: pick(offer.title) })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("common.whatsapp")} — ${pick(offer.title)}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition hover:border-whatsapp hover:text-whatsapp"
            >
              <IconWhatsApp width={18} height={18} />
            </a>
            <Link
              href={`/demande?dest=${encodeURIComponent(destName)}&offer=${offer.slug}`}
              className="btn-brass px-5 py-2.5 text-sm"
            >
              {t("offers.cta")}
              <IconArrow width={15} height={15} className="rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
