export type EmpirePhase = {
  id: "PHASE_1" | "PHASE_2" | "PHASE_3" | "PHASE_4";
  name: string;
  percent: number;
  eta: string; // human estimate (e.g. "1–1.5 days")
  status: "LOCKED" | "ACTIVE" | "NEXT" | "PARKED";
};

export type EmpireSnapshot = {
  overallPercent: number;
  targetDate: string;
  livePwasCount: number;
  internalEnginesCount: number;
  venturesCount: number;
  itemsNeedingFounderInput: number;
  phases: EmpirePhase[];
  parkedDomainsCount: number;
};

export const empireSnapshot: EmpireSnapshot = {
  overallPercent: 66,
  targetDate: "31 Dec 2025",
  livePwasCount: 4,            // NEC, JCT, FlowForm, FlowForm Hub (adjust later)
  internalEnginesCount: 6,     // Architecture/Visual/Audio/Artistic/Marketing/Vault(in build)
  venturesCount: 4,            // BuildLogic, FlowForm, Persona&AvatarLab, Studios (adjust later)
  itemsNeedingFounderInput: 3, // adjust as you go
  parkedDomainsCount: 9,       // wellbeing, hobbies, cases, assets, apocalypse, land, senior, driving, bucket list
  phases: [
    { id: "PHASE_1", name: "Core PWAs – Mechanical Completion", percent: 98, eta: "~1 hr (optional tidy)", status: "LOCKED" },
    { id: "PHASE_2", name: "Founder HQ + Vault Split", percent: 75, eta: "1–1.5 days", status: "ACTIVE" },
    { id: "PHASE_3", name: "Guides, Governance & Bot Activation", percent: 20, eta: "2–3 days", status: "NEXT" },
    { id: "PHASE_4", name: "Stabilise & Activate (No New Building)", percent: 5, eta: "Jan 2026 focus", status: "PARKED" },
  ],
};
