"use client"; // Required for motion components

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // 1. Import motion
import { fadeInUp } from "@/lib/animation"; // 2. Import our animation

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    // 3. We wrap the h2 in a motion.div to animate it
    <motion.div
      className={cn(
        "mb-8 flex items-center justify-center gap-4",
        className
      )}
      // 4. Apply the animation props
      variants={fadeInUp(0.2)} // Use our reusable variant
      initial="hidden"
      whileInView="visible" // Animate when it enters the viewport
      viewport={{ once: true, amount: 0.5 }} // Animate once, when 50% in view
    >
      <h2
        className={cn(
          "font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        )}
      >
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;