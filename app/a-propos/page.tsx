import type { Metadata } from "next";
import Image from "next/image";
import { AboutBody, AboutCta, AboutHeading } from "./about-body";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Fly Voyages Algérie est une agence de voyages et de billetterie aérienne à Béjaïa. Nous vous accompagnons dans la préparation de vos projets de voyage, du premier contact au jour du départ.",
  openGraph: {
    title: "À propos — Fly Voyages Algérie, agence de voyages à Béjaïa",
    description:
      "Une agence de proximité à Béjaïa : préparation de voyages, billetterie, séjours et circuits.",
  },
};

export default function AProposPage() {
  return (
    <>
      <header className="relative isolate flex min-h-[360px] items-end overflow-hidden bg-ink-950 sm:min-h-[440px]">
        <Image
          src="/images/bejaia.svg"
          alt="Front de mer de Béjaïa au coucher du soleil, avec son phare et sa vieille ville"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/35 to-ink-950/25" />
        <div className="container-site relative pb-10 pt-24">
          <AboutHeading />
        </div>
      </header>
      <AboutBody />
      <AboutCta />
    </>
  );
}
