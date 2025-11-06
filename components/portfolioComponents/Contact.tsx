"use client";

import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/lib/data";
import { Copy } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// 1. Import motion and our animations
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animation";

// This code is all correct and unchanged
const emailContact = CONTACTS.find((contact) => contact.label === "Email");
const emailAddress = emailContact ? emailContact.value : "your-email@example.com";

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="w-full py-12">
      {/* This container is kept simple. 
        The SectionTitle component will animate itself.
      */}
      <div className="container flex flex-col items-center px-4 md:px-6">
        <SectionTitle title="Get In Touch" />

        {/* 2. NEW: Stagger parent for the content *below* the title */}
        <motion.div
          className="flex flex-col items-center gap-4" // We move gap-4 here
          variants={staggerChildren(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 3. CHILD 1: The Paragraph */}
          <motion.p
            className="max-w-lg text-center text-zinc-300"
            variants={fadeInUp(0.1)}
          >
            My inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </motion.p>

          {/* 4. CHILD 2: The Email Button (wrapped in a motion.div) */}
          <motion.div variants={fadeInUp(0.1)}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-4 border-zinc-600 transition-all hover:shadow-lg hover:shadow-primary/30"
                    onClick={copyToClipboard}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {hasCopied ? "Copied!" : emailAddress}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to copy email</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;