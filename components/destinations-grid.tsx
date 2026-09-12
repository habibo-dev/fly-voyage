"use client";

import { useState } from "react";
import { destinations } from "@/data/destinations";
import type { Region } from "@/lib/types";
import { useT } from "@/lib/i18n";
import { DestinationCard } from "./destination-card";
import { Reveal } from "./reveal";

type Filter = Region | "all";

export function DestinationsGrid() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");

  const regions: Filter[] = ["all", "europe", "turquie", "moyen-orient", "afrique"];
  const list =
    filter === "all" ? destinations : destinations.filter((d) => d.region === filter);

  return (
    <div>
      <div role="group" aria-label={t("destinations.overline")} className="flex flex-wrap gap-2">
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            aria-pressed={filter === r}
            onClick={() => setFilter(r)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              filter === r
                ? "border-ink-900 bg-ink-900 text-cream-50"
                : "border-ink-900/15 bg-white text-ink-600 hover:border-ink-900/40 hover:text-ink-900"
            }`}
          >
            {r === "all" ? t("destinations.all") : t(`regions.${r}`)}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((d, i) => (
          <Reveal key={d.slug} delay={Math.min(i, 5) * 60} className="h-full">
            <DestinationCard destination={d} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
