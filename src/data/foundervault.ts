import { links } from "./Links";

export type VaultItem = {
  title: string;
  subtitle: string;
  href: string;
  tag: "PRIVATE" | "INTERNAL" | "DRAFT";
};

export const founderVault: VaultItem[] = [
  { title: "CCE Architecture (private)", subtitle: "Private engine", href: links.cceArchitecture, tag: "PRIVATE" },
  { title: "CCE Visual (private)", subtitle: "Private engine", href: links.cceVisual, tag: "PRIVATE" },
  { title: "CCE Audio (private)", subtitle: "Private engine", href: links.cceAudio, tag: "PRIVATE" },
  { title: "CCE Artistic (private)", subtitle: "Private engine", href: links.cceArtistic, tag: "PRIVATE" },

  { title: "CCE Marketing Hub (private tool)", subtitle: "Tool (not monetised)", href: links.cceMarketingHub, tag: "INTERNAL" },

  { title: "Founder CCE Vault (in build)", subtitle: "Founder-only document vault", href: links.founderCCEVault, tag: "DRAFT" },
  { title: "3D Tai Chi (Founder)", subtitle: "Advanced Tai Chi library", href: links.founderTaiChi3D, tag: "DRAFT" },
];
