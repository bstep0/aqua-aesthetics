"use client"

import { Phone, Mail } from "lucide-react"


export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Contact Aqua Aesthetics
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
          Ready to make a splash? Whether you're building a new pool, remodeling an existing one, or need regular maintenance, we are here to help. Contact us today for a consultation or free estimate — we make the process simple and stress-free!
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Call Card */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
          <Phone className="mb-4 h-10 w-10 text-cyan-600" />
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Give Us a Call</h2>
          <p className="mb-4 text-gray-600 max-w-sm">
            Our team is ready to answer your questions and schedule your whatever pool service you may need. Quick, friendly, and professional.
          </p>
          <a href="tel:2149415996" className="text-lg font-medium text-gray-900 hover:text-cyan-600 mb-4">
            (214) 971-5996
          </a>
        </div>

        {/* Email Card */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
          <Mail className="mb-4 h-10 w-10 text-cyan-600" />
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Email Us</h2>
          <p className="mb-4 text-gray-600 max-w-sm">
            Prefer to write? Send us an email and we’ll get back to you as soon as possible. Include your project details so we can provide the most accurate guidance.
          </p>
          <a href="mailto:pools@aquaaesthetics.com" className="text-lg font-medium text-gray-900 hover:text-cyan-600">
            contact@AquaAestheticsPools.com
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Aqua Aesthetics?</h3>
        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 text-left text-lg text-gray-600 leading-relaxed list-disc list-outside pl-5">
          <li>Experienced professionals who care about quality and safety</li>
          <li>Custom pool solutions tailored to your style and budget</li>
          <li>Reliable, fast, and friendly service for maintenance and repairs</li>
          <li>Free consultations and transparent pricing</li>
        </ul>
      </div>
    </div>
  )
}
