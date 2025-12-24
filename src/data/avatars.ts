export type Avatar = {
  id: string;
  name: string;
  role: string;
  mode: "Strategy" | "Training" | "Marketing" | "Legal" | "Commercial" | "Wellbeing";
  access: "FOUNDER_ONLY";
  tag: "ACTIVE" | "DRAFT";
  notes?: string;
  href?: string; // later: link to a specific chat route or external page
};

export const founderAvatars: Avatar[] = [
  {
    id: "oracle",
    name: "Oracle",
    role: "Strategy, wisdom, reflection. Truthful, ethical guardrails.",
    mode: "Strategy",
    access: "FOUNDER_ONLY",
    tag: "ACTIVE",
  },
  {
    id: "grandmaster",
    name: "Grandmaster",
    role: "Martial discipline + training advisor. Ties into Tai Chi / wellbeing assets.",
    mode: "Training",
    access: "FOUNDER_ONLY",
    tag: "ACTIVE",
  },
  {
    id: "promoter",
    name: "Promoter / Agent",
    role: "Marketing director + deal agent. Promotes ventures, books opportunities, pushes sales tactically.",
    mode: "Marketing",
    access: "FOUNDER_ONLY",
    tag: "DRAFT",
  },
  {
    id: "legal",
    name: "Legal Advisor",
    role: "Legal triage + risk lens (non-lawyer; advisory).",
    mode: "Legal",
    access: "FOUNDER_ONLY",
    tag: "DRAFT",
  },
  {
    id: "asset",
    name: "Asset / Commercial Advisor",
    role: "Commercial judgement, pricing posture, negotiation framing.",
    mode: "Commercial",
    access: "FOUNDER_ONLY",
    tag: "DRAFT",
  },
  {
    id: "psych",
    name: "Psychologist (Closed Bubble)",
    role: "Wellbeing + mental performance support. Private founder bubble.",
    mode: "Wellbeing",
    access: "FOUNDER_ONLY",
    tag: "DRAFT",
  },
];
