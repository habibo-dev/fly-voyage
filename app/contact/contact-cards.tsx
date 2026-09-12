"use client";

import { AGENCY } from "@/data/config";
import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconClock, IconMapPin, IconPhone, IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function ContactCards() {
  const t = useT();
  const { locale } = useLang();

  return (
    <div className="space-y-5">
      <Reveal>
        <div className="card p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
              <IconMapPin width={20} height={20} />
            </span>
            <div>
              <h2 className="font-semibold text-ink-950">{t("location.addressTitle")}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {AGENCY.name}
                <br />
                {AGENCY.address.street}
                <br />
                {AGENCY.address.city} {AGENCY.address.postalCode}, {AGENCY.address.country}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="card p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
              <IconPhone width={20} height={20} />
            </span>
            <div>
              <h2 className="font-semibold text-ink-950">{t("location.phoneLabel")}</h2>
              <a
                href={AGENCY.phoneHref}
                dir="ltr"
                className="mt-1.5 inline-block font-display text-2xl font-semibold tracking-tight text-ink-950 transition hover:text-brass-600"
              >
                {AGENCY.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="card p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
              <IconWhatsApp width={20} height={20} />
            </span>
            <div>
              <h2 className="font-semibold text-ink-950">{t("location.waLabel")}</h2>
              <a
                href={waHref(locale, "general")}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="mt-1.5 inline-block text-sm font-medium text-whatsapp underline-offset-4 transition hover:underline"
              >
                {AGENCY.phoneDisplay}
              </a>
              <p className="mt-1 text-xs text-ink-500">{t("whatsapp.text")}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <div className="card p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass-400/15 text-brass-600">
              <IconClock width={20} height={20} />
            </span>
            <div>
              <h2 className="font-semibold text-ink-950">{t("location.hours")}</h2>
              <p className="mt-1.5 text-sm text-ink-500">{t("location.hoursTBC")}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
