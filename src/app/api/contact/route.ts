import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  rfc: string;
  phone: string;
  message: string;
};

const RFC_PATTERN = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/i;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, company, email, rfc, phone, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return { ok: false, error: "Name is required." };
  }
  if (typeof company !== "string" || company.trim().length < 2) {
    return { ok: false, error: "Company is required." };
  }
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return { ok: false, error: "Invalid email format." };
  }
  if (typeof rfc !== "string" || !RFC_PATTERN.test(rfc.trim())) {
    return { ok: false, error: "Invalid RFC format." };
  }
  if (typeof phone !== "string" || phone.trim().length < 7) {
    return { ok: false, error: "Phone is required." };
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    return { ok: false, error: "Message is required." };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      rfc: rfc.trim().toUpperCase(),
      phone: phone.trim(),
      message: message.trim(),
    },
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const validation = validatePayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { name, company, email, rfc, phone, message } = validation.data;
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? "contacto@htquality.com.mx";
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ?? "HT Quality <contacto@htqmexico.com>";

  const subject = `Nueva solicitud de asesoría — ${company}`;
  const html = `
    <h2>Nueva solicitud de asesoría</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
    <p><strong>RFC:</strong> ${escapeHtml(rfc)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set. Submission:", validation.data);
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[contact] Resend error:", detail);
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
