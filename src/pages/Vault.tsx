import AppTile from "../components/AppTile";
import { founderVault } from "../data/foundervault";

export default function Vault() {
  return (
    <>
      <h1>Founder Vault</h1>
      <p style={{ opacity: 0.75, marginTop: 6 }}>
        Founder-only tools. No Stripe. No public links. Used for testing and operations.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14,
          marginTop: 18,
        }}
      >
        {founderVault.map((a) => (
          <AppTile
            key={a.title}
            title={a.title}
            subtitle={a.subtitle}
            href={a.href}
            tag={a.tag}
          />
        ))}
      </div>

      <div style={{ marginTop: 22, opacity: 0.7, fontSize: 13 }}>
        Note: “DRAFT/INTERNAL” tiles can be wired later as private PWAs.
      </div>
    </>
  );
}
