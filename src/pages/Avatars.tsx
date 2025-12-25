import { avatars } from "../data/avatars";

function Badge(props: { text: string }) {
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
      {props.text}
    </span>
  );
}

export default function Avatars() {
  return (
    <div>
      <h1 style={{ margin: "0 0 10px 0" }}>Founder Avatars</h1>
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 16 }}>
        Founder-only advisory entities. Each is an asset. Activation is staged (text first, then voice/Zoom/call later).
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }}>
        {avatars.map((a) => (
          <div key={a.title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontWeight: 900 }}>{a.title}</div>
              <Badge text={a.tag} />
            </div>
            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 8 }}>{a.subtitle}</div>
            <div style={{ fontSize: 12, opacity: 0.6, marginTop: 10 }}>{a.notes || "#"}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, fontSize: 12, opacity: 0.7 }}>
        Next step: wire each avatar tile to a dedicated workspace (notes + summary + export), then later to bots.
      </div>
    </div>
  );
}
