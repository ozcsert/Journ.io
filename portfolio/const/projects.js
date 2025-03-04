// import { Icon } from "astro-icon/components";

export const studies = [
  {
    title: "Técnico en desarrollo de software",
    corporation: "SENA - Montería (Córdoba) ",
    date: "02/2019 – 12/2019",
  },
  {
    title: "Desarrollador Front-end React Js",
    corporation: "Alura Latam - Remoto",
    date: "04/2023 – 09/2023",
  },
  {
    title: "Curso profesional de React Js",
    corporation: "Código facilito - Remoto",
    date: "04/2023 – 04/2023",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  IconHookForm: "reactHook",
  webRtc: "webRtc",

  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "ReactHookForm",
    icon: IconKeys.IconHookForm,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "Styled Components",
    icon: IconKeys.styled,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "Radix UI",
    icon: IconKeys.radix,
  },

  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },
  {
    title: "Zustand",
    icon: IconKeys.zustand,
  },

  {
    title: "React Hook Form",
    icon: IconKeys.shadcn,
  },
  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
  {
    title: "WebRtc",
    icon: IconKeys.webRtc,
  },
];

export const projects = [
  {
    img: "../../../../public/projects/furniro.png",
    title: "Furniro",
    link: "https://furniro-archis.netlify.app/",
    github: "https://github.com/ozcsert/Furniro",
    description: `E-commerce solution, developed within a team, from figma to a dynamic web application.`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.sass,
      },
    ],
  },
  {
    img: "../../../../public/projects/morent.png",
    title: "Morent Car Rental",
    github: "https://github.com/ozcsert/Morent",

    link: "https://ecommerce-stripe-763m.vercel.app/",
    description: `Car Rental website with deep api filtering, creative theming, form validation `,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.shadcn,
      },
    ],
  },
  {
    img: "../../../../public/projects/dashes.jpg",
    title: "Dashes App [WORK IN PROGRESS]",

    github: "https://github.com/ozcsert/Dashes",
    description: `Real Time Collaboration tool with webcam and canvas sharing. Utilizes peer.js to simplify webrtc implementation. `,
    technologies: [
      {
        icon: IconKeys.webRtc,
      },
      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.typeScript,
      },
    ],
  },
];
