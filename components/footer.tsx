"use client";

import Link from "next/link";
import { AGENCY, SOCIALS } from "@/data/config";
import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconClock, IconMapPin, IconPhone, IconWhatsApp } from "./icons";

const NAV = [
  { href: "/", key: "nav.home" },
  { href: "/destinations", key: "nav.destinations" },
  { href: "/offres", key: "nav.offres" },
  { href: "/billets", key: "nav.billets" },
  { href: "/hotels", key: "nav.hotels" },
  { href: "/demande", key: "demande.overline" },
  { href: "/a-propos", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

function Social() {
  const links = [
    { href: SOCIALS.facebook, icon: "f", label: "Facebook" },
    { href: SOCIALS.instagram, icon: "ig", label: "Instagram" },
    { href: SOCIALS.tiktok, icon: "tt", label: "TikTok" },
  ].filter((l) => l.href);
  if (!links.length) return null;
  return (
    <div className="flex gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/20 text-xs font-bold text-cream-200 transition hover:border-brass-400 hover:text-brass-300"
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  const t = useT();
  const { locale } = useLang();

  return (
    <footer className="bg-ink-950 text-cream-200">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-cream-50">
            Fly Voyages <span className="text-brass-400">·</span>{" "}
            <span className="text-sm font-medium uppercase tracking-[0.14em] text-cream-300">
              {t("header.cityTag")}
            </span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-300">
            {t("footer.blurb")}
          </p>
          <div className="mt-5">
            <Social />
          </div>
        </div>

        <nav aria-label="footer" className="lg:justify-self-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-400">
            {t("footer.explore")}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream-200 transition hover:text-brass-300">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-400">
            {t("footer.contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <IconMapPin width={16} height={16} className="mt-0.5 shrink-0 text-brass-400" />
              <span>
                {AGENCY.address.street}
                <br />
                {AGENCY.address.city} {AGENCY.address.postalCode}, {AGENCY.address.country}
              </span>
            </li>
            <li>
              <a href={AGENCY.phoneHref} className="flex items-center gap-2.5 transition hover:text-brass-300">
                <IconPhone width={16} height={16} className="text-brass-400" />
                <span dir="ltr">{AGENCY.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={waHref(locale, "general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition hover:text-brass-300"
              >
                <IconWhatsApp width={16} height={16} className="text-whatsapp" />
                {t("common.whatsapp")} · <span dir="ltr">{AGENCY.phoneDisplay}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconClock width={16} height={16} className="mt-0.5 shrink-0 text-brass-400" />
              <span>
                {t("location.hours")} :{" "}
                <span className="text-cream-400">{t("location.hoursTBC")}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-cream-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights")}</p>
          <p className="flex items-center gap-1.5">
            <IconMapPin width={13} height={13} className="text-brass-400" />
            {t("footer.cityLine")}
            <span className="rounded-full border border-cream-50/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cream-300">
              {t("concept")}
            </span>
          </p>
        </div>
        <p className="container-site pb-16 pt-0 text-[11px] leading-relaxed text-cream-500 md:pb-6">
          {t("footer.concept")}
        </p>
      </div>
    </footer>
  );
}
