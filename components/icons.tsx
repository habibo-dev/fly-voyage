import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconWhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function IconPhone(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconMapPin(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconMenu(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="14" y2="17" />
    </svg>
  );
}

export function IconClose(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function IconArrow(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconCheckCircle(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8.5 12.2 11 14.7 15.8 9.5" />
    </svg>
  );
}

export function IconClock(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

export function IconPlane(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M10.18 9.13 20.42 2.72a1 1 0 0 1 1.4.42c.15.3.13.66-.06.94l-6.4 10.23 1.73 3.9a.7.7 0 0 1-.12.76l-1.44 1.56a.5.5 0 0 1-.84-.12l-2.05-4.05-3.4 1.5a.7.7 0 0 1-.9-.66l-.02-1.9-2.42 1.05a.5.5 0 0 1-.68-.58l.86-4.1a.7.7 0 0 1 .35-.45l1.72-.76-1.3-2.66a.5.5 0 0 1 .23-.67l2.5-1.24a.7.7 0 0 1 .94.32z" />
    </svg>
  );
}

export function IconBed(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 9v10" />
      <path d="M2 13h17a3 3 0 0 1 3 3v3" />
      <path d="M2 16h19" />
      <circle cx="6.5" cy="11" r="1.5" />
      <path d="M11 9h6a4 4 0 0 1 4 4" />
    </svg>
  );
}

export function IconCompass(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5" />
    </svg>
  );
}

export function IconCalendar(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function IconUsers(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4" />
      <path d="M17.8 14.3a6.5 6.5 0 0 1 3.7 5.7" />
    </svg>
  );
}

export function IconLang(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18" />
      <path d="M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  );
}
