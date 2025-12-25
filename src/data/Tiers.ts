export type Tier = "BASIC" | "STANDARD" | "PREMIUM" | "EXECUTIVE";

export const tierOrder: Tier[] = ["BASIC", "STANDARD", "PREMIUM", "EXECUTIVE"];

export function tierAtLeast(current: Tier, required: Tier) {
  return tierOrder.indexOf(current) >= tierOrder.indexOf(required);
}

export type FeatureKey =
  | "EXPORT_PDF"
  | "SAVE_PROJECTS"
  | "RISK_ENGINE"
  | "CLAUSE_SUGGESTIONS"
  | "NEGOTIATION_ASSIST"
  | "TEAM_MODE";

export const featureMinTier: Record<FeatureKey, Tier> = {
  EXPORT_PDF: "STANDARD",
  SAVE_PROJECTS: "STANDARD",
  RISK_ENGINE: "PREMIUM",
  CLAUSE_SUGGESTIONS: "PREMIUM",
  NEGOTIATION_ASSIST: "EXECUTIVE",
  TEAM_MODE: "EXECUTIVE",
};
