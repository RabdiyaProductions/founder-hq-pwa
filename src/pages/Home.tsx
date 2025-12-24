import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Founder HQ</h1>
      <p style={{ opacity: 0.75, marginTop: 6 }}>
        Central command for the Empire: access, oversight, and rapid navigation.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
        <Link
          to="/vault"
          style={{
            border: "1px solid #222",
            padding: "10px 14px",
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          Open Founder Vault
        </Link>

        <Link
          to="/platform"
          style={{
            border: "1px solid #222",
            padding: "10px 14px",
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          Open Platform PWAs
        </Link>
      </div>

      <div style={{ marginTop: 26, opacity: 0.7, lineHeight: 1.5 }}>
        <div><b>Phase rule:</b> Phase 2 = access + routing + stability only.</div>
        <div><b>Next:</b> finish remaining PWAs (Phase 1), then Guides + Bots (Phase 3).</div>
      </div>
    </>
  );
}
