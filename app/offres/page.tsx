import type { Metadata } from "next";
import { OfferCard } from "@/components/offer-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { offers } from "@/data/offers";
import { OffresCta } from "./offres-cta";

export const metadata: Metadata = {
  title: "Séjours et offres de voyage",
  description:
    "Séjours et circuits préparés par Fly Voyages Algérie, agence de voyages à Béjaïa : Istanbul, Antalya, Paris, Dubaï, Marrakech, Égypte. Prix sur demande — chaque offre est ajustée à votre projet.",
  openGraph: {
    title: "Séjours et offres — Fly Voyages Algérie, agence de voyages à Béjaïa",
    description:
      "Formats de séjours concept. Prix sur demande, chaque offre est ajustée à votre projet.",
  },
};

export default function OffresPage() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100/50">
        <div className="container-site py-14 sm:py-20">
          <SectionHeading
            overline="offers.overline"
            title="offers.title"
            subtitle="offers.subtitle"
          />
        </div>
      </section>
      <section className="container-site grid gap-6 py-10 sm:py-14 lg:grid-cols-2">
        {offers.map((o, i) => (
          <Reveal key={o.slug} delay={(i % 2) * 80}>
            <OfferCard offer={o} />
          </Reveal>
        ))}
      </section>
      <OffresCta />
    </>
  );
}
