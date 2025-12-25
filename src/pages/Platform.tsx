import { platformApps } from "../data/platformApps";

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

export default function Platform() {
  return (
    <div>
      <h1 style={{ margin: "0 0 10px 0" }}>Platform PWAs</h1>
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 16 }}>
        Live public PWAs and landing platforms (Founder overview). Public launches stay as launched.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }}>
        {platformApps.map((a) => (
          <div key={a.title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontWeight: 900 }}>{a.title}</div>
              <Badge text={a.tag} />
            </div>

            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 8 }}>{a.subtitle}</div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.85, wordBreak: "break-word" }}>
              <a href={a.href} target="_blank" rel="noreferrer">
                {a.href}
              </a>
            </div>

            <div style={{ fontSize: 11, opacity: 0.65, marginTop: 10 }}>
              Opens in a new tab (public system). Founder HQ remains private.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
