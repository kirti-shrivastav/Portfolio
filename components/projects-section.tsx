import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette } from "lucide-react"
import Image from "next/image" // Import Image component

interface Project {
  title: string
  company: string
  description: string
  category: string
  color: string
  demoLink: string
}

interface ProjectsSectionProps {
  projectsData: Project[]
}

export default function ProjectsSection({ projectsData }: ProjectsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my latest UI/UX design work across various industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" className="block" key={index}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
                <CardContent className="p-0">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} rounded-t-lg flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    {project.title === "Riya Soni Kundan House" ? (
                      <Image
                        src="/images/riya-soni-kundan-house-2.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Bondspe Mobile App" ? (
                      <Image
                        src="/images/bondspe-mobile-app.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Neel Initiative" ? (
                      <Image
                        src="/images/neel-initiative.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Brixcode Technologies" ? (
                      <Image
                        src="/images/brixcode-technologies.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Bondspe Website" ? (
                      <Image
                        src="/images/bondspe-website.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Legal Republic" ? (
                      <Image
                        src="/images/legal-republic-2.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Handy Craftly" ? (
                      <Image
                        src="/images/handy-craftly.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Devicecure Homepage" ? (
                      <Image
                        src="/images/devicecure-homepage.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : project.title === "Game Studio UI/UX" ? (
                      <Image
                        src="/images/game-studio-ui-ux.png"
                        alt={project.title}
                        width={300}
                        height={180}
                        className="w-full h-full object-cover z-10"
                      />
                    ) : (
                      <div className="text-center z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {project.category}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{project.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
