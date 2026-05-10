"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { Phone, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormState = "idle" | "submitting" | "success"

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState("submitting")
    // Simulate submission — wire up to your email/CRM service here
    setTimeout(() => setFormState("success"), 1000)
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Contact Aqua Aesthetics
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
          Ready to make a splash? Whether you're building a new pool, remodeling an existing one, or need regular
          maintenance, we're here to help. Reach out below and we'll get back to you within one business day.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr]">
        {/* Left column — contact cards + why choose us */}
        <div className="space-y-6">
          {/* Call */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
            <Phone className="mb-4 h-10 w-10 text-cyan-600" />
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">Give Us a Call</h2>
            <p className="mb-4 text-gray-600 max-w-sm">
              Our team is ready to answer your questions and get you scheduled quickly.
            </p>
            <a href="tel:+12149715996" className="text-lg font-medium text-gray-900 hover:text-cyan-600">
              (214) 971-5996
            </a>
          </div>

          {/* Email */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
            <Mail className="mb-4 h-10 w-10 text-cyan-600" />
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">Email Us</h2>
            <p className="mb-4 text-gray-600 max-w-sm">
              Prefer to write? We'll get back to you as soon as possible.
            </p>
            <a href="mailto:pools@aquaaesthetics.com" className="text-lg font-medium text-gray-900 hover:text-cyan-600">
              contact@AquaAestheticsPools.com
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Why Choose Aqua Aesthetics?</h3>
            <ul className="space-y-3">
              {[
                "30+ years of experience in DFW",
                "Custom solutions tailored to your style and budget",
                "Reliable, friendly service for maintenance and repairs",
                "Free consultations and transparent pricing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column — form */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
          {formState === "success" ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <CheckCircle2 className="mb-4 h-16 w-16 text-cyan-600" />
              <h2 className="mb-3 text-2xl font-bold text-gray-900">Message Sent!</h2>
              <p className="max-w-sm text-gray-600">
                Thanks for reaching out. We'll be in touch within one business day.
              </p>
              <Button
                className="mt-8 bg-cyan-600 hover:bg-cyan-700"
                onClick={() => { setFormState("idle"); setForm({ name: "", phone: "", email: "", service: "", message: "" }) }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Get a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(214) 555-0100"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option value="new-construction">New Pool Construction</option>
                    <option value="remodeling">Pool Remodeling</option>
                    <option value="maintenance">Pool Maintenance</option>
                    <option value="repairs">Pool Repairs</option>
                    <option value="outdoor-living">Outdoor Living</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or what you're looking for…"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:opacity-70"
                >
                  {formState === "submitting" ? "Sending…" : "Send Message"}
                </Button>

                <p className="text-center text-xs text-gray-500">
                  We typically respond within one business day.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
