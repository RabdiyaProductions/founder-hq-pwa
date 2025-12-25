import { Tier, tierOrder } from "../data/tiers";

export default function TierBar({
  tier,
  setTier,
}: {
  tier: Tier;
  setTier: (t: Tier) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
      {tierOrder.map((t) => (
        <button
          key={t}
          onClick={() => setTier(t)}
          style={{
            border: "1px solid #111",
            borderRadius: 999,
            padding: "6px 12px",
            fontSize: 12,
            cursor: "pointer",
            opacity: tier === t ? 1 : 0.6,
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
