import { Calendar, MapPin, ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface Experience {
  company: string
  location: string
  position: string
  period: string
  description: string
  logo: string
}

interface ExperienceTimelineProps {
  experience: Experience[]
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div>
      <h2 className="text-6xl md:text-7xl font-bold mb-16 leading-tight">
        <span className="text-foreground">2 YEARS OF</span>
        <br />
        <span className="text-muted-foreground">EXPERIENCE</span>
      </h2>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-xl bg-card border border-border/50 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={exp.logo || "/placeholder.svg?height=80&width=80"}
                  alt={exp.company}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">{exp.position}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
