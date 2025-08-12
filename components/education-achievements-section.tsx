import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Linkedin, ExternalLink } from "lucide-react"

interface Education {
  degree: string
  institution: string
  year: string
  grade: string
}

interface EducationAchievementsSectionProps {
  education: Education[]
  achievements: string[]
  linkedinLink: string
  behanceLink: string
}

export default function EducationAchievementsSection({
  education,
  achievements,
  linkedinLink,
  behanceLink,
}: EducationAchievementsSectionProps) {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                    <p className="text-gray-600 mb-1">{edu.institution}</p>
                    {edu.grade && <p className="text-sm text-gray-500">Grade: {edu.grade}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow mt-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">Connect With Me</h3>
                <div className="space-y-3">
                  <Link
                    href={linkedinLink}
                    target="_blank"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    linkedin.com/in/kirti20feb
                  </Link>
                  <Link
                    href={behanceLink}
                    target="_blank"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Behance Portfolio
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
