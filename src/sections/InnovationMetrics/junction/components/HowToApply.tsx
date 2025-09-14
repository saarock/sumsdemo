import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  UserPlus, 
  Users, 
  FileText, 
  Calendar,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Handshake,
  Target,
  Globe,
  Zap,
  Building,
  Network,
  Star,
  Trophy,
  Rocket,
  Clock,
  MapPin
} from "lucide-react";
import exampleImage from 'figma:asset/54662e19f4cac7b511f4d90c8cd53f84e0a9b6d6.png';

const applicationSteps = [
  {
    title: "Register",
    subtitle: "Start Your Journey",
    description: "Create your profile, showcase your skills, and join Nepal's biggest tech community. It's free and takes just 2 minutes! 🚀",
    icon: UserPlus,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/40",
    textColor: "text-purple-400",
    step: "01"
  },
  {
    title: "Team Up",
    subtitle: "Find Your Squad",
    description: "Form teams of 2-4 members or join existing ones. Mix skills, share visions, and create magic together. The best ideas come from diverse minds! 🤝",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/40",
    textColor: "text-blue-400",
    step: "02"
  },
  {
    title: "Build",
    subtitle: "Create & Innovate",
    description: "Turn your wildest ideas into reality during 48 hours of non-stop coding, designing, and problem-solving. This is where dreams become prototypes! 💡",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/40",
    textColor: "text-green-400",
    step: "03"
  },
  {
    title: "Win",
    subtitle: "Claim Your Glory",
    description: "Present your solution to expert judges and compete for cash prizes, incubation opportunities, and the golden ticket to Finland! Your future starts here! 🏆",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/40",
    textColor: "text-orange-400",
    step: "04"
  }
];

const quickFacts = [
  { icon: Clock, label: "Registration", value: "Opens Oct 1", color: "text-purple-400" },
  { icon: Users, label: "Expected", value: "200+ Hackers", color: "text-blue-400" },
  { icon: MapPin, label: "Location", value: "King's College", color: "text-green-400" },
  { icon: Star, label: "Duration", value: "48 Hours", color: "text-orange-400" }
];

export function HowToApply() {
  return (
    <section id="apply" className="py-20 relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black/20 to-blue-900/10"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge className="glass-button mb-6 px-8 py-4 text-lg border-0 text-white animate-pulse">
              <Rocket className="w-6 h-6 mr-3 text-purple-400" />
              Join the Revolution
            </Badge>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 bg-gradient-to-r from-white via-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent leading-tight tracking-tight">
              HOW TO<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                JOIN THE
              </span><br />
              FUTURE
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to hack your way to glory? Here's your roadmap to becoming part of Nepal's most epic tech event! 🔥
            </p>
          </div>

          {/* Quick Facts Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <div key={index} className="glass-card rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300">
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${fact.color}`} />
                  <div className="text-white/60 text-sm">{fact.label}</div>
                  <div className={`${fact.color} text-lg`}>{fact.value}</div>
                </div>
              );
            })}
          </div>

          {/* Application Steps */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {applicationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className={`glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden ${step.borderColor} border-2 group`}
                >
                  {/* Dynamic Background Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.bgColor} rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${step.bgColor} rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  
                  {/* Floating Step Number */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-lg shadow-2xl animate-pulse`}>
                    {step.step}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`glass-subtle rounded-3xl p-4 w-fit mb-6 bg-gradient-to-r ${step.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${step.textColor}`} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`text-sm ${step.textColor} mb-2 uppercase tracking-wider`}>
                      {step.subtitle}
                    </div>
                    <h3 className="text-2xl text-white mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for flow */}
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden xl:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-purple-400 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Important Info Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Key Dates */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden border-2 border-purple-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-purple-400" />
                  Key Dates 📅
                </h3>
                <div className="space-y-4">
                  <div className="glass-subtle rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-purple-300 text-lg">Registration Opens</div>
                    <div className="text-white text-xl">Oct 15, 2025</div>
                  </div>
                  <div className="glass-subtle rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-purple-300 text-lg">Deadline</div>
                    <div className="text-white text-xl">Nov 30, 2025</div>
                  </div>
                  <div className="glass-subtle rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-purple-300 text-lg">Main Event</div>
                    <div className="text-white text-xl">Dec 5-7, 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden border-2 border-blue-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8 text-blue-400" />
                  What You Get ✨
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/80">Free meals & swag</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/80">Mentor sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/80">Networking opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/80">Workshops & talks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/80">Epic memories</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden border-2 border-green-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  Requirements 📋
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/80">Age 16+ years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/80">Valid student ID</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/80">Passion for tech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/80">Team spirit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/80">Big dreams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center glass-card rounded-3xl p-12 relative overflow-hidden border-2 border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Your Future Awaits! 🚀
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Don't just dream about changing the world—do it! Registration opens soon. 
                Be ready to secure your spot in Nepal's most epic hackathon experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="glass-button text-xl px-12 py-6 rounded-2xl border-0 text-white hover:scale-110 transition-all duration-300 animate-pulse"
                >
                  <UserPlus className="w-6 h-6 mr-3" />
                  Get Notified First
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-subtle text-xl px-12 py-6 rounded-2xl border-2 border-white/30 text-white hover:scale-110 hover:bg-white/10 transition-all duration-300"
                  onClick={() => window.open('https://hackjunction.com', '_blank')}
                >
                  <ExternalLink className="w-6 h-6 mr-3" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}