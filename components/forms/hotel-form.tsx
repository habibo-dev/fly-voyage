"use client";

import { Field, SelectInput, TextAreaInput, TextInput } from "./field";
import { LeadForm } from "./lead-form";
import { useT } from "@/lib/i18n";

export interface HotelFormInitial {
  dest?: string;
  checkIn?: string;
  checkOut?: string;
}

export function HotelForm({ initial }: { initial: HotelFormInitial }) {
  const t = useT();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <LeadForm
      type="HOTEL_REQUEST"
      cta={t("hotels.cta")}
      required={["dest", "checkIn", "checkOut", "name", "phone"]}
      datePairs={[
        ["checkIn", "checkOut"],
      ]}
      waTemplate="hotel"
      waVars={(data) => ({ dest: data.dest })}
      build={(data) => ({
        type: "HOTEL_REQUEST",
        name: data.name,
        phone: data.phone,
        whatsapp: data.whatsapp || undefined,
        destination: data.dest,
        dates: [data.checkIn, data.checkOut].filter(Boolean).join(" → "),
        travelers: data.persons ? Number(data.persons) : undefined,
        budget: data.budget || undefined,
        message: data.prefs || undefined,
        meta: { type: data.type || "hotel" },
      })}
    >
      <Field label={t("hotels.destination")} htmlFor="dest">
        <TextInput id="dest" name="dest" type="text" defaultValue={initial.dest} placeholder={t("hotels.destinationPh")} />
      </Field>
      <Field label={t("hotels.checkIn")} htmlFor="checkIn">
        <TextInput id="checkIn" name="checkIn" type="date" min={today} defaultValue={initial.checkIn} />
      </Field>
      <Field label={t("hotels.checkOut")} htmlFor="checkOut">
        <TextInput id="checkOut" name="checkOut" type="date" min={initial.checkIn || today} defaultValue={initial.checkOut} />
      </Field>
      <Field label={t("hotels.persons")} htmlFor="persons">
        <SelectInput id="persons" name="persons" defaultValue="2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
          <option value="7">6+</option>
        </SelectInput>
      </Field>
      <Field label={t("hotels.type")} htmlFor="type">
        <SelectInput id="type" name="type" defaultValue="hotel">
          {["hotel", "residence", "riad", "autre"].map((k) => (
            <option key={k} value={k}>
              {t(`hotels.types.${k}`)}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field label={t("hotels.budget")} htmlFor="budget">
        <SelectInput id="budget" name="budget" defaultValue="">
          <option value="">—</option>
          {["b1", "b2", "b3", "b4", "b5"].map((k) => (
            <option key={k} value={k}>
              {t(`demande.budgets.${k}`)}
            </option>
          ))}
        </SelectInput>
      </Field>
      <div className="sm:col-span-2">
        <Field label={t("hotels.prefs")} htmlFor="prefs">
          <TextAreaInput id="prefs" name="prefs" placeholder={t("hotels.prefsPh")} />
        </Field>
      </div>
      <Field label={t("forms.name")} htmlFor="name">
        <TextInput id="name" name="name" type="text" autoComplete="name" placeholder={t("forms.namePh")} />
      </Field>
      <Field label={t("forms.phone")} htmlFor="phone">
        <TextInput id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t("forms.phonePh")} />
      </Field>
      <div className="sm:col-span-2">
        <Field label={t("forms.whatsapp")} htmlFor="whatsapp">
          <TextInput id="whatsapp" name="whatsapp" type="tel" inputMode="tel" placeholder={t("forms.whatsappPh")} />
        </Field>
      </div>
    </LeadForm>
  );
}
