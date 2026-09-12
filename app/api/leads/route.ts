import { NextResponse } from "next/server";
import { addLead, listLeads, validateLead, type NewLeadInput } from "@/lib/leads";

export const dynamic = "force-dynamic";

/**
 * POST /api/leads — store a qualified lead.
 * Body: NewLeadInput { type, name, phone, whatsapp?, destination?, dates?,
 * travelers?, budget?, message?, meta? }
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, errors: ["body"] }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, errors: ["body"] }, { status: 400 });
  }
  const input = body as NewLeadInput;
  const { errors } = validateLead(input);
  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }
  const lead = await addLead(input);
  if (!lead) {
    return NextResponse.json({ ok: false, errors: ["internal"] }, { status: 500 });
  }
  return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
}

/**
 * GET /api/leads — list leads (newest first).
 * Architecture hook for a future agency dashboard (§19 of the brief).
 */
export async function GET() {
  const leads = await listLeads();
  return NextResponse.json({ ok: true, count: leads.length, leads });
}
