import {
  Rocket,
  Lightbulb,
  Code,
  Presentation as PresentationChart,
  DollarSign,
  Zap,
  Users,
  Search,
  Star,
  ArrowRight,
} from "lucide-react"
import { Button } from "../../components"
import { CTASection, EntrepreneurshipHero, OurProcess, StartupIdeaGenerator, StudentSuccessStories, UltimateLaunchpad } from "../../sections"


export default function Entrepreneurship() {
  return (
    <main className="min-h-screen bg-background">
     <EntrepreneurshipHero/>
     <UltimateLaunchpad/>
     <OurProcess/>
     <StartupIdeaGenerator/>
     <StudentSuccessStories/>
     <CTASection/>
    </main>
  )
}
