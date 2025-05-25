import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  java,
  spring,
  gradle,
  maven,
  go,
  redis,
  postgre,
  sql,
  docker,
  bites,
  infina,
  ozgur,
  softtech,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: web,
  }
];

const technologies = [
  {
    name: "Spring Framework",
    icon: spring,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "GO",
    icon: go,
  },
  {
    name: "Maven",
    icon: maven,
  },
  {
    name: "Gradle",
    icon: gradle,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "BİTES - Defence & Aerospace Technologies",
    icon: bites,
    iconBg: "#383E56",
    date: "December 2024 - Present",
    points: [
      "Working as part of an outsourced team on a large-scale enterprise project in collaboration with HAVELSAN",
      "Responsible for redesigning and modernizing a legacy system",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Infina Software",
    icon: infina,
    iconBg: "#E6DEDD",
    date: "July 2024 - December 2024",
    points: [
      "I've worked in a team which develops and maintains Infleks Operation which is an administrative system that meets all the operational requirements of Banks, Brokerage Houses, Investment Companies, FX companies by covering all instruments in domestic and foreign capital markets."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Ozgur Software",
    icon: ozgur,
    iconBg: "#383E56",
    date: "January 2024 - February 2024",
    points: [
      "I’ve worked in a team that is involved on building a framework that is built on Spring Boot and also using React.js for a human resources project."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Softtech",
    icon: softtech,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "An internship in a team which focus on conversion of old projects to newer versions of Java and provide maintenance for services."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
