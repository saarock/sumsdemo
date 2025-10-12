import { Brain, Target, Lightbulb } from "lucide-react"


const problems = [
  {
    icon: Brain,
    title: "Brain Drain",
    description: "Talent leaves abroad seeking better opportunities and innovative ecosystems.",
  },
  {
    icon: Target,
    title: "Skill Mismatch",
    description: "Education systems misaligned with current industry needs and market demands.",
  },
  {
    icon: Lightbulb,
    title: "Low Innovation",
    description: "Cities miss economic growth opportunities due to lack of innovation ecosystems.",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Why Your City Needs SUMS</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem) => (
            <div key={problem.title} className="border-2 hover:border-accent/50 transition-colors">
              <div className="pt-8 pb-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
