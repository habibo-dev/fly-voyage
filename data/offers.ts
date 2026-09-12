import type { Offer } from "@/lib/types";

/**
 * Demo offer catalogue (isDemo: true for every entry).
 * Prices are intentionally null → displayed as "Prix sur demande".
 * Hotel categories and departure are "à confirmer" until the agency confirms.
 */
export const offers: Offer[] = [
  {
    slug: "istanbul-5-jours",
    title: { fr: "Istanbul en 5 jours", ar: "إسطنبول في 5 أيام" },
    destinationSlug: "istanbul",
    image: "/images/destinations/istanbul.jpg",
    duration: { fr: "5 jours / 4 nuits", ar: "5 أيام / 4 ليالٍ" },
    type: { fr: "City break", ar: "نهاية أسبوع" },
    hotel: { fr: "à confirmer", ar: "يُحدَّد" },
    departure: { fr: "à confirmer", ar: "يُحدَّد" },
    price: null,
    highlights: [
      { fr: "Croisière sur le Bosphore", ar: "جولة بحرية على البوسفور" },
      {
        fr: "Grand Bazar et ville historique",
        ar: "البازار الكبير والمدينة التاريخية",
      },
      { fr: "Séjour au cœur de la ville", ar: "إقامة في قلب المدينة" },
    ],
    isDemo: true,
  },
  {
    slug: "riviera-turque-8-jours",
    title: { fr: "Riviera turque en 8 jours", ar: "ريفيرا تركيا في 8 أيام" },
    destinationSlug: "antalya",
    image: "/images/destinations/antalya.jpg",
    duration: { fr: "8 jours / 7 nuits", ar: "8 أيام / 7 ليالٍ" },
    type: { fr: "Plage & détente", ar: "شاطئ واسترخاء" },
    hotel: { fr: "à confirmer", ar: "يُحدَّد" },
    departure: { fr: "à confirmer", ar: "يُحدَّد" },
    price: null,
    highlights: [
      { fr: "Jours de plage et de détente", ar: "أيام من الشاطئ والاسترخاء" },
      {
        fr: "Excursions : Aspendos, Termessos, gorges",
        ar: "رحلات: أسبندوس، تركيموسو، الوديان",
      },
      { fr: "Programme familial adaptable", ar: "برنامج عائلي مرن" },
    ],
    isDemo: true,
  },
  {
    slug: "paris-4-jours",
    title: { fr: "Paris, city break 4 jours", ar: "باريس، نهاية أسبوع 4 أيام" },
    destinationSlug: "paris",
    image: "/images/destinations/paris.jpg",
    duration: { fr: "4 jours / 3 nuits", ar: "4 أيام / 3 ليالٍ" },
    type: { fr: "City break", ar: "نهاية أسبوع" },
    hotel: { fr: "à confirmer", ar: "يُحدَّد" },
    departure: { fr: "à confirmer", ar: "يُحدَّد" },
    price: null,
    highlights: [
      { fr: "Séjour au centre-ville", ar: "إقامة وسط المدينة" },
      { fr: "Les musées incontournables", ar: "المتاحف الأساسية" },
      { fr: "Rythme d'une escapade, sans stress", ar: "إيقاع رحلة قصيرة دون توتر" },
    ],
    isDemo: true,
  },
  {
    slug: "dubai-desert-6-jours",
    title: { fr: "Dubaï & désert en 6 jours", ar: "دبي والصحراء في 6 أيام" },
    destinationSlug: "dubai",
    image: "/images/destinations/dubai.jpg",
    duration: { fr: "6 jours / 5 nuits", ar: "6 أيام / 5 ليالٍ" },
    type: { fr: "Séjour & aventure", ar: "إقامة ومغامرة" },
    hotel: { fr: "à confirmer", ar: "يُحدَّد" },
    departure: { fr: "à confirmer", ar: "يُحدَّد" },
    price: null,
    highlights: [
      { fr: "Séjour en hôtel urbain", ar: "إقامة في فندق حضري" },
      { fr: "Safari et campement dans le désert", ar: "سفاري ومخيم في الصحراء" },
      { fr: "Palm Jumeirah, marina et shopping", ar: "جميرا بالمو، المارينا والتسوق" },
    ],
    isDemo: true,
  },
  {
    slug: "marrakech-5-jours",
    title: { fr: "Marrakech, portes du Sud", ar: "مراكش، أبواب الجنوب" },
    destinationSlug: "marrakech",
    image: "/images/destinations/marrakech.jpg",
    duration: { fr: "5 jours / 4 nuits", ar: "5 أيام / 4 ليالٍ" },
    type: { fr: "Culture & détente", ar: "ثقافة واسترخاء" },
    hotel: { fr: "à confirmer", ar: "يُحدَّد" },
    departure: { fr: "à confirmer", ar: "يُحدَّد" },
    price: null,
    highlights: [
      {
        fr: "Riad ou hôtel au cœur de la médina",
        ar: "رياض أو فندق وسط المدينة",
      },
      { fr: "Jardin Majorelle et palais", ar: "حديقة ماجوريل والقصور" },
      { fr: "Excursion vers l'Atlas (option)", ar: "رحلة إلى الأطلس (اختيارية)" },
    ],
    isDemo: true,
  },
  {
    slug: "egypte-7-jours",
    title: { fr: "Égypte : pyramides & Nil", ar: "مصر: الأهرامات والنيل" },
    destinationSlug: "le-caire",
    image: "/images/destinations/cairo.jpg",
    duration: { fr: "7 jours / 6 nuits", ar: "7 أيام / 6 ليالٍ" },
    type: { fr: "Circuit découverte", ar: "جولة اكتشاف" },
    hotel: { fr: "à confirmer", ar: "يُحدَّد" },
    departure: { fr: "à confirmer", ar: "يُحدَّد" },
    price: null,
    highlights: [
      { fr: "Pyramides de Gizeh et Sphinx", ar: "أهرامات الجيزة وأبو الهول" },
      { fr: "Une journée sur le Nil", ar: "يوم على ضفاف النيل" },
      { fr: "Musée et souks de Khan el-Khalili", ar: "المتحف وخان الخليلي" },
    ],
    isDemo: true,
  },
];

export function getOffer(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug);
}
