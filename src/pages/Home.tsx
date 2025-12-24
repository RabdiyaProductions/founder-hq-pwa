import { empireSnapshot } from "../data/empireStatus";
import { actionList } from "../data/actionList";
import { Link } from "react-router-dom";

function statusBadge(s: string) {
  const base: React.CSSProperties = {
    border: "1px solid #666",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 800,
    whiteSpace: "nowrap",
    opacity: 0.9,
  };
  return <span style={base}>{s}</span>;
}

export default function Home() {
  const needsFounder = actionList.filter((a) => a.status === "NEEDS_FOUNDER").length;

  return (
    <>
      <h1>Founder HQ — Dashboard</h1>
      <p style={{ opacity: 0.75, marginTop: 6 }}>
        One action list. Everything becomes a usable asset (internal or public). Target:{" "}
        <b>{empireSnapshot.targetDate}</b>.
      </p>

      {/* Snapshot cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
          marginTop: 16,
        }}
      >
        <div style={{ border: "1px solid #222", borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 900, fontSize: 13, opacity: 0.7 }}>Empire Overall</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 6 }}>
            {empireSnapshot.overallPercent}%
          </div>
          <div style={{ opacity: 0.75, marginTop: 4 }}>On-track to {empireSnapshot.targetDate}</div>
        </div>

        <div style={{ border: "1px solid #222", borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 900, fontSize: 13, opacity: 0.7 }}>Live PWAs</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 6 }}>{empireSnapshot.livePwasCount}</div>
          <div style={{ opacity: 0.75, marginTop: 4 }}>Public hubs + live deployments</div>
        </div>

        <div style={{ border: "1px solid #222", borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 900, fontSize: 13, opacity: 0.7 }}>Internal Engines</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 6 }}>
            {empireSnapshot.internalEnginesCount}
          </div>
          <div style={{ opacity: 0.75, marginTop: 4 }}>Founder-only CC engines & tools</div>
        </div>

        <div style={{ border: "1px solid #222", borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 900, fontSize: 13, opacity: 0.7 }}>Needs Founder Input</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 6 }}>{needsFounder}</div>
          <div style={{ opacity: 0.75, marginTop: 4 }}>Blocked until you decide/confirm</div>
        </div>
      </div>

      {/* Quick links */}
      <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
        <Link to="/vault" style={{ border: "1px solid #222", padding: "10px 14px", borderRadius: 12, textDecoration: "none" }}>
          Open Founder Vault
        </Link>
        <Link to="/platform" style={{ border: "1px solid #222", padding: "10px 14px", borderRadius: 12, textDecoration: "none" }}>
          Open Platform PWAs
        </Link>
        <Link to="/avatars" style={{ border: "1px solid #222", padding: "10px 14px", borderRadius: 12, textDecoration: "none" }}>
          Open Founder Avatars
        </Link>
      </div>

      {/* Phases */}
      <h2 style={{ marginTop: 24 }}>Phases</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {empireSnapshot.phases.map((p) => (
          <div key={p.id} style={{ border: "1px solid #222", borderRadius: 14, padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900 }}>{p.name}</div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {statusBadge(p.status)}
                <div style={{ fontWeight: 900 }}>{p.percent}%</div>
                <div style={{ opacity: 0.75 }}>{p.eta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action list */}
      <h2 style={{ marginTop: 24 }}>Master Action List (Condensed)</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {actionList.slice(0, 10).map((a) => (
          <div key={a.id} style={{ border: "1px solid #222", borderRadius: 14, padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 900 }}>
                  {a.title}{" "}
                  <span style={{ opacity: 0.6, fontWeight: 700 }}>
                    — {a.area} / {a.phase}
                  </span>
                </div>
                {a.notes ? <div style={{ marginTop: 6, opacity: 0.75 }}>{a.notes}</div> : null}
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {statusBadge(a.status)}
                <div style={{ fontWeight: 900 }}>{a.percent}%</div>
                <div style={{ opacity: 0.75 }}>{a.eta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Parked domains */}
      <div style={{ marginTop: 22, opacity: 0.75 }}>
        Parked Founder Domains (tracked, not building now): <b>{empireSnapshot.parkedDomainsCount}</b>
      </div>
    </>
  );
}
