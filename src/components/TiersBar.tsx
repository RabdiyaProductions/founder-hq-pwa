import { tierOrder } from "../data/tiers";
import type { Tier } from "../data/tiers";

export default function TierBar({
  tier,
  setTier,
}: {
  tier: Tier;
  setTier: (t: Tier) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
      {tierOrder.map((t) => (
        <button
          key={t}
          onClick={() => setTier(t)}
          style={{
            border: "1px solid #111",
            borderRadius: 999,
            padding: "6px 10px",
            fontSize: 12,
            background: t === tier ? "#111" : "transparent",
            color: t === tier ? "#fff" : "#111",
            cursor: "pointer",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
