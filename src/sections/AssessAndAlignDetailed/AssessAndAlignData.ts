// src/pages/AssessAndAlign/AssessAndAlignData.ts
import { BookOpen, Lightbulb, Target, Users } from "lucide-react";

export const assessAndAlignData = [
  {
    id: 1,
    title: "Career Sync",
    description: "Match students to job role",
    image: "/career-matching-interface.png",
    alt: "Career matching interface",
    icon: Target,
    highlight: false,
  },
  {
    id: 2,
    title: "Project Portal",
    description: "Solve company challenges",
    image: "/project-collaboration-meeting.png",
    alt: "Project collaboration",
    icon: Lightbulb,
    highlight: true, // 🔥 Highlighted card
  },
  {
    id: 3,
    title: "Internship Connect",
    description: "Place student at partner Company",
    image: "/student-intern-office.png",
    alt: "Internship program",
    icon: Users,
    highlight: false,
  },
  {
    id: 4,
    title: "Curriculum Booster",
    description: "Align curriculum with market needs",
    image: "/modern-curriculum.png",
    alt: "Curriculum development",
    icon: BookOpen,
    highlight: false,
  },
  
];
