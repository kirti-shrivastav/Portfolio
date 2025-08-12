import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react" // Removed Palette as it's no longer needed
import Image from "next/image" // Import Image component

interface SkillsSectionProps {
  skills: { name: string; level: number }[]
  featuredProjectLink: string
}

export default function SkillsSection({ skills, featuredProjectLink }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Proficient in modern design tools and methodologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Project</h3>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Happy Gardening UI/UX Case Study</h4>
                  <p className="text-gray-600 mb-6">
                    Addressed challenges faced by plant enthusiasts with innovative solutions. Designed user-friendly
                    interface with guides, tips, and plant care reminders.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Created user persona "Hema" through user research and empathy mapping
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Developed visual design with calming color scheme and clean typography
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Conducted competitive analysis to enhance user engagement
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={featuredProjectLink} target="_blank">
                      View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                {/* Replaced the old content with the new image */}
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/happy-gardening-case-study.png"
                    alt="Happy Gardening UI/UX Case Study"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
