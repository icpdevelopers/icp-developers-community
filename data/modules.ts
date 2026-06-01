// "What we do" — modules. Up to 6 recommended. The first long one in the row
// gets the `tall` flag for the asymmetric Mondrian grid layout.

export type Module = {
  id: string;
  title: string;
  body: string;
  meta: string;
  span: string;
  tall?: boolean;
  detail: {
    format: string;
    cadence: string;
    audience: string;
    examples: string[];
    nextStep: string;
  };
};

export const modules: Module[] = [
  {
    id: "01",
    title: "WORKSHOPS",
    body: "Hands-on sessions led by seniors and visiting engineers. No slides without code.",
    meta: "bi-monthly",
    span: "md:col-span-4",
    detail: {
      format: "90-minute code-along sessions.",
      cadence: "Every 7th and 23rd during the semester.",
      audience: "Open to all students — beginners welcome.",
      examples: [
        "Build your first REST API in an evening",
        "From zero to deployed: Next.js + Vercel",
        "Reading other people's code: a workshop",
      ],
      nextStep:
        "Drop into the Discord #workshops channel to see this week's topic.",
    },
  },
  {
    id: "02",
    title: "InnoHack",
    body: "6-7-hour build sprints. Real problems, real teams, real demos.",
    meta: "yearly",
    span: "md:col-span-4 md:row-span-2",
    tall: true,
    detail: {
      format:
        "Theme announced on the day of the event. Teams of 3–5. Demonstration to the judges after the end of the coding time.",
      cadence: "One times a year — once per year.",
      audience: "Mixed-skill teams encouraged. We help match teammates.",
      examples: [
        "Tools for Pokhara — local civic problems",
        "Solo-shippable AI — one builder, one weekend, one product",
        "Hardware + Software — physical interactions",
      ],
      nextStep:
        "Next InnoHack 2027 is scheduled for February, 2027. Start brainstorming project ideas and teammates now!",
    },
  },
  {
    id: "03",
    title: "STUDY GROUPS",
    body: "Small cohorts going deep on one topic — Rust, ML, distributed systems.",
    meta: "8-week cohorts",
    span: "md:col-span-4",
    detail: {
      format: "Weekly meeting + problem sets. ~6 people per group.",
      cadence: "Cohorts run for 6–8 weeks. New cohorts start every quarter.",
      audience: "Students who want to commit to one topic seriously.",
      examples: [
        "Rust by the book — from ownership to async",
        "ML from scratch — no frameworks, just math",
        "Designing Data-Intensive Applications — DDIA reading group",
      ],
      nextStep: "Watch the announcement channel for the next cohort intake.",
    },
  },
  {
    id: "05",
    title: "TEAM PROJECTS",
    body: "Long-running squads shipping ambitious software with real users in Pokhara.",
    meta: "semester-long",
    span: "md:col-span-12",
    detail: {
      format:
        "Squads of 3–5. PM, design, and engineering roles. Real release schedule.",
      cadence: "One full semester per project. Demos at the end.",
      audience:
        "Members ready to commit consistently. Selection during cohort intake.",
      examples: [
        "Exam Seat Finder — A tool to find your seat for exam and RTE to make Exam seat plans easily",
      ],
      nextStep:
        "Apply during the core-team intake to be considered for a squad.",
    },
  },
];
