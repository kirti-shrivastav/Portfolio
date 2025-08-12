"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Download, Palette } from "lucide-react"

interface HeroSectionProps {
  personalInfo: {
    email: string
    phone: string
    location: string
    cvPath: string // Added cvPath
  }
  scrollToContact: () => void
}

export default function HeroSection({ personalInfo, scrollToContact }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Kirti
                </span>
                <br />
                <span className="text-gray-900">Shrivastava</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium">UI/UX Designer</p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Aspiring UI/UX designer passionate about creating intuitive user experiences. Completed a comprehensive
                UI/UX design course, ready to apply skills to impactful projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={personalInfo.cvPath} target="_blank" download>
                  Download CV <Download className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1 ">
                <div className="w-full h-full rounded-full bg-white p-4">
                  <Image
                    src="/images/kirti-shrivastava-2.jpeg" // Updated image source to the new image
                    alt="Kirti Shrivastava"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
