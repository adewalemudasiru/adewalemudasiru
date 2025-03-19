import { Trophy, Code, Users, Infinity } from "lucide-react";
import html from "../../../assets/icons/html5.svg";
import css from "../../../assets/icons/css3.svg";
import js from "../../../assets/icons/javascript.svg";
import git from "../../../assets/icons/github.svg";
import react from "../../../assets/icons/react.svg";
import ts from "../../../assets/icons/typescript.svg";
import tailwind from "../../../assets/icons/tailwind.svg";

export const myData = {
  card: [
    {
      icon: Trophy,
      title: "6",
      subtitle: "Months of experience",
    },
    {
      icon: Code,
      title: "3",
      subtitle: "Projects",
    },
    {
      icon: Users,
      title: "2",
      subtitle: "Clients",
    },
    {
      icon: Infinity,
      title: "2",
      subtitle: "Frameworks",
    },
  ],
  experience: [
    {
      jobTitle: "Frontend Developer",
      company: "ShareShopShip",
      period: "2024",
      description:
        "Leading development of modern web applications using React and Next.js",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
  ],
  stack: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "TypeScript",
      icon: ts,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ],
};
