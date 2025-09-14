import { Badge } from "./ui/badge";
import { 
  Brain, 
  Leaf, 
  Heart, 
  Smartphone, 
  Shield, 
  Gamepad2,
  Code,
  Zap
} from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Build intelligent solutions using cutting-edge AI technologies to solve real-world problems.",
    color: "text-purple-400"
  },
  {
    icon: Leaf,
    title: "Sustainability & Climate",
    description: "Create innovative solutions for environmental challenges and sustainable development.",
    color: "text-green-400"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Develop applications that improve healthcare delivery and personal wellness.",
    color: "text-red-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Innovation",
    description: "Build next-generation mobile applications that enhance user experiences.",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Develop solutions to protect digital assets and ensure online safety.",
    color: "text-orange-400"
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    description: "Create engaging gaming experiences and entertainment platforms.",
    color: "text-pink-400"
  },
  {
    icon: Code,
    title: "Open Innovation",
    description: "Unleash your creativity with no boundaries - build anything that makes an impact.",
    color: "text-cyan-400"
  },
  {
    icon: Zap,
    title: "Startup Challenge",
    description: "Present your startup idea and compete for pre-incubation opportunities.",
    color: "text-yellow-400"
  }
];

export function Tracks() {
  return (
    <section id="tracks" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="glass-button mb-6 px-6 py-3 border-0 text-white">
              <Code className="w-5 h-5 mr-2 text-purple-400" />
              Challenge Tracks
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Choose Your Challenge
            </h2>
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-white/80 leading-relaxed">
                Pick a track that excites you and build solutions that matter. Each track offers unique challenges 
                provided by our Challenge Owner Partners, with dedicated mentorship and prizes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <div 
                  key={index}
                  className="glass-card rounded-3xl p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="glass-subtle rounded-2xl p-4 w-fit mx-auto mb-4">
                    <IconComponent className={`w-8 h-8 ${track.color}`} />
                  </div>
                  <h3 className="text-lg mb-3 text-white">{track.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl mb-4 text-white">Ready to Make an Impact?</h3>
              <p className="text-white/80 mb-6">
                Join one of these tracks or propose your own innovative challenge. Our Challenge Owner Partners 
                are waiting to see what you'll build!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}