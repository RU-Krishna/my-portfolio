"use client"; // Required for motion components

import { ABOUT_ME, PROFILE_PICTURE } from "@/lib/data";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion"; 
import { fadeInUp, staggerChildren } from "@/lib/animation"; 

const About = () => {
  return (
    <section id="about" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <SectionTitle title="About Me" />

        {/*PARENT container for staggering */}
        <motion.div
          className="grid items-center gap-8 md:grid-cols-2 lg:gap-12"
          // Apply the stagger parent animation
          variants={staggerChildren(0.3)} // Stagger children by 0.3s
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Child */}
          <motion.div
            className="relative mx-auto h-64 w-64 overflow-hidden rounded-full shadow-lg shadow-primary/20 md:h-80 md:w-80"
            variants={fadeInUp(0.1)} // This will be the first child to animate
          >
            <Image
              src={PROFILE_PICTURE}
              alt="Krishna Purwar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>

          {/* Text Content Child */}
          <motion.div
            className="space-y-4"
            variants={fadeInUp(0.3)} // This will animate second
          >
            <p className="max-w-lg text-lg text-zinc-300 md:text-xl">
              {ABOUT_ME}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;