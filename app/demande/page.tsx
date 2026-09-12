import type { Metadata } from "next";
import { TravelForm } from "@/components/forms/travel-form";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { DemandAside } from "./demande-aside";

export const metadata: Metadata = {
  title: "Préparer mon voyage — demande de voyage",
  description:
    "Déposez votre demande de voyage en quelques minutes : destination, dates, voyageurs, budget. Fly Voyages Algérie, agence de voyages à Béjaïa, vous recontacte avec une proposition personnalisée.",
  openGraph: {
    title: "Préparer mon voyage — Fly Voyages Algérie, Béjaïa",
    description:
      "Une demande, une proposition personnalisée. Voyages, séjours, circuits — agence de voyages à Béjaïa.",
  },
};

export default async function DemandePage({
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
      <section className="border-b border-ink-900/8 bg-cream-100/50">
        <div className="container-site py-14 sm:py-20">
          <SectionHeading
            overline="demande.overline"
            title="demande.title"
            subtitle="demande.subtitle"
          />
        </div>
      </section>
      <section className="container-site grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <TravelForm
            initial={{
              dest: get("dest"),
              depart: get("depart"),
              retour: get("retour"),
              travelers: get("travelers"),
              offer: get("offer"),
            }}
          />
        </Reveal>
        <DemandAside />
      </section>
    </>
  );
}
