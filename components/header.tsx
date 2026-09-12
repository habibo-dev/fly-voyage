"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AGENCY } from "@/data/config";
import { useLang, useT } from "@/lib/i18n";
import { IconArrow, IconClose, IconMenu, IconPhone, IconWhatsApp } from "./icons";
import { waHref } from "@/lib/whatsapp";

const NAV = [
  { href: "/", key: "nav.home", exact: true },
  { href: "/destinations", key: "nav.destinations" },
  { href: "/offres", key: "nav.offres" },
  { href: "/billets", key: "nav.billets" },
  { href: "/hotels", key: "nav.hotels" },
  { href: "/a-propos", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

function Wordmark({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <Link href="/" className={`group inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[22px] font-semibold tracking-tight leading-none">
        Fly Voyages
      </span>
      <span className="text-brass-500 font-display text-[22px] leading-none">·</span>
      <span className="text-[13px] font-medium tracking-[0.14em] uppercase opacity-70">
        {t("header.cityTag")}
      </span>
    </Link>
  );
}

function LangSwitch({ light = false }: { light?: boolean }) {
  const { locale, setLocale } = useLang();
  const t = useT();
  const btn = (active: boolean) =>
    `rounded-full px-3 py-1 text-xs font-semibold transition ${
      active
        ? light
          ? "bg-cream-50 text-ink-900"
          : "bg-ink-900 text-cream-50"
        : light
          ? "text-cream-200 hover:text-cream-50"
          : "text-ink-500 hover:text-ink-900"
    }`;
  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={`flex items-center gap-0.5 rounded-full border p-0.5 ${
        light ? "border-cream-50/25" : "border-ink-900/15"
      }`}
    >
      <button type="button" className={btn(locale === "fr")} aria-pressed={locale === "fr"} onClick={() => setLocale("fr")}>
        FR
      </button>
      <button
        type="button"
        className={btn(locale === "ar")}
        aria-pressed={locale === "ar"}
        onClick={() => setLocale("ar")}
      >
        {t("lang.ar")}
      </button>
    </div>
  );
}

export function Header() {
  const t = useT();
  const { locale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pathname = usePathname();
  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink-900/10 bg-cream-50/90 shadow-[0_1px_12px_rgba(16,32,47,0.06)] backdrop-blur-md"
            : "border-b border-transparent bg-cream-50/70 backdrop-blur-sm"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Wordmark className="text-ink-900" />

          <nav aria-label="principale" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href, "exact" in item && item.exact)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  isActive(item.href, "exact" in item && item.exact)
                    ? "bg-ink-900/[0.06] text-ink-900"
                    : "text-ink-600 hover:bg-ink-900/[0.04] hover:text-ink-900"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={AGENCY.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-ink-700 transition hover:text-ink-950 xl:inline-flex"
            >
              <IconPhone width={16} height={16} />
              <span dir="ltr">{AGENCY.phoneDisplay}</span>
            </a>
            <LangSwitch />
            <Link
              href="/demande"
              className="btn-brass hidden px-5 py-2.5 sm:inline-flex"
            >
              {t("nav.cta")}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:bg-ink-900/5 lg:hidden"
              aria-expanded={open}
              aria-label="Menu"
            >
              <IconMenu width={22} height={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-50 flex flex-col bg-ink-950 text-cream-100 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between md:h-[72px]">
          <span className="font-display text-xl font-semibold">Fly Voyages</span>
          <div className="flex items-center gap-3">
            <LangSwitch light />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/25 transition hover:bg-cream-50/10"
              aria-label="Fermer le menu"
            >
              <IconClose width={22} height={22} />
            </button>
          </div>
        </div>
        <nav aria-label="mobile" className="container-site flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-6">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 60 + i * 40 : 0}ms` }}
              className={`font-display text-3xl font-medium tracking-tight transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              } ${isActive(item.href, "exact" in item && item.exact) ? "text-brass-400" : "text-cream-100 hover:text-brass-300"}`}
            >
              {t(item.key)}
            </Link>
          ))}
            <Link
              href="/demande"
              onClick={() => setOpen(false)}
              className="btn-brass mt-6 self-start px-7 py-3.5 text-base"
            >
            {t("nav.cta")}
            <IconArrow width={18} height={18} className="rtl:-scale-x-100" />
          </Link>
        </nav>
        <div className="container-site flex flex-col gap-2 border-t border-cream-50/10 py-6 text-sm text-cream-300">
          <a href={AGENCY.phoneHref} className="flex items-center gap-2.5 text-cream-100 hover:text-brass-300">
            <IconPhone width={16} height={16} className="text-brass-400" />
            <span dir="ltr">{AGENCY.phoneDisplay}</span>
          </a>
          <a
            href={waHref(locale, "general")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-cream-100 hover:text-brass-300"
          >
            <IconWhatsApp width={16} height={16} className="text-whatsapp" />
            {t("common.whatsapp")}
          </a>
          <p className="mt-1 text-cream-400">
            {AGENCY.address.street}, {AGENCY.address.city} {AGENCY.address.postalCode}
          </p>
        </div>
      </div>
    </>
  );
}
