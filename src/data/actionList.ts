export type ActionStage = "SETUP" | "R&D" | "EXEC" | "LAUNCH" | "DEPLOY" | "MARKETING";
export type ActionStatus = "IN_PROGRESS" | "ON_HOLD" | "NEEDS_FOUNDER" | "PARKED" | "DONE";

export type ActionItem = {
  title: string;
  subtitle: string;
  status: ActionStatus;
  stage: ActionStage;
  mechHours: number; // mechanical realisation time only
  owner?: string;
};

export const actionList: ActionItem[] = [
  {
    title: "Dashboard and Home (snapshot + action list + parked domain)",
    subtitle: "Founder HQ / PHASE 2",
    status: "IN_PROGRESS",
    stage: "EXEC",
    mechHours: 1.0,
    owner: "System",
  },
  {
    title: "Founder Avatars tab (Oracle, Grandmaster, Promoter, Legal, Asset, Psychologist)",
    subtitle: "Founder HQ / PHASE 2",
    status: "IN_PROGRESS",
    stage: "EXEC",
    mechHours: 0.75,
    owner: "System",
  },
  {
    title: "Wire CCE engines in Founder Vault (Architecture/Visual/Audio/Artistic/Marketing/Vault in build)",
    subtitle: "CC Engines / PHASE 2",
    status: "IN_PROGRESS",
    stage: "EXEC",
    mechHours: 1.5,
    owner: "System",
  },
  {
    title: "Activate Persona & Avatar Lab (bots first, non-revenue)",
    subtitle: "Persona & Avatar Lab / PHASE 3",
    status: "ON_HOLD",
    stage: "R&D",
    mechHours: 2.0,
    owner: "Founder",
  },
  {
    title: "Create master ad template + 1–2 weeks content plan (NEC/JCT/FlowForm)",
    subtitle: "Marketing / PHASE 3",
    status: "ON_HOLD",
    stage: "MARKETING",
    mechHours: 3.0,
    owner: "Founder",
  },
  {
    title: "Founder Tai Chi Engine (3D Advanced) – add as internal asset tile",
    subtitle: "Founders Domains / PHASE 4",
    status: "ON_HOLD",
    stage: "EXEC",
    mechHours: 2.0,
    owner: "Founder",
  },
];
