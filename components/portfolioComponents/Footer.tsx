"use client"; //For Framer motion.

import { CONTACTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-700/50 py-8">
      <motion.div
        className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6"
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        
        {/** Added Dynamic Copyright Content(Year changes) */}
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Krishna Purwar. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {CONTACTS.map((link) => {
          
            return (
              <Button
                key={link.label}
                asChild
                variant="outline"
                size="icon"
                className="border-zinc-600 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            );
          })}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;