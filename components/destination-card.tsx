"use client";

import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/types";
import { usePick, useT } from "@/lib/i18n";
import { IconArrow } from "./icons";

export function DestinationCard({ destination }: { destination: Destination }) {
  const t = useT();
  const pick = usePick();

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={pick(destination.imageAlt)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
        {destination.isDemo && (
          <span className="chip absolute start-3 top-3 bg-ink-950/65 font-medium uppercase tracking-wider text-cream-200 backdrop-blur-sm">
            {t("concept")}
          </span>
        )}
        <span className="chip absolute bottom-3 end-3 bg-cream-50/90 text-ink-800 backdrop-blur-sm">
          {pick(destination.country)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink-950">
          {pick(destination.name)}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brass-600">
          {pick(destination.idealFor)}
        </p>
        <p className="mt-2.5 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-600">
          {pick(destination.tagline)}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition group-hover:text-brass-600">
          {t("common.discover")}
          <IconArrow width={16} height={16} className="transition duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
