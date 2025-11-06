"use client"; // Required for motion components

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS, type Project } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // 1. Import motion
import { fadeInUp, staggerChildren } from "@/lib/animation"; // 2. Import our animations

const ProjectCard = ({ project }: { project: Project }) => {
  // This component's code doesn't need to change,
  // as we will wrap it in the map function below.
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border-zinc-700",
        "bg-zinc-800/60 backdrop-blur-lg shadow-lg shadow-primary/10",
        "transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
      )}
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <p className="text-zinc-300">{project.description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-zinc-700 text-zinc-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Button asChild variant="outline" className="border-zinc-600">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {project.linkType === "github" ? (
              <>
                <SiGithub size={16} />
                View on GitHub
              </>
            ) : (
              <>
                <ExternalLink size={16} />
                View Live Site
              </>
            )}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <SectionTitle title="Projects" />
        {/* 3. This is the PARENT for staggering the cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          // 4. Apply the stagger parent animation
          variants={staggerChildren(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project) => (
            // 5. This is the CHILD (the card) that fades in
            <motion.div key={project.title} variants={fadeInUp(0.1)}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;