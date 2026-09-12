import { promises as fs } from "fs";
import path from "path";
import type { Lead, LeadType } from "./types";

/**
 * Local lead storage for the concept build.
 *
 * Architecture note (brief §18–19): leads are structured (typed fields,
 * ISO timestamps, uuid) so this store can be swapped for Prisma/SQLite or a
 * hosted CRM without touching the UI. GET /api/leads already returns the
 * list for a future agency dashboard.
 */

const LEADS_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(LEADS_DIR, "leads.json");

const LEAD_TYPES: LeadType[] = [
  "TRAVEL_REQUEST",
  "FLIGHT_REQUEST",
  "HOTEL_REQUEST",
  "OFFER_REQUEST",
  "CONTACT_REQUEST",
];

export function isLeadType(value: string): value is LeadType {
  return (LEAD_TYPES as string[]).includes(value);
}

function clean(value: unknown, max = 500): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().replace(/\s+/g, " ");
  return trimmed ? trimmed.slice(0, max) : undefined;
}

export interface NewLeadInput {
  type: string;
  name: string;
  phone: string;
  whatsapp?: string;
  destination?: string;
  dates?: string;
  travelers?: number;
  budget?: string;
  message?: string;
  meta?: Record<string, unknown>;
}

const PHONE_RE = /^[+]?[0-9 ()\-]{8,20}$/;

export function validateLead(input: NewLeadInput): { errors: string[] } {
  const errors: string[] = [];
  if (!isLeadType(input.type)) errors.push("type");
  if (!clean(input.name, 120)) errors.push("name");
  const phone = clean(input.phone, 30) ?? "";
  if (!PHONE_RE.test(phone) || (phone.replace(/\D/g, "").length < 8)) errors.push("phone");
  if (input.travelers !== undefined && (!Number.isFinite(input.travelers) || input.travelers < 1 || input.travelers > 50)) {
    errors.push("travelers");
  }
  return { errors };
}

export function buildLead(input: NewLeadInput): Lead {
  const meta: Record<string, string> = {};
  if (input.meta) {
    for (const [k, v] of Object.entries(input.meta)) {
      const c = clean(v, 200);
      if (c) meta[k] = c;
    }
  }
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    type: input.type as LeadType,
    name: clean(input.name, 120)!,
    phone: clean(input.phone, 30)!,
    whatsapp: clean(input.whatsapp, 30),
    destination: clean(input.destination, 120),
    dates: clean(input.dates, 80),
    travelers: input.travelers ? Math.round(input.travelers) : undefined,
    budget: clean(input.budget, 120),
    message: clean(input.message, 2000),
    meta: Object.keys(meta).length ? meta : undefined,
    createdAt: new Date().toISOString(),
  };
}

async function readAll(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf8");
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function addLead(input: NewLeadInput): Promise<Lead | null> {
  const { errors } = validateLead(input);
  if (errors.length) return null;
  const lead = buildLead(input);
  const all = await readAll();
  all.push(lead);
  await fs.mkdir(LEADS_DIR, { recursive: true });
  // Write to a temp file then rename for a low-chance-of-corruption update.
  const tmp = LEADS_FILE + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(all, null, 2), "utf8");
  await fs.rename(tmp, LEADS_FILE);
  return lead;
}

export async function listLeads(): Promise<Lead[]> {
  const all = await readAll();
  return all
    .slice()
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
