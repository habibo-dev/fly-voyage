"use client";

import { AGENCY } from "@/data/config";
import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function DemandAside() {
  const t = useT();
  const { locale } = useLang();
  const steps = [
    { n: "01", title: "demande.side1t", text: "demande.side1d" },
    { n: "02", title: "demande.side2t", text: "demande.side2d" },
    { n: "03", title: "demande.side3t", text: "demande.side3d" },
  ];
  return (
    <div className="space-y-5 lg:sticky lg:top-24">
      <Reveal delay={80}>
        <div className="card p-6">
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink-950">
            {t("demande.sideTitle")}
          </h2>
          <ol className="mt-5 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-3.5">
                <span className="font-display text-lg font-semibold text-brass-500">{s.n}</span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t(s.title)}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-600">{t(s.text)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
      <Reveal delay={140}>
        <div className="card bg-ink-950 p-6 text-cream-100">
          <p className="font-display text-lg font-semibold text-cream-50">
            {t("demande.sideWa")}
          </p>
          <div className="mt-4 grid gap-3">
            <a
              href={waHref(locale, "general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full"
            >
              <IconWhatsApp width={17} height={17} />
              {t("common.whatsapp")}
            </a>
            <a href={AGENCY.phoneHref} className="btn-light w-full">
              <IconPhone width={16} height={16} />
              <span dir="ltr">{AGENCY.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
