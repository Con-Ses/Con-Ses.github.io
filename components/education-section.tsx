import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { portfolioConfig } from "@/lib/portfolio-config"

const education = [
  {
    degree: "Bachelor of Science in Aerospace Engineering",
    school: "University of California, Irvine",
    location: "Irvine, CA",
    year: "2025",
    gpa: "3.32/4.0",
    focus: undefined,
    achievements: [],
  },
  {
    degree: "Bachelor of Science in Mechanical Engineering",
    school: "University of California, Irvine",
    location: "Irvine, CA",
    year: "2025",
    gpa: "3.32/4.0",
    focus: undefined,
    achievements: [],
  },
]

const certifications = [
  "Professional Engineer (PE) License - California",
  "Project Management Professional (PMP)",
  "ITAR Security Clearance",
  "Six Sigma Green Belt",
]

export function EducationSection() {
  if (!portfolioConfig.education.showSection) {
    return null
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in aerospace and mechanical engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <CardTitle className="text-lg text-card-foreground leading-tight">{edu.degree}</CardTitle>
                    <p className="text-accent font-semibold mt-1">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location} • {edu.year}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {portfolioConfig.education.showGPA && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">GPA:</span>
                      <span className="text-sm font-semibold text-foreground">{edu.gpa}</span>
                    </div>
                  )}
                  {portfolioConfig.education.showFocus && edu.focus && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Focus:</span>
                      <span className="text-sm text-foreground ml-2">{edu.focus}</span>
                    </div>
                  )}
                  {portfolioConfig.education.showAchievements && edu.achievements.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Achievements:</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-foreground flex items-center">
                            <Award className="h-3 w-3 text-accent mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {portfolioConfig.education.showProfessionalCertifications && (
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Professional Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
