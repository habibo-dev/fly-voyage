"use client";

import { useLang, useT } from "@/lib/i18n";
import { waHref } from "@/lib/whatsapp";
import { IconWhatsApp } from "./icons";

export function WhatsAppFloat() {
  const { locale } = useLang();
  const t = useT();
  return (
    <a
      href={waHref(locale, "general")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("common.whatsapp")}
      className="fixed bottom-20 end-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition duration-200 hover:scale-105 hover:bg-whatsapp-dark md:bottom-6 md:end-6"
    >
      <IconWhatsApp width={28} height={28} />
    </a>
  );
}
