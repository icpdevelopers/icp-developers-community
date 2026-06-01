// Hero terminal-panel content — edit values to update the live status box.

export type StatusRow = {
  label: string;
  value: string;
  accent?: boolean;
};

export const communityStatus: {
  panelTitle: string;
  status: string;
  rows: StatusRow[];
} = {
  panelTitle: "~/community.status",
  status: "live",
  rows: [
    { label: "members", value: "50" },
    { label: "projects shipped", value: "1 · this year" },
    { label: "next build night", value: "soon" },
    { label: "core team", value: "accepting", accent: true },
  ],
};
