"use client";

import { Field, TextAreaInput, TextInput } from "./field";
import { LeadForm } from "./lead-form";
import { useT } from "@/lib/i18n";

export function ContactForm() {
  const t = useT();
  return (
    <LeadForm
      type="CONTACT_REQUEST"
      cta={t("contact.cta")}
      required={["name", "phone", "message"]}
      waTemplate="general"
      build={(data) => ({
        type: "CONTACT_REQUEST",
        name: data.name,
        phone: data.phone,
        whatsapp: data.whatsapp || undefined,
        message: data.message,
      })}
    >
      <Field label={t("forms.name")} htmlFor="name">
        <TextInput id="name" name="name" type="text" autoComplete="name" placeholder={t("forms.namePh")} />
      </Field>
      <Field label={t("forms.phone")} htmlFor="phone">
        <TextInput id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t("forms.phonePh")} />
      </Field>
      <div className="sm:col-span-2">
        <Field label={t("forms.message")} htmlFor="message">
          <TextAreaInput id="message" name="message" placeholder={t("forms.messagePh")} />
        </Field>
      </div>
    </LeadForm>
  );
}
