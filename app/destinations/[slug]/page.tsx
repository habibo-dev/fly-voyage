import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationView } from "@/components/destination-view";
import { destinations, getDestination } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Destination" };
  return {
    title: `${d.name.fr} — préparer votre voyage`,
    description: d.description.fr.slice(0, 155),
    openGraph: {
      title: `${d.name.fr} (${d.country.fr}) — Fly Voyages Algérie, Béjaïa`,
      description: d.description.fr.slice(0, 155),
      images: [{ url: d.image, width: 1600, height: 1000, alt: d.imageAlt.fr }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();
  return <DestinationView destination={destination} />;
}
