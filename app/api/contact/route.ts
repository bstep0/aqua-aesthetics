import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const SERVICE_LABELS: Record<string, string> = {
  "new-construction": "New Pool Construction",
  remodeling: "Pool Remodeling",
  maintenance: "Pool Maintenance",
  repairs: "Pool Repairs",
  "outdoor-living": "Outdoor Living",
  other: "Other / Not Sure",
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, phone, email, service, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service ?? "Not specified"

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "bstepanek00@gmail.com",
    replyTo: email,
    subject: `New quote request from ${name} — ${serviceLabel}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "Not provided"}</td></tr>
        <tr><td><strong>Service</strong></td><td>${serviceLabel}</td></tr>
        <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${message || "—"}</td></tr>
      </table>
      <p style="margin-top:24px;color:#666;font-size:13px">
        Sent from the Aqua Aesthetics Pools contact form.
      </p>
    `,
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
