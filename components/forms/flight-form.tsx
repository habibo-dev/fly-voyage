"use client";

import { Field, SelectInput, TextInput } from "./field";
import { LeadForm } from "./lead-form";
import { useT } from "@/lib/i18n";

export interface FlightFormInitial {
  from?: string;
  dest?: string;
  dateAllez?: string;
  dateRetour?: string;
  travelers?: string;
}

const AIRPORTS = ["bja", "alg", "orn", "czl", "other"] as const;

export function FlightForm({ initial }: { initial: FlightFormInitial }) {
  const t = useT();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <LeadForm
      type="FLIGHT_REQUEST"
      cta={t("billets.cta")}
      required={["from", "dest", "dateAllez", "name", "phone"]}
      datePairs={[
        ["dateAllez", "dateRetour"],
      ]}
      waTemplate="flight"
      waVars={(data) => ({
        from: AIRPORTS.includes(data.from as (typeof AIRPORTS)[number])
          ? t(`search.fromOptions.${data.from}`)
          : data.from,
        to: data.dest,
      })}
      build={(data) => ({
        type: "FLIGHT_REQUEST",
        name: data.name,
        phone: data.phone,
        whatsapp: data.whatsapp || undefined,
        destination: data.dest,
        dates: [data.dateAllez, data.dateRetour].filter(Boolean).join(" → "),
        travelers: data.travelers ? Number(data.travelers) : undefined,
        meta: {
          from: data.from,
          classe: data.classe || "eco",
          roundTrip: data.roundTrip === "on" ? "oui" : "non",
        },
      })}
    >
      <Field label={t("billets.from")} htmlFor="from">
        <SelectInput id="from" name="from" defaultValue={initial.from || "bja"}>
          {AIRPORTS.map((k) => (
            <option key={k} value={k}>
              {t(`search.fromOptions.${k}`)}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field label={t("billets.to")} htmlFor="dest">
        <TextInput id="dest" name="dest" type="text" defaultValue={initial.dest} placeholder={t("billets.toPh")} />
      </Field>
      <Field label={t("billets.dateAllez")} htmlFor="dateAllez">
        <TextInput id="dateAllez" name="dateAllez" type="date" min={today} defaultValue={initial.dateAllez} />
      </Field>
      <Field label={t("billets.dateRetour")} htmlFor="dateRetour">
        <TextInput id="dateRetour" name="dateRetour" type="date" min={initial.dateAllez || today} defaultValue={initial.dateRetour} />
      </Field>
      <label className="flex items-center gap-2.5 text-sm font-medium text-ink-800 sm:col-span-2">
        <input
          type="checkbox"
          name="roundTrip"
          defaultChecked
          className="h-4.5 w-4.5 rounded border-ink-900/25 accent-[#10202f]"
        />
        {t("billets.roundTrip")}
      </label>
      <Field label={t("billets.travelers")} htmlFor="travelers">
        <SelectInput id="travelers" name="travelers" defaultValue={initial.travelers || "1"}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
          <option value="7">6+</option>
        </SelectInput>
      </Field>
      <Field label={t("billets.classe")} htmlFor="classe">
        <SelectInput id="classe" name="classe" defaultValue="eco">
          {["eco", "flex", "biz", "first"].map((k) => (
            <option key={k} value={k}>
              {t(`billets.classes.${k}`)}
            </option>
          ))}
        </SelectInput>
      </Field>
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
