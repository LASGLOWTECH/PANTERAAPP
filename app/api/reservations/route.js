import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Reservation from "@/models/Reservation";
import { sendReservationNotification } from "@/lib/mail"; // use wrapper
// import { sendWhatsAppCloud, generateReservationWaLink } from "@/lib/whatsapp";
import { requireToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();

    const reservationData = {
      ...body,
      seating: body.seating || "Indoor",
    };

    const created = await Reservation.create(reservationData);

    // Send email notification using wrapper
    try {
      await sendReservationNotification(reservationData);
    } catch (e) {
      console.error("Email failed:", e.message || e);
    }

    // WhatsApp is still commented out
    /*
    let waLink = "";
    try {
      await sendWhatsAppCloud({
        phoneId: process.env.WHATSAPP_PHONE_ID,
        token: process.env.WHATSAPP_TOKEN,
        toNumber: body.phone,
        message: msg,
      });
    } catch (e) {
      console.error("WhatsApp API failed:", e.message);
      waLink = generateReservationWaLink(reservationData, process.env.CLIENT_WHATSAPP_NUMBER);
      console.log("Fallback WhatsApp link:", waLink);
    }
    */

    return NextResponse.json({ success: true, reservation: created });
  } catch (err) {
    console.error("Reservation API error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function GET(req) {
  await connectDB();

  try {
    requireToken(req); // admin only
    const list = await Reservation.find().sort({ createdAt: -1 });
    return NextResponse.json(list);
  } catch (e) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}



// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import Reservation from "@/models/Reservation";
// import { sendReservationNotification } from "@/lib/mail"; 
// import { sendWhatsAppCloud, generateReservationWaLink } from "@/lib/whatsapp"; // <-- Assumed imports
// import { requireToken } from "@/lib/auth";

// export async function POST(req) {
//   await connectDB();

//   try {
//     const body = await req.json();

//     const reservationData = {
//       ...body,
//       seating: body.seating || "Indoor",
//     };

//     const created = await Reservation.create(reservationData);

//     // --- WhatsApp Integration Block: Start ---
    
//     // 1. Define the notification message using the created reservation data
//     const msg = `🔔 New Reservation Alert!
//       Name: ${created.name}
//       Date: ${new Date(created.date).toDateString()}
//       Time: ${created.time}
//       Guests: ${created.guests}
//       Seating: ${created.seating}
//       Phone: ${created.phone}
//       Reference ID: ${created._id}`; // Use the generated MongoDB ID for tracking

//     // Send email notification using wrapper
//     try {
//       await sendReservationNotification(reservationData);
//     } catch (e) {
//       console.error("Email failed:", e.message || e);
//     }

//     // 2. Attempt to send WhatsApp notification
//     let waLink = "";
//     try {
//       await sendWhatsAppCloud({
//         phoneId: process.env.WHATSAPP_PHONE_ID,
//         token: process.env.WHATSAPP_TOKEN,
//         // *** IMPORTANT ***: Ensure this is the ADMIN/CLIENT number to receive the alert
//         toNumber: process.env.CLIENT_WHATSAPP_NUMBER, 
//         message: msg,
//       });
//       console.log("WhatsApp API notification sent successfully.");
//     } catch (e) {
//       // 3. Fallback to a manual wa.me link if the API call fails
//       console.error("WhatsApp API failed. Falling back to wa.me link:", e.message || e);
//       waLink = generateReservationWaLink(
//         process.env.CLIENT_WHATSAPP_NUMBER, 
//         msg
//       );
//       console.log("Fallback WhatsApp link for manual action:", waLink);
      
//       // Optionally, you might want to send the waLink to an error tracking service 
//       // or include it in the email to the client for immediate manual action.
//     }
//     // --- WhatsApp Integration Block: End ---

//     return NextResponse.json({ success: true, reservation: created });
//   } catch (err) {
//     console.error("Reservation API error:", err);
//     return NextResponse.json({ error: "Failed" }, { status: 500 });
//   }
// }

// export async function GET(req) {
//   // ... GET function remains unchanged
// }