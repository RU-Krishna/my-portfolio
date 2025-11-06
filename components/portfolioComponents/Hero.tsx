"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
// NEW: Import Framer Motion hooks
import { motion, useMotionValue, useTransform } from "framer-motion";

const TAGLINES = [
  "Software Developer building modern, intelligent applications.",
  "First Year MCA Student at NIT Jamshedpur.",
];

const Hero = () => {
  //
  // YOUR EXISTING TYPING LOGIC (UNCHANGED)
  //
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(TAGLINES[0]);
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting ? 1000 : 2000;

    const type = () => {
      if (isDeleting) {
        setDisplayedTagline(currentTagline.substring(0, displayedTagline.length - 1));
        if (displayedTagline === "") {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
        }
      } else {
        setDisplayedTagline(currentTagline.substring(0, displayedTagline.length + 1));
        if (displayedTagline === currentTagline) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedTagline, isDeleting, currentTagline, taglineIndex]);

  useEffect(() => {
    setCurrentTagline(TAGLINES[taglineIndex]);
  }, [taglineIndex]);
  //
  // END OF TYPING LOGIC
  //

  //
  // NEW: 3D PARALLAX LOGIC
  //
  // 1. Create motion values to track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Create transformed values for each layer.
  // We map the mouse position (e.g., 0 to 1000 pixels) to a movement range (e.g., -15px to 15px).

  // Text layer (moves the most)
  const textX = useTransform(x, [0, 1000], [-30, 30]);
  const textY = useTransform(y, [0, 1000], [-20, 20]);

  // Grid layer (moves the least)
  const gridX = useTransform(x, [0, 1000], [-15, 15]);
  const gridY = useTransform(y, [0, 1000], [-10, 10]);

  // 3. Handler to update motion values on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    // We use clientX/Y to get the mouse position relative to the viewport
    x.set(e.clientX);
    y.set(e.clientY);
  };
  //
  // END OF PARALLAX LOGIC
  //

  return (
    <section
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      // 4. Listen for mouse movement on the whole section
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      {/* 5. Converted to motion.div and added style/transition props */}
      <motion.div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full",
          "animate-grid-flow bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]",
          "bg-size-[3rem_3rem]"
        )}
        style={{
          x: gridX,
          y: gridY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Center Content */}
      {/* 6. Converted to motion.div and added style/transition props */}
      <motion.div
        className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6"
        style={{
          x: textX,
          y: textY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h1
          className={cn(
            // The font-mono class is correct
            "font-mono text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl",
            "bg-linear-to-r from-primary via-purple-400 to-primary",
            "animate-text-shine bg-size-[200%_auto] bg-clip-text text-transparent"
          )}
        >
          Krishna Purwar
        </h1>
        <p className="mt-4 max-w-[700px] text-center text-lg text-zinc-300 md:text-xl">
          {/* This will now be powered by the typing logic */}
          {displayedTagline}
          <span className="animate-pulse">|</span>
        </p>
      </motion.div>

      {/* S-Wave SVG (UNCHANGED - it should not move with parallax) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <div
          className="relative flex w-[200%] animate-[wave-horizontal-flow_10s_linear_infinite]"
          aria-hidden="true"
        >
          <svg
            className="h-auto w-1/2"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 66.177C240 22.059 480 22.059 720 66.177C960 110.295 1200 110.295 1440 66.177V100H0V66.177Z"
              fill="hsl(var(--background))"
            ></path>
          </svg>
          <svg
            className="h-auto w-1/2"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 66.177C240 22.059 480 22.059 720 66.177C960 110.295 1200 110.295 1440 66.177V100H0V66.177Z"
              fill="hsl(var(--background))"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;