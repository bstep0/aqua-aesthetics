"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Ready to start your pool project or need maintenance services? Get in touch with us for a consultation and
          free quote.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="rounded-lg bg-green-50 p-6 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been received. We'll be in contact with you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-green-600 hover:bg-green-700">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <Select value={formState.service} onValueChange={handleSelectChange}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-construction">New Construction</SelectItem>
                          <SelectItem value="remodel">Pool Remodel</SelectItem>
                          <SelectItem value="maintenance">Regular Maintenance</SelectItem>
                          <SelectItem value="repair">Repair</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or questions..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-cyan-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(214) 941-5996</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-cyan-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">pools@aquaaesthetics.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
