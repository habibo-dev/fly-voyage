import type { Metadata } from "next";
import Image from "next/image";
import { HotelForm } from "@/components/forms/hotel-form";
import { Reveal } from "@/components/reveal";
import { BilletsAside } from "@/app/billets/billets-aside";
import { HotelsHeading } from "./hotels-heading";

export const metadata: Metadata = {
  title: "Demande d'hôtel",
  description:
    "Hôtel, résidence ou maison d'hôtes : indiquez votre destination, vos dates et vos préférences. Fly Voyages Algérie, agence de voyages à Béjaïa, sélectionne les options disponibles pour vous.",
  openGraph: {
    title: "Demande d'hôtel — Fly Voyages Algérie, Béjaïa",
    description:
      "Donnez-nous vos dates et vos préférences, nous sélectionnons les options disponibles pour vous.",
  },
};

export default async function HotelsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const get = (k: string) => {
    const v = sp[k];
    return typeof v === "string" ? v : undefined;
  };
  return (
    <>
      <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-ink-950 sm:min-h-[400px]">
        <Image
          src="/images/destinations/antalya.jpg"
          alt="Riviera méditerranéenne : plages et criques turquoise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/40 to-ink-950/30" />
        <div className="container-site relative pb-10 pt-24">
          <HotelsHeading />
        </div>
      </header>

      <section className="container-site grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <HotelForm
            initial={{
              dest: get("dest"),
              checkIn: get("checkIn"),
              checkOut: get("checkOut"),
            }}
          />
        </Reveal>
        <BilletsAside />
      </section>
    </>
  );
}
