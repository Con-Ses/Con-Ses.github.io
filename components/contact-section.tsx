import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { portfolioConfig, contactInfo } from "@/lib/portfolio-config"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss aerospace innovations or explore collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {portfolioConfig.contact.showEmail && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>
              )}

              {portfolioConfig.contact.showPhone && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>
              )}

              {portfolioConfig.contact.showLocation && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Professional Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {portfolioConfig.contact.showLinkedIn && (
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
              )}

              {portfolioConfig.contact.showGitHub && (
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    GitHub Portfolio
                  </a>
                </Button>
              )}

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>

              <Button variant="outline" className="w-full bg-transparent">
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
