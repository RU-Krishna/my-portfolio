"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { motion, useMotionValue, useTransform } from "framer-motion";

const TAGLINES = [
  "Software Developer building modern, intelligent applications.",
  "First Year MCA Student at NIT Jamshedpur."
];

// NEW: Static tagline for mobile
const MOBILE_TAGLINE =
  "Software Developer building modern, intelligent applications.";

const Hero = () => {
  //
  // YOUR EXISTING TYPING LOGIC
  //
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(TAGLINES[0]);
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  //
  // NEW: Check for touch device to disable parallax AND typing on mobile
  //
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      setIsTouchDevice(true);
    }
  }, []);

  useEffect(() => {
    // Stop the typing effect on touch devices
    if (isTouchDevice) return;

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
    // Add isTouchDevice as a dependency
  }, [displayedTagline, isDeleting, currentTagline, taglineIndex, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;
    setCurrentTagline(TAGLINES[taglineIndex]);
  }, [taglineIndex, isTouchDevice]);
  //
  // END OF TYPING LOGIC
  //

  //
  // 3D PARALLAX LOGIC (Corrected for Centering)
  //
  const x = useMotionValue(0.5); // Start at 0.5 (center)
  const y = useMotionValue(0.5); // Start at 0.5 (center)

  // Map the 0-1 range to a pixel movement range (e.g., -15px to 15px)
  const textX = useTransform(x, [0, 1], [-30, 30]);
  const textY = useTransform(y, [0, 1], [-20, 20]);
  const gridX = useTransform(x, [0, 1], [-15, 15]);
  const gridY = useTransform(y, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get mouse position as a 0-1 ratio of the screen width/height
    x.set(e.clientX / window.innerWidth);
    y.set(e.clientY / window.innerHeight);
  };
  //
  // END OF PARALLAX LOGIC
  //

  return (
    <section
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      // Listen for mouse movement
      onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
    >
      {/* Background Grid */}
      <motion.div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full",
          "animate-grid-flow bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]",
          "bg-size-[3rem_3rem]"
        )}

        style={
          !isTouchDevice
            ? {
                x: gridX,
                y: gridY,
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Center Content */}
      <motion.div
        className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6"

        style={
          !isTouchDevice
            ? {
                x: textX,
                y: textY,
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h1
          className={cn(
            "font-mono text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl",
            "bg-linear-to-r from-primary via-purple-400 to-primary",
            "animate-text-shine bg-size-[200%_auto] bg-clip-text text-transparent",
            "text-center" // Ensures it's centered
          )}
        >
          Krishna Purwar
        </h1>

        {/*  Conditionally render the tagline
          - On mobile: Show a simple, static tagline
          - On desktop: Show the full typing animation
        */}
        {isTouchDevice ? (
          <p className="mt-4 max-w-[700px] text-center text-lg text-zinc-300 md:text-xl">
            {MOBILE_TAGLINE}
          </p>
        ) : (
          <p className="mt-4 max-w-[700px] text-center text-lg text-zinc-300 md:text-xl">
            {displayedTagline}
            <span className="animate-pulse">|</span>
          </p>
        )}
      </motion.div>

      {/* S-Wave SVG  */}
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