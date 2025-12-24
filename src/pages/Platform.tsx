import AppTile from "../components/AppTile";
import { platformApps } from "../data/platformApps";

export default function Platform() {
  return (
    <>
      <h1>Platform PWAs</h1>
      <p style={{ opacity: 0.75, marginTop: 6 }}>
        Live public PWAs and landing platforms (Founder overview).
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14,
          marginTop: 18,
        }}
      >
        {platformApps.map((a) => (
          <AppTile
            key={a.title}
            title={a.title}
            subtitle={a.subtitle}
            href={a.href}
            tag={a.tag}
          />
        ))}
      </div>
    </>
  );
}
