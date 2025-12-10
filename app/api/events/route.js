// app/api/events/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Event from "@/models/Events";

export async function GET() {
  await connectDB();
  const events = await Event.find().sort({ createdAt: -1 });
  return NextResponse.json(events);
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const created = await Event.create(body);
    return NextResponse.json(created);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
