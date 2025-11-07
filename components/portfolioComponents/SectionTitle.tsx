"use client"; // Required for motion components

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <motion.div
      className={cn("mb-8 flex items-center justify-center gap-4", className)}
      variants={fadeInUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
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
