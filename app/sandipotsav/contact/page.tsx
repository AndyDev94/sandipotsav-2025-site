"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ParallaxBackground } from "@/components/parallax-background"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { BackButton } from "@/components/back-button"

// Contact information data structure
const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: [
      "+91 (2594) 222513", // Main line
      "+91 (2594) 222514", // Secondary line
    ],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["info@sandipuniversity.edu.in", "admissions@sandipuniversity.edu.in"],
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    details: ["Sandip University", "Nashik-Pune Highway", "Nashik, Maharashtra 422213"],
  },
]

// Form field type definitions
type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  // State management for form data and submission status
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        className: "bg-[#1E293B] border-[#FDB61A]/20 text-white",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      // Show error message
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen pt-20 pb-16">
      {/* Background component */}
      <ParallaxBackground />
      <BackButton />
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Page title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#FDB61A] to-[#E5A417] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(253,182,26,0.3)]">
          Contact Us
        </h1>

        {/* Contact information and form grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left column - Contact info and map */}
          <div className="space-y-8">
            {/* Contact information cards */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="p-6 backdrop-blur-sm bg-[#1E293B]/90 
                    border-[#FDB61A]/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[#FDB61A]">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail) => (
                          <p key={detail} className="text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="aspect-video relative rounded-lg overflow-hidden border border-[#FDB61A]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.4431027587799!2d73.66836600000002!3d19.967900299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded432e59a9a3%3A0x545a803eb30e958a!2sSandip%20University!5e0!3m2!1sen!2sin!4v1710861367961!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sandip University Map"
              />
            </div>
          </div>

          {/* Right column - Contact form */}
          <Card className="p-8 backdrop-blur-sm bg-[#1E293B]/90 border-[#FDB61A]/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#0F172A] border-[#FDB61A]/20 text-white"
                  placeholder="Your name"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

              {/* Email input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0F172A] border-[#FDB61A]/20 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Subject input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="subject">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-[#0F172A] border-[#FDB61A]/20 text-white"
                  placeholder="Message subject"
                  required
                  minLength={5}
                  maxLength={100}
                />
              </div>

              {/* Message textarea */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#0F172A] border-[#FDB61A]/20 text-white min-h-[150px]"
                  placeholder="Your message"
                  required
                  minLength={10}
                  maxLength={1000}
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FDB61A] hover:bg-[#E5A417] text-[#0F172A] font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster />
    </main>
  )
}

