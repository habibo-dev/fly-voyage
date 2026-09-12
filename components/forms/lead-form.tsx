"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AGENCY } from "@/data/config";
import { useT } from "@/lib/i18n";
import type { NewLeadInput } from "@/lib/leads";
import type { LeadType } from "@/lib/types";
import { waHref } from "@/lib/whatsapp";
import { IconArrow, IconCheckCircle, IconPhone, IconWhatsApp } from "../icons";

export type WaTemplate = "general" | "destination" | "flight" | "hotel" | "offer";

interface WaVars {
  dest?: string;
  from?: string;
  to?: string;
  offer?: string;
}

const PHONE_RE = /^[+]?[0-9 ()\-]{8,20}$/;

export function LeadForm({
  type,
  cta,
  required = ["name", "phone"],
  datePairs = [],
  build,
  waTemplate,
  waVars,
  children,
}: {
  type: LeadType;
  cta: string;
  required?: string[];
  /** [before, after] field names — validates that `after` is not before `before`. */
  datePairs?: [string, string][];
  build: (data: Record<string, string>) => NewLeadInput;
  waTemplate: WaTemplate;
  waVars?: (data: Record<string, string>) => WaVars;
  children: ReactNode;
}) {
  const t = useT();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [lastData, setLastData] = useState<Record<string, string> | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    for (const [k, v] of fd.entries()) {
      if (typeof v === "string") data[k] = v;
    }

    const nextErrors: Record<string, string> = {};
    for (const field of required) {
      if (!data[field]?.trim()) nextErrors[field] = t("forms.errRequired");
    }
    if (!nextErrors.phone) {
      const digits = (data.phone ?? "").replace(/\D/g, "");
      if (!PHONE_RE.test(data.phone ?? "") || digits.length < 8) nextErrors.phone = t("forms.errPhone");
    }
    for (const [before, after] of datePairs) {
      const a = data[before] ?? "";
      const b = data[after] ?? "";
      if (a && b && b < a) nextErrors[after] = t("forms.errDates");
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstKey = Object.keys(nextErrors)[0];
      const el = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(build(data)),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setLastData(data);
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("idle");
      setErrors({ __submit: t("forms.errSubmit") });
    }
  }

  if (status === "success" && lastData) {
    const locale = document.documentElement.lang === "ar" ? "ar" : "fr";
    const wa = waHref(
      locale,
      waTemplate,
      waVars ? waVars(lastData) : undefined
    );
    return (
      <div className="card p-6 sm:p-8" role="status">
        <div className="flex flex-col items-start gap-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brass-400/20 text-brass-600">
            <IconCheckCircle width={30} height={30} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
              {t("forms.successTitle")}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600">
              {t("forms.successText")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <IconWhatsApp width={18} height={18} />
              {t("forms.successWa")}
            </a>
            <a href={AGENCY.phoneHref} className="btn-outline">
              <IconPhone width={17} height={17} />
              {t("forms.successPhone").replace("%PHONE%", AGENCY.phoneDisplay)}
            </a>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-ink-900"
          >
            {t("forms.successHome")}
            <IconArrow width={15} height={15} className="rtl:-scale-x-100" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-5 sm:p-7">
      {errors.__submit ? (
        <p role="alert" className="mb-4 rounded-xl bg-red-700/8 px-4 py-3 text-sm font-medium text-red-800">
          {t("forms.errPhone")}
        </p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn-brass min-w-[220px] disabled:opacity-60">
          {status === "sending" ? t("forms.submitting") : cta}
          {status !== "sending" && <IconArrow width={17} height={17} className="rtl:-scale-x-100" />}
        </button>
        <p className="text-xs leading-relaxed text-ink-500">{t("hero.note")}</p>
      </div>
    </form>
  );
}
