import { Link } from "react-router-dom";
import { founderVault } from "../data/foundervault";

function TagBadge(props: { tag: string }) {
  return (
    <span
      style={{
        border: "1px solid #bbb",
        borderRadius: 999,
        padding: "3px 9px",
        fontSize: 11,
        fontWeight: 800,
        whiteSpace: "nowrap",
      }}
    >
      {props.tag}
    </span>
  );
}

export default function Vault() {
  return (
    <div>
      <h1 style={{ margin: "0 0 10px 0" }}>Founder Vault</h1>
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 16 }}>
        Founder-only tools. No Stripe. No public links. Used for testing and operations.
      </div>

      {/* 3 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 14,
        }}
      >
        {founderVault.map((a) => (
          <Link
            key={a.title}
            to={a.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 14,
              display: "block",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "start" }}>
              <div style={{ fontWeight: 900 }}>{a.title}</div>
              <TagBadge tag={a.tag} />
            </div>

            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 8 }}>{a.subtitle}</div>
            <div style={{ fontSize: 12, opacity: 0.6, marginTop: 10 }}>Open</div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 16, fontSize: 12, opacity: 0.7 }}>
        Note: DRAFT/INTERNAL items are private Founder assets. Never published. Never merged into public PWAs.
      </div>
    </div>
  );
}
