export type EngineStage = "SETUP" | "R&D" | "EXEC" | "LAUNCH" | "DEPLOY" | "MARKETING";

export type EngineDef = {
  key: string;
  title: string;
  subtitle: string;
  stage: EngineStage;
  status: "ACTIVE" | "DRAFT" | "PRIVATE";
};

export const engines: EngineDef[] = [
  { key: "cce-architecture", title: "CCE Architecture", subtitle: "Private engine", stage: "SETUP", status: "PRIVATE" },
  { key: "cce-visual", title: "CCE Visual", subtitle: "Private engine", stage: "SETUP", status: "PRIVATE" },
  { key: "cce-audio", title: "CCE Audio", subtitle: "Private engine", stage: "SETUP", status: "PRIVATE" },
  { key: "cce-artistic", title: "CCE Artistic", subtitle: "Private engine", stage: "R&D", status: "PRIVATE" },
  { key: "cce-marketing", title: "CCE Marketing Hub", subtitle: "Founder-only marketing engine", stage: "R&D", status: "ACTIVE" },
  { key: "founder-cce-vault", title: "Founder CCE Vault", subtitle: "Founder-only document vault", stage: "EXEC", status: "DRAFT" },
  { key: "tai-chi-3d", title: "3D Tai Chi (Founder)", subtitle: "Advanced library", stage: "R&D", status: "DRAFT" },
];
