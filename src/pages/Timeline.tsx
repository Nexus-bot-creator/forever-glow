import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import LightRays from "@/components/LightRays";
import { ThemeToggle } from "@/components/ThemeToggle";

const events = [
  {
    year: "2023",
    title: "We Met",
    subtitle: "8th of October",
    description: "You were sitting on a bench with Sneha, I was just watching you from a distance."
  },
  {
    year: "2024",
    title: "We Started getting closer",
    subtitle: "You became everything for me",
    description: "Sharing every good and bad moment with you made me feel lucky."
  },
  {
    year: "2025",
    title: "The day I proposed",
    subtitle: "For me, it's just the starting of Our Journey",
    description: "With you , I want to see the world.(Accha hi lagega kuki usme tum jo ho✨)"
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen bg-background relative" style={{ width: '100%', height: '100vh' }}>
      {/* Theme Toggle */}
      <ThemeToggle />
  <div className="absolute inset-0 z-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ec4899" // Tailwind pink-500
            raysSpeed={1.9}
            lightSpread={2}
            rayLength={10}
            followMouse={true}
            mouseInfluence={0.5}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
      </div>
      <ScrollTimeline
        events={events}
        title="My Journey"
        subtitle="Scroll to explore the timeline"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
      />
    </div>
  );
}
