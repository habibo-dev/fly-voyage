"use client";

import Link from "next/link";
import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconArrow, IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function OffresCta() {
  const t = useT();
  const { locale } = useLang();
  return (
    <div className="container-site pb-16">
      <Reveal>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ink-900/5">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
            {t("demande.sideWa")}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/demande" className="btn-brass">
              {t("nav.cta")}
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
    </div>
  );
}
