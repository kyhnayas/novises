import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Ad ve telefon zorunludur." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Novises Web" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `Yeni Randevu Talebi – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f0fafa; padding: 32px; border-radius: 12px;">
          <h2 style="color: #238b8e; margin-top: 0;">Yeni Randevu Talebi</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 120px;">Ad Soyad</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1f2937;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Telefon</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1f2937;">
                <a href="tel:${phone}" style="color: #238b8e;">${phone}</a>
              </td>
            </tr>
            ${
              message
                ? `<tr style="border-top: 1px solid #e5e7eb;">
                    <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Mesaj</td>
                    <td style="padding: 10px 0; color: #1f2937;">${message}</td>
                  </tr>`
                : ""
            }
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Bu mesaj novises.com randevu formu üzerinden gönderilmiştir.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Mail gönderilemedi." }, { status: 500 });
  }
}
