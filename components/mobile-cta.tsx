"use client";

import Link from "next/link";
import { AGENCY } from "@/data/config";
import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconCompass, IconPhone, IconWhatsApp } from "./icons";

/**
 * Sticky bottom CTA bar (mobile only): WhatsApp / Call / Request an offer.
 */
export function MobileCta() {
  const t = useT();
  const { locale } = useLang();

  return (
    <nav
      aria-label="actions rapides"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-900/10 bg-cream-50/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-3">
        <a
          href={waHref(locale, "general")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink-800 transition active:bg-ink-900/5"
        >
          <IconWhatsApp width={20} height={20} className="text-whatsapp" />
          {t("mobileCta.whatsapp")}
        </a>
        <a
          href={AGENCY.phoneHref}
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink-800 transition active:bg-ink-900/5"
        >
          <IconPhone width={20} height={20} className="text-ink-700" />
          {t("mobileCta.call")}
        </a>
        <Link
          href="/demande"
          className="flex flex-col items-center gap-1 bg-brass-400/15 py-2.5 text-[11px] font-semibold text-ink-950"
        >
          <IconCompass width={20} height={20} className="text-brass-600" />
          {t("mobileCta.offer")}
        </Link>
      </div>
    </nav>
  );
}
