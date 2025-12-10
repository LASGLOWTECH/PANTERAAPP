import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { sendContactNotification } from "@/lib/mail";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const created = await Contact.create({ name, email, phone, message });

    // Send notification email (non-blocking)
    sendContactNotification({ name, email, phone, message })
      .catch(err => console.error("Email failed:", err));

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      contact: created,
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to submit message. Try again later." },
      { status: 500 }
    );
  }
}
