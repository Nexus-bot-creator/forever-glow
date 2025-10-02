import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

export const ProposalButtons = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noClicks, setNoClicks] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const noMessages = [
    "Are you sure? 🥺",
    "Really? Think again... 💭",
    "Come on, don't be shy! 💕",
    "Please? Pretty please? 🙏",
    "I'll wait forever! ⏰",
    "My heart is breaking... 💔",
    "One more chance? 🌟",
  ];

  const handleYesClick = () => {
    setYesClicked(true);
    // Confetti celebration
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#EC4899", "#A855F7", "#F472B6"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#EC4899", "#A855F7", "#F472B6"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleNoHover = () => {
    if (yesClicked) return;
    
    // Calculate random position within viewport
    const maxX = window.innerWidth - 200; // button width
    const maxY = window.innerHeight - 100; // button height
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoPosition({ x: newX, y: newY });
    setNoClicks(prev => Math.min(prev + 1, noMessages.length - 1));
  };

  if (yesClicked) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-romantic">
        <div className="text-center animate-slide-up">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-glow animate-pulse-glow">
              <PartyPopper className="w-16 h-16 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            She said...🎉
            <br />
          </h2>
          <div className="flex justify-center mb-6">
            <img
              src="./GIF by ReactionClub.gif"
              alt="Yay Clipart"
              className="w-80 h-80 object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto font-light">
            You just made me the happiest person in the world! ❤️
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-foreground">
          So, What Do You Say?
        </h2>
        
        <div className="flex gap-8 justify-center items-center flex-wrap">
          <Button
            onClick={handleYesClick}
            size="lg"
            className="text-2xl px-12 py-8 rounded-2xl shadow-romantic hover-scale bg-gradient-romantic text-white border-0 hover:shadow-glow"
          >
            <Heart className="w-8 h-8 mr-3 fill-white" />
            Yes! 💕
          </Button>
          
          <Button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            variant="outline"
            size="lg"
            className="text-2xl px-12 py-8 rounded-2xl transition-all duration-300"
            style={{
              position: noClicks > 0 ? 'fixed' : 'relative',
              left: noClicks > 0 ? `${noPosition.x}px` : 'auto',
              top: noClicks > 0 ? `${noPosition.y}px` : 'auto',
            }}
          >
            {noMessages[noClicks]}
          </Button>
        </div>

        <p className="mt-8 text-muted-foreground text-lg">
          (Try hovering over "No" 😏)
        </p>
      </div>
    </section>
  );
};
