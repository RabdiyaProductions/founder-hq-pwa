import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EngineRegistry } from "../data/engineRegistry";
import type { EngineId } from "../data/engineRegistry";

export default function Engine() {
  const { engineId } = useParams();
  const engine = useMemo(
    () => EngineRegistry.find((e) => e.id === (engineId as EngineId)),
    [engineId]
  );

  if (!engine) {
    return (
      <div>
        <h1 style={{ marginTop: 0 }}>Unknown Engine</h1>
        <p style={{ opacity: 0.75 }}>This engine route isn’t registered yet.</p>
        <Link to="/engine">Back to Engine Registry</Link>
      </div>
    );
  }

  const key = `ENGINE_NOTES__${engine.id}`;
  const [notes, setNotes] = useState(() => localStorage.getItem(key) ?? "");

  function save(v: string) {
    setNotes(v);
    localStorage.setItem(key, v);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ marginTop: 0 }}>{engine.title}</h1>
          <div style={{ opacity: 0.7 }}>{engine.subtitle}</div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ padding: "6px 10px", border: "1px solid #111", borderRadius: 999, fontSize: 12 }}>
            {engine.privacy}
          </span>
          <span style={{ padding: "6px 10px", border: "1px solid #111", borderRadius: 999, fontSize: 12 }}>
            Stage: {engine.stage}
          </span>
        </div>
      </div>

      <div style={{ marginTop: 14, border: "1px solid #eee", borderRadius: 16, padding: 14 }}>
        <div style={{ fontWeight: 800, marginBottom: 8 }}>Workspace Notes</div>
        <textarea
          value={notes}
          onChange={(e) => save(e.target.value)}
          placeholder="Inputs, decisions, outputs, next steps…"
          style={{ width: "100%", height: 240, borderRadius: 12, border: "1px solid #ddd", padding: 10 }}
        />
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
          Saved locally per engine. Next: export hooks + structured forms.
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12, fontSize: 13 }}>
        <Link to="/engine">Back to Engine Registry</Link>
        <Link to="/vault">Back to Vault</Link>
      </div>
    </div>
  );
}
