import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ConsultlyLogo, MonitoLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Rahul SriRam",
  initials: "RS",
  location: "Hyderabad, Telangana, India",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully built multiple features from A to Z. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 2 years of experience in working with design systems and component libraries. I am passionate about building products with extra attention to detail and a focus on the user experience.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64031854?v=4",
  contact: {
    email: "hi@rahulsriram.dev",
    tel: "+91 7670885993",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/theskinnycoder",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-sriram-50a519173/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/rahulsriramdev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "GVPCE(A)",
      degree: "Bachelor's Degree in Computer Science & Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Apxor",
      link: "https://apxor.com",
      badges: ["Full Time"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "Dec 2021",
      end: "Current",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Golang",
    "Design Systems",
    "Component Libraries",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;
