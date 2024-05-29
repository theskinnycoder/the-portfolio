import {
  GitHubIcon,
  LinkedInIcon,
  NpmIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Rahul SriRam",
  initials: "RS",
  location: "Hyderabad, Telangana, India",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail and an eye to the user experience and design.",
  summary: (
    <div className="space-y-1">
      <p>
        As a Full Stack Engineer, I have successfully built multiple features
        from A to Z. I lead teams effectively, ensuring an environment where
        people can do their best work. Currently, I work mostly with TypeScript,
        React, Node.js, and GraphQL.
      </p>
      <p>
        I have over 2 years of experience in working with design systems and
        component libraries. I am passionate about building products with extra
        attention to detail and a focus on the user experience.
      </p>
      <p>
        I am also an open source library maintainer, and is leading a team of 8
        across multiple domains at work, tackling complex design and
        architecture problems one after the other.
      </p>
    </div>
  ),
  avatarUrl: "/me.png",
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
      {
        name: "YouTube",
        url: "https://www.youtube.com/c/RahulSriRamDev",
        icon: YouTubeIcon,
      },
    ],
  },
  education: [
    {
      school: "GVPCE(A)",
      degree: "Bachelor's Degree in Computer Science & Engineering",
      start: "2018",
      end: "2022",
      details: (
        <ul className="list-inside list-disc space-y-1 text-pretty text-left">
          <li>
            Started a{" "}
            <a
              href="https://www.youtube.com/c/RahulSriRamDev"
              className="mx-px text-white underline-offset-2 transition-all duration-300 after:content-['_↗'] hover:underline"
            >
              YouTube channel
            </a>{" "}
            for software development tutorials, live-streamed the whole
            development of final year college project.
          </li>
        </ul>
      ),
    },
  ],
  work: [
    {
      company: "Apxor",
      link: "https://apxor.com",
      badges: ["Current"],
      title: "Software Engineer",
      logo: "/apxor-logo.svg",
      start: "Dec 2021",
      end: "Current",
      description: (
        <ul className="list-inside list-disc space-y-1 text-pretty text-left">
          <li>
            Contributor and maintainer of the customer-facing dashboard built
            with React.js, and TypeScript, which is rich with features like a
            WYSIWYG editor, WebSocket connections, data-heavy analytics and
            charts etc.
          </li>
          <li>
            Leading the JavaScript teams, and mainainer of npm packages for Web
            SDK, React Native SDK etc.
          </li>
          <li>
            Setup CI/CD pipelines, and took care of release management for SDK
            releases, and the frontend dashboard.
          </li>
          <li>
            Implented E2E pipelines from scratch using Playwright and uploaded
            the coverage report to S3 for the dashboard and the SDKs.
          </li>
          <li>Migrated a legacy create-react-app based project to Vite.js.</li>
          <li>
            Integrated React-Query and made the network calls more modular and
            performance-optimized.
          </li>
          <li>
            Created an in-house component library, added Storybook integration
            for the design system.
          </li>
          <li>
            Built a custom and performant data-grid component to handle
            extensive updates in table.
          </li>
          <li>
            Implemented password-less login for the dashboard using device
            credentials and the Web Authentication API.
          </li>
          <li>
            Built a performant drag and drop digital nudge simulator that
            recursively parses a huge JSON configuration and renders nudges like
            Tooltips, Coachmarks, Badges, Surveys etc.
          </li>
          <li>
            Wrote a linter and language parser for a custom dynamic text feature
            in the digital nudges.
          </li>
        </ul>
      ),
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
  interests: (
    <ul className="list-inside list-disc space-y-1 text-pretty text-left">
      <li>
        Strong in the JavaScript ecosystem :{" "}
        <span className="text-white">
          Node.js, Next.js, React.js, browsers, extensions, npm packages, build
          tools, monorepos
        </span>{" "}
        etc.
      </li>
      <li>
        Well-versed with API development (
        <span className="text-white">Node.js, Python or Golang</span>) with
        features like{" "}
        <span className="text-white">
          features like RBAC, Socket connections, secure authentication,
          concurrency, cost management, scale and load balancing features like{" "}
        </span>
        .
      </li>
      <li>
        Ability to work independently and as part of a team. Good communication
        skills.
      </li>
      <li>
        Involve in the <span className="text-white">product development</span>{" "}
        lifecycle, understand business and sales requirements, and be an
        important head in decision making.
      </li>
      <li>
        Special interest toward{" "}
        <span className="text-white">
          rich design, performance optimisations, SEO optimisation, and code
          quality and maintainability
        </span>{" "}
        in frontend applications.
      </li>
      <li>
        I am a devtools maniac and continuously try to upgrade the{" "}
        <span className="text-white">developer experience</span> for my teams.
      </li>
      <li>
        A keen interest toward exploring{" "}
        <span className="text-white">new JavaScript frameworks</span>, being
        relevant and up to date with the ecosystem and community.
      </li>
      <li>
        Very good with{" "}
        <span className="text-white">
          system design, design patterns, and design systems 😛
        </span>
        .
      </li>
    </ul>
  ),
  projects: [
    {
      title: "Prince VA",
      techStack: [
        "Freelance",
        "TypeScript",
        "Next.js",
        "Sanity",
        "TailwindCSS",
        "Music Portfolio",
      ],
      description: "A personal portfolio website for Prince VA (Music Creator)",
      logo: "/prince-va-logo.png",
      link: {
        href: "https://prince-va.com/",
      },
    },
    {
      title: "White Ink Capital",
      techStack: [
        "Freelance",
        "TypeScript",
        "Next.js",
        "Sanity",
        "TailwindCSS",
        "Framer Motion",
        "Marketing Website",
      ],
      description: "WIC is an investment management firm",
      logo: "/wic-logo.png",
      link: {
        href: "https://whiteinkcapital.com",
      },
    },
    {
      title: "Rangu",
      techStack: [
        "Open Source",
        "TypeScript",
        "Vite.js",
        "React",
        "TailwindCSS",
        "a11y",
      ],
      icon: NpmIcon,
      description:
        "An accessible, keyboard-navigatable, customizable React.js compound color picker component",
      link: {
        href: "https://github.com/theskinnycoder/rangu",
      },
    },
    {
      title: "Thriving Quotient",
      techStack: [
        "Freelance",
        "TypeScript",
        "Next.js",
        "Sanity",
        "TailwindCSS",
        "React 19",
        "Framer Motion",
      ],
      description:
        "Thriving Quotient is a mental health & transformation coaching platform",
      logo: "/tq-logo.png",
      link: {
        href: "https://thrivingquotient.com",
      },
    },
    {
      title: "Calendar Sync",
      techStack: [
        "Open Source",
        "TypeScript",
        "Vite.js",
        "React",
        "TailwindCSS",
        "Monorepo",
        "TurboRepo",
      ],
      icon: NpmIcon,
      description:
        "A compound component for React.js, which has an Add to Calendar button for all major calendars like Google, Apple, Outlook, Yahoo etc.",
      link: {
        href: "https://github.com/theskinnycoder/calendar-sync",
      },
    },
    {
      title: "Zshxn",
      techStack: [
        "Freelance",
        "TypeScript",
        "Next.js",
        "Sanity",
        "TailwindCSS",
        "Music Portfolio",
        "Framer Motion",
      ],
      description:
        "The music portfolio of Zshxn, a music producer and artist from Dubai",
      logo: "/zshxn-logo.png",
      link: {
        href: "https://zshxn.com",
      },
    },
  ],
} as const;
