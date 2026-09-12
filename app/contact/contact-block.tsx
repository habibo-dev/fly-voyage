"use client";

import { useT } from "@/lib/i18n";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactBlock() {
  const t = useT();
  return (
    <div>
      <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-ink-950">
        {t("contact.formTitle")}
      </h2>
      <ContactForm />
    </div>
  );
}
