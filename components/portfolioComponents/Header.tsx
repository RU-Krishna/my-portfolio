"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "education",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // Activates when section is in middle 40%
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        "flex items-center justify-center gap-4 px-6 py-3",
        "rounded-full border border-zinc-700",
        /*
          UPDATED: Made the blur stronger and background more transparent
        */
        "bg-zinc-950/50 backdrop-blur-lg"
      )}
    >
      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              activeSection === item.id ? "text-primary" : "text-zinc-400"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;