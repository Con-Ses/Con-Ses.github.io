import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from "lucide-react"
import projects from '../../projects-data.json';


const projects = {
  "evtol-tilt-wing": {
    title: "eVTOL Senior Design Project",
    category: "Drone Design",
    year: "2025",
    duration: "6 months",
    team: "6 engineers",
    client: "n/a",
    image: "/placeholder-vtfw3.png",
    overview:
      "Co-led the design and analysis of a short-range eVTOL drone with a tilt-wing configuration alongside a 5-member team; Requirements included a flight time of 19 minutes with a 1 lb. payload.",
    challenge: "insert more details",
    solution: "insert more details",
    results: ["insert more details"],
    technologies: ["MATLAB", "SolidWorks", "OpenVSP"],
    images: ["/placeholder-u7n8i.png", "/placeholder-ytf6s.png", "/placeholder-4hg09.png"],
    videos: [
      {
        url: "/placeholder.mp4",
        title: "Ion Thruster Test Fire",
        description: "High-speed footage of the ion thruster during testing phase",
      },
      {
        url: "/placeholder.mp4",
        title: "Plasma Flow Visualization",
        description: "CFD simulation showing optimized plasma flow patterns",
      },
    ],
  },
  fwmav: {
    title: "Flapping Wing MAV Undergraduate Research Team",
    category: "Drone Design",
    year: "2025",
    duration: "8 months",
    team: "4 engineers",
    client: "University Research",
    image: "/placeholder-aj1fw.png",
    overview:
      "Design and manufacture a Micro-Air-Vehicle (MAV) that mimicked the propulsion style and flight characteristics found in birds",
    challenge:
      "Traditional fixed-wing and rotorcraft designs have limitations in efficiency and maneuverability compared to biological flight systems.",
    solution:
      "Developed biomimetic flapping wing mechanisms with advanced control systems to replicate bird-like flight characteristics.",
    results: [
      "Successful prototype development",
      "Improved efficiency over traditional designs",
      "Advanced control system implementation",
    ],
    technologies: ["SOLIDWORKS", "Control Systems", "Biomimetics"],
    images: ["/placeholder-aj1fw.png", "/placeholder-aj1fw.png", "/placeholder-aj1fw.png"],
    videos: [],
  },
  "commercial-aircraft-design": {
    title: "Commercial Airliner Sizing and Trade Study Senior Capstone Design Project",
    category: "Aircraft Design",
    year: "2025",
    duration: "6 months",
    team: "5 engineers",
    client: "Academic Project",
    image: "/placeholder-bhkpt.png",
    overview:
      "Design and Size a Commercial Airliner using MATLAB and Solidworks given a set of initial requirements and FAA regulations",
    challenge:
      "Meeting stringent FAA regulations while optimizing for fuel efficiency, passenger capacity, and operational costs.",
    solution:
      "Comprehensive trade study analysis using MATLAB for performance calculations and SOLIDWORKS for detailed design.",
    results: [
      "FAA compliant design achieved",
      "Optimized fuel efficiency parameters",
      "Detailed manufacturing specifications",
    ],
    technologies: ["MATLAB", "SOLIDWORKS", "Aircraft Design", "Regulatory Compliance"],
    images: ["/placeholder-bhkpt.png", "/placeholder-bhkpt.png", "/placeholder-bhkpt.png"],
    videos: [],
  },
  "autonomous-robot": {
    title: "Autonomous Wheeled Robot",
    category: "Robotics",
    year: "2023",
    duration: "4 months",
    team: "3 engineers",
    client: "Course Project",
    image: "/placeholder-5xmbs.png",
    overview:
      "Design and manufacture an autonomously controlled robot that could traverse a pre-determined path given a set of design requirements and constraints",
    challenge:
      "Creating reliable autonomous navigation in complex environments with limited sensor data and processing power.",
    solution: "Implemented advanced path planning algorithms with sensor fusion for robust autonomous navigation.",
    results: ["Successful autonomous navigation", "Robust obstacle avoidance", "Precise path following accuracy"],
    technologies: ["SOLIDWORKS", "Arduino (C/C++)", "Woodshop Machinery", "Sensor Fusion"],
    images: ["/placeholder-5xmbs.png", "/placeholder-5xmbs.png", "/placeholder-5xmbs.png"],
    videos: [],
  },
  stms: {
    title: "Spacecraft Thermal Management Systems",
    category: "Space",
    year: "2021 - 2022",
    duration: "12 months",
    team: "4 engineers",
    client: "Research Project",
    image: "/placeholder-5xmbs.png",
    overview:
      "Design and manufacture an autonomously Variable Emissivity Device intended to regulate spacecraft irradiated surface opacity based on radiative heat flux",
    challenge:
      "Spacecraft thermal management requires precise control of heat dissipation in the extreme environment of space.",
    solution: "Developed variable emissivity device with autonomous control systems for optimal thermal regulation.",
    results: [
      "Successful prototype development",
      "Autonomous thermal control achieved",
      "Space-qualified design specifications",
    ],
    technologies: ["SOLIDWORKS", "GD&T", "Additive Manufacturing", "Thermal Analysis"],
    images: ["/placeholder-5xmbs.png", "/placeholder-5xmbs.png", "/placeholder-5xmbs.png"],
    videos: [],
  },
  "autonomous-navigation": {
    title: "Autonomous Satellite Navigation System",
    category: "Autonomous Systems",
    year: "2022",
    duration: "12 months",
    team: "6 engineers",
    client: "Internal R&D",
    image: "/placeholder-8nopp.png",
    overview:
      "Designed and implemented an AI-powered navigation system for small satellites that reduces ground control dependency by 80% through advanced machine learning algorithms and sensor fusion.",
    challenge:
      "Small satellites traditionally require constant ground control for navigation and attitude control, limiting mission flexibility and increasing operational costs.",
    solution:
      "Developed a machine learning-based navigation system using computer vision, IMU data, and star tracker inputs. Implemented Kalman filtering for sensor fusion and created autonomous decision-making algorithms.",
    results: [
      "80% reduction in ground control dependency",
      "99.7% navigation accuracy maintained",
      "Successful deployment on 3 CubeSat missions",
      "50% reduction in operational costs",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Embedded C",
      "Kalman Filtering",
      "Computer Vision",
      "Sensor Fusion",
      "Real-time Systems",
    ],
    images: [
      "/satellite-computer-vision-star-tracking.jpg",
      "/autonomous-navigation-algorithm-flowchart.jpg",
      "/cubesat-deployment-space-mission.jpg",
    ],
    videos: [
      {
        url: "/placeholder.mp4",
        title: "Autonomous Navigation Demo",
        description: "Real-time demonstration of the AI navigation system in action",
      },
    ],
  },
  "hypersonic-vehicle": {
    title: "Hypersonic Vehicle Aerodynamics",
    category: "Aerodynamics",
    year: "2022",
    duration: "10 months",
    team: "8 engineers",
    client: "Defense Contractor",
    image: "/hypersonic-vehicle-aerodynamics-wind-tunnel.jpg",
    overview:
      "Conducted comprehensive aerodynamic analysis for hypersonic vehicle design, focusing on heat management, structural integrity, and flight performance optimization at Mach 5+ speeds.",
    challenge:
      "Hypersonic flight presents extreme challenges including intense heat generation, shock wave interactions, and structural loads that require innovative design solutions.",
    solution:
      "Performed advanced CFD analysis using ANSYS Fluent, developed novel heat management strategies, and optimized vehicle geometry for minimal drag and maximum structural efficiency.",
    results: [
      "25% improvement in lift-to-drag ratio",
      "30% reduction in peak heating loads",
      "Successful wind tunnel validation at Mach 6",
      "Design recommendations implemented in prototype",
    ],
    technologies: [
      "CFD Analysis",
      "ANSYS Fluent",
      "Heat Transfer",
      "Structural Analysis",
      "Wind Tunnel Testing",
      "Shock Wave Analysis",
    ],
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    videos: [
      {
        url: "/placeholder.mp4",
        title: "Wind Tunnel Testing",
        description: "Mach 6 wind tunnel testing of the hypersonic vehicle prototype",
      },
      {
        url: "/placeholder.mp4",
        title: "CFD Flow Visualization",
        description: "Computational fluid dynamics showing shock wave patterns",
      },
    ],
  },
  "rocket-engine-optimization": {
    title: "Rocket Engine Performance Optimization",
    category: "Propulsion Systems",
    year: "2021",
    duration: "6 months",
    team: "5 engineers",
    client: "SpaceX",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "Optimized combustion chamber design for liquid rocket engines, achieving significant improvements in specific impulse through advanced thermodynamic modeling and design optimization.",
    challenge:
      "Existing combustion chamber designs had reached performance plateaus, requiring innovative approaches to achieve further efficiency gains.",
    solution:
      "Developed advanced combustion models, optimized injector patterns, and implemented novel cooling strategies to improve combustion efficiency and heat management.",
    results: [
      "12% improvement in specific impulse",
      "8% reduction in combustion instabilities",
      "Successful hot-fire testing validation",
      "Design integrated into production engines",
    ],
    technologies: [
      "MATLAB",
      "Thermodynamics",
      "Combustion Modeling",
      "Test Engineering",
      "Heat Transfer",
      "Fluid Dynamics",
    ],
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "defense-radar": {
    title: "Advanced Radar Signal Processing",
    category: "Defense Systems",
    year: "2021",
    duration: "14 months",
    team: "10 engineers",
    client: "Northrop Grumman",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "Developed advanced signal processing algorithms for next-generation defense radar systems, significantly improving target detection accuracy and reducing false alarm rates.",
    challenge:
      "Modern radar systems face challenges with target detection in cluttered environments, requiring sophisticated algorithms to distinguish between targets and noise.",
    solution:
      "Implemented machine learning-based signal processing algorithms, developed adaptive filtering techniques, and created real-time processing capabilities for enhanced target discrimination.",
    results: [
      "25% improvement in target detection accuracy",
      "40% reduction in false alarm rates",
      "Real-time processing capability achieved",
      "Successfully deployed in operational systems",
    ],
    technologies: [
      "MATLAB",
      "Signal Processing",
      "Machine Learning",
      "Real-time Systems",
      "Adaptive Filtering",
      "Target Recognition",
    ],
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "cubesat-mission": {
    title: "CubeSat Mission Design & Operations",
    category: "Space Systems",
    year: "2020",
    duration: "18 months",
    team: "12 engineers",
    client: "University Research",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "Led end-to-end mission design for a 3U CubeSat including payload integration, orbital mechanics analysis, and ground station operations for a technology demonstration mission.",
    challenge:
      "Designing a complete space mission within strict size, weight, and budget constraints while ensuring mission success and scientific objectives are met.",
    solution:
      "Developed comprehensive mission architecture, optimized orbital parameters, integrated multiple payloads, and established ground operations procedures for mission success.",
    results: [
      "Successful launch and deployment",
      "100% mission objectives achieved",
      "18-month operational lifetime exceeded expectations",
      "Technology validated for future missions",
    ],
    technologies: [
      "Systems Engineering",
      "Orbital Mechanics",
      "Mission Planning",
      "Ground Systems",
      "Payload Integration",
      "Satellite Operations",
    ],
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  {project.category}
                </Badge>
                <Badge variant="outline">{project.year}</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">{project.title}</h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.overview}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">Team:</span>
                  <span className="font-medium">{project.team}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 lg:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Key Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Project Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Project Videos */}
              {project.videos && project.videos.length > 0 && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground">Project Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-6">
                      {project.videos.map((video, index) => (
                        <div key={index} className="space-y-3">
                          <div className="relative">
                            <video
                              controls
                              className="w-full h-64 object-cover rounded-lg bg-muted"
                              poster="/video-thumbnail.png"
                            >
                              <source src={video.url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{video.title}</h4>
                            <p className="text-sm text-muted-foreground">{video.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Client</p>
                    <p className="text-foreground">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
                    <p className="text-foreground">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Team Size</p>
                    <p className="text-foreground">{project.team}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Year</p>
                    <p className="text-foreground">{project.year}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
