import {
  House,
  User,
  Trophy,
  Code,
  Users,
  Infinity,
  GraduationCapIcon,
  CalendarRange as Calender,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import js from "../../assets/icons/javascript.svg";
import git from "../../assets/icons/github.svg";
import github from "../../assets/icons/git.svg";
import react from "../../assets/icons/react.svg";
import ts from "../../assets/icons/typescript.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import youtube from "../../assets/icons/youtube.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import externallink from "../../assets/icons/external-link.svg";

export const myData = {
  navItems: [
    {
      id: 1,
      icon: House,
      path: "/",
    },
    {
      id: 2,
      icon: User,
      path: "/about",
    },
    {
      id: 3,
      icon: Code,
      path: "/projects",
    },
    {
      id: 4,
      icon: Mail,
      path: "/contact",
    },
  ],
  social: [
    {
      name: "github",
      link: "https://github.com",
      logo: github,
    },
    {
      name: "linkedin",
      link: "https://linkedin.com",
      logo: linkedin,
    },
    {
      name: "youtube",
      link: "https://youtube.com",
      logo: youtube,
    },
  ],
  card: [
    {
      id: 1,
      icon: Trophy,
      title: "6",
      subtitle: "Months of experience",
    },
    {
      id: 2,
      icon: Code,
      title: "3",
      subtitle: "Projects",
    },
    {
      id: 3,
      icon: Users,
      title: "2",
      subtitle: "Clients",
    },
    {
      id: 4,
      icon: Infinity,
      title: "2",
      subtitle: "Frameworks",
    },
  ],
  experience: [
    {
      id: 1,
      icon: Calender,
      jobTitle: "Frontend Developer",
      company: "ShareShopShip",
      period: "2024",
      description:
        "Leading development of modern web applications using React and Next.js",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      icon: Calender,
      jobTitle: "Frontend Developer",
      company: "Freelance",
      period: "2024",
      description:
        "Built a custom websites that lets Nigerians to find the current average price of farm produce using React, TypeScript, CSS and Tailwind CSS",
      technologies: ["React", "Typescript", "CSS", "Tailwind CSS"],
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
  education: [
    {
      id: 1,
      icon: GraduationCapIcon,
      certificate: "Higher National Diploma",
      course: "Computer Science",
      school: "Moshood Abiola Polytechnic",
      period: "2019 - 2021",
    },
    {
      id: 2,
      icon: GraduationCapIcon,
      certificate: "National Diploma",
      course: "Computer Science",
      school: "Moshood Abiola Polytechnic",
      period: "2015 - 2018",
    },
  ],
  badges: [
    {
      icon: GraduationCapIcon,
      title: "ALX Virtual Assistant",
      subtitle: "2024",
    },
  ],
  projects: [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",

      title: "Chat App",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quas.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      info: [
        {
          icon: externallink,
          link: "https://github.com",
        },
        {
          icon: github,
          link: "https://github.com",
        },
      ],
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
      title: "Ecommerce App",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quas.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      info: [
        {
          icon: externallink,
          link: "https://github.com",
        },
        {
          icon: github,
          link: "https://github.com",
        },
      ],
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
      title: "My Portfolio",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quas.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      info: [
        {
          icon: externallink,
          link: "https://github.com",
        },
        {
          icon: github,
          link: "https://github.com",
        },
      ],
    },
  ],
  contact: [
    {
      icon: Mail,
      name: "Email",
      value: "mudasiruluqmaan@gmail.com",
    },
    {
      icon: MapPin,
      name: "Location",
      value: "Nigeria",
    },
    {
      icon: Phone,
      name: "Phone",
      value: "08067627878",
    },
    {
      icon: Clock,
      name: "Office Hours",
      value: "Mon - Fri",
    },
  ],
};
