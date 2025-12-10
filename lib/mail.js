import nodemailer from "nodemailer";

export async function sendNotificationEmail({ to, subject, html, text }) {
  if (!to) throw new Error("No recipient email provided");

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Panthera Lounge" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html: html || `<pre>${text}</pre>`, // fallback to text if no html
    text: text || "",
  });
}

// Convenience wrapper for contact form notifications
export async function sendContactNotification(contact) {
  const { name, email, phone, message } = contact;
  const subject = "New Contact Message - Panthera Lounge";
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nMessage:\n${message}`;
 const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101010; max-width: 600px; border: 1px solid #D8C394; padding: 0; border-radius: 8px; overflow: hidden;">
        
        <div style="background-color: #b67a00; color: #FFFFFF; padding: 20px 25px;">
            <h3 style="margin: 0; font-size: 20px; font-weight: bold;">
                📝 New Website Message
            </h3>
        </div>
        
        <div style="padding: 25px;">
            <p style="font-size: 16px; margin-bottom: 20px;">
                <strong style="color: #101010;">Sender:</strong> ${name}
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #D8C394; width: 30%; font-weight: bold; color: #555555;">Email:</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #D8C394;"><a href="mailto:${email}" style="color: #b67a00; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #D8C394; font-weight: bold; color: #555555;">Phone:</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #D8C394;">${phone || "N/A"}</td>
                </tr>
            </table>

            <div style="margin-top: 25px; padding: 15px; background-color: #F8F4E8; border-left: 4px solid #D8C394; border-radius: 4px;">
                <p style="font-weight: bold; margin-top: 0; color: #b67a00;">Message Content:</p>
                <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
            </div>
            
            <p style="margin-top: 30px; font-size: 12px; color: #999999;">
                This is an automated notification from your website contact form.
            </p>
        </div>
    </div>
`;
  await sendNotificationEmail({
    to: process.env.NOTIFY_EMAIL,
    subject,
    text,
    html,
  });
}

// Convenience wrapper for reservation notifications
export async function sendReservationNotification(reservation) {
  const { name, phone, guests, date, time, seating, request } = reservation;
  const subject = "New Reservation - Panthera Lounge";
  const text = `Name: ${name}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}\nSeating: ${seating}\nRequest: ${request || "None"}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101010; max-width: 500px; margin: 0 auto; border: 1px solid #D8C394; border-radius: 8px; overflow: hidden;">
        
        <div style="background-color: #b67a00; color: #FFFFFF; padding: 20px 25px;">
            <h2 style="margin: 0; font-size: 24px; font-weight: bold;">
                🔔 New Reservation Alert
            </h2>
            <p style="margin: 5px 0 0 0; font-size: 14px;">A new booking has been placed.</p>
        </div>
        
        <div style="padding: 25px;">
            <h3 style="color: #101010; margin-top: 0; border-bottom: 2px solid #D8C394; padding-bottom: 10px;">
                Reservation Details
            </h3>

            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 35%; color: #555555;">Name:</td>
                    <td style="padding: 8px 0; color: #101010;"><strong>${name}</strong></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555555;">Phone:</td>
                    <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #b67a00; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555555;">Guests:</td>
                    <td style="padding: 8px 0; color: #101010;">${guests} people</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555555;">Date & Time:</td>
                    <td style="padding: 8px 0; color: #101010;">
                        <span style="font-weight: bold; color: #b67a00;">${date}</span> at ${time}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555555;">Seating Preference:</td>
                    <td style="padding: 8px 0; color: #101010;">${seating || "Any"}</td>
                </tr>
            </table>

            <div style="margin-top: 25px; padding: 15px; background-color: #F8F4E8; border-left: 4px solid #D8C394; border-radius: 4px;">
                <p style="font-weight: bold; margin-top: 0; color: #b67a00;">Special Request:</p>
                <p style="white-space: pre-wrap; margin-bottom: 0; color: #101010;">${request || "None specified."}</p>
            </div>
            
        </div>
    </div>
`;
  
  await sendNotificationEmail({
    to: process.env.NOTIFY_EMAIL,
    subject,
    text,
    html,
  });
}
