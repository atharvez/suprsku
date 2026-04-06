import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, type = "contact" } = await req.json();

    // Create a transporter using environment variables for security
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const isWaitlist = type === "waitlist";
    const subjectLine = isWaitlist 
      ? `NEW WAITLIST JOINED: ${name} (${email})` 
      : `New Contact Form Submission from ${name}`;

    // Define the email contents
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || "support@labelgenie.com",
      subject: subjectLine,
      text: message || (isWaitlist ? "Someone joined the waitlist!" : ""),
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: ${isWaitlist ? '#006e2f' : '#22c55e'};">
            ${isWaitlist ? "🚀 New Waitlist Entrance" : "📩 New Message via Contact Form"}
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${!isWaitlist && message ? `<hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" /><p><strong>Message:</strong></p><div style="background: #f7f9fb; padding: 15px; border-radius: 8px;">${message}</div>` : ""}
          <p style="font-size: 12px; color: #777; margin-top: 30px;">
            This email was sent via the <strong>SuprSKU</strong> ${type} form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
