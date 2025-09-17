import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: "evtol-tilt-wing",
    title: "eVTOL Senior Capstone Design Project",
    description:
      "Project Goal: Design, analyze, and build a short range eVTOL drone operating with a Tilt-Wing Platform alongside a 5-member team",
    image: "/placeholder-zx2u5.png",
    technologies: ["OpenVSP", "MATLAB", "SOLIDWORKS", "XFLR5"],
    category: "Drone Design",
    year: "2025",
  },
  {
    id: "fwmav",
    title: "Flapping Wing MAV Undergraduate Research Team",
    description:
      "Project Goal: Design and manufacture a Micro-Air-Vehicle (MAV) that mimicked the propulsion style and flight characteristics found in birds",
    image: "/placeholder-aj1fw.png",
    technologies: ["SOLIDWORKS"],
    category: "Drone Design",
    year: "2025",
  },
  {
    id: "commercial-aircraft-design",
    title: "Commercial Airliner Sizing and Trade Study Senior Capstone Design Project",
    description:
      "Project Goal: Design and Size a Commercial Airliner using MATLAB and Solidworks given a set of initial requirements and FAA regulations",
    image: "/placeholder-bhkpt.png",
    technologies: ["MATLAB", "SOLIDWORKS"],
    category: "Aircraft Design",
    year: "2025",
  },
  {
    id: "autonomous-robot",
    title: "Autonomous Wheeled Robot",
    description:
      "Project Goal: Design and manufacture an autonomously controlled robot that could traverse a pre-determined path given a set of design requirements and constraints",
    image: "/placeholder-5xmbs.png",
    technologies: ["SOLIDWORKS", "Arduino (C/C++)", "Woodshop Machinery"],
    category: "Robotics",
    year: "2023",
  },
  {
    id: "stms",
    title: "Spacecraft Thermal Management Systems",
    description:
      "Project Goal: Design and manufacture an autonomosly Variable Emissivity Device intended to regulate spacecraft irradiated surface opacity based on radiative heat flux",
    image: "/placeholder-5xmbs.png",
    technologies: ["SOLIDWORKS", "GD&T", "Additive Manufacturing"],
    category: "Space",
    year: "2021 - 2022",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Engineering Projects Showcase</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="pt-4">
                  <Link href={`/projects/${project.id}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
