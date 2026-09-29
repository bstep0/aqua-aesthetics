import { Resend } from "resend"
import { NextResponse } from "next/server"

const SERVICE_LABELS: Record<string, string> = {
  "new-construction": "New pool construction",
  remodeling: "Pool remodeling",
  maintenance: "Pool maintenance",
  repairs: "Pool repairs",
  "outdoor-living": "Outdoor living",
  other: "Other / Not Sure",
}

const TIMING_LABELS: Record<string, string> = {
  asap: "As soon as possible",
  soon: "In 1–3 months",
  exploring: "Just exploring",
}

// Form values are interpolated into the notification email, so escape them.
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, phone, email, service, message, timing, city, design, source } = body

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone number are required." }, { status: 400 })
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service ?? "Not specified"
  const rows: [string, string][] = [
    ["Name", esc(name)],
    ["Email", email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : "Not provided"],
    ["Phone", esc(phone)],
    ["Service", esc(serviceLabel)],
  ]
  if (city) rows.push(["City", esc(city)])
  if (timing) rows.push(["Timing", esc(TIMING_LABELS[timing] ?? timing)])
  if (design) rows.push(["Backyard design", esc(design)])
  rows.push(["Message", esc(message) || "—"])

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: "contact@aquaaestheticspools.com",
    to: "contact@aquaaestheticspools.com",
    ...(email ? { replyTo: String(email) } : {}),
    subject: `New quote request from ${String(name).slice(0, 80)} — ${serviceLabel}`,
    html: `
      <h2>New contact form submission</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td style="white-space:pre-wrap">${v}</td></tr>`).join("")}
      </table>
      <p style="margin-top:24px;color:#666;font-size:13px">
        Sent from the aqua aesthetics pools ${source === "hero" ? "homepage quote form" : "contact form"}.
      </p>
    `,
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
