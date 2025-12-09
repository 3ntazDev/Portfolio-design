import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Mail, Github, Linkedin } from "lucide-react"

interface ProfileCardProps {
  data: {
    fullName: string
    nameAr: string
    location: string
    email: string
    profileImage: string
  }
}

export function ProfileCard({ data }: ProfileCardProps) {
  return (
    <Card className="sticky top-24 overflow-hidden border-2 border-border/50 bg-card/80 backdrop-blur">
      <div className="p-6 space-y-6">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
          <Image
            src={data.profileImage || "/placeholder.svg?height=400&width=400"}
            alt={data.fullName}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-4 text-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{data.fullName}</h2>
            <p className="text-lg text-muted-foreground mt-2" dir="rtl">
              {data.nameAr}
            </p>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{data.location}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <a
                href={`mailto:${data.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {data.email}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/3ntazDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
