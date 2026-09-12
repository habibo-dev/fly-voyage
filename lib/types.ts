export type Localized = { fr: string; ar: string };

export type Region = "europe" | "turquie" | "moyen-orient" | "afrique";

export type TravelStyle =
  | "sejour"
  | "famille"
  | "couple"
  | "citybreak"
  | "plage"
  | "aventure";

export interface Destination {
  slug: string;
  name: Localized;
  country: Localized;
  region: Region;
  image: string;
  imageAlt: Localized;
  tagline: Localized;
  description: Localized;
  idealFor: Localized;
  whyVisit: { title: Localized; text: Localized }[];
  bestPeriods: Localized;
  toDiscover: Localized[];
  styles: TravelStyle[];
  /** All demo content is flagged as such, never presented as a live offer. */
  isDemo: true;
}

export interface Offer {
  slug: string;
  title: Localized;
  destinationSlug: string;
  image: string;
  duration: Localized;
  type: Localized;
  hotel: Localized;
  departure: Localized;
  /** Never a fake price — always null, rendered as "Prix sur demande". */
  price: null;
  highlights: Localized[];
  isDemo: true;
}

export type LeadType =
  | "TRAVEL_REQUEST"
  | "FLIGHT_REQUEST"
  | "HOTEL_REQUEST"
  | "OFFER_REQUEST"
  | "CONTACT_REQUEST";

export interface Lead {
  id: string;
  type: LeadType;
  name: string;
  phone: string;
  whatsapp?: string;
  destination?: string;
  dates?: string;
  travelers?: number;
  budget?: string;
  message?: string;
  meta?: Record<string, string>;
  createdAt: string;
}
