import { Link } from "react-router-dom";
import { actionList } from "../data/actionList";

type Phase = {
  title: string;
  statusTag: "LOCKED" | "ACTIVE" | "NEXT" | "PARKED";
  pct: number;
  etaText: string;
};

const phases: Phase[] = [
  { title: "Core PWA – Mechanical Completion", statusTag: "LOCKED", pct: 95, etaText: "1 hr (optional tidy)" },
  { title: "Founder HQ + Vault Split", statusTag: "ACTIVE", pct: 75, etaText: "1–1.5 days" },
  { title: "Guides, Governance & Bot Activation", statusTag: "NEXT", pct: 20, etaText: "2–3 days" },
  { title: "Stabilise & Activate (No New Building)", statusTag: "PARKED", pct: 5, etaText: "Jan 2026 focus" },
];

function StatCard(props: { title: string; value: string; sub: string }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
      <div style={{ fontSize: 12, opacity: 0.7 }}>{props.title}</div>
      <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>{props.value}</div>
      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>{props.sub}</div>
    </div>
  );
}

function Badge(props: { text: string }) {
  return (
    <span
      style={{
        border: "1px solid #bbb",
        borderRadius: 999,
        padding: "3px 9px",
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      {props.text}
    </span>
  );
}

export default function Home() {
  return (
    <div>
      <h1 style={{ margin: "0 0 10px 0" }}>Founder HQ — Dashboard</h1>

      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 18 }}>
        One action list. Everything becomes a usable asset (internal or public). Target: 31 Dec 2025.
      </div>

      {/* TOP 4 = 4 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 14,
        }}
      >
        <StatCard title="Empire Overall" value="66%" sub="On-track to 31 Dec 2025" />
        <StatCard title="Live PWAs" value="4" sub="Public hubs + live deployments" />
        <StatCard title="Internal Engines" value="6" sub="Founder-only CCE engines & tools" />
        <StatCard title="Needs Founder Input" value="1" sub="Blocked until you decide/confirm" />
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        <Link to="/vault">
          <button>Open Founder Vault</button>
        </Link>
        <Link to="/platform">
          <button>Open Platform PWAs</button>
        </Link>
        <Link to="/avatars">
          <button>Open Founder Avatars</button>
        </Link>
      </div>

      {/* PHASES = 2 columns */}
      <h3 style={{ marginTop: 26, marginBottom: 10 }}>Phases</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 14,
        }}
      >
        {phases.map((p) => (
          <div key={p.title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontWeight: 800 }}>{p.title}</div>
              <Badge text={p.statusTag} />
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>
              <span style={{ fontWeight: 800 }}>{p.pct}%</span> • {p.etaText}
            </div>

            <div
              style={{
                height: 10,
                border: "1px solid #ddd",
                borderRadius: 999,
                marginTop: 10,
                overflow: "hidden",
              }}
            >
              <div style={{ width: `${p.pct}%`, height: "100%", background: "#111" }} />
            </div>
          </div>
        ))}
      </div>

      {/* MASTER ACTION LIST = 3 columns, numbered, mech hours only, stage + status */}
      <h3 style={{ marginTop: 26, marginBottom: 10 }}>Master Action List (Condensed)</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 14,
        }}
      >
        {actionList.map((a, i) => (
          <div key={a.title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                #{i + 1} • <b>{a.status}</b> • <b>{a.stage}</b>
              </div>
              <Badge text={`${a.mechHours} hrs`} />
            </div>

            <div style={{ fontWeight: 900, marginTop: 8 }}>{a.title}</div>
            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>{a.subtitle}</div>

            {a.owner ? (
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>Owner: {a.owner}</div>
            ) : null}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, fontSize: 12, opacity: 0.7 }}>
        Note: “mechHours” = mechanical realisation time only (clicking, wiring, deploy steps). Not thinking time.
      </div>
    </div>
  );
}
