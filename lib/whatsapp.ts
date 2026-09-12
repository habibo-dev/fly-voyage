import { AGENCY } from "@/data/config";
import { t, type Locale } from "./copy";

/** Build a wa.me deep link with a pre-filled contextual message. */
export function waHref(locale: Locale, template: "general" | "destination" | "flight" | "hotel" | "offer", vars?: { dest?: string; from?: string; to?: string; offer?: string }): string {
  let message = t(locale, `wa.${template}`);
  if (vars) {
    if (vars.dest) message = message.replace("%DEST%", vars.dest);
    if (vars.from) message = message.replace("%FROM%", vars.from);
    if (vars.to) message = message.replace("%TO%", vars.to);
    if (vars.offer) message = message.replace("%OFFER%", vars.offer);
  }
  return `https://wa.me/${AGENCY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
