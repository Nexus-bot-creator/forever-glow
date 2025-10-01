import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

export const TargetCursor = ({ 
  spinDuration = 2, 
  hideDefaultCursor = true 
}: TargetCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    const cursorOuter = cursorOuterRef.current;

    if (!cursor || !cursorInner || !cursorOuter) return;

    // Hide default cursor
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    // Mouse enter handler for target elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-target')) {
        gsap.to(cursorOuter, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(cursorInner, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out"
        });

        // Start spinning animation
        gsap.to(cursorOuter, {
          rotation: 360,
          duration: spinDuration,
          ease: "none",
          repeat: -1
        });
      }
    };

    // Mouse leave handler for target elements
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-target')) {
        gsap.to(cursorOuter, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(cursorInner, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        // Stop spinning animation
        gsap.killTweensOf(cursorOuter, "rotation");
      }
    };

    // Click handler
    const handleClick = () => {
      gsap.to(cursorInner, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('click', handleClick);

    // Initial position
    gsap.set(cursor, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('click', handleClick);
      
      if (hideDefaultCursor) {
        document.body.style.cursor = 'auto';
      }
    };
  }, [spinDuration, hideDefaultCursor]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {/* Outer ring */}
      <div
        ref={cursorOuterRef}
        className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center"
      />
      
      {/* Inner dot */}
      <div
        ref={cursorInnerRef}
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};
