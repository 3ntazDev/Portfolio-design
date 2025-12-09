import { Layers, Briefcase } from "lucide-react"

interface HeroSectionProps {
  title: string
  titleSecondary: string
  description: string
  stats: {
    experience: { value: string; label: string; sublabel: string }
    projects: { value: string; label: string; sublabel: string }
    certifications: { value: string; label: string; sublabel: string }
  }
  skillCards: Array<{
    icon: string
    color: string
    title: string
    subtitle: string
  }>
}

export function HeroSection({ title, titleSecondary, description, stats, skillCards }: HeroSectionProps) {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-6">
        <h1 className="text-6xl lg:text-7xl font-bold leading-none text-balance">
          <span className="text-primary">{title}</span>
          <br />
          <span className="text-muted-foreground">{titleSecondary}</span>
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
      </div>

      {/* Stats */}
      <div className="flex gap-12">
        <div>
          <div className="text-5xl font-bold text-foreground">{stats.experience.value}</div>
          <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
            {stats.experience.label}
            <br />
            {stats.experience.sublabel}
          </div>
        </div>
        <div>
          <div className="text-5xl font-bold text-foreground">{stats.projects.value}</div>
          <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
            {stats.projects.label}
            <br />
            {stats.projects.sublabel}
          </div>
        </div>
        <div>
          <div className="text-5xl font-bold text-foreground">{stats.certifications.value}</div>
          <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
            {stats.certifications.label}
            <br />
            {stats.certifications.sublabel}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="mb-6">
            <Layers className="w-10 h-10" />
          </div>
          <div className="text-sm font-bold uppercase tracking-wide">{skillCards[0].title}</div>
          <div className="text-xs mt-2 opacity-90 uppercase tracking-wide">{skillCards[0].subtitle}</div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-lime-400 to-lime-500 text-black">
          <div className="mb-6">
            <Briefcase className="w-10 h-10" />
          </div>
          <div className="text-sm font-bold uppercase tracking-wide">{skillCards[1].title}</div>
          <div className="text-xs mt-2 opacity-90 uppercase tracking-wide">{skillCards[1].subtitle}</div>
        </div>
      </div>
    </div>
  )
}
