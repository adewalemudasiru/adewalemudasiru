// All site content lives here. Every fact and URL below comes from the previous
// version of the site; edit this file (not the components) to update content.
import resume from "../../assets/adewalemudasiru.pdf";
import portrait from "../../assets/images/wale.webp";
import shareshopship from "../../assets/images/shareshopship.webp";
import corporatesetup from "../../assets/images/corporatesetup.webp";
import crownreformed from "../../assets/images/crownreformed.webp";
import dkhomes from "../../assets/images/dkhomes.webp";
import yusfaith from "../../assets/images/yusfaith.webp";

export const profile = {
  name: "Adewale Mudasiru",
  role: "Frontend developer",
  location: "Nigeria",
  email: "mudasiruluqmaan@gmail.com",
  phone: "+234 806 762 7878",
  resume,
  portrait,
};

export const links = {
  github: "https://github.com/adewalemudasiru",
  linkedin: "https://www.linkedin.com/in/adewale-mudasiru/",
};

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

// First entry is shown as the featured project.
export const projects = [
  {
    title: "ShareShopShip",
    summary:
      "A multi-vendor marketplace. I built the back-office interface that handles custom ordering and vendor management.",
    role: "Freelance frontend developer",
    year: "2024",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: shareshopship,
    url: "https://shareshopship.com",
  },
  {
    title: "Corporate Setup",
    summary:
      "A platform for company incorporation, registration and staff training. I redesigned the client and admin interfaces to make those workflows easier to follow.",
    role: "Volunteer frontend developer",
    year: "Ongoing",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: corporatesetup,
    url: "https://corporate-setup.app/",
  },
  {
    title: "Crown Reformed",
    summary:
      "A church website migrated from WordPress to a React, TypeScript and Tailwind CSS codebase, modernising its functionality and user experience.",
    role: "Frontend developer",
    year: "2024–2025",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: crownreformed,
    url: "https://crownreformed.org/",
  },
  {
    title: "DK Homes",
    summary:
      "A website for a real estate company working in land acquisition, property development and investment, presenting its services and property listings.",
    role: "Freelance web developer",
    year: "2026",
    stack: ["WordPress", "Elementor", "CSS"],
    image: dkhomes,
    url: "https://dkhomes.ng/",
  },
  {
    title: "Yusfaith Portfolio",
    summary:
      "A redesign of an existing personal portfolio, with a clearer UI structure, better responsiveness and an improved overall experience.",
    role: "Freelance UI/UX designer & frontend developer",
    year: "2025",
    stack: ["React", "Tailwind CSS", "UI/UX design"],
    image: yusfaith,
    url: "https://yusfaith-portfolio.vercel.app",
  },
];

export const skills = [
  {
    group: "Frontend engineering",
    items: [
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    group: "Product interfaces",
    items: [
      "Admin dashboards",
      "Dynamic form builders",
      "Real-time chat UI",
      "API integration",
    ],
  },
  {
    group: "Design collaboration",
    items: ["Figma-to-code", "UI/UX design", "Responsive layouts"],
  },
  {
    group: "Sites & tooling",
    items: ["WordPress", "Elementor", "Git", "GitHub"],
  },
];

export const experience = [
  {
    role: "Volunteer Frontend Developer",
    company: "Corporate Setup",
    period: "Ongoing",
    description:
      "Redesigned client and admin interfaces for company incorporation, registration and staff training workflows.",
  },
  {
    role: "Freelance Web Developer",
    company: "DK Homes",
    period: "2026",
    description:
      "Designed and built a WordPress website for a real estate company, giving it a professional online presence for its services and property listings.",
  },
  {
    role: "Frontend Developer",
    company: "Tecton Studio",
    period: "2025–2026",
    description:
      "Built and integrated admin dashboard interfaces from Figma designs, including a dynamic form builder, a real-time chat feature and API integrations.",
  },
  {
    role: "Freelance UI/UX Designer & Frontend Developer",
    company: "Yusfaith Portfolio",
    period: "2025",
    description:
      "Redesigned an existing personal portfolio with a modern UI structure and improved responsiveness using React and Tailwind CSS.",
  },
  {
    role: "Frontend Developer",
    company: "Crown Reformed",
    period: "2024–2025",
    description:
      "Migrated the church's website from WordPress to React, TypeScript and Tailwind CSS.",
  },
  {
    role: "Freelance Frontend Developer",
    company: "ShareShopShip",
    period: "2024",
    description:
      "Developed the back-office interface for a multi-vendor marketplace, enabling custom ordering and vendor management.",
  },
];

export const education = [
  {
    title: "Higher National Diploma, Computer Science",
    school: "Moshood Abiola Polytechnic",
    period: "2019–2021",
  },
  {
    title: "National Diploma, Computer Science",
    school: "Moshood Abiola Polytechnic",
    period: "2015–2018",
  },
  { title: "ALX Virtual Assistant", school: "Certification", period: "2024" },
];
