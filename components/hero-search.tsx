"use client";

import { useState, type ReactNode } from "react";
import { useT } from "@/lib/i18n";

type Tab = "voyage" | "vol" | "hotel" | "sejour";
const TABS: Tab[] = ["voyage", "vol", "hotel", "sejour"];

function buildHref(tab: Tab, f: Record<string, string>): string {
  const p = new URLSearchParams();
  const add = (key: string, value: string) => {
    if (value) p.set(key, value);
  };
  if (tab === "voyage") {
    add("dest", f.destination ?? "");
    add("depart", f.depart ?? "");
    add("travelers", f.travelers ?? "");
  } else if (tab === "vol") {
    add("from", f.from ?? "");
    add("dest", f.destination ?? "");
    add("dateAllez", f.dateAllez ?? "");
  } else if (tab === "hotel") {
    add("dest", f.destination ?? "");
    add("checkIn", f.checkIn ?? "");
    add("checkOut", f.checkOut ?? "");
  } else {
    add("dest", f.destination ?? "");
    add("depart", f.depart ?? "");
    add("retour", f.retour ?? "");
    p.set("type", "sejour");
  }
  const href =
    tab === "vol" ? "/billets" : tab === "hotel" ? "/hotels" : "/demande";
  return `${href}?${p.toString()}`;
}

const inputCls =
  "w-full rounded-xl border border-ink-900/15 bg-white/95 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-500 focus:ring-2 focus:ring-brass-500/25 placeholder:text-ink-400";

export function HeroSearch() {
  const t = useT();
  const [tab, setTab] = useState<Tab>("voyage");
  const [f, setF] = useState<Record<string, string>>({ from: "bja" });

  const set = (k: string) => (v: string) => setF((old) => ({ ...old, [k]: v }));
  const today = new Date().toISOString().slice(0, 10);

  const fields: Record<Tab, ReactNode> = {
    voyage: (
      <>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.destination")}
          </span>
          <input
            className={inputCls}
            type="text"
            value={f.destination ?? ""}
            onChange={(e) => set("destination")(e.target.value)}
            placeholder={t("search.destinationPh")}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.depart")}
          </span>
          <input
            className={inputCls}
            type="date"
            min={today}
            value={f.depart ?? ""}
            onChange={(e) => set("depart")(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.travelers")}
          </span>
          <select
            className={inputCls}
            value={f.travelers ?? "2"}
            onChange={(e) => set("travelers")(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="7">6+</option>
          </select>
        </label>
      </>
    ),
    vol: (
      <>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.from")}
          </span>
          <select
            className={inputCls}
            value={f.from ?? "bja"}
            onChange={(e) => set("from")(e.target.value)}
          >
            {(["bja", "alg", "orn", "czl", "other"] as const).map((k) => (
              <option key={k} value={k}>
                {t(`search.fromOptions.${k}`)}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.to")}
          </span>
          <input
            className={inputCls}
            type="text"
            value={f.destination ?? ""}
            onChange={(e) => set("destination")(e.target.value)}
            placeholder={t("billets.toPh")}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("billets.dateAllez")}
          </span>
          <input
            className={inputCls}
            type="date"
            min={today}
            value={f.dateAllez ?? ""}
            onChange={(e) => set("dateAllez")(e.target.value)}
          />
        </label>
      </>
    ),
    hotel: (
      <>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.destination")}
          </span>
          <input
            className={inputCls}
            type="text"
            value={f.destination ?? ""}
            onChange={(e) => set("destination")(e.target.value)}
            placeholder={t("search.destinationPh")}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.checkIn")}
          </span>
          <input
            className={inputCls}
            type="date"
            min={today}
            value={f.checkIn ?? ""}
            onChange={(e) => set("checkIn")(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.checkOut")}
          </span>
          <input
            className={inputCls}
            type="date"
            min={f.checkIn || today}
            value={f.checkOut ?? ""}
            onChange={(e) => set("checkOut")(e.target.value)}
          />
        </label>
      </>
    ),
    sejour: (
      <>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.destination")}
          </span>
          <input
            className={inputCls}
            type="text"
            value={f.destination ?? ""}
            onChange={(e) => set("destination")(e.target.value)}
            placeholder={t("search.destinationPh")}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.depart")}
          </span>
          <input
            className={inputCls}
            type="date"
            min={today}
            value={f.depart ?? ""}
            onChange={(e) => set("depart")(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t("search.retour")}
          </span>
          <input
            className={inputCls}
            type="date"
            min={f.depart || today}
            value={f.retour ?? ""}
            onChange={(e) => set("retour")(e.target.value)}
          />
        </label>
      </>
    ),
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-cream-50/15 bg-ink-950/55 p-3 shadow-2xl shadow-ink-950/40 backdrop-blur-md sm:p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-cream-100">{t("search.title")}</p>
        <p className="hidden text-xs text-cream-300/80 sm:block">{t("search.hint")}</p>
      </div>
      <div role="tablist" aria-label={t("search.title")} className="mb-3 flex gap-1 rounded-full bg-ink-950/50 p-1">
        {TABS.map((k) => (
          <button
            key={k}
            role="tab"
            type="button"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm ${
              tab === k ? "bg-brass-400 text-ink-950 shadow" : "text-cream-200 hover:text-cream-50"
            }`}
          >
            {t(`search.tabs.${k}`)}
          </button>
        ))}
      </div>
      <div className="grid gap-2.5 sm:grid-cols-[1.3fr_1fr_auto] sm:items-end">
        {fields[tab]}
        <a
          href={buildHref(tab, f)}
          className="btn-brass h-[46px] py-0 text-sm sm:col-span-3 lg:col-span-1"
          aria-label={t(`search.cta.${tab}`)}
        >
          {t(`search.cta.${tab}`)}
        </a>
      </div>
    </div>
  );
}
