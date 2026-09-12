import {
  FeaturedDestinations,
  FeaturedOffers,
  FlightHotelBand,
  Hero,
  Inspiration,
  LocationSection,
  WhatsAppSection,
  WhySection,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <FeaturedOffers />
      <WhySection />
      <FlightHotelBand />
      <Inspiration />
      <WhatsAppSection />
      <LocationSection />
    </>
  );
}
