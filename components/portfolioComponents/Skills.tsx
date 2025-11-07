"use client"; // Required for motion components

import { SKILL_SETS, type Skill } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animation";
import { cn } from "@/lib/utils";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <SectionTitle title="My Tech Stack" />

        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={staggerChildren(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SKILL_SETS.map((set) => (
            <motion.div key={set.title} variants={fadeInUp(0.2)}>
              <h3 className="mb-4 text-xl font-semibold text-zinc-100">
                {set.title}
              </h3>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerChildren(0.1)}
              >
                {set.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillPill = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      className={cn(
        "m-1 flex items-center gap-2 rounded-full",
        "border border-zinc-700",
        "bg-zinc-800/60 px-4 py-2",
        "text-sm font-medium text-zinc-100",
        "transition-all hover:scale-[1.03]",
        "hover:shadow-lg hover:shadow-primary/30",
        "backdrop-blur-lg"
      )}
      variants={fadeInUp(0.1)}
    >
      <skill.icon
        className="h-5 w-5"
        style={{
          color: skill.color,
        }}
      />
      <span>{skill.name}</span>
    </motion.div>
  );
};

export default Skills;
