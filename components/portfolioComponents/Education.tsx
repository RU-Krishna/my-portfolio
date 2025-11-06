"use client"; // 1. Add "use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EDUCATION, type Education as EducationType } from "@/lib/data";
import { Building, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // 2. Import motion
import { fadeInUp, staggerChildren } from "@/lib/animation"; // 3. Import our animations

const EducationCard = ({ edu }: { edu: EducationType }) => {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border-zinc-700",
        "bg-zinc-800/60 backdrop-blur-lg shadow-lg shadow-primary/10",
        "transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
          <Badge variant="secondary" className="bg-zinc-700 text-zinc-200">
            {edu.timeline}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <Building size={16} />
          <span>{edu.college}</span>
        </div>
      </CardHeader>
      <CardContent className="grow">
        <p className="text-zinc-300">{edu.degree}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="border-zinc-600">
          <a
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink size={16} />
            Visit College Website
          </a>
        </Button>
      </CardFooter>
      {/* 4. TYPO FIX: Was </CrdFooter> */}
    </Card>
  );
};

const Education = () => {
  return (
    <section id="education" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <SectionTitle title="Education" />
        {/* 5. This is the PARENT for staggering the cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          // 6. Apply the stagger parent animation
          variants={staggerChildren(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {EDUCATION.map((edu) => (
            // 7. This is the CHILD (the card) that fades in
            <motion.div key={edu.degree} variants={fadeInUp(0.1)}>
              <EducationCard edu={edu} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;