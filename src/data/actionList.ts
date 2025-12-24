export type ActionStatus = "DONE" | "IN_PROGRESS" | "NEEDS_FOUNDER" | "ON_HOLD";

export type ActionItem = {
  id: string;
  phase: "PHASE_1" | "PHASE_2" | "PHASE_3" | "PHASE_4";
  area: "Founder HQ" | "CC Engines" | "Persona & Avatar Lab" | "Marketing" | "Founders Domains" | "Studios" | "BuildLogic" | "FlowForm";
  title: string;
  status: ActionStatus;
  percent: number;
  eta: string;
  notes?: string;
};

export const actionList: ActionItem[] = [
  // PHASE 2 (ACTIVE)
  {
    id: "A-001",
    phase: "PHASE_2",
    area: "Founder HQ",
    title: "Dashboard on Home (snapshot + action list + parked domains)",
    status: "IN_PROGRESS",
    percent: 60,
    eta: "Today",
  },
  {
    id: "A-002",
    phase: "PHASE_2",
    area: "Founder HQ",
    title: "Founder Avatars tab (Oracle, Grandmaster, Promoter, Legal, Asset, Psychologist)",
    status: "IN_PROGRESS",
    percent: 30,
    eta: "Today",
  },
  {
    id: "A-003",
    phase: "PHASE_2",
    area: "CC Engines",
    title: "Wire CC Engines tiles in Founder Vault (Architecture/Visual/Audio/Artistic/Marketing/Vault in build)",
    status: "NEEDS_FOUNDER",
    percent: 80,
    eta: "0.5 day",
    notes: "Confirm URLs / repos for each engine when ready.",
  },

  // PHASE 3 (NEXT)
  {
    id: "A-010",
    phase: "PHASE_3",
    area: "Persona & Avatar Lab",
    title: "Activate Persona & Avatar Lab (bots first, non-revenue)",
    status: "ON_HOLD",
    percent: 20,
    eta: "1–2 days",
  },
  {
    id: "A-011",
    phase: "PHASE_3",
    area: "Marketing",
    title: "Create master ad template + 1–2 weeks content plan (NEC/JCT/FlowForm)",
    status: "ON_HOLD",
    percent: 10,
    eta: "Parallel",
  },

  // FOUNDER ASSETS (TRACKED, PARKED)
  {
    id: "A-100",
    phase: "PHASE_4",
    area: "Founders Domains",
    title: "Founder Tai Chi Engine (3D Advanced) – add as internal asset tile",
    status: "ON_HOLD",
    percent: 10,
    eta: "Parallel / Jan",
  },
  {
    id: "A-101",
    phase: "PHASE_4",
    area: "Founders Domains",
    title: "Founder Wellbeing / Hobby / Timeout / Bucket List domains (tracked only)",
    status: "ON_HOLD",
    percent: 5,
    eta: "Later",
  },
  {
    id: "A-102",
    phase: "PHASE_4",
    area: "Founders Domains",
    title: "Founder Cases + Assets/Worth + Apocalypse Plan (vault-first structure)",
    status: "ON_HOLD",
    percent: 5,
    eta: "Later",
  },
];
