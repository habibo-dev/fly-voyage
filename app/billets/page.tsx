import type { Metadata } from "next";
import Image from "next/image";
import { FlightForm } from "@/components/forms/flight-form";
import { Reveal } from "@/components/reveal";
import { BilletsAside } from "./billets-aside";
import { BilletsHeading, BilletsNote } from "./billets-heading";

export const metadata: Metadata = {
  title: "Demande de billet d'avion",
  description:
    "Besoin d'un billet d'avion ? Décrivez votre départ et votre destination : Fly Voyages Algérie, agence de billetterie aérienne à Béjaïa, vérifie les vols et vous propose les meilleures options.",
  openGraph: {
    title: "Demande de billet d'avion — Fly Voyages Algérie, Béjaïa",
    description:
      "Décrivez votre trajet, notre équipe vérifie les vols disponibles et vous propose les meilleures options.",
  },
};

export default async function BilletsPage({
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
          src="/images/billets.svg"
          alt="Aile d'avion au-dessus des nuages au soleil couchant"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/35 to-ink-950/30" />
        <div className="container-site relative pb-10 pt-24">
          <BilletsHeading />
        </div>
      </header>

      <section className="container-site grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <FlightForm
              initial={{
                from: get("from"),
                dest: get("dest"),
                dateAllez: get("dateAllez"),
                dateRetour: get("dateRetour"),
                travelers: get("travelers"),
              }}
            />
          </Reveal>
          <Reveal delay={100}>
            <BilletsNote />
          </Reveal>
        </div>
        <BilletsAside />
      </section>
    </>
  );
}
