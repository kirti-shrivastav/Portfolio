import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Palette, Briefcase } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  projects?: string[]
  type: "uiux" | "other"
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const uiuxExperiences = experiences.filter((exp) => exp.type === "uiux")
  const otherExperiences = experiences.filter((exp) => exp.type === "other")

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Professional journey across UI/UX Design and Operations</p>
        </div>

        {/* UI/UX Design Experience Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">UI/UX Design Experience</h3>
          </div>

          <div className="space-y-8">
            {uiuxExperiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 text-sm text-purple-600 font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {exp.company}
                      </Badge>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{exp.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                      {exp.projects && (
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Key Projects:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project, projectIndex) => (
                              <Badge key={projectIndex} variant="outline" className="text-xs">
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Field Experience Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Other Field Experience</h3>
          </div>

          <div className="space-y-8">
            {otherExperiences.map((exp, index) => (
              <Card
                key={index + uiuxExperiences.length}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 ">
                    <div className="lg:col-span-1 ">
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2 ">
                        <Calendar className="w-4 h-4 " />
                        {exp.period}
                      </div>
                      <Badge variant="secondary" className="mb-2 w-full">
                        {exp.company}
                      </Badge>
                    </div>
                    <div className="lg:col-span-3 ">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 ">{exp.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                      {exp.projects && (
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Key Projects:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project, projectIndex) => (
                              <Badge key={projectIndex} variant="outline" className="text-xs">
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
