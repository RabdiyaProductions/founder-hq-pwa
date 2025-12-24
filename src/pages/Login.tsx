import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthed } from "../auth";

export default function Login() {
  const nav = useNavigate();
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  // Change this string now. Keep it simple. You can rotate later.
  const PASSWORD = useMemo(() => "KIRAN-FOUNDER-2025", []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    if (pass.trim() === PASSWORD) {
      setAuthed(true);
      nav("/", { replace: true });
      return;
    }
    setErr("Incorrect passcode.");
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Founder HQ — Login</h1>
      <p style={{ opacity: 0.75, marginTop: 6 }}>
        Basic access gate for Founder use. (Note: GitHub Pages is public hosting; upgrade later for real security.)
      </p>

      <form onSubmit={onSubmit} style={{ marginTop: 16 }}>
        <label style={{ display: "block", fontWeight: 900, marginBottom: 8 }}>
          Passcode
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter passcode"
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid #222",
            outline: "none",
          }}
        />
        {err ? <div style={{ marginTop: 10, color: "crimson", fontWeight: 800 }}>{err}</div> : null}

        <button
          type="submit"
          style={{
            marginTop: 14,
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid #222",
            background: "transparent",
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}
