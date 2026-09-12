"use client";

import dynamic from "next/dynamic";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";

const LeafletMap = dynamic(() => import("./leaflet-map"), {
  ssr: false,
  loading: () => {
    const t = useT();
    return (
      <div className="flex h-full w-full items-center justify-center bg-cream-100">
        <span className="text-sm text-ink-500">Béjaïa — 06000</span>
      </div>
    );
  },
});

export function MapBlock({ className = "h-80" }: { className?: string }) {
  const t = useT();
  return (
    <Reveal className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
      <div className={className}>
        <LeafletMap />
      </div>
      <p className="border-t border-ink-900/8 bg-white px-4 py-2.5 text-xs text-ink-500">
        {t("location.mapNote")}
      </p>
    </Reveal>
  );
}
