export type AvatarItem = {
  title: string;
  subtitle: string;
  tag: "ACTIVE" | "DRAFT";
  notes?: string;
};

export const avatars: AvatarItem[] = [
  { title: "Oracle", subtitle: "Strategy • wisdom • reflection. Truthful, ethical guardrails.", tag: "ACTIVE", notes: "#" },
  { title: "Grandmaster", subtitle: "Training • martial discipline + advisor. Ties into Tai Chi / wellbeing.", tag: "ACTIVE", notes: "#" },
  { title: "Promoter / Agent", subtitle: "Marketing director + deal agent. Pushes sales tactically.", tag: "DRAFT", notes: "#" },
  { title: "Legal Advisor", subtitle: "Legal • risk lens (non-lawyer advisory).", tag: "DRAFT", notes: "#" },
  { title: "Asset / Commercial Advisor", subtitle: "Commercial judgement, pricing posture, negotiation framing.", tag: "DRAFT", notes: "#" },
  { title: "Psychologist (Closed Bubble)", subtitle: "Wellbeing + mental performance support. Private founder bubble.", tag: "DRAFT", notes: "#" },
];
