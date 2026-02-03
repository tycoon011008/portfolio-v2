import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/1.png",
      "/images/projects/2.png",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor.",
    sourceCodeHref: "https://github.com/tycoon011008/jsontree",
    liveWebsiteHref: "https://codeparticle.com/",
  },
  {
    name: "Web app",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/3.png",
      "/images/projects/4.png",
      "/images/projects/5.png",
    ],
    description:
      "At SOFTWIN, we’re dedicated experts in comprehensive content solutions. With a rich history of delivering top-tier services, choosing SOFTWIN means choosing excellence. ",
    sourceCodeHref: "https://github.com/tycoon011008/kanban",
    liveWebsiteHref: "https://www.softwin.com/",
  },
  {
    name: "OLX Global",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/6.png",
      "/images/projects/7.png",
      "/images/projects/8.png",
      "/images/projects/9.png",
      "/images/projects/10.png",
    ],
    description:
      "Implemented unit and end to end tests to cover 63% of the entire application.",
    sourceCodeHref: "https://github.com/tycoon011008/ManyGames",
    liveWebsiteHref: "https://www.olxgroup.com/",
  },
];
