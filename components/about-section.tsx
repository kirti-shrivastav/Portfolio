import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Code, Briefcase } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Career Transition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Successfully transitioned from 5+ years in operations to UI/UX design, bringing analytical thinking and
                process optimization skills to create better user experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Proficient in industry-standard design tools including Figma, Adobe Creative Suite, and prototyping
                tools to bring ideas to life.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Recent experience in designing user-friendly interfaces for various industries, from jewelry brands to
                mobile repair services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
