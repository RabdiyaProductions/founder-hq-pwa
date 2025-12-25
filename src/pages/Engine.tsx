import { useParams, Link } from "react-router-dom";

const engineMeta: Record<
  string,
  { title: string; status: "PRIVATE" | "INTERNAL" | "DRAFT"; purpose: string; next: string[] }
> = {
  "cce-architecture": {
    title: "CCE Architecture (private)",
    status: "PRIVATE",
    purpose: "Architecture engine workspace (private).",
    next: ["Add workspace notes", "Add export (PDF/Doc)", "Wire to Founder CCE Vault when ready"],
  },
  "cce-visual": {
    title: "CCE Visual (private)",
    status: "PRIVATE",
    purpose: "Visual engine workspace (private).",
    next: ["Add asset board", "Add export packs", "Version the templates"],
  },
  "cce-audio": {
    title: "CCE Audio (private)",
    status: "PRIVATE",
    purpose: "Audio engine workspace (private).",
    next: ["Add script blocks", "Add voice pipeline", "Export cue sheets"],
  },
  "cce-artistic": {
    title: "CCE Artistic (private)",
    status: "PRIVATE",
    purpose: "Art / 3D studio workspace (private).",
    next: ["Add gallery", "Add prompt library", "Add briefing templates"],
  },
  "cce-marketing-hub": {
    title: "CCE Marketing Hub (private tool)",
    status: "INTERNAL",
    purpose: "Internal marketing engine (not monetised).",
    next: ["Add campaign board", "Add ad batches", "Add publish checklist"],
  },
  "founder-cce-vault": {
    title: "Founder CCE Vault (in build)",
    status: "DRAFT",
    purpose: "Founder-only document vault (private).",
    next: ["Define record types", "Add provenance metadata", "Add retention rules"],
  },
  "founder-tai-chi-3d": {
    title: "3D Tai Chi (Founder)",
    status: "DRAFT",
    purpose: "Founder-only Tai Chi library and tools.",
    next: ["Add lesson index", "Add practice tracker", "Add export packs"],
  },
};

function Badge(props: { text: string }) {
  return (
    <span style={{ border: "1px solid #bbb", borderRadius: 999, padding: "3px 9px", fontSize: 11, fontWeight: 800 }}>
      {props.text}
    </span>
  );
}

export default function Engine() {
  const { engineId } = useParams();
  const meta = (engineId && engineMeta[engineId]) || null;

  if (!meta) {
    return (
      <div>
        <h1>Unknown Engine</h1>
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
          This engine route isn’t registered yet.
        </div>
        <div style={{ marginTop: 14 }}>
          <Link to="/vault">Back to Vault</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
        <h1 style={{ margin: 0 }}>{meta.title}</h1>
        <Badge text={meta.status} />
      </div>

      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>{meta.purpose}</div>

      <div style={{ marginTop: 18, border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
        <div style={{ fontWeight: 900, marginBottom: 8 }}>Next mechanical tasks</div>
        <ol style={{ margin: 0, paddingLeft: 18 }}>
          {meta.next.map((n) => (
            <li key={n} style={{ margin: "6px 0" }}>
              {n}
            </li>
          ))}
        </ol>
      </div>

      <div style={{ marginTop: 14 }}>
        <Link to="/vault">← Back to Founder Vault</Link>
      </div>
    </div>
  );
}
