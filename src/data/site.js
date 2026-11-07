/**
 * Site-wide copy and links. Project content lives in projects.js.
 *
 * No email address or phone number belongs anywhere in this folder: everything
 * here ships to the browser. The contact form delivers messages server-side
 * (api/contact.js), and the recipient address only exists in the server's
 * environment variables.
 */

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/jgaichet/",
  github: "https://github.com/Julinhio/",
  // To update the CV, replace public/cv/Julien-Gaichet-CV.pdf with a file of
  // the same name. Nothing else needs to change.
  cv: "/cv/Julien-Gaichet-CV.pdf",
  cvFileName: "Julien-Gaichet-CV.pdf",
};

export const HERO = {
  status: "Open to remote roles · available from November 2026",
  title: "I build the systems that operations teams run on",
  lead: "Process and automation builder. I connect APIs, webhooks and language models into internal tools people use every day, and I own them from the first sketch to production. Before that, twelve years as an English to French linguist.",
};

/** Headline figures. Each one is backed by a project page. */
export const STATS = [
  {
    value: "600+",
    label: "property inspections run through Fiche Logement",
    project: "fiche-logement",
  },
  {
    value: "40%",
    label: "of a training programme’s students signed up to the AI platform I built",
    project: "mon-equipe-ia",
  },
  {
    value: "4,400+",
    label: "coaching sessions checked against their recordings every night",
    project: "coach-pay",
  },
  {
    value: "10",
    label: "customer surveys across two brands, collected into one system",
    project: "customer-feedback",
  },
];

export const PRINCIPLES = [
  {
    title: "Build beside, switch with a rollback",
    body: "A new version runs next to the old one until it has proved itself. The switch is one change, and the way back is written before it.",
  },
  {
    title: "Done means proven in the data",
    body: "A screen that looks right is not proof. I check the database, replay the edge cases and keep the test that caught the bug.",
  },
  {
    title: "Coding agents on the team",
    body: "I write the brief and own the decisions. AI coding agents write most of the code, and a second model reviews each pull request before I merge it.",
  },
];

/**
 * What the projects run on. Framed as the tools in the systems, not as
 * programming languages Julien writes by hand: he specifies, reviews and
 * operates, and AI coding agents write most of the code.
 */
export const STACK = {
  intro:
    "The services and tools inside the systems above. I choose them, wire them together and keep them running; the custom code is written by AI coding agents from my specs.",
  groups: [
    { title: "Integrate", items: ["REST & GraphQL APIs", "Webhooks", "Monday.com", "Stripe", "Aircall", "Google Workspace APIs"] },
    { title: "Automate", items: ["Make.com (certified)","Google Sheets & Apps Script", "Scheduled jobs"] },
    { title: "AI", items: ["OpenRouter", "Claude", "Gemini", "Whisper transcription", "Model comparisons"] },
    { title: "Ship", items: ["Supabase & Postgres", "Railway", "Vercel", "GitHub", "Claude Code & Codex review"] },
  ],
};

export const INTRO = [
  "I’ve worked remotely since around 2011, close to fifteen years now. As an English to French linguist and then a quality reviewer, I worked with project managers and translators across countries and time zones, for clients such as Cathay Pacific, Radisson and AWS. Reviewing machine output at volume taught me to assume a deliverable is wrong somewhere until I’ve found where.",
  "In 2023 I taught myself JavaScript, React and automation, and started AI Flow Systems, a small agency building Make automations with language models for a few clients. Since 2025 I’ve done that work for the operations, sales and training teams of Conciergerie Cardin, as a contractor. Most projects start the same way: someone describes, often in a call or a chat message, the part of the job that eats their week. I ask until I understand the work behind the request, write down what we agreed, and keep them posted in plain words while it’s being built.",
  "Then I see it through: from the first sketch to a tool the team opens every morning, and after that the monitoring, the fixes and the handover. I presented each tool to the people using it and turned their feedback into the next updates.",
];

export const BACKGROUND = {
  languages: ["French", "English", "Thai"],
  timeline: [
    {
      period: "2025 – 2026",
      role: "Process & Automation Specialist",
      detail:
        "Conciergerie Cardin (Letahost, Invest Malin), as a contractor. Three-person innovation team; owner of each product end to end.",
    },
    {
      period: "2023 – 2024",
      role: "Founder, AI Flow Systems",
      detail:
        "Automation agency run through my company, Syntax Buddy Limited. Make scenarios with language models for a few clients: reporting, customer support, content, hiring and sales proposals. Translation work continued alongside.",
    },
    {
      period: "2013 – 2024",
      role: "EN → FR Linguist, QA Reviewer",
      detail:
        "TransPerfect, SDL, freelance. Dedicated French linguist for Cathay Pacific, Radisson and AWS; moved from translation to post-editing machine output, then to quality review.",
    },
    {
      period: "2010 – 2013",
      role: "Technical Support",
      detail: "Apple, Colt Technology.",
    },
  ],
};

export const CONTACT = {
  title: "Have a process that eats your team’s week?",
  lead: "Open to remote roles in automation, GTM engineering and internal tooling. Contract or full-time.",
};
