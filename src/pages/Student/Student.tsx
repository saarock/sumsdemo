import {
  Building2,
  Briefcase,
  MapPin,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Menu,
  Search,
  Lightbulb,
  TrendingUp,
  Star,
  Play,
  Volume2,
  Maximize,
} from "lucide-react";
import { Button } from "../../components";
import { StudentMainFeatures, StudentSuccessStories, StudentVideoShowcase, StundetHero } from "../../sections";

export default function Student() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <StundetHero />

      <StudentVideoShowcase />
      <StudentMainFeatures/>
      <StudentSuccessStories/>


     
    </main>
  );
}
