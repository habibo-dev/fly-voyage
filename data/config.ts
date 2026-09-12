/**
 * Central agency configuration.
 *
 * Everything the agency can confirm later (social links, services, hours)
 * lives in the registries below. Empty = hidden. This keeps the site honest:
 * nothing is displayed unless the client explicitly enables it.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://flyvoyages.example.com";

export const AGENCY = {
  name: "Fly Voyages Algérie",
  shortName: "Fly Voyages",
  city: "Béjaïa",
  country: "Algérie",
  phoneDisplay: "0550 06 06 20",
  phoneIntl: "+213 550 06 06 20",
  phoneHref: "tel:+213550060620",
  whatsappNumber: "213550060620",
  address: {
    street: "Rue Frères Tabet",
    city: "Béjaïa",
    postalCode: "06000",
    country: "Algérie",
  },
  /** Hours are not yet verified — display "À confirmer" until confirmed. */
  hoursVerified: false,
  /**
   * City-level map reference (Béjaïa). The exact pin of the agency is
   * intentionally NOT set to avoid fabricating coordinates.
   */
  map: {
    center: [36.7538, 5.0897] as [number, number],
    zoom: 13,
    markerLabel: "Béjaïa — repère en ville",
  },
} as const;

/**
 * Social registry — only links verified by the agency are shown.
 * Empty string = icon hidden everywhere.
 */
export const SOCIALS = {
  facebook: "",
  instagram: "",
  tiktok: "",
} as const;

/**
 * Service switches — configurable per section 13 of the brief.
 * flights / travel / tours match the public business profile
 * (travel agency, airline ticket agency, tour operator).
 * visa / carRental / transfer stay OFF until the agency confirms.
 */
export const SERVICES = {
  travel: true,
  flights: true,
  tours: true,
  hotel: true,
  visa: false,
  carRental: false,
  transfer: false,
} as const;
