//icons
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
import { LuGithub, LuLinkedin, LuYoutube } from "react-icons/lu";
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

//images
import shareshopship from "../../assets/images/shareshopship.jpg";
import corperatesetup from "../../assets/images/corperatesetup.png";
import crownreformed from "../../assets/images/crownreformed.png";

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
      name: LuGithub,
      link: "https://github.com/adewalemudasiru",
      logo: github,
    },
    {
      name: LuLinkedin,
      link: "https://www.linkedin.com/in/adewale-mudasiru/",
      logo: linkedin,
    },
    {
      name: LuYoutube,
      link: "https://www.youtube.com/@thetechsbyte",
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
      jobTitle: "Volunteer Frontend Developer",
      company: "Corperate Setup",
      period: "Ongoing",
      description:
        "Redesigned client and admin interfaces, enhancing user experience and streamlining company incorporation, registration, and staff training workflows. ",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: 2,
      icon: Calender,
      jobTitle: "Frontend Developer",
      company: "Crown Reformed",
      period: "2024-2025",
      description:
        "Migrating church website from WordPress to React, TypeScript, and Tailwind CSS, modernizing functionality and user experience.",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: 3,
      icon: Calender,
      jobTitle: "Freelance Frontend Developer",
      company: "ShareShopShip",
      period: "2024",
      description:
        "Developed back office interface using React, TypeScript, and Tailwind CSS, enabling custom ordering and vendor management capabilities.",
      technologies: ["React", "TypeScript", "Tailwind"],
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
      name: "Tailwind",
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
      image: shareshopship,

      title: "ShareShopShip",
      description: "A multi-Vendor marketplace",
      stack: ["React", "TypeScript", "Tailwind"],
      info: [
        {
          icon: externallink,
          link: "https://shareshopship.com",
        },
        // {
        //   icon: github,
        //   link: "https://github.com",
        // },
      ],
    },
    {
      image: corperatesetup,
      title: "Corperate Setup",
      description: "Redesigned client and admin interfaces ",
      stack: ["React", "TypeScript", "javacript", "Tailwind"],
      info: [
        {
          icon: externallink,
          link: "https://corporate-setup.app/",
        },
        // {
        //   icon: github,
        //   link: "https://github.com",
        // },
      ],
    },
    {
      image: crownreformed,
      title: "Crown Reformed",
      description:
        "WordPress to React Migration, modernizing functionality and user experience",
      stack: ["React", "TypeScript", "Tailwind"],
      info: [
        {
          icon: externallink,
          link: "https://crownreformed.org/",
        },
        // {
        //   icon: github,
        //   link: "https://github.com",
        // },
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
      value: "+234 806 762 7878",
    },
    {
      icon: Clock,
      name: "Office Hours",
      value: "Mon - Fri",
    },
  ],
  footer: [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ],
};
