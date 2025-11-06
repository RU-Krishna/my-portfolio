"use client";

import {
  AnimatePresence, // NEW: To handle particles disappearing
  motion,
  useMotionValue,
  useVelocity, // UPDATED: This is the correct modern hook
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

// NEW: Define a type for our particles
type Particle = {
  id: number;
  x: number;
  y: number;
};

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // UPDATED: Use the correct modern hook
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // NEW: State to store our "star" particles
  const [particles, setParticles] = useState<Particle[]>([]);
  // NEW: A simple timestamp to throttle particle creation
  const [lastSpawn, setLastSpawn] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // --- NEW PARTICLE SPAWNING LOGIC ---
      const now = Date.now();
      // Throttle spawning to one particle every 30ms
      if (now - lastSpawn < 30) return;

      // Get the current speed
      const vX = velocityX.get();
      const vY = velocityY.get();
      const speed = Math.sqrt(vX * vX + vY * vY);

      // Only spawn particles if the mouse is moving reasonably fast
      if (speed > 150) {
        setLastSpawn(now);
        // Add a new particle at the current mouse position
        setParticles((prevParticles) => [
          ...prevParticles,
          {
            id: now,
            x: e.clientX,
            y: e.clientY,
          },
        ]);
      }
      // --- END OF NEW LOGIC ---
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
    // We add velocity and lastSpawn as dependencies
  }, [cursorX, cursorY, velocityX, velocityY, lastSpawn]);

  // NEW: Function to remove a particle by its ID
  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* ==================================
        NEW: PARTICLE RENDERER
      ================================== */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="pointer-events-none fixed left-0 top-0 z-50 h-2.5 w-2.5 rounded-full bg-white"
            style={{
              x: particle.x - 5, // Offset to center the star
              y: particle.y - 5,
              // This creates the "shiny star" glow effect
              boxShadow:
                "0 0 10px 2px #fff, 0 0 20px 5px hsl(var(--primary) / 0.5)",
              filter: "blur(1px)",
            }}
            // Animate from full size to zero size/opacity
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            // Remove the particle from state when the animation is done
            onAnimationComplete={() => removeParticle(particle.id)}
          />
        ))}
      </AnimatePresence>

      {/* ==================================
        THE "AURA" (Unchanged)
      ================================== */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-64 w-64 rounded-full"
        style={{
          translateX: springX,
          translateY: springY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* ==================================
        THE CURSOR DOT (Unchanged)
      ================================== */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 rounded-full bg-white"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;