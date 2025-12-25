import { links } from "./Links";

export type PlatformApp = {
  title: string;
  subtitle: string;
  href: string;
  tag: "LIVE (PUBLIC)";
};

export const platformApps: PlatformApp[] = [
  { title: "BuildLogic NEC Hub", subtitle: "Live Stripe links + tools & suites", href: links.necHub, tag: "LIVE (PUBLIC)" },
  { title: "BuildLogic JCT Hub", subtitle: "JCT tools & suites (template live)", href: links.jctHub, tag: "LIVE (PUBLIC)" },
  { title: "FlowForm App", subtitle: "FlowForm public hub", href: links.flowForm, tag: "LIVE (PUBLIC)" },
  { title: "FlowForm Hub PWA", subtitle: "FlowForm hub scaffold", href: links.flowFormHub, tag: "LIVE (PUBLIC)" },
];
