// Core team roster. Order in this array = order on the page.

export type Member = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  /** Optional portfolio URL. When set, the initials block on the expanded
   * row becomes a link and reveals "view portfolio" on hover. */
  portfolio?: string;
  socials: { label: string; href: string }[];
};

export const members: Member[] = [
  {
    name: "Darshan Regmi",
    role: "Ex - President",
    quote:
      "I used to help run the club day-to-day. Mostly interested in Mobile App Development && frontend — happy to talk Next.js and Expo any time.",
    initials: "DR",
    portfolio: "https://darshanregmi.com.np",
    socials: [
      { label: "github", href: "https://github.com/darshan-regmi" },
      { label: "linkedin", href: "https://linkedin.com/in/darshan-regmi" },
      { label: "email", href: "mailto:darshan.regmi.a24@icp.edu.np" },
    ],
  },
  {
    name: "Sneha Giri",
    role: "Ex - Vice President",
    quote:
      "I used to work on the visual side of things and help new members find their way in. Reach out if you're not sure where to start.",
    initials: "SG",
    portfolio: "https://snehagiri.com.np",
    socials: [
      { label: "github", href: "https://github.com/meoov-1" },
      {
        label: "linkedin",
        href: "https://www.linkedin.com/in/sneha-giri-246129283/",
      },
      { label: "email", href: "mailto:sneha.giri.a24@icp.edu.np" },
    ],
  },
];

export const rosterSummary = {
  organizers: 1,
  /**
   * Derived from the roster above, not hand-maintained. This was a
   * literal `50` sitting next to an array of two, so the rendered summary
   * contradicted the grid directly beneath it.
   */
  members: members.length,
  alumni: 1,
};
