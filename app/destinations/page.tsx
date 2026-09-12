import type { Metadata } from "next";
import { DestinationsGrid } from "@/components/destinations-grid";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Destinations de voyage proposées par Fly Voyages Algérie, agence de voyages à Béjaïa : Istanbul, Antalya, Paris, Rome, Dubaï, Marrakech et plus. Contenus concept — confirmés avec l'agence.",
  openGraph: {
    title: "Destinations — Fly Voyages Algérie, agence de voyages à Béjaïa",
    description:
      "Istanbul, Antalya, Paris, Rome, Dubaï, Marrakech… explorez les destinations et demandez une offre.",
  },
};

export default function DestinationsPage() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100/50">
        <div className="container-site py-14 sm:py-20">
          <SectionHeading
            overline="destinations.overline"
            title="destinations.title"
            subtitle="destinations.subtitle"
          />
        </div>
      </section>
      <section className="container-site py-10 sm:py-14">
        <Reveal>
          <DestinationsGrid />
        </Reveal>
      </section>
    </>
  );
}
