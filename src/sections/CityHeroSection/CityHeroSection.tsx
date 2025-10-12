// import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { Button } from "../../components"

export function CityHeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10">
              <ArrowDown className="w-6 h-6 text-orange-500" />
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Transform Your City Into an Innovation Hub
            </h1>

            <div className="space-y-2">
              <p className="text-lg lg:text-xl text-muted-foreground">Retain talented people, jobs.</p>
              <p className="text-lg lg:text-xl text-muted-foreground">Solve local challenges.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button  className="bg-black hover:bg-black/90 text-white px-8">
                See How It Works
              </Button>
              <Button  className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
            <div className="relative h-[400px] lg:h-full">
              <img
                src="/futuristic-modern-stadium-architecture-with-orange.jpg"
                alt="Futuristic Innovation Hub"
                className="w-full h-full object-cover rounded-2xl lg:rounded-none lg:rounded-l-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/50 lg:to-gray-50/80" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-orange-500" : "bg-gray-300"}`} />
        ))}
      </div>
    </section>
  )
}
