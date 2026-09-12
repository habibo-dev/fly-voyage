"use client";

import { Field, SelectInput, TextAreaInput, TextInput } from "./field";
import { LeadForm } from "./lead-form";
import { usePick, useT } from "@/lib/i18n";
import { getOffer } from "@/data/offers";

export interface TravelFormInitial {
  dest?: string;
  depart?: string;
  retour?: string;
  travelers?: string;
  offer?: string;
}

export function TravelForm({ initial }: { initial: TravelFormInitial }) {
  const t = useT();
  const pick = usePick();
  const today = new Date().toISOString().slice(0, 10);
  const offer = initial.offer ? getOffer(initial.offer) : undefined;

  return (
    <div>
      {offer && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-brass-400/40 bg-brass-400/10 px-4 py-3">
          <span className="chip bg-ink-900 text-cream-100">{t("concept")}</span>
          <p className="text-sm font-medium text-ink-800">
            {t("offers.highlights")} — <span className="text-ink-950">{pick(offer.title)}</span>
          </p>
        </div>
      )}
      <LeadForm
        type="TRAVEL_REQUEST"
        cta={t("demande.cta")}
        required={["dest", "depart", "name", "phone"]}
        datePairs={[
          ["depart", "retour"],
        ]}
        waTemplate="destination"
        waVars={(data) => ({ dest: data.dest })}
        build={(data) => ({
          type: "TRAVEL_REQUEST",
          name: data.name,
          phone: data.phone,
          whatsapp: data.whatsapp || undefined,
          destination: data.dest,
          dates: [data.depart, data.retour].filter(Boolean).join(" → "),
          travelers: data.travelers ? Number(data.travelers) : undefined,
          budget: data.budget || undefined,
          message: data.prefs || undefined,
          meta: {
            tripType: data.tripType || "sejour",
            offer: initial.offer || undefined,
          },
        })}
      >
        <Field label={t("demande.destination")} htmlFor="dest">
          <TextInput
            id="dest"
            name="dest"
            type="text"
            defaultValue={initial.dest}
            placeholder={t("demande.destinationPh")}
          />
        </Field>
        <Field label={t("demande.depart")} htmlFor="depart">
          <TextInput id="depart" name="depart" type="date" min={today} defaultValue={initial.depart} />
        </Field>
        <Field label={t("demande.retour")} htmlFor="retour">
          <TextInput id="retour" name="retour" type="date" min={initial.depart || today} defaultValue={initial.retour} />
        </Field>
        <Field label={t("demande.travelers")} htmlFor="travelers">
          <SelectInput id="travelers" name="travelers" defaultValue={initial.travelers || "2"}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="7">6+</option>
          </SelectInput>
        </Field>
        <Field label={t("demande.type")} htmlFor="tripType">
          <SelectInput id="tripType" name="tripType" defaultValue={initial.offer ? "autre" : "sejour"}>
            {["sejour", "business", "couple", "famille", "groupe", "omra", "autre"].map((k) => (
              <option key={k} value={k}>
                {t(`demande.types.${k}`)}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label={t("demande.budget")} htmlFor="budget">
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
          <Field label={t("demande.prefs")} htmlFor="prefs">
            <TextAreaInput id="prefs" name="prefs" placeholder={t("demande.prefsPh")} />
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
    </div>
  );
}
