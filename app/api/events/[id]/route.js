import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Event from "@/models/Events";

// GET /api/events/:id
export async function GET(req, context) {
  await connectDB();

  // Unwrap params using await
  const params = await context.params;
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
  }

  try {
    const event = await Event.findById(id);
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ event });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 });
  }
}

// update events
export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const body = await req.json();

  try {
    const updated = await Event.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}





// DELETE /api/events/:id
export async function DELETE(req, context) {
  await connectDB();

  const params = await context.params;
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
  }

  try {
    const deleted = await Event.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
