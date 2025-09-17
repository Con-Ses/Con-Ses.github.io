import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-balance">Connor Sessions</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Aerospace & Mechanical Engineering Graduate
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am a recent graduate from the University of California, Irvine with degrees in both Aerospace and
              Mechanical Engineering. I am interested in pursuing a career in the Aerospace and Defence Industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/professional-engineer-headshot.png"
                  alt="Connor Sessions - Aerospace Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
