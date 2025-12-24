import AppTile from "../components/AppTile";
import { founderAvatars } from "../data/avatars";

export default function Avatars() {
  return (
    <>
      <h1>Founder Avatars</h1>
      <p style={{ opacity: 0.75, marginTop: 6 }}>
        Founder-only advisory entities. Each is an asset. Activation is staged (text first, then voice/Zoom/call later).
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14,
          marginTop: 18,
        }}
      >
        {founderAvatars.map((a) => (
          <AppTile
            key={a.id}
            title={a.name}
            subtitle={`${a.mode} • ${a.role}`}
            href={a.href || "#"}
            tag={a.tag}
          />
        ))}
      </div>

      <div style={{ marginTop: 22, opacity: 0.7, fontSize: 13 }}>
        Next step: wire each avatar tile to a dedicated “workspace” (notes + summary + export), then later to bots (Zoom/Call).
      </div>
    </>
  );
}
