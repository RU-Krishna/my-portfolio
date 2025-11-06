import {
  Mail,
  LucideProps,
  Home,
  User,
  Package,
  GraduationCap,
  Phone,
  ExternalLink,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiGithub,
  SiLinkedin,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiAndroid,
  SiC,
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiPython,
  SiJavascript,
  SiIntellijidea,
  SiGit,
  SiUbuntu,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

// ============================================================================
// TYPES
// ============================================================================

export type NavLink = {
  label: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
};

export type Contact = {
  label: string;
  value: string;
  icon: IconType | React.ComponentType<LucideProps>;
  link: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkType: "github" | "live";
};

export type Education = {
  college: string;
  link: string;
  degree: string;
  timeline: string;
};

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillSet = {
  title: string;
  skills: Skill[];
};

// ============================================================================
// DATA
// ============================================================================

export const PROFILE_PICTURE = "/Krishna.jpeg";

export const ABOUT_ME =
  "I'm a developer passionate about building applications that are both intelligent and user-friendly. My journey started in mobile development with Android, and my curiosity has led me to explore the full stack, from fast backends with FastAPI to dynamic frontends with React. I'm especially excited by the potential of integrating AI, like the Gemini API, to create smarter and more powerful web experiences.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Package },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Phone },
];

export const CONTACTS: Contact[] = [
  {
    label: "Email",
    value: "krishnapurwar3@gmail.com",
    icon: Mail,
    link: "mailto:krishnapurwar3@gmail.com",
  },
  {
    label: "GitHub",
    value: "RU-Krishna",
    icon: SiGithub,
    link: "https://github.com/RU-Krishna",
  },
  {
    label: "LinkedIn",
    value: "Krishna Purwar",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/krishnapurwar03/",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "ASK AI App",
    description:
      "An AI Chat Application that answers the user queries using the Gemini API, with Firebase for Authentication and storing user chats.",
    tags: ["Android", "Gemini API", "Firebase"],
    link: "https://github.com/RU-Krishna/ASK",
    linkType: "github",
  },
  {
    title: "Pic Book",
    description:
      "A stock image and video browsing app, which downloads and stores them into phone storage directly, and we can check them on the app.",
    tags: ["Android", "Pixabay API", "Retrofit", "Exo Player"],
    link: "https://github.com/RU-Krishna/PicBook",
    linkType: "github",
  },
];

export const EDUCATION: Education[] = [
  {
    college: "NIT Jamshedpur, Jamshedpur, Jharkhand",
    link: "https://www.nitjsr.ac.in/",
    degree: "Master of Computer Applications (MCA)",
    timeline: "2025-2028 (Pursuing)",
  },
  {
    college: "Sacred Heart Degree College, Sitapur, Uttar Pradesh",
    link: "https://sacredheartsitapur.ac.in/",
    degree: "Bachelor of Computer Applications (BCA)",
    timeline: "2021-2024 (Completed)",
  },
];

export const SKILL_SETS: SkillSet[] = [
  {
    title: "Languages I have worked with",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      //
      // THIS IS THE FIX. It was "name:g:" and is now "name:"
      //
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      //
      //
      //
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "WSL (Ubuntu)", icon: SiUbuntu, color: "#E95420" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
];