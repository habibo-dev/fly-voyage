import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { MapBlock } from "@/components/map";
import { Reveal } from "@/components/reveal";
import { ContactCards } from "./contact-cards";
import { ContactBlock } from "./contact-block";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Contactez Fly Voyages Algérie, agence de voyages à Béjaïa : Rue Frères Tabet, Béjaïa 06000. Téléphone et WhatsApp 0550 06 06 20. Passez nous voir en agence.",
  openGraph: {
    title: "Contact — Fly Voyages Algérie, Béjaïa",
    description:
      "Rue Frères Tabet, Béjaïa 06000, Algérie. Téléphone et WhatsApp : 0550 06 06 20.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100/50">
        <div className="container-site py-14 sm:py-20">
          <SectionHeading
            overline="contact.overline"
            title="contact.title"
            subtitle="contact.subtitle"
          />
        </div>
      </section>

      <section className="container-site grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_1.4fr]">
        <ContactCards />
        <Reveal>
          <ContactBlock />
        </Reveal>
      </section>

      <section className="container-site pb-16">
        <Reveal>
          <MapBlock className="h-[340px] sm:h-[420px]" />
        </Reveal>
      </section>
    </>
  );
}
