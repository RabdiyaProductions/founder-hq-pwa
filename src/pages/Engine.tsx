import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { engineRegistry, type EngineDef } from "../data/engineRegistry";

export default function Engine() {
  const { engineId } = useParams<{ engineId: string }>();

  const engine = useMemo<EngineDef | undefined>(
    () => engineRegistry.find(e => e.id === engineId),
    [engineId]
  );

  if (!engine) {
    return (
      <div>
        <h1 style={{ marginTop: 0 }}>Unknown Engine</h1>
        <p style={{ opacity: 0.75 }}>
          This engine route isn’t registered yet.
        </p>
        <Link to="/engine">Back to Engine Registry</Link>
      </div>
    );
  }

  const storageKey = `ENGINE_NOTES__${engine.id}`;
  const [notes, setNotes] = useState(
    () => localStorage.getItem(storageKey) ?? ""
  );

  function save(v: string) {
    setNotes(v);
    localStorage.setItem(storageKey, v);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ marginTop: 0 }}>{engine.title}</h1>
          <div style={{ opacity: 0.7 }}>{engine.subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={pill}>{engine.privacy}</span>
          <span style={pill}>Stage: {engine.stage}</span>
        </div>
      </div>

      <textarea
        value={notes}
        onChange={e => save(e.target.value)}
        placeholder="Founder notes, R&D thoughts, future upgrades…"
        style={{
          width: "100%",
          minHeight: 180,
          marginTop: 16,
          padding: 12,
          fontSize: 14,
        }}
      />

      <div style={{ marginTop: 12 }}>
        <Link to="/engine">← Back to Engine Registry</Link>
      </div>
    </div>
  );
}

const pill: React.CSSProperties = {
  padding: "6px 12px",
  border: "1px solid #111",
  borderRadius: 999,
  fontSize: 12,
};
