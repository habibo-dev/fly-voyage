"use client";

import Image from "next/image";
import Link from "next/link";
import { AGENCY } from "@/data/config";
import { destinations } from "@/data/destinations";
import { offers } from "@/data/offers";
import { useLang, usePick, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { HeroSearch } from "../hero-search";
import { DestinationCard } from "../destination-card";
import { OfferCard } from "../offer-card";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { MapBlock } from "../map";
import {
  IconArrow,
  IconClock,
  IconCompass,
  IconMapPin,
  IconPhone,
  IconPlane,
  IconWhatsApp,
} from "../icons";

const bySlug = (slug: string) => destinations.find((d) => d.slug === slug)!;

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  const t = useT();
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src="/images/hero.jpg"
        alt="Front de mer de Béjaïa au coucher du soleil"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/30 to-ink-950/80" />
      <div className="container-site relative flex min-h-[calc(100svh-4rem)] flex-col justify-center pb-14 pt-16 sm:pt-20">
        <Reveal>
          <span className="chip border border-brass-400/40 bg-ink-950/45 text-brass-300 backdrop-blur-sm">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brass-400" />
            {t("hero.badge")}
          </span>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream-50 sm:text-5xl lg:text-[64px]">
            {t("hero.title")}
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-200 sm:text-lg">
            {t("hero.subtitle")}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demande" className="btn-brass">
              {t("hero.ctaPrimary")}
              <IconArrow width={17} height={17} className="rtl:-scale-x-100" />
            </Link>
            <Link href="/contact" className="btn-light">
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={340} className="mt-10 sm:mt-12">
          <HeroSearch />
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-cream-300/90">
            {t("hero.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Featured destinations ------------------------ */

export function FeaturedDestinations() {
  const t = useT();
  const featured = ["istanbul", "antalya", "paris", "dubai"].map(bySlug);
  return (
    <section className="container-site py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          overline="destinations.overline"
          title="destinations.title"
          subtitle="destinations.subtitle"
        />
        <Reveal delay={120}>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition hover:text-brass-600"
          >
            {t("destinations.allCta")}
            <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((d, i) => (
          <Reveal key={d.slug} delay={i * 80} className="h-full">
            <DestinationCard destination={d} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Featured offers --------------------------- */

export function FeaturedOffers() {
  const t = useT();
  return (
    <section className="bg-cream-100/60 py-16 sm:py-24">
      <div className="container-site">
        <SectionHeading
          overline="offers.overline"
          title="offers.title"
          subtitle="offers.subtitle"
        />
        <div className="mt-10 grid gap-6">
          {offers.slice(0, 3).map((o, i) => (
            <Reveal key={o.slug} delay={i * 90}>
              <OfferCard offer={o} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-8 text-center">
          <Link href="/offres" className="btn-outline">
            {t("nav.offres")}
            <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Why choose us ----------------------------- */

const WHY_ITEMS = [
  { icon: IconMapPin, title: "why.i1t", text: "why.i1d" },
  { icon: IconPlane, title: "why.i2t", text: "why.i2d" },
  { icon: IconClock, title: "why.i3t", text: "why.i3d" },
  { icon: IconCompass, title: "why.i4t", text: "why.i4d" },
];

export function WhySection() {
  const t = useT();
  return (
    <section className="container-site py-16 sm:py-24">
      <SectionHeading overline="why.overline" title="why.title" align="center" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {WHY_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={i} delay={i * 80}>
              <div className="card flex h-full gap-4 p-6 sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
                  <Icon width={22} height={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink-950">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(item.text)}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------- Flight / hotel band ------------------------- */

export function FlightHotelBand() {
  const t = useT();
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28">
      <Image
        src="/images/billets.svg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/90" />
      <div className="container-site relative">
        <SectionHeading
          overline="band.overline"
          title="band.title"
          subtitle="band.subtitle"
          light
          align="center"
        />
        <Reveal delay={140} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/billets" className="btn-brass">
            <IconPlane width={17} height={17} />
            {t("band.ctaFlight")}
          </Link>
          <Link href="/hotels" className="btn-light">
            {t("band.ctaHotel")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Inspiration ----------------------------- */

export function Inspiration() {
  const t = useT();
  const pick = usePick();
  const slugs = ["rome", "marrakech", "barcelone", "athenes"];
  return (
    <section className="container-site py-16 sm:py-24">
      <SectionHeading
        overline="inspiration.overline"
        title="inspiration.title"
        subtitle="inspiration.subtitle"
        align="center"
      />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {slugs.map((slug, i) => {
          const d = bySlug(slug);
          return (
            <Reveal key={slug} delay={i * 70}>
              <Link
                href={`/destinations/${d.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={d.image}
                  alt={pick(d.imageAlt)}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg font-semibold text-cream-50">
                    {pick(d.name)}
                  </p>
                  <p className="text-xs text-cream-300">{pick(d.country)}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={120} className="mt-8 text-center">
        <Link href="/destinations" className="btn-outline">
          {t("inspiration.cta")}
          <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
        </Link>
      </Reveal>
    </section>
  );
}

/* ------------------------------ WhatsApp CTA ------------------------------ */

export function WhatsAppSection() {
  const t = useT();
  const { locale } = useLang();
  return (
    <section className="bg-cream-100/60 py-16 sm:py-24">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ink-900/5 sm:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
              <IconWhatsApp width={32} height={32} />
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink-950">
              {t("whatsapp.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600 sm:text-base">
              {t("whatsapp.text")}
            </p>
            <a
              href={waHref(locale, "general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa mt-7"
            >
              <IconWhatsApp width={18} height={18} />
              {t("whatsapp.cta")}
            </a>
            <p className="mt-4 text-xs text-ink-500">
              {t("whatsapp.phoneNote").replace("0550 06 06 20", AGENCY.phoneDisplay)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- Location / contact -------------------------- */

export function LocationSection() {
  const t = useT();
  const { locale } = useLang();
  return (
    <section className="container-site grid items-start gap-10 py-16 sm:py-24 lg:grid-cols-2">
      <div>
        <SectionHeading overline="location.overline" title="location.title" />
        <ul className="mt-8 space-y-5 text-sm">
          <li className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
              <IconMapPin width={18} height={18} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">{t("location.addressTitle")}</p>
              <p className="mt-1 text-ink-600">
                {AGENCY.address.street}
                <br />
                {AGENCY.address.city} {AGENCY.address.postalCode}, {AGENCY.address.country}
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
              <IconPhone width={18} height={18} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">{t("location.phoneLabel")}</p>
              <a
                href={AGENCY.phoneHref}
                dir="ltr"
                className="mt-1 inline-block text-ink-600 transition hover:text-brass-600"
              >
                {AGENCY.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
              <IconWhatsApp width={18} height={18} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">{t("location.waLabel")}</p>
              <a
                href={waHref(locale, "general")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-ink-600 transition hover:text-whatsapp"
              >
                <span dir="ltr">{AGENCY.phoneDisplay}</span>
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
              <IconClock width={18} height={18} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">{t("location.hours")}</p>
              <p className="mt-1 text-ink-500">{t("location.hoursTBC")}</p>
            </div>
          </li>
        </ul>
        <Reveal delay={100} className="mt-9">
          <Link href="/demande" className="btn-primary">
            {t("common.requestOffer")}
            <IconArrow width={16} height={16} className="rtl:-scale-x-100" />
          </Link>
        </Reveal>
      </div>
      <MapBlock className="h-[320px] sm:h-[420px]" />
    </section>
  );
}
