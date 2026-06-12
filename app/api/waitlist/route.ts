import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

// ================================================================
//  WAITLIST API ROUTE
//
//  In production, swap this out for your preferred data store:
//    - Supabase: https://supabase.com
//    - PlanetScale / Neon / Prisma
//    - Notion API
//    - Airtable
//    - SendGrid / Mailchimp for email capture
//
//  For now, submissions are persisted to data/waitlist.json
//  in the project root.
// ================================================================

interface WaitlistEntry {
  id: string;
  name: string;
  restaurantName: string;
  email: string;
  phone: string;
  outlets: string;
  submittedAt: string;
  ipAddress?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

async function readEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as WaitlistEntry[];
  } catch {
    return [];
  }
}

async function writeEntries(entries: WaitlistEntry[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, restaurantName, email, phone, outlets } = body as Partial<WaitlistEntry>;

    // Basic validation
    if (!name?.trim() || !restaurantName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    const entries = await readEntries();

    // Duplicate check
    const exists = entries.some((e) => e.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return NextResponse.json({ message: "This email is already on the waitlist." }, { status: 409 });
    }

    const newEntry: WaitlistEntry = {
      id: `wl_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      restaurantName: restaurantName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      outlets: outlets ?? "1",
      submittedAt: new Date().toISOString(),
    };

    entries.push(newEntry);
    await writeEntries(entries);

    // TODO: Send welcome email here
    // TODO: Post to CRM / Slack notification

    return NextResponse.json(
      { message: "Successfully joined the waitlist!", id: newEntry.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[waitlist] POST error:", err);
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}

export async function GET() {
  // In production: protect this with auth
  try {
    const entries = await readEntries();
    return NextResponse.json({ count: entries.length, entries }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to read entries." }, { status: 500 });
  }
}
