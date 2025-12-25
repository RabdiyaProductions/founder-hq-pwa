import { Link, useParams } from "react-router-dom";
import { engines } from "../data/engineRegistry";

function pill(text: string) {
  return (
    <span
      style={{
        border: "1px solid #111",
        borderRadius: 999,
        padding: "3px 10px",
        fontSize: 12,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

export default function Engine() {
  const { key } = useParams<{ key: string }>();
  const selected = key ? engines.find((e) => e.key === key) : null;

  if (!key) {
    return (
      <>
        <h1>Engine Registry</h1>
        <p style={{ opacity: 0.75, marginTop: 6 }}>
          Founder-only engines. Not public. Not monetised. Used for building + ops.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 12,
            marginTop: 16,
          }}
        >
          {engines.map((e) => (
            <div
              key={e.key}
              style={{
                border: "1px solid #111",
                borderRadius: 12,
                padding: 12,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 120,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontWeight: 800 }}>{e.title}</div>
                {pill(e.status)}
              </div>

              <div style={{ fontSize: 13, opacity: 0.8 }}>{e.subtitle}</div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
                {pill(`Stage: ${e.stage}`)}
                <Link to={`/engine/${e.key}`} style={{ fontSize: 13 }}>
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <Link to="/vault" style={{ fontSize: 13 }}>
            Back to Vault
          </Link>
        </div>
      </>
    );
  }

  if (!selected) {
    return (
      <>
        <h1>Unknown Engine</h1>
        <p style={{ opacity: 0.75, marginTop: 6 }}>
          This engine route isn’t registered yet.
        </p>
        <div style={{ marginTop: 12 }}>
          <Link to="/engine" style={{ fontSize: 13 }}>
            Back to Engine Registry
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <h1 style={{ margin: 0 }}>{selected.title}</h1>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {pill(selected.status)}
          {pill(`Stage: ${selected.stage}`)}
        </div>
      </div>

      <p style={{ opacity: 0.75, marginTop: 10 }}>{selected.subtitle}</p>

      <div
        style={{
          marginTop: 16,
          border: "1px solid #111",
          borderRadius: 12,
          padding: 12,
          fontSize: 13,
          opacity: 0.9,
        }}
      >
        Placeholder workspace. Next step: attach this engine to its dedicated internal app scaffold
        (tier toggles + feature flags + export hooks).
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link to="/engine" style={{ fontSize: 13 }}>
          Back to Engine Registry
        </Link>
        <Link to="/vault" style={{ fontSize: 13 }}>
          Back to Vault
        </Link>
      </div>
    </>
  );
}
