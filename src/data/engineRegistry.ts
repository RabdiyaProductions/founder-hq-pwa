// src/data/engineRegistry.ts

export type EngineStage = "SETUP" | "R&D" | "EXEC" | "LIVE";
export type EnginePrivacy = "PRIVATE" | "INTERNAL" | "PUBLIC";

export type EngineDef = {
  id: string;
  title: string;
  subtitle: string;
  stage: EngineStage;
  privacy: EnginePrivacy;
};

export const engineRegistry: EngineDef[] = [
  {
    id: "cce-architecture",
    title: "CCE Architecture",
    subtitle: "Private engine",
    stage: "SETUP",
    privacy: "PRIVATE",
  },
  {
    id: "cce-visual",
    title: "CCE Visual",
    subtitle: "Private engine",
    stage: "SETUP",
    privacy: "PRIVATE",
  },
  {
    id: "cce-audio",
    title: "CCE Audio",
    subtitle: "Private engine",
    stage: "SETUP",
    privacy: "PRIVATE",
  },
  {
    id: "cce-artistic",
    title: "CCE Artistic",
    subtitle: "Private engine",
    stage: "R&D",
    privacy: "PRIVATE",
  },
  {
    id: "cce-marketing",
    title: "CCE Marketing Hub",
    subtitle: "Founder-only marketing engine",
    stage: "EXEC",
    privacy: "INTERNAL",
  },
  {
    id: "founder-cce-vault",
    title: "Founder CCE Vault",
    subtitle: "Founder-only document vault",
    stage: "EXEC",
    privacy: "INTERNAL",
  },
  {
    id: "3d-tai-chi",
    title: "3D Tai Chi (Founder)",
    subtitle: "Advanced library",
    stage: "R&D",
    privacy: "PRIVATE",
  },
];
