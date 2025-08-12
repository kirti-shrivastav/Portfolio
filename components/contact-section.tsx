import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactSectionProps {
  personalInfo: {
    email: string
    phone: string
    location: string
    linkedin: string
  }
}

export default function ContactSection({ personalInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Ready to create amazing user experiences? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-purple-200">Email</p>
                  <p className="text-xl">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-purple-200">Phone</p>
                  <p className="text-xl">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-purple-200">Location</p>
                  <p className="text-xl">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-white/20" />

            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50" asChild>
                <Link href={`mailto:${personalInfo.email}`}>Send Email</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent"
                asChild
              >
                <Link href={personalInfo.linkedin} target="_blank">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-purple-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button className="w-full bg-white text-purple-900 hover:bg-purple-50">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
